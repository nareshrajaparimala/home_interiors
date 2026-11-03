import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="bg-purple-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Happy Customers</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Bangalore Homeowners Trust Us With Their Homes</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="relative rounded-2xl border border-gray-200 bg-white p-9">
              <span className="absolute left-7 top-3 font-serif text-7xl leading-none text-purple-200">&ldquo;</span>
              <p className="relative pt-6 text-[15px] italic leading-relaxed text-gray-600">{t.text}</p>
              <div className="mt-5 text-sm font-bold text-gray-800">{t.author}</div>
              <div className="text-[13px] text-gray-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
