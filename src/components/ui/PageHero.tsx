"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  breadcrumb: { label: string; href: string }[];
  bgImage: string;
}

export default function PageHero({ title, subtitle, breadcrumb, bgImage }: Props) {
  return (
    <section className="relative mt-[70px] flex h-[340px] items-end overflow-hidden bg-gray-900 md:h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-900/60 to-black/30" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-purple-200">
          {breadcrumb.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-purple-400">/</span>}
              {i < breadcrumb.length - 1 ? (
                <Link href={item.href} className="transition-colors hover:text-white">{item.label}</Link>
              ) : (
                <span className="text-white font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 text-3xl font-extrabold text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-base text-purple-100 md:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
