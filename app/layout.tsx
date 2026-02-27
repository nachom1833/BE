import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-primary",
  display: "swap"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-secondary",
  display: "swap"
});

export const metadata: Metadata = {
  title: "BE Studio | Strategic Brand & Retail Experience Studio",
  description:
    "BE Studio creates strategic brand and retail experiences engineered for measurable business impact.",
  openGraph: {
    title: "BE Studio",
    description:
      "Strategic brand and retail experience studio focused on measurable growth.",
    type: "website",
    locale: "en_US",
    siteName: "BE Studio"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${lato.variable} bg-bg-primary text-text-primary`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
