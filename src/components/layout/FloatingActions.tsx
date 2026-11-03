"use client";

import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function FloatingActions({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <>
      {/* Desktop WhatsApp Float */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden md:flex h-[60px] w-[60px] items-center justify-center rounded-full bg-whatsapp shadow-lg animate-pulse-wa transition-transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 fill-white" />
      </a>

      {/* Mobile Sticky Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-gray-200 bg-white shadow-[0_-2px_20px_rgba(0,0,0,0.1)] md:hidden">
        <a
          href={`tel:+91${SITE.phone1}`}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold text-gray-600"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 bg-whatsapp py-2.5 text-[11px] font-semibold text-white"
        >
          <WhatsAppIcon className="h-5 w-5 fill-current" />
          WhatsApp
        </a>
        <button
          onClick={onOpenModal}
          className="flex flex-1 flex-col items-center justify-center gap-1 bg-purple-700 py-2.5 text-[11px] font-semibold text-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Get Estimate
        </button>
      </div>
    </>
  );
}
