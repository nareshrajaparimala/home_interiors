"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";

import Navbar from "@/components/layout/Navbar";
import OfferTicker from "@/components/layout/OfferTicker";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import ContactModal from "@/components/layout/ContactModal";

import Hero from "@/components/sections/Hero";
import SubBanner from "@/components/sections/SubBanner";
import ServiceSection from "@/components/sections/ServiceSection";
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

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <OfferTicker />

      <main>
        <Hero onOpenModal={openModal} />
        <SubBanner />

        {/* 6 Service Sections */}
        <div id="services">
          {SERVICES.map((s, i) => (
            <ServiceSection
              key={s.id}
              label={s.label}
              heading={s.heading}
              images={s.images}
              cta={s.cta}
              even={i % 2 === 1}
              onOpenModal={openModal}
            />
          ))}
        </div>

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

      <Footer />
      <FloatingActions onOpenModal={openModal} />
      <ContactModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
