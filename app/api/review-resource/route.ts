import { NextRequest, NextResponse } from "next/server";
import { parseAiReview } from "@/lib/parseAiReview";

interface ReviewRequestBody {
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  operatingHours: string;
  tags: string[];
}

export async function POST(req: NextRequest) {
  const body: ReviewRequestBody = await req.json();

  const prompt = `You are a content reviewer for the Port Laken city community resource directory.

Evaluate the following community resource submission and decide whether it should be approved.

Criteria:
1. Relevance — the resource should be a community service that could benefit residents (healthcare, education, food, legal, recreation, etc.). Since Port Laken is a fictional city, nearby real-world resources and services from the surrounding region are acceptable.
2. Completeness of information — the submission should have a meaningful name, description, and at least some contact information.
3. Appropriateness of content — the resource should be a legitimate community service (no spam, adult content, or harmful material).

Be generous with approval. If the resource is a real, legitimate service that could help community members, approve it.

Resource details:
- Name: ${body.name}
- Category: ${body.category}
- Short Description: ${body.shortDescription}
- Full Description: ${body.fullDescription}
- Address: ${body.address}
- Phone: ${body.phone}
- Email: ${body.email}
- Website: ${body.website}
- Operating Hours: ${body.operatingHours}
- Tags: ${Array.isArray(body.tags) ? body.tags.join(", ") : body.tags}

Respond ONLY with a JSON object in this exact format (no markdown, no extra text):
{"approved": true, "reason": "Brief explanation of your decision"}`;

  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  console.log("[review-resource] apiKey present:", !!apiKey);
  if (!apiKey) {
    return NextResponse.json({ approved: true, reason: "AI review skipped — no API key configured." });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", response.status, await response.text());
      return NextResponse.json({ approved: null, reason: "AI review unavailable, left as pending." });
    }

    const data = await response.json();
    const rawText: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const result = parseAiReview(rawText);
    return NextResponse.json(result);
  } catch (error) {
    console.error("AI review pipeline error:", error);
    return NextResponse.json({ approved: null, reason: "AI review unavailable, left as pending." });
  }
}
