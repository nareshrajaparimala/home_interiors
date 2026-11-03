const ITEMS = [
  "Free Site Visit In Bangalore",
  "No Hidden Costs — Transparent Pricing",
  "5-Year Warranty On All Work",
  "100% In-House Team — Zero Subcontracting",
  "100+ Projects Delivered",
  "Serving All Bangalore Localities",
];

export default function OfferTicker() {
  return (
    <div className="mt-[70px] overflow-hidden bg-purple-900 py-2 text-white">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-10 text-[13px] font-medium">
            <span className="text-[10px] text-purple-300">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
