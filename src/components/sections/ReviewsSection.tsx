import { REVIEWS } from "@/lib/constants";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Reviews</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">What Bangalore Homeowners Say About Us</h2>
        </div>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[28px] font-extrabold text-gray-900">4.8</span>
            <span className="text-[22px] tracking-wider text-amber-400">★★★★★</span>
          </div>
          <span className="text-sm text-gray-500">(200+ Google Reviews)</span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-3 text-sm tracking-wider text-amber-400">★★★★★</div>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-4">{r.text}</p>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">{r.initial}</div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
