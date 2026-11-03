import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card3D from "@/components/ui/Card3D";
import Icon3D from "@/components/ui/Icon3D";
import { SERVICE_PAGES } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Our Services | Jai Jagdamba Home Interiors Bangalore",
  description:
    "Complete home interior services in Bangalore — Woodwork, Electrical, Painting, False Ceiling, Tiles & Flooring, and Plumbing. All 6 trades under one roof.",
};

const iconPaths: Record<string, React.ReactNode> = {
  "woodwork-interior": (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  "electrical-work": (
    <>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </>
  ),
  "painting-work": (
    <>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </>
  ),
  "false-ceiling": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </>
  ),
  "tiles-flooring": (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </>
  ),
  "plumbing-work": (
    <>
      <path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3" />
      <line x1="4" y1="21" x2="20" y2="21" />
      <line x1="12" y1="16" x2="12" y2="21" />
    </>
  ),
};

const iconColors: Record<string, "purple" | "blue" | "amber" | "green" | "rose" | "indigo"> = {
  "woodwork-interior": "amber",
  "electrical-work": "blue",
  "painting-work": "rose",
  "false-ceiling": "indigo",
  "tiles-flooring": "green",
  "plumbing-work": "purple",
};

const services = Object.values(SERVICE_PAGES);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="All 6 home interior trades under one roof — carpentry, electrical, painting, false ceiling, tiles, and plumbing for Bangalore homes."
        bgImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                What We Do
              </span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">
                Complete Home Interior Services In Bangalore
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                From modular kitchens to bathroom plumbing, our in-house team handles
                every aspect of your home interior with precision and care.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Card3D className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Icon3D size="sm" color={iconColors[service.slug] ?? "purple"}>
                        {iconPaths[service.slug]}
                      </Icon3D>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {service.label}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {service.subtitle}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 transition-colors hover:text-purple-900"
                    >
                      Learn More
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
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 py-16 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Need Multiple Services?
            </h2>
            <p className="mb-8 mx-auto max-w-xl text-base text-purple-200">
              Most clients hire us for 3 or more trades at once. Get a single quote
              for your complete home interior and save time, money, and hassle.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-9 py-4 text-base font-bold text-purple-700 transition-all hover:bg-purple-100 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
