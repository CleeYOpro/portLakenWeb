/**
 * Tests for parseAiReview
 * Validates: Requirements 3.2
 */
import { describe, it, expect } from "vitest";
import { parseAiReview } from "../lib/parseAiReview";

/**
 * Property 2: Decision completeness
 * Every parsed Gemini response must contain both an `approved` boolean and a non-empty `reason` string.
 * Validates: Requirements 3.2
 */
describe("parseAiReview — Property 2: Decision completeness", () => {
  const validInputs = [
    // Plain JSON
    '{"approved": true, "reason": "Relevant and complete resource for Port Laken residents."}',
    '{"approved": false, "reason": "Missing contact information and not relevant to Port Laken."}',
    // JSON in markdown code block
    '```json\n{"approved": true, "reason": "Great community resource."}\n```',
    '```\n{"approved": false, "reason": "Spam content detected."}\n```',
    // Extra whitespace
    '  {"approved": true, "reason": "Looks good."}  ',
  ];

  it("always returns an approved boolean and non-empty reason for valid inputs", () => {
    for (const input of validInputs) {
      const result = parseAiReview(input);
      expect(typeof result.approved).toBe("boolean");
      expect(typeof result.reason).toBe("string");
      expect(result.reason.trim().length).toBeGreaterThan(0);
    }
  });

  it("always returns approved=false and non-empty reason for invalid inputs", () => {
    const invalidInputs = [
      "",
      "not json at all",
      '{"approved": true}', // missing reason
      '{"reason": "some reason"}', // missing approved
      '{"approved": "yes", "reason": "ok"}', // approved is not boolean
      '{"approved": true, "reason": ""}', // empty reason
      '{"approved": true, "reason": "   "}', // whitespace-only reason
      "null",
      "[]",
    ];

    for (const input of invalidInputs) {
      const result = parseAiReview(input);
      expect(typeof result.approved).toBe("boolean");
      expect(typeof result.reason).toBe("string");
      expect(result.reason.trim().length).toBeGreaterThan(0);
    }
  });
});

// ── Specific example tests ───────────────────────────────────────────────────

describe("parseAiReview — example cases", () => {
  it("parses valid plain JSON with approved=true", () => {
    const result = parseAiReview('{"approved": true, "reason": "Relevant to Port Laken."}');
    expect(result).toEqual({ approved: true, reason: "Relevant to Port Laken." });
  });

  it("parses valid plain JSON with approved=false", () => {
    const result = parseAiReview('{"approved": false, "reason": "Not relevant."}');
    expect(result).toEqual({ approved: false, reason: "Not relevant." });
  });

  it("parses JSON wrapped in ```json markdown block", () => {
    const input = '```json\n{"approved": true, "reason": "Good resource."}\n```';
    const result = parseAiReview(input);
    expect(result).toEqual({ approved: true, reason: "Good resource." });
  });

  it("parses JSON wrapped in plain ``` markdown block", () => {
    const input = '```\n{"approved": false, "reason": "Spam."}\n```';
    const result = parseAiReview(input);
    expect(result).toEqual({ approved: false, reason: "Spam." });
  });

  it("returns fallback for missing approved field", () => {
    const result = parseAiReview('{"reason": "Some reason"}');
    expect(result).toEqual({ approved: false, reason: "Unable to parse AI response" });
  });

  it("returns fallback for missing reason field", () => {
    const result = parseAiReview('{"approved": true}');
    expect(result).toEqual({ approved: false, reason: "Unable to parse AI response" });
  });

  it("returns fallback for invalid JSON", () => {
    const result = parseAiReview("this is not json");
    expect(result).toEqual({ approved: false, reason: "Unable to parse AI response" });
  });

  it("returns fallback for empty string", () => {
    const result = parseAiReview("");
    expect(result).toEqual({ approved: false, reason: "Unable to parse AI response" });
  });
});
