"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE, WHATSAPP_URL, SERVICE_OPTIONS } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Build WhatsApp message with form data
    const text = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.service && `Service: ${form.service}`,
      form.propertyType && `Property: ${form.propertyType}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get a free site visit and detailed quotation within 24 hours. Talk to Pradeep directly."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Contact Form */}
            <AnimatedSection direction="left">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-2 text-2xl font-extrabold text-gray-900">
                  Send Us a Message
                </h2>
                <p className="mb-8 text-sm text-gray-500">
                  Fill the form below and we will redirect you to WhatsApp for instant
                  communication.
                </p>

                {submitted ? (
                  <div className="rounded-xl bg-green-50 p-8 text-center">
                    <svg
                      className="mx-auto mb-4 h-12 w-12 stroke-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-gray-600">
                      We will get back to you within 24 hours. You can also call us
                      directly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm font-semibold text-purple-700 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                          Phone *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="service"
                          className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        >
                          <option value="">Select a service</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="propertyType"
                          className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={form.propertyType}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        >
                          <option value="">Select property type</option>
                          <option value="1 BHK">1 BHK</option>
                          <option value="2 BHK">2 BHK</option>
                          <option value="3 BHK">3 BHK</option>
                          <option value="4+ BHK">4+ BHK</option>
                          <option value="Villa">Villa / Independent House</option>
                          <option value="Office">Office / Commercial</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5 hover:shadow-purple-500/30"
                    >
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Right: Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                {/* Address */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    Visit Our Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 shrink-0 stroke-purple-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Address</p>
                        <p className="text-sm text-gray-600">{SITE.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 shrink-0 stroke-purple-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Phone</p>
                        <p className="text-sm text-gray-600">
                          <a
                            href={`tel:${SITE.phone1}`}
                            className="transition-colors hover:text-purple-700"
                          >
                            +91 {SITE.phone1}
                          </a>
                          {" / "}
                          <a
                            href={`tel:${SITE.phone2}`}
                            className="transition-colors hover:text-purple-700"
                          >
                            +91 {SITE.phone2}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 shrink-0 stroke-purple-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">
                          <a
                            href={`mailto:${SITE.email}`}
                            className="transition-colors hover:text-purple-700"
                          >
                            {SITE.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Chat on WhatsApp
                    </p>
                    <p className="text-sm text-gray-600">
                      Instant response. Tap to start a conversation.
                    </p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-900">10:00 AM - 5:00 PM</span>
                    </div>
                    <p className="mt-3 text-xs text-gray-500">
                      WhatsApp messages are answered even outside business hours.
                    </p>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                  <iframe
                    title="Jai Jagdamba Home Interiors Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2759!2d77.6301!3d12.8849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSingasandra%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
