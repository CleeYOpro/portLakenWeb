/**
 * Constructs the Firebase Storage path for a resource image upload.
 */
export function buildStoragePath(submissionId: string, filename: string): string {
  return `resource-images/${submissionId}/${filename}`;
}
