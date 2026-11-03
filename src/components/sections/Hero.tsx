"use client";

import { SERVICES } from "@/lib/constants";

const BADGES = [
  { icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></>, text: "100+ Projects" },
  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, text: "5-Year Warranty" },
  { icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />, text: "No Hidden Costs" },
];

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-700/55 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[520px] flex-col items-center justify-center px-5 pt-8 pb-0 text-center md:min-h-[580px]">
        <h1 className="mb-4 max-w-[700px] text-[32px] font-extrabold leading-[1.15] text-white md:text-5xl">
          Best Home Interior Services In Bangalore
        </h1>
        <p className="mb-2 text-base text-white/90 md:text-lg">
          Complete Home Solutions — One Team, One Contract, Zero Stress
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {SERVICES.map((s) => (
            <span key={s.id} className="rounded-full border border-white/20 bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {s.label}
            </span>
          ))}
        </div>
        <button
          onClick={onOpenModal}
          className="rounded-xl bg-white px-8 py-3.5 text-base font-bold text-purple-700 transition-all hover:bg-purple-100 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]"
        >
          Book Free Consultation
        </button>
      </div>

      {/* Trust Badges — inside the hero at bottom */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-4 md:gap-14">
          {BADGES.map((b) => (
            <div key={b.text} className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <svg className="h-[18px] w-[18px] stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">{b.icon}</svg>
              </div>
              <span className="text-sm font-semibold text-white">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
