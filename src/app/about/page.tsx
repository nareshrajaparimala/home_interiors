import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card3D from "@/components/ui/Card3D";
import Icon3D from "@/components/ui/Icon3D";

export const metadata: Metadata = {
  title: "About Us | Jai Jagdamba Home Interiors Bangalore",
  description:
    "Learn about Jai Jagdamba Home Interiors — founded by Pradeep Kumar Yadav, serving Bangalore with all 6 home interior trades under one roof.",
};

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "5-Year", label: "Warranty On All Work" },
  { value: "6", label: "In-House Trades" },
  { value: "Bangalore", label: "Focused Local Service" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Jai Jagdamba Home Interiors"
        subtitle="Bangalore's trusted all-in-one home interior team — carpentry, electrical, painting, false ceiling, tiles, and plumbing under one roof."
        bgImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      {/* Company Story */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                Our Story
              </span>
              <h2 className="mb-6 text-[28px] font-extrabold text-gray-900 md:text-4xl">
                Built On Trust, Crafted With Care
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jai Jagdamba Home Interiors was founded by Pradeep Kumar Yadav with a
                  simple but powerful idea: homeowners in Bangalore should not have to
                  juggle five or six different contractors for their home interior work.
                </p>
                <p>
                  Based in Singasandra on Hosur Main Road, we started as a small
                  carpentry workshop and grew into a complete home interior company
                  covering all 6 essential trades — woodwork, electrical, painting,
                  false ceiling, tiles and flooring, and plumbing.
                </p>
                <p>
                  Every project is personally supervised by Pradeep, ensuring quality,
                  timeline adherence, and transparent pricing. We use only branded,
                  ISI-certified materials and provide a 5-year warranty on all work.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div
                  className="h-80 w-full bg-cover bg-center md:h-96"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-purple-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                What Drives Us
              </span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">
                Mission & Vision
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimatedSection delay={0}>
              <Card3D className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <Icon3D size="lg" color="purple">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </Icon3D>
                <h3 className="mt-6 mb-3 text-xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver premium-quality home interiors to Bangalore families at
                  honest prices — with all 6 trades managed by one accountable team, so
                  homeowners never have to coordinate multiple vendors again.
                </p>
              </Card3D>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card3D className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <Icon3D size="lg" color="indigo">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </Icon3D>
                <h3 className="mt-6 mb-3 text-xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become Bangalore&apos;s most trusted name in home interiors — known
                  for transparent pricing, on-time delivery, superior craftsmanship, and
                  genuine after-service support that lasts years beyond project handover.
                </p>
              </Card3D>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Bangalore Only */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimatedSection direction="right">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div
                  className="h-72 w-full bg-cover bg-center md:h-80"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80')",
                  }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                Local Focus
              </span>
              <h2 className="mb-6 text-[28px] font-extrabold text-gray-900 md:text-4xl">
                Why Bangalore Only?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We deliberately choose to serve only Bangalore. This is not a
                  limitation — it is our strength. By focusing on one city, we ensure:
                </p>
                <ul className="space-y-3">
                  {[
                    "Same-day site visits for any Bangalore locality",
                    "Deep relationships with local material dealers for best prices",
                    "Knowledge of Bangalore apartment layouts and builder specifications",
                    "Our team lives here, works here, and takes pride in local homes",
                    "Quick after-service response — we are always within reach",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 stroke-purple-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-purple-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                Leadership
              </span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">
                Meet the Team
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mx-auto max-w-lg">
              <Card3D className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-3xl font-extrabold text-white shadow-lg shadow-purple-500/20">
                    PY
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Pradeep Kumar Yadav
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-purple-600">
                    Founder & Owner
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    Pradeep personally oversees every project from quotation to
                    handover. With years of experience in the Bangalore home interior
                    industry, he built Jai Jagdamba on the principle that quality work
                    and fair pricing can coexist. He is your single point of contact
                    for all 6 trades — ensuring coordination, quality control, and
                    on-time delivery.
                  </p>
                </div>
              </Card3D>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-white md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-purple-200">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Ready To Transform Your Home?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-600">
              Talk to Pradeep directly. Get a free site visit and a transparent,
              itemized quotation within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-9 py-4 text-base font-bold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5 hover:shadow-purple-500/30"
            >
              Contact Us
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
