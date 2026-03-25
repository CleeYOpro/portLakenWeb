/**
 * Submission-specific types for the resource submission revamp.
 * These are separate from ResourceCategory in resources.ts, which covers
 * the static directory. SubmissionCategory covers all form categories.
 */

export type SubmissionCategory =
  | "healthcare"
  | "food"
  | "housing"
  | "education"
  | "employment"
  | "family"
  | "seniors"
  | "legal"
  | "mental-health"
  | "disability"
  | "emergency"
  | "community"
  | "recreation"
  | "transportation"
  | "other";

export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface SubmittedResource {
  id: string;
  name: string;
  category: SubmissionCategory;
  shortDescription: string;
  fullDescription: string;
  address: string;
  mapCoordinates: { lat: number; lng: number } | null;
  phone: string;
  email: string;
  website: string;
  operatingHours: string;
  tags: string[];
  imageUrl: string;
  submittedBy: string | null;
  approvalStatus: ApprovalStatus;
  rejectionReason: string | null;
  createdAt: import("firebase/firestore").Timestamp | null;
}
