const SOLUTIONS = [
  { name: "Kitchen", desc: "Modular, shutters, countertops", icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></> },
  { name: "Bedroom", desc: "Wardrobes, bed, TV unit", icon: <><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7" /><path d="M2 7h20" /><path d="M9 20v-4h6v4" /></> },
  { name: "Living Room", desc: "TV unit, panelling, bookshelf", icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></> },
  { name: "Electrical", desc: "Wiring, switches, lights", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
  { name: "Painting", desc: "Emulsion, texture, primer", icon: <><path d="M12 22V8" /><path d="M5 12H2a10 10 0 0020 0h-3" /></> },
  { name: "Tiles & Flooring", desc: "Vitrified, ceramic, marble", icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></> },
  { name: "False Ceiling", desc: "Gypsum, POP, cove lights", icon: <><path d="M3 3h18v18H3z" opacity="0.3" /><path d="M21 3H3v18h18V3zM9 3v18M15 3v18M3 9h18M3 15h18" /></> },
  { name: "Plumbing", desc: "Pipes, fittings, sanitary", icon: <><circle cx="6" cy="6" r="0.5" /><circle cx="6" cy="12" r="0.5" /><circle cx="6" cy="18" r="0.5" /><path d="M3.34 17a10 10 0 010-10" /><path d="M8.46 19.63a10 10 0 000-15.26" /></> },
  { name: "Bathroom", desc: "Complete bath renovation", icon: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></> },
  { name: "Pooja Room", desc: "Custom pooja unit design", icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></> },
  { name: "Balcony", desc: "Tiles, railing, ceiling", icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></> },
  { name: "Study Room", desc: "Desk, bookshelf, lighting", icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></> },
];

export default function SolutionsGrid() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Complete Solutions</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Our Home Interior Solutions Cover All Your Needs</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SOLUTIONS.map((s) => (
            <div key={s.name} className="group rounded-xl border border-gray-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <svg className="h-6 w-6 stroke-purple-700" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">{s.icon}</svg>
              </div>
              <h4 className="text-[13px] font-semibold text-gray-800">{s.name}</h4>
              <p className="mt-1 text-[11px] leading-snug text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
