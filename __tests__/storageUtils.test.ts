/**
 * Property tests for buildStoragePath
 * Validates: Requirements 2.6
 */
import { describe, it, expect } from "vitest";
import { buildStoragePath } from "../lib/storageUtils";

/**
 * Property 1: Upload path uniqueness
 * For any two distinct submissionId values, the constructed storage paths must differ.
 * Validates: Requirements 2.6
 */
describe("buildStoragePath", () => {
  it("Property 1: Upload path uniqueness — distinct submissionIds produce distinct paths", () => {
    const filename = "image.jpg";
    for (let i = 0; i < 100; i++) {
      const id1 = crypto.randomUUID();
      const id2 = crypto.randomUUID();
      // UUIDs are distinct by construction, but guard against the astronomically unlikely collision
      if (id1 === id2) continue;
      const path1 = buildStoragePath(id1, filename);
      const path2 = buildStoragePath(id2, filename);
      expect(path1).not.toBe(path2);
    }
  });

  it("returns the correct path format", () => {
    const id = "abc-123";
    const filename = "photo.png";
    expect(buildStoragePath(id, filename)).toBe("resource-images/abc-123/photo.png");
  });
});
