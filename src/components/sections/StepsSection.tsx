"use client";

const STEPS = [
  { num: 1, title: "Book A Free Site Visit", desc: "Our expert visits your home, takes measurements, and understands your requirements — completely free." },
  { num: 2, title: "Get Your Design & Quote", desc: "Receive a detailed itemized quote with clear pricing — no surprises, no hidden costs. Approve and we start." },
  { num: 3, title: "Move Into Your New Home", desc: "Our in-house team completes all work on schedule. Quality checked. Warranty activated. You're home." },
];

export default function StepsSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="process" className="bg-purple-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">How It Works</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Your Dream Home Is 3 Simple Steps Away!</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.num} className="relative text-center px-6 py-8">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-[22px] font-extrabold text-white">{s.num}</div>
              <h3 className="mb-2.5 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
              {/* Connector line (desktop only) */}
              {i < 2 && <div className="absolute right-0 top-[55px] hidden h-0.5 w-8 -translate-x-4 bg-purple-200 md:block" />}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button onClick={onOpenModal} className="inline-flex items-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(109,40,217,0.35)]">
            Take The First Step!
          </button>
        </div>
      </div>
    </section>
  );
}
