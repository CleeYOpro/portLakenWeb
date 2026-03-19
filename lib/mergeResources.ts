import { Resource } from "@/app/resource-directory/resources";

/**
 * Merges static and community resources, deduplicating by `id`.
 * Static resources take precedence over community resources with the same id.
 */
export function mergeResources(
  staticResources: Resource[],
  communityResources: Resource[]
): Resource[] {
  const seen = new Set<string>();
  const result: Resource[] = [];

  for (const r of staticResources) {
    if (!seen.has(r.id)) {
      seen.add(r.id);
      result.push(r);
    }
  }

  for (const r of communityResources) {
    if (!seen.has(r.id)) {
      seen.add(r.id);
      result.push(r);
    }
  }

  return result;
}
