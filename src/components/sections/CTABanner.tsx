"use client";

export default function CTABanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="contact" className="bg-gradient-to-br from-purple-700 to-purple-900 py-16 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-[32px] font-extrabold text-white md:text-[40px]">Ready To Transform Your Home?</h2>
        <p className="mb-8 text-base text-purple-200">Book a free consultation — our team will visit your home and give you a detailed quote within 24 hours.</p>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-9 py-4 text-base font-bold text-purple-700 transition-all hover:bg-purple-100 hover:-translate-y-0.5"
        >
          Book Free Consultation
        </button>
      </div>
    </section>
  );
}
