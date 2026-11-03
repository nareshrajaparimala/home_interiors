"use client";

import { useModal } from "@/components/layout/ClientLayout";
import type { ServicePageData } from "@/lib/service-pages";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageGallery from "@/components/ui/ImageGallery";
import Icon3D from "@/components/ui/Icon3D";
import { useState } from "react";

export default function ServicePageContent({ data }: { data: ServicePageData }) {
  const openModal = useModal();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Description */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-gray-600">{data.description}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">{data.timeline}</span>
                <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">{data.startingPrice}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="bg-purple-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">What We Cover</span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Scope of {data.label}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.scope.map((group, i) => (
              <AnimatedSection key={group.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">{group.title}</h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 stroke-purple-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Design Gallery</span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">{data.label} Designs For Bangalore Homes</h2>
            </div>
          </AnimatedSection>
          <ImageGallery images={data.gallery} showCategories />
          <div className="mt-10 text-center">
            <button onClick={openModal} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5 hover:shadow-purple-500/30">
              Get a Quote for {data.label}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">Brands We Use</p>
            <div className="flex flex-wrap justify-center gap-4">
              {data.brands.map((brand) => (
                <span key={brand} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">{brand}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">FAQs</span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Common Questions About {data.label}</h2>
            </div>
          </AnimatedSection>
          <div className="mx-auto max-w-3xl">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-gray-800 transition-colors hover:text-purple-700">
                  {faq.q}
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg text-purple-700 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`faq-answer ${openFaq === i ? "open pb-5" : ""}`}>
                  <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 py-16 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">Ready for {data.label}?</h2>
            <p className="mb-8 text-base text-purple-200">Book a free site visit and get a detailed quote within 24 hours.</p>
            <button onClick={openModal} className="inline-flex items-center gap-2 rounded-lg bg-white px-9 py-4 text-base font-bold text-purple-700 transition-all hover:bg-purple-100 hover:-translate-y-0.5">
              Book Free Consultation
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
