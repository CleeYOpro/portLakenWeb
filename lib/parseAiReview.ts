/**
 * Parses the raw text response from the Gemini AI into a structured review decision.
 * Handles JSON wrapped in markdown code blocks (```json ... ```).
 */
export function parseAiReview(text: string): { approved: boolean; reason: string } {
  const fallback = { approved: false, reason: "Unable to parse AI response" };

  if (!text || typeof text !== "string") return fallback;

  // Strip markdown code fences if present (```json ... ``` or ``` ... ```)
  const stripped = text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/, "")
    .trim();

  try {
    const parsed = JSON.parse(stripped);

    if (typeof parsed !== "object" || parsed === null) return fallback;

    const approved = parsed.approved;
    const reason = parsed.reason;

    if (typeof approved !== "boolean") return fallback;
    if (typeof reason !== "string" || reason.trim() === "") return fallback;

    return { approved, reason: reason.trim() };
  } catch {
    return fallback;
  }
}
