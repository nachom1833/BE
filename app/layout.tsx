import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { SITE_URL } from "./lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BE Studio | Strategic Brand & Retail Experience Studio",
  description:
    "BE Studio creates strategic brand and retail experiences engineered for measurable business impact.",
  icons: {
    icon: "data:,"
  },
  openGraph: {
    title: "BE Studio",
    description:
      "Strategic brand and retail experience studio focused on measurable growth.",
    type: "website",
    locale: "en_US",
    siteName: "BE Studio",
    images: [
      {
        url: new URL("/hero-poster.svg", SITE_URL).toString(),
        width: 1200,
        height: 630,
        alt: "BE Studio Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BE Studio | Strategic Brand & Retail Experience Studio",
    description:
      "BE Studio creates strategic brand and retail experiences engineered for measurable business impact.",
    images: [new URL("/hero-poster.svg", SITE_URL).toString()],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg-primary text-text-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
