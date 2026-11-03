import { LOCATIONS } from "@/lib/constants";

export default function LocationsSection() {
  return (
    <section id="locations" className="bg-purple-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Bangalore Only</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">We Serve All Major Bangalore Localities</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-500">Based at Singasandra, Hosur Main Road — strategically covering South, South-East, and Central Bangalore.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {LOCATIONS.map((loc) => (
            <span key={loc} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-purple-700 hover:bg-purple-700 hover:text-white">
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
