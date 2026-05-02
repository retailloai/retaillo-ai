"use client";

import { useState } from "react";

export default function CampaignGenerator() {
  const [business, setBusiness] = useState("");
  const [campaignType, setCampaignType] = useState("SMS Promotion");
  const [offer, setOffer] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateCampaign() {
    setLoading(true);

    const response = await fetch("/api/generate-campaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        business,
        campaignType,
        offer,
      }),
    });

    const data = await response.json();

    setResult(data.result);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm inline-flex mb-8">
          AI Campaign Generator
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
          Generate pharmacy campaigns in seconds.
        </h1>

        <p className="text-white/60 text-xl mt-6 max-w-2xl">
          Create AI-powered SMS promotions, social posts, email campaigns and retail offers instantly.
        </p>

        <div className="mt-12 grid gap-6">
          <input
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Business name"
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <select
            value={campaignType}
            onChange={(e) => setCampaignType(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white"
          >
            <option>SMS Promotion</option>
            <option>Facebook Campaign</option>
            <option>Email Campaign</option>
            <option>Upsell Campaign</option>
            <option>Seasonal Campaign</option>
          </select>

          <input
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
            placeholder="Offer or promotion"
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white"
          />

          <button
            onClick={generateCampaign}
            className="bg-white text-black rounded-full py-4 font-bold text-lg"
          >
            {loading ? "Generating..." : "Generate Campaign"}
          </button>
        </div>

        {result && (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}