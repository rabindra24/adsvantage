import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdsVantage Marketing Agency || Performance Marketing Agency",
  description:
    "Elevate your brand with Adsvantage! Our team crafts tailored marketing solutions to boost your online presence. Contact us today for personalized strategies that drive results.",
  keywords:
    "HTML Template, site template, seo, marketing, creative, corporate, modern, multipurpose, one page, business, responsive, minimal, saas, startup",
  metadataBase: new URL("https://adsvantage.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        <Toaster />
        <Analytics />
        <GoogleAnalytics measurementId={`${process.env.GOOGLE_ANALYTICS_ID}`} />
      </body>
    </html>
  );
}
