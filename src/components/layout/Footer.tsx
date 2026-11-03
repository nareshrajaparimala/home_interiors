import { SITE, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-3 text-xl font-extrabold text-white">{SITE.name}</div>
            <p className="mb-4 text-sm leading-relaxed">
              Bangalore&apos;s trusted multi-trade home interior company. Carpenter Work · Electric Work · Painting · False Ceiling · Tiles · Plumbing — all under one roof.
            </p>
            <p className="font-semibold text-purple-400">Serving Bangalore Only</p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            {["Carpenter Work", "Electric Work", "Painting Work", "False Ceiling", "Tiles Work", "Plumber Work"].map((s) => (
              <a key={s} href="#services" className="block py-1 text-sm text-gray-400 transition-colors hover:text-purple-400">{s}</a>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            {[
              { label: "Portfolio", href: "#portfolio" },
              { label: "Pricing", href: "#estimate" },
              { label: "How It Works", href: "#process" },
              { label: "Reviews", href: "#reviews" },
              { label: "Why Choose Us", href: "#why" },
              { label: "FAQs", href: "#faq" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block py-1 text-sm text-gray-400 transition-colors hover:text-purple-400">{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Get In Touch</h4>
            <p className="mb-2.5 flex items-start gap-2 text-sm">
              <svg className="mt-0.5 h-4 w-4 shrink-0 stroke-purple-400" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              {SITE.address}
            </p>
            <p className="mb-2.5 flex items-start gap-2 text-sm">
              <svg className="mt-0.5 h-4 w-4 shrink-0 stroke-purple-400" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              <span>
                <a href={`tel:+91${SITE.phone1}`} className="text-purple-400">+91 {SITE.phone1}</a>
                {" / "}
                <a href={`tel:+91${SITE.phone2}`} className="text-purple-400">+91 {SITE.phone2}</a>
              </span>
            </p>
            <p className="flex items-start gap-2 text-sm">
              <svg className="mt-0.5 h-4 w-4 shrink-0 stroke-purple-400" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <a href={`mailto:${SITE.email}`} className="text-purple-400">{SITE.email}</a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500">&copy; 2026 {SITE.name}. All rights reserved. | Bangalore, India</p>
          <div className="flex gap-3">
            {["Instagram", "YouTube"].map((s) => (
              <a key={s} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-purple-700" aria-label={s}>
                <svg className="h-4 w-4 fill-gray-400" viewBox="0 0 24 24">
                  {s === "Instagram" ? (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  ) : (
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
