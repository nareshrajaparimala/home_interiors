import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card3D from "@/components/ui/Card3D";
import Icon3D from "@/components/ui/Icon3D";

export const metadata: Metadata = {
  title: "Pricing | Jai Jagdamba Home Interiors Bangalore",
  description:
    "Transparent pricing for Bangalore home interiors. Essential, Premium, and Signature packages starting from Rs 1,299/sq ft. No hidden charges.",
};

const tiers = [
  {
    name: "Essential",
    price: "1,299",
    unit: "per sq ft",
    description: "Quality basics for budget-conscious homeowners",
    color: "purple" as const,
    popular: false,
    includes: {
      "Woodwork": "Laminate finish, standard hardware (Ebco), basic kitchen layout",
      "Electrical": "Standard wiring, Anchor/Havells switches, basic lighting points",
      "Painting": "Asian Paints Apcolite, 2-coat finish with putty and primer",
      "False Ceiling": "Peripheral gypsum ceiling in living and master bedroom",
      "Tiles": "Kajaria/Somany standard range, cement grout",
      "Plumbing": "Hindware/Cera standard fixtures, CPVC concealed piping",
    },
  },
  {
    name: "Premium",
    price: "1,799",
    unit: "per sq ft",
    description: "Our most popular package for modern Bangalore homes",
    color: "indigo" as const,
    popular: true,
    includes: {
      "Woodwork": "Acrylic/PU finish, Hettich hardware, modular kitchen with accessories",
      "Electrical": "Legrand/Schneider switches, cove lighting, designer fixtures",
      "Painting": "Asian Paints Royale, accent texture wall, 3-coat finish",
      "False Ceiling": "Multi-level gypsum ceiling with cove LED, all rooms",
      "Tiles": "Premium Kajaria/RAK range, epoxy grout, larger formats",
      "Plumbing": "Jaquar fixtures, rain shower, concealed hot-cold lines",
    },
  },
  {
    name: "Signature",
    price: "2,499",
    unit: "per sq ft",
    description: "Luxury finishes for discerning homeowners",
    color: "amber" as const,
    popular: false,
    includes: {
      "Woodwork": "Italian PU/glass finish, Hafele/Blum hardware, premium accessories",
      "Electrical": "Legrand Arteor/Schneider Unica, smart-ready wiring, premium LED",
      "Painting": "Dulux/Berger premium, Italian texture walls, wood polish",
      "False Ceiling": "Designer multi-level with RGB cove, wooden panel accents",
      "Tiles": "Imported/large-format porcelain, Italian marble-look, epoxy grout",
      "Plumbing": "Kohler/Jaquar premium, concealed cistern, rain + hand shower",
    },
  },
];

const milestones = [
  { pct: "10%", label: "Booking", desc: "Project confirmation and design sign-off" },
  { pct: "40%", label: "Material", desc: "Material procurement and delivery to site" },
  { pct: "40%", label: "Execution", desc: "Work in progress across all trades" },
  { pct: "10%", label: "Handover", desc: "Final walkthrough, cleanup, and handover" },
];

const exclusions = [
  "Furniture (sofa, dining table, beds) -- we do built-in woodwork only",
  "Appliances (AC, chimney, hob, washing machine, refrigerator)",
  "Curtains, blinds, and soft furnishings",
  "Civil and structural work (wall breaking, room extension)",
  "Society/apartment association permissions and NOCs",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Transparent Pricing"
        subtitle="No hidden charges, no surprise additions. Choose a package or get a custom quote for your Bangalore home."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />

      {/* Pricing Tiers */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                Packages
              </span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">
                Choose Your Package
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                All packages include all 6 trades. Pricing is per square foot of
                carpet area. Custom quotes available for specific requirements.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <Card3D
                  className={`relative h-full rounded-2xl border bg-white p-8 shadow-sm ${
                    tier.popular
                      ? "border-purple-400 ring-2 ring-purple-400"
                      : "border-gray-200"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-purple-700 px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-6 text-center">
                    <h3 className="mb-1 text-2xl font-extrabold text-gray-900">
                      {tier.name}
                    </h3>
                    <p className="mb-4 text-sm text-gray-500">{tier.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-extrabold text-purple-700">
                        {tier.price}
                      </span>
                      <span className="text-sm text-gray-500">/{tier.unit}</span>
                    </div>
                  </div>
                  <hr className="mb-6 border-gray-100" />
                  <ul className="space-y-4">
                    {Object.entries(tier.includes).map(([trade, detail]) => (
                      <li key={trade}>
                        <p className="text-sm font-bold text-gray-900">{trade}</p>
                        <p className="text-sm text-gray-600">{detail}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`block w-full rounded-lg py-3.5 text-center text-sm font-bold transition-all hover:-translate-y-0.5 ${
                        tier.popular
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/20"
                          : "border-2 border-purple-200 text-purple-700 hover:border-purple-400 hover:bg-purple-50"
                      }`}
                    >
                      Get {tier.name} Quote
                    </Link>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="bg-purple-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
                Transparency
              </span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">
                What Is NOT Included
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                We believe in full transparency. The following items are not part of
                our standard packages:
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mx-auto max-w-2xl">
              <ul className="space-y-3">
                {exclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 stroke-red-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Payment Milestones */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                Payment
              </span>
              <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">
                Milestone-Based Payment
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                You pay as the work progresses. No full payment upfront.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/20">
                    <span className="text-xl font-extrabold text-white">{m.pct}</span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{m.label}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                  {i < milestones.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <svg
                        className="h-6 w-6 text-purple-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
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
              Need A Custom Quote?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-purple-200">
              Every home is different. Share your requirements and get an itemized
              quotation tailored to your space, scope, and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-9 py-4 text-base font-bold text-purple-700 transition-all hover:bg-purple-100 hover:-translate-y-0.5"
            >
              Get Custom Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
