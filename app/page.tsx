export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm mb-8">
          AI Retail Growth Operating System
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight max-w-5xl">
          Your retail marketing team — powered by AI.
        </h1>

        <p className="text-xl text-white/70 mt-8 max-w-2xl leading-relaxed">
          AI-powered pharmacy and retail marketing kits, templates,
          campaigns, SMS promotions, posters and growth systems that help
          retailers launch campaigns in minutes.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold">
            Start Subscription
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full font-bold">
            Try AI Generator
          </button>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
          <h3 className="text-2xl font-bold mb-4">
            AI Pharmacy Growth Kit
          </h3>

          <p className="text-white/70">
            Monthly social templates, posters, SMS campaigns,
            email templates and AI prompts designed for pharmacies.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
          <h3 className="text-2xl font-bold mb-4">
            Seasonal Campaign Packs
          </h3>

          <p className="text-white/70">
            Christmas, Winter Wellness, Flu Season,
            Valentine’s Day and Mother’s Day campaign systems.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
          <h3 className="text-2xl font-bold mb-4">
            AI Retail Prompt Vault
          </h3>

          <p className="text-white/70">
            Hundreds of AI prompts for promotions,
            upselling, social media and customer retention.
          </p>
        </div>
      </section>
    </main>
  );
}