import { COMPARE_ROWS } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">Why Us</span>
          <h2 className="text-[28px] font-extrabold text-gray-900 md:text-4xl">Why Choose Jai Jagdamba Home Interiors?</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <thead>
              <tr>
                <th className="bg-purple-900 px-5 py-4 text-left text-sm font-bold text-white">What Matters</th>
                <th className="bg-purple-700 px-5 py-4 text-left text-sm font-bold text-white">Jai Jagdamba</th>
                <th className="bg-gray-200 px-5 py-4 text-left text-sm font-bold text-gray-700">A Typical Local Vendor</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, i) => (
                <tr key={i}>
                  <td className="border-b border-gray-100 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-800">{row.feature}</td>
                  <td className="border-b border-gray-100 bg-purple-50 px-5 py-4 text-sm font-medium text-purple-800">
                    <span className="font-bold text-purple-700">✓</span> {row.us}
                  </td>
                  <td className="border-b border-gray-100 px-5 py-4 text-sm text-gray-500">
                    <span className="text-gray-400">✗</span> {row.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
