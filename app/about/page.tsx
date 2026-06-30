import AboutHero from "@/components/about/AboutHero";
import Cause from "@/components/about/Cause";
import OurStand from "@/components/about/OurStand";
import Vision from "@/components/about/Vision";
import Testimonials from "@/components/home/Testimonials";
import { JsonLd } from "@/components/json_ld";
import { aboutBreadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BTech360 Solutions",
  description:
    "Discover BTech360 Solutions – our mission, vision, and values. Learn how our team is driving digital transformation through innovative marketing technology solutions.",
  keywords: [
    "About BTech360",
    "BTech360 Solutions team",
    "BTech360 mission",
    "BTech360 vision",
    "digital marketing solutions",
    "marketing technology company",
    "business growth Nigeria",
    "tech company Lagos",
  ],
  openGraph: {
    title: "About Us | BTech360 Solutions",
    description:
      "Discover BTech360 Solutions – our mission, vision, and values.",
    url: "https://www.btech360online.com/about",
    siteName: "BTech360 Solutions",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | BTech360 Solutions",
    description:
      "Discover BTech360 Solutions – our mission, vision, and values.",
    images: ["/logo.png"],
  },
};

const page = () => {
  return (
    <div>
      <JsonLd data={[aboutBreadcrumbSchema, localBusinessSchema]} />
      <AboutHero />
      <Cause />
      <Vision />
      <OurStand />
      <Testimonials />
    </div>
  );
};

export default page;
