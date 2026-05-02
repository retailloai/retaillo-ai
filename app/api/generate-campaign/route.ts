import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are an expert retail marketing strategist.

The platform is built for pharmacies first, but the campaign must adapt to any retail industry.

Create a professional, high-converting marketing campaign.

Business / Industry: ${body.business}
Campaign Type: ${body.campaignType}
Offer: ${body.offer}

Generate:
1. SMS Promotion
2. Facebook Post
3. Instagram Caption
4. Email Subject Line
5. Short Email Campaign
6. Staff Upsell Script
7. In-Store Promotion Headline
8. Shelf Talker / Poster Copy
9. Product Bundle Idea
10. Call-To-Action

Rules:
- Adapt the tone to the business industry
- If it is pharmacy-related, avoid medical claims
- Keep copy practical and retail-friendly
- Make it easy for staff to use immediately
- Use short, clear, high-converting language
- Use emojis only where appropriate
- Make the output professional, not gimmicky

Format the response with clear headings.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return Response.json({
      result: completion.choices[0]?.message?.content || "No campaign returned.",
    });
  } catch (error: any) {
    return Response.json({
      result: error?.message || "Something went wrong.",
    });
  }
}