import Image from "next/image";
import { PORTFOLIO } from "@/lib/constants";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Our Work</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Latest Home Interior Projects In Bangalore</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-500">See how we&apos;ve transformed homes across Bangalore with carpentry, painting, electrical and more.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <div key={p.title} className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl">
              <Image src={p.src} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12 text-white">
                <h4 className="text-base font-bold">{p.title}</h4>
                <p className="text-[13px] text-white/70">{p.location} · {p.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
