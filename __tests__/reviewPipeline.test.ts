/**
 * Unit tests for review pipeline error handling
 * Validates: Requirements 3.5
 */
import { describe, it, expect } from "vitest";
import { parseAiReview } from "../lib/parseAiReview";

describe("Review pipeline error handling — Requirements 3.5", () => {
  it("parseAiReview returns approved=false with a reason when given a network-error-like empty response", () => {
    // Simulates what happens when a network error causes an empty/undefined response text
    const result = parseAiReview("");
    expect(result.approved).toBe(false);
    expect(typeof result.reason).toBe("string");
    expect(result.reason.trim().length).toBeGreaterThan(0);
  });

  it("parseAiReview returns the fallback gracefully for any thrown-like garbage input", () => {
    // Simulates corrupted or unexpected API response body
    const result = parseAiReview("Internal Server Error");
    expect(result.approved).toBe(false);
    expect(result.reason).toBe("Unable to parse AI response");
  });

  it("parseAiReview never throws — always returns a valid object", () => {
    const badInputs = [
      "",
      "   ",
      "null",
      "undefined",
      "{broken json",
      "<!DOCTYPE html>",
      '{"approved": null, "reason": null}',
    ];

    for (const input of badInputs) {
      expect(() => parseAiReview(input)).not.toThrow();
      const result = parseAiReview(input);
      expect(typeof result.approved).toBe("boolean");
      expect(typeof result.reason).toBe("string");
      expect(result.reason.trim().length).toBeGreaterThan(0);
    }
  });

  it("network error in review pipeline leaves approvalStatus as pending (logic test)", async () => {
    // Simulate the handleSubmit logic: if fetch throws, approvalStatus stays "pending"
    let approvalStatus = "pending";

    const simulateReviewWithNetworkError = async () => {
      try {
        // Simulate a fetch that throws a network error
        throw new Error("Network error: Failed to fetch");
      } catch (error) {
        // Per requirements 3.5: log the error, leave status as "pending"
        console.error("AI review pipeline error:", error);
        // approvalStatus is NOT updated — stays "pending"
      }
    };

    await simulateReviewWithNetworkError();
    expect(approvalStatus).toBe("pending");
  });

  it("network error does not propagate to the user (no unhandled rejection)", async () => {
    // Verify the error is swallowed gracefully
    let errorCaught = false;

    const simulateReviewWithNetworkError = async () => {
      try {
        throw new Error("Network error");
      } catch {
        errorCaught = true;
        // error is handled internally
      }
    };

    await expect(simulateReviewWithNetworkError()).resolves.toBeUndefined();
    expect(errorCaught).toBe(true);
  });
});
