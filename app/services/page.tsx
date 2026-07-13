import Core from "@/components/home/Core";
import OurDiff from "@/components/services/OurDiff";
import ServiceOver from "@/components/services/ServiceOver";
import ServicesHero from "@/components/services/ServicesHero";
import { JsonLd } from "@/components/json_ld";
import { servicesItemListSchema, servicesBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | BTech360 Solutions",
  description:
    "Explore BTech360 Solutions services – scalable marketing technology, AI-driven tools, and tailored strategies that help businesses thrive in Africa and beyond.",
  keywords: [
    "BTech360 services",
    "marketing technology",
    "AI business tools",
    "digital transformation Nigeria",
    "scalable business solutions",
    "BTech360 consulting",
    "enterprise marketing solutions",
  ],
  openGraph: {
    title: "Our Services | BTech360 Solutions",
    description:
      "Explore BTech360 Solutions services – scalable marketing technology, AI-driven tools, and tailored strategies.",
    url: "https://www.btech360online.com/services",
    siteName: "BTech360 Solutions",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | BTech360 Solutions",
    description:
      "Explore BTech360 Solutions services – scalable marketing technology, AI-driven tools, and tailored strategies.",
    images: ["/logo.png"],
  },
};

const page = () => {
  return (
    <div>
      <JsonLd data={[servicesItemListSchema, servicesBreadcrumbSchema]} />
      <ServicesHero />
      <ServiceOver />
      <Core />
      <OurDiff />
    </div>
  );
};

export default page;
