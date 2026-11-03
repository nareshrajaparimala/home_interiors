"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", children: [
    { href: "/services/woodwork-interior", label: "Woodwork & Interior" },
    { href: "/services/electrical-work", label: "Electrical Work" },
    { href: "/services/painting-work", label: "Painting Work" },
    { href: "/services/false-ceiling", label: "False Ceiling" },
    { href: "/services/tiles-flooring", label: "Tiles & Flooring" },
    { href: "/services/plumbing-work", label: "Plumbing Work" },
  ]},
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="flex h-[70px] items-center justify-between gap-5">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-gradient-to-br from-purple-600 to-purple-800 text-white text-lg font-extrabold shadow-lg shadow-purple-500/20">
                JJ
              </div>
              <div className="text-[15px] font-bold leading-tight text-purple-900">
                {SITE.shortName}
                <span className="block text-[10px] font-medium tracking-wide uppercase text-gray-500">{SITE.tagline}</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <div key={l.href} className="relative group">
                  <Link
                    href={l.href}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      pathname === l.href || (l.children && pathname.startsWith("/services/"))
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                  >
                    {l.label}
                    {l.children && <svg className="ml-1 inline h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>}
                  </Link>
                  {l.children && (
                    <div className="invisible absolute left-0 top-full z-50 w-56 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {l.children.map((child) => (
                        <Link key={child.href} href={child.href} className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname === child.href ? "bg-purple-50 text-purple-700" : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"}`}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp transition-transform hover:scale-110" title="WhatsApp Us">
                <WhatsAppIcon className="h-[22px] w-[22px] fill-white" />
              </a>
              <button onClick={onOpenModal} className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/30 hover:-translate-y-0.5">
                Get Free Estimate
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button className="flex lg:hidden flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                <span className={`block h-[2.5px] w-6 rounded bg-gray-700 transition-transform ${menuOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
                <span className={`block h-[2.5px] w-6 rounded bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[2.5px] w-6 rounded bg-gray-700 transition-transform ${menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-0 top-[70px] bottom-0 z-40 flex flex-col gap-1 overflow-y-auto bg-white p-6 lg:hidden">
          {NAV_LINKS.map((l) => (
            <div key={l.href}>
              {!l.children ? (
                <Link href={l.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700">{l.label}</Link>
              ) : (
                <>
                  <button onClick={() => setServicesOpen(!servicesOpen)} className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-purple-50">
                    {l.label}
                    <svg className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 flex flex-col gap-1">
                      <Link href="/services" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium text-purple-700 hover:bg-purple-50">All Services</Link>
                      {l.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700">{child.label}</Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="mt-5">
            <button onClick={() => { setMenuOpen(false); onOpenModal(); }} className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 py-3.5 text-center text-base font-semibold text-white">Get Free Estimate</button>
          </div>
        </div>
      )}
    </>
  );
}
