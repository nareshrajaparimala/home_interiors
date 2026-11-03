import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Home Interior Services In Bangalore | Jai Jagdamba Home Interiors",
  description:
    "Carpenter, Electrical, Painting, False Ceiling, Tiles & Plumbing — all under one roof in Bangalore. 100+ projects delivered. Free consultation. Call 9538887631.",
  metadataBase: new URL("https://jaijagdambahomeinteriors.com"),
  openGraph: {
    title: "Best Home Interior Services In Bangalore | Jai Jagdamba Home Interiors",
    description: "Carpenter, Electrical, Painting, False Ceiling, Tiles & Plumbing — all under one roof in Bangalore.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
