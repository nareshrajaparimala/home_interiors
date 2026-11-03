"use client";

import { SERVICE_OPTIONS, SITE } from "@/lib/constants";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const service = fd.get("service") as string || "Home Interior";
    const msg = encodeURIComponent(`Hi, I'm ${name}. I'm interested in ${service} services. Please contact me.`);
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-md animate-[modal-in_0.3s_ease] rounded-2xl bg-white p-8 shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-600 transition-colors hover:bg-gray-200">
          &times;
        </button>
        <h2 className="text-2xl font-extrabold text-gray-900">Book Free Consultation</h2>
        <p className="mt-1 mb-6 text-sm text-gray-500">Fill in your details and our team will contact you within 2 hours.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">Full Name</label>
            <input name="name" type="text" required placeholder="Enter your name" className="w-full rounded-xl border-[1.5px] border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">Mobile Number</label>
            <input name="phone" type="tel" required placeholder="Enter mobile number" className="w-full rounded-xl border-[1.5px] border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">Service Needed</label>
            <select name="service" required className="w-full rounded-xl border-[1.5px] border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10">
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-700">Property Type</label>
            <select name="property" className="w-full rounded-xl border-[1.5px] border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10">
              <option value="">Select property type</option>
              <option>1 BHK Apartment</option>
              <option>2 BHK Apartment</option>
              <option>3 BHK Apartment</option>
              <option>4+ BHK Apartment</option>
              <option>Independent Villa</option>
              <option>Office / Commercial</option>
            </select>
          </div>
          <button type="submit" className="mt-1 w-full rounded-lg bg-purple-700 py-3.5 text-base font-semibold text-white transition-all hover:bg-purple-800">
            Get Free Estimate
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-gray-400">No spam. No pressure. Our team calls within 2 hours.</p>
      </div>
    </div>
  );
}
