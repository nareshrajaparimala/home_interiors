"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  "Free Site Visit In Bangalore",
  "No Hidden Costs — Transparent Pricing",
  "5-Year Warranty On All Work",
  "100% In-House Team — Zero Subcontracting",
  "100+ Projects Delivered",
  "Serving All Bangalore Localities",
];

export default function OfferTicker() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`overflow-hidden bg-purple-900 py-2.5 text-white transition-all duration-300 ${
        visible ? "max-h-12 opacity-100" : "max-h-0 py-0 opacity-0"
      }`}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-10 text-[13px] font-medium">
            <span className="text-[10px] text-purple-300">&#10022;</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
