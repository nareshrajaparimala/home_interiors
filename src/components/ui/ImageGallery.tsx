"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, i) => (
        <motion.div
          key={img.alt}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
          whileHover={{ y: -6, rotateX: 1, rotateY: -1 }}
          style={{ transformPerspective: 800 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="px-5 py-4">
            <p className="text-sm font-medium leading-snug text-gray-700">{img.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
