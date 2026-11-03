const BADGES = [
  { icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></>, text: "100+ Projects" },
  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, text: "5-Year Warranty" },
  { icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />, text: "No Hidden Costs" },
];

export default function SubBanner() {
  return (
    <section className="border-b border-gray-200 bg-white py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-4">
        {BADGES.map((b) => (
          <div key={b.text} className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <svg className="h-6 w-6 stroke-purple-700" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">{b.icon}</svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">{b.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
