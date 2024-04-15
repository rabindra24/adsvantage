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
    "Elevate your brand with Adsvantage! We specialize in marketing solutions to enhance your online presence. Reach out today for personalized strategies that deliver results.",
  keywords:
    "marketing agency, seo, marketing, creative, Performance Marketing Agency, modern, multipurpose, one page, business, responsive, minimal, shopify websites, startup",
  metadataBase: new URL("https://adsvantage.vercel.app/"),
  category: "Marketing Agency",
};

const url = "https://adsvantage.vercel.app";

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "MarketingAgency",
  name: "Adsvantage",
  url: url,
  logo: `${url + "/icons/logo.svg"}`,
  description:
    "Adsvantage is a leading advertising agency offering tailored marketing solutions to elevate brands' online presence.",
  address: {
    "@type": "Ward no 9 Chowki Mohalla parasia",
    streetAddress: "123 Main Street",
    addressLocality: "Chhindwara",
    addressRegion: "Madhya Pradesh",
    postalCode: "480441",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+918085601897",
    contactType: "customer service",
  },
  sameAs: ["https://www.instagram.com/adsvantage.in/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
