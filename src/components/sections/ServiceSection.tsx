"use client";

import Image from "next/image";

interface ServiceImage {
  src: string;
  alt: string;
  caption: string;
}

interface Props {
  label: string;
  heading: string;
  images: readonly ServiceImage[];
  cta: string;
  even: boolean;
  onOpenModal: () => void;
}

export default function ServiceSection({ label, heading, images, cta, even, onOpenModal }: Props) {
  return (
    <section className={`py-12 md:py-14 border-b border-gray-100 ${even ? "bg-purple-50" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <h2 className="mb-2 text-[13px] font-bold uppercase tracking-wider text-purple-700">{label}</h2>
        <h3 className="mb-7 text-2xl font-bold leading-tight text-gray-900 md:text-[28px]">{heading}</h3>

        {/* Tile Cards */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.alt}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-medium leading-snug text-gray-700">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(109,40,217,0.35)]"
          >
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
}
