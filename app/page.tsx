const products = [
  {
    title: "AI Pharmacy Growth Kit",
    text: "Monthly Canva templates, posters, SMS campaigns, emails, shelf talkers and AI prompts for pharmacies.",
  },
  {
    title: "Seasonal Campaign Packs",
    text: "Winter Wellness, Flu Season, Mother’s Day, Christmas, Easter and Valentine’s Day retail campaigns.",
  },
  {
    title: "AI Retail Prompt Vault",
    text: "Retail-specific prompts for promotions, upselling, social media, staff training and customer retention.",
  },
];

const features = [
  "Generate campaigns in minutes",
  "Built for busy retailers",
  "No marketing team required",
  "SEO and AI-search friendly",
  "Monthly subscription model",
  "Designed for pharmacies first",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tight">Retaillo AI</div>
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          <a href="#products">Products</a>
          <a href="#calculator">Savings</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a href="#pricing" className="rounded-full bg-white text-black px-5 py-3 text-sm font-bold">
          Start Monthly
        </a>
      </nav>

      <section className="px-6 pt-20 pb-24 max-w-7xl mx-auto">
        <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm inline-flex mb-8">
          AI Retail Growth Operating System
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight max-w-6xl">
          Retail marketing that runs faster than your competitors.
        </h1>

        <p className="text-xl text-white/65 mt-8 max-w-3xl leading-relaxed">
          Retaillo AI gives pharmacies and retailers ready-to-use AI campaigns,
          Canva templates, SMS promotions, email copy, posters and monthly growth
          kits — so stores can promote smarter without hiring an agency.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#pricing" className="bg-white text-black px-8 py-4 rounded-full font-bold">
            Start Subscription
          </a>
          <a href="#products" className="border border-white/20 px-8 py-4 rounded-full font-bold">
            See What’s Included
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-14 max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-black">30 sec</div>
            <p className="text-white/55 mt-2">campaign creation</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-black">85%+</div>
            <p className="text-white/55 mt-2">digital margin potential</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-black">24/7</div>
            <p className="text-white/55 mt-2">self-serve subscription</p>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-24 max-w-7xl mx-auto">
        <p className="text-white/50 font-bold uppercase tracking-widest text-sm mb-4">
          Products
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl">
          Everything a retailer needs to launch better campaigns every month.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {products.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 p-8 bg-white/[0.04]">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-sm text-black/50 mb-4">
              Why retailers need it
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Manual marketing is costing stores time, sales and consistency.
            </h2>
          </div>

          <div className="grid gap-4">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-black/10 p-5 font-bold">
                ✓ {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <p className="text-white/50 font-bold uppercase tracking-widest text-sm mb-4">
            Savings Calculator
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Replacing just 10 hours of manual marketing can save over $750/month.
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-3xl">
            Retaillo AI turns campaign creation, social posts, posters, SMS and
            emails into a repeatable monthly system — without waiting on agencies.
          </p>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 max-w-7xl mx-auto">
        <p className="text-white/50 font-bold uppercase tracking-widest text-sm mb-4">
          Pricing
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          Simple monthly plans. No meetings. No demos.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            ["Starter", "$49", "Templates, prompts and monthly campaign ideas."],
            ["Pro", "$149", "Full campaign kits, SMS, emails, posters and prompt vault."],
            ["Enterprise", "$499", "Groups, suppliers, white-label and multi-store support."],
          ].map(([name, price, desc]) => (
            <div key={name} className="rounded-3xl border border-white/10 p-8 bg-white/[0.04]">
              <h3 className="text-2xl font-bold">{name}</h3>
              <div className="text-5xl font-black mt-6">{price}<span className="text-lg text-white/50">/mo</span></div>
              <p className="text-white/60 mt-6 leading-relaxed">{desc}</p>
              <button className="mt-8 w-full rounded-full bg-white text-black py-4 font-bold">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}