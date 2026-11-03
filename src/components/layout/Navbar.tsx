"use client";

import { useState } from "react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#estimate", label: "Pricing" },
  { href: "#process", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="flex h-[70px] items-center justify-between gap-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-purple-700 text-white text-lg font-extrabold">
                JJ
              </div>
              <div className="text-[15px] font-bold leading-tight text-purple-900">
                {SITE.shortName}
                <span className="block text-[10px] font-medium tracking-wide uppercase text-gray-500">
                  {SITE.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp transition-transform hover:scale-110"
                title="WhatsApp Us"
              >
                <WhatsAppIcon className="h-[22px] w-[22px] fill-white" />
              </a>
              <button
                onClick={onOpenModal}
                className="hidden md:inline-flex items-center gap-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(109,40,217,0.35)]"
              >
                Get Free Estimate
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button
                className="flex lg:hidden flex-col gap-[5px] p-1"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <span className={`block h-[2.5px] w-6 rounded bg-gray-700 transition-transform ${menuOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
                <span className={`block h-[2.5px] w-6 rounded bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[2.5px] w-6 rounded bg-gray-700 transition-transform ${menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[70px] bottom-0 z-40 flex flex-col gap-1 overflow-y-auto bg-white p-6 lg:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-5">
            <button
              onClick={() => { setMenuOpen(false); onOpenModal(); }}
              className="w-full rounded-lg bg-purple-700 py-3.5 text-center text-base font-semibold text-white"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      )}
    </>
  );
}
