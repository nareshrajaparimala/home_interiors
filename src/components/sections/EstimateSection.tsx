"use client";

export default function EstimateSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="estimate" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Pricing</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Home Interior Cost In Bangalore — Get A Free Estimate</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-500">A clear estimate for your home or your project — in minutes.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { title: "Estimate Your Full Home Interior Cost", desc: "Explore interior packages for every budget — from basic to fully customized designs covering all 6 trades.", price: "Starting from ₹2.5 Lakhs", btn: "Get Full Home Estimate" },
            { title: "Estimate Your Painting & Renovation Cost", desc: "Get an instant range for painting, tiling, false ceiling, electrical or plumbing — any individual service.", price: "Starting from ₹50,000", btn: "Get Service Estimate" },
          ].map((card) => (
            <div key={card.title} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-purple-900 p-8 text-white md:p-10">
              <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-white/[0.06]" />
              <h3 className="relative mb-3 text-[22px] font-bold leading-tight">{card.title}</h3>
              <p className="relative mb-4 text-sm text-purple-200 leading-relaxed">{card.desc}</p>
              <p className="relative mb-6 text-base font-bold text-gold">{card.price}</p>
              <button
                onClick={onOpenModal}
                className="relative inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-purple-700 transition-all hover:bg-purple-100 hover:-translate-y-0.5"
              >
                {card.btn}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
