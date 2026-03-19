/**
 * Property 3: No duplicate IDs
 * Validates: Requirements 4.4
 *
 * The merged array must not contain two resources with the same `id`.
 * Static resources take precedence over community resources with the same id.
 */

import { describe, it, expect } from "vitest";
import { mergeResources } from "../lib/mergeResources";
import { Resource, ResourceCategory } from "../app/resource-directory/resources";

function makeResource(id: string, name = "Test Resource"): Resource {
  return {
    id,
    name,
    category: "Community" as ResourceCategory,
    shortDescription: "A test resource",
    fullDescription: "Full description",
    address: "123 Test St",
    mapCoordinates: { lat: 0, lng: 0 },
    phone: "555-0000",
    website: "https://example.com",
    email: "test@example.com",
    tags: [],
    image: "",
    rating: 4.0,
  };
}

describe("mergeResources", () => {
  // ── Example-based tests ──────────────────────────────────────────────────

  it("returns all resources when there are no overlapping IDs", () => {
    const staticRes = [makeResource("s1"), makeResource("s2")];
    const communityRes = [makeResource("c1"), makeResource("c2")];
    const merged = mergeResources(staticRes, communityRes);
    expect(merged).toHaveLength(4);
    expect(merged.map((r) => r.id)).toEqual(["s1", "s2", "c1", "c2"]);
  });

  it("deduplicates overlapping IDs, keeping the static version", () => {
    const staticRes = [makeResource("shared", "Static Name")];
    const communityRes = [makeResource("shared", "Community Name")];
    const merged = mergeResources(staticRes, communityRes);
    expect(merged).toHaveLength(1);
    expect(merged[0].name).toBe("Static Name");
  });

  it("handles empty static array", () => {
    const communityRes = [makeResource("c1"), makeResource("c2")];
    const merged = mergeResources([], communityRes);
    expect(merged).toHaveLength(2);
  });

  it("handles empty community array", () => {
    const staticRes = [makeResource("s1"), makeResource("s2")];
    const merged = mergeResources(staticRes, []);
    expect(merged).toHaveLength(2);
  });

  it("handles both arrays empty", () => {
    expect(mergeResources([], [])).toHaveLength(0);
  });

  it("handles multiple overlapping IDs", () => {
    const staticRes = [makeResource("a"), makeResource("b"), makeResource("c")];
    const communityRes = [makeResource("b"), makeResource("c"), makeResource("d")];
    const merged = mergeResources(staticRes, communityRes);
    expect(merged).toHaveLength(4);
    expect(merged.map((r) => r.id)).toEqual(["a", "b", "c", "d"]);
  });

  // ── Property-based test ──────────────────────────────────────────────────

  /**
   * Property 3: No duplicate IDs
   * Validates: Requirements 4.4
   *
   * For any combination of static and community resource arrays,
   * the merged result must never contain two entries with the same id.
   */
  it("Property 3: merged array never contains duplicate IDs", () => {
    const idPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    // Run 200 random trials with varying overlaps
    for (let trial = 0; trial < 200; trial++) {
      // Pick random subsets of the id pool for static and community
      const shuffle = (arr: string[]) => [...arr].sort(() => Math.random() - 0.5);
      const shuffled = shuffle(idPool);
      const splitAt = Math.floor(Math.random() * (idPool.length + 1));
      const staticIds = shuffled.slice(0, splitAt);
      // Community may overlap with static
      const communityIds = shuffle(idPool).slice(0, Math.floor(Math.random() * (idPool.length + 1)));

      const staticRes = staticIds.map((id) => makeResource(id, `static-${id}`));
      const communityRes = communityIds.map((id) => makeResource(id, `community-${id}`));

      const merged = mergeResources(staticRes, communityRes);
      const ids = merged.map((r) => r.id);
      const uniqueIds = new Set(ids);

      expect(ids.length).toBe(uniqueIds.size);
    }
  });
});
