import Contact from "@/components/Contact";
import { JsonLd } from "@/components/json_ld";
import { localBusinessSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BTech360 Solutions",
  description:
    "Get in touch with BTech360 Solutions. Reach us via WhatsApp, email, or visit our office in Lagos, Nigeria. We're here to support your business growth.",
  keywords: [
    "Contact BTech360",
    "BTech360 support",
    "BTech360 Lagos office",
    "BTech360 email",
    "BTech360 WhatsApp",
    "business inquiries Nigeria",
  ],
  openGraph: {
    title: "Contact Us | BTech360 Solutions",
    description:
      "Reach out to BTech360 via WhatsApp, email, or visit our Lagos office.",
    url: "https://www.btech360online.com/contact",
    siteName: "BTech360 Solutions",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | BTech360 Solutions",
    description:
      "Reach out to BTech360 via WhatsApp, email, or visit our Lagos office.",
    images: ["/logo.png"],
  },
};

const page = () => {
  return (
    <div>
      <JsonLd data={localBusinessSchema} />
      <Contact />
    </div>
  );
};

export default page;
