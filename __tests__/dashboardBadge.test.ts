import { describe, it, expect } from "vitest";
import { getStatusBadgeClasses, getStatusLabel } from "../lib/dashboardBadge";

/**
 * Unit tests for dashboard status badge rendering.
 * Validates: Requirements 5.2, 5.3, 5.4
 */

describe("getStatusBadgeClasses", () => {
  it("returns a green class for approved status (Req 5.2)", () => {
    expect(getStatusBadgeClasses("approved")).toContain("green");
  });

  it("returns a red class for rejected status (Req 5.3)", () => {
    expect(getStatusBadgeClasses("rejected")).toContain("red");
  });

  it("returns a yellow class for pending status (Req 5.4)", () => {
    expect(getStatusBadgeClasses("pending")).toContain("yellow");
  });

  it("defaults to yellow when status is undefined (Req 5.4)", () => {
    expect(getStatusBadgeClasses(undefined)).toContain("yellow");
  });
});

describe("getStatusLabel", () => {
  it("returns 'Approved' for approved status", () => {
    expect(getStatusLabel("approved")).toBe("Approved");
  });

  it("returns 'Rejected' for rejected status", () => {
    expect(getStatusLabel("rejected")).toBe("Rejected");
  });

  it("returns 'Pending' for pending status", () => {
    expect(getStatusLabel("pending")).toBe("Pending");
  });

  it("returns 'Pending' when status is undefined", () => {
    expect(getStatusLabel(undefined)).toBe("Pending");
  });
});
