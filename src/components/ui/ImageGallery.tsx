"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category?: string;
}

interface Props {
  images: GalleryImage[];
  showCategories?: boolean;
}

export default function ImageGallery({ images, showCategories = false }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories
  const categories = useMemo(() => {
    if (!showCategories) return [];
    const cats = new Set(images.map((img) => img.category).filter(Boolean));
    return ["All", ...Array.from(cats)] as string[];
  }, [images, showCategories]);

  // Filter images by category
  const filtered = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % filtered.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <>
      {/* Category Tabs */}
      {showCategories && categories.length > 1 && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-purple-700 text-white shadow-lg shadow-purple-500/20"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img, i) => (
          <motion.div
            key={`${img.src}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
            whileHover={{ y: -6 }}
            onClick={() => openLightbox(i)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-purple-900/0 transition-all duration-300 group-hover:bg-purple-900/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 transition-all duration-300 group-hover:bg-white/90 group-hover:scale-100 scale-50 opacity-0 group-hover:opacity-100">
                  <svg className="h-5 w-5 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
              {/* Category badge */}
              {img.category && (
                <span className="absolute left-3 top-3 rounded-full bg-purple-700/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {img.category}
                </span>
              )}
            </div>
            <div className="px-5 py-4">
              <p className="text-sm font-medium leading-snug text-gray-700">{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filtered}
        currentIndex={currentIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={goNext}
        onPrev={goPrev}
      />
    </>
  );
}
