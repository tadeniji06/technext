import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";
import AnalyticsScript from "@/components/Analytics";
import { JsonLd } from "@/components/json_ld";
import Script from "next/script";
import {
  organizationSchema,
  websiteSchema,
  // siteLinksSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tech360 Solutions – Marketing Tech Solutions for Africa",
  description:
    "Tech360 Solutions provides innovative marketing technology tools and services tailored to African businesses. Scale your growth with AI, automation, and digital transformation.",
  keywords: [
    "Tech360 Solutions",
    "marketing technology Africa",
    "AI business tools Nigeria",
    "digital transformation",
    "business automation",
    "enterprise tech Lagos",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Tech360 Solutions – Marketing Tech Solutions for Africa",
    description:
      "Tech360 Solutions provides innovative marketing technology tools and services tailored to African businesses.",
    url: "https://www.btech360online.com",
    siteName: "Tech360 Solutions",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech360 Solutions – Marketing Tech Solutions for Africa",
    description:
      "Tech360 Solutions provides innovative marketing technology tools and services tailored to African businesses.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <ClarityScript />
        <AnalyticsScript />

        <Script
          src="https://app.crm360online.com/capture.js"
          data-key="pk_live_221b0e243a551102efee037cf234a0b238472edd60fcb86f"
          data-selector="#contact-form"
          data-tags=""
          data-debug="false"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
