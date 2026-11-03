import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Jai Jagdamba Home Interiors | Bangalore", template: "%s | Jai Jagdamba Home Interiors" },
  description: "Carpenter, Electrical, Painting, False Ceiling, Tiles & Plumbing — all under one roof in Bangalore. 100+ projects delivered. Free consultation. Call 9538887631.",
  metadataBase: new URL("https://jaijagdambahomeinteriors.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
