"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">FAQs</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-3xl">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-gray-800 transition-colors hover:text-purple-700"
              >
                {faq.q}
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg text-purple-700 transition-transform ${openIdx === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div className={`faq-answer ${openIdx === i ? "open pb-5" : ""}`}>
                <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
