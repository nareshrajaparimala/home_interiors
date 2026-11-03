"use client";

import { SERVICES } from "@/lib/constants";

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative h-[520px] overflow-hidden bg-gray-900 md:h-[580px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-700/55 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
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
    </section>
  );
}
