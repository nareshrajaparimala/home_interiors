"use client";

import { SERVICES } from "@/lib/constants";
import { useModal } from "@/components/layout/ClientLayout";
import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/sections/Hero";
import SubBanner from "@/components/sections/SubBanner";
import EstimateSection from "@/components/sections/EstimateSection";
import StepsSection from "@/components/sections/StepsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import LocationsSection from "@/components/sections/LocationsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SERVICE_SLUGS: Record<string, string> = {
  carpenter: "woodwork-interior",
  electrical: "electrical-work",
  painting: "painting-work",
  ceiling: "false-ceiling",
  tiles: "tiles-flooring",
  plumbing: "plumbing-work",
};

export default function HomePage() {
  const openModal = useModal();

  return (
    <main>
      <Hero onOpenModal={openModal} />
      <SubBanner />

      {/* Service Cards — Link to individual pages */}
      <section id="services" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Our Services</span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Complete Home Interior Solutions</h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-500">Six trades, one team. Tap any service to explore designs, pricing, and scope.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.08}>
                <Link href={`/services/${SERVICE_SLUGS[s.id]}`} className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(109,40,217,0.2)]" style={{ perspective: 1000 }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={s.images[0].src} alt={s.images[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-purple-700 backdrop-blur-sm">
                        Explore Designs
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{s.label}</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{s.heading}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-10 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border-2 border-purple-700 px-6 py-3 text-sm font-semibold text-purple-700 transition-all hover:bg-purple-700 hover:text-white">
                View All Services
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <EstimateSection onOpenModal={openModal} />
      <StepsSection onOpenModal={openModal} />
      <PortfolioSection />
      <ReviewsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <SolutionsGrid />
      <LocationsSection />
      <FAQSection />
      <CTABanner onOpenModal={openModal} />
    </main>
  );
}
