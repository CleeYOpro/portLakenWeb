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
1. Relevance to Port Laken community — the resource should serve residents of Port Laken or the surrounding area.
2. Completeness of information — the submission should have a meaningful name, description, and at least some contact information.
3. Appropriateness of content — the resource should be a legitimate community service (no spam, adult content, or harmful material).

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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ approved: false, reason: "AI review service is not configured." });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
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
      return NextResponse.json({ approved: false, reason: "Unable to parse AI response" });
    }

    const data = await response.json();
    const rawText: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const result = parseAiReview(rawText);
    return NextResponse.json(result);
  } catch (error) {
    console.error("AI review pipeline error:", error);
    return NextResponse.json({ approved: false, reason: "Unable to parse AI response" });
  }
}
