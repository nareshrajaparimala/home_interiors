import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { SERVICE_PAGES } from "@/lib/service-pages";

const data = SERVICE_PAGES["electrical-work"];

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
};

export default function Page() {
  return (
    <>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        bgImage={data.heroImage}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: data.label, href: `/services/${data.slug}` },
        ]}
      />
      <ServicePageContent data={data} />
    </>
  );
}
