"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PORTFOLIO } from "@/lib/constants";

const FILTERS = [
  "All",
  "Full Home",
  "Carpentry",
  "Electrical",
  "Painting",
  "Tiles",
  "Plumbing",
] as const;

function matchFilter(tag: string, filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "Full Home") return tag === "Full Home" || tag === "All 6 Trades";
  return tag.toLowerCase().includes(filter.toLowerCase());
}

export default function PortfolioPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = PORTFOLIO.filter((p) => matchFilter(p.tag, active));

  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Browse completed home interior projects across Bangalore — kitchens, wardrobes, bathrooms, full home renovations and more."
        bgImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          {/* Filters */}
          <AnimatedSection>
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    active === f
                      ? "bg-purple-700 text-white shadow-md shadow-purple-500/20"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-purple-300 hover:text-purple-700"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.title + i} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl shadow-md">
                  <div className="relative h-64 w-full">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="mb-2 inline-block rounded-full bg-purple-600/80 px-3 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-purple-200">{item.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-gray-500">
              No projects found for this filter. Try a different category.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 py-16 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Want Your Home In Our Portfolio?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-purple-200">
              Let us design and execute your dream home interior. Book a free
              consultation and get a detailed quote within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-9 py-4 text-base font-bold text-purple-700 transition-all hover:bg-purple-100 hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
