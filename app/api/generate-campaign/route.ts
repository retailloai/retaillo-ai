import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const campaign = `
🚀 AI Retail Campaign

Business Type:
${body.business}

Goal:
${body.goal}

Promotion:
${body.offer}

Generated Campaign:

Headline:
🔥 ${body.business} Exclusive Offer This Week

SMS:
Limited time only — ${body.offer}. Visit us today before stock runs out.

Instagram Caption:
Big savings now available at ${body.business}. ${body.offer} — available for a limited time only.

Email Subject:
Special Offer Inside – ${body.offer}

Poster CTA:
SHOP NOW
LIMITED TIME
    `;

    return NextResponse.json({
      result: campaign,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate campaign" },
      { status: 500 }
    );
  }
}