/**
 * Utility functions for dashboard resource status badge rendering.
 * Requirements: 5.2, 5.3, 5.4
 */

export function getStatusBadgeClasses(approvalStatus: string | undefined): string {
  switch (approvalStatus) {
    case "approved":
      return "bg-green-100 text-green-800";
    case "rejected":
      return "bg-red-100 text-red-800";
    case "pending":
    default:
      return "bg-yellow-100 text-yellow-800";
  }
}

export function getStatusLabel(approvalStatus: string | undefined): string {
  switch (approvalStatus) {
    case "approved":
      return "Approved";
    case "rejected":
      return "Rejected";
    case "pending":
    default:
      return "Pending";
  }
}
