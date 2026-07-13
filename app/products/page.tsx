import { JsonLd } from "@/components/json_ld";
import { productsItemListSchema, productsBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";
import Products from "./Products";

export const metadata: Metadata = {
  title: "Products | BTech360 Enterprise Ecosystem",
  description:
    "Explore BTech360's suite of 360° business applications — Marketing360, HRM360, CRM360, and Biz360Prime vertical ERP for African businesses.",
  openGraph: {
    title: "Products | BTech360 Enterprise Ecosystem",
    description:
      "Explore BTech360's suite of 360° business applications for African businesses.",
    url: "https://www.btech360online.com/products",
    siteName: "BTech360 Solutions",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | BTech360 Enterprise Ecosystem",
    description:
      "Explore BTech360's suite of 360° business applications for African businesses.",
    images: ["/logo.png"],
  },
};

const page = () => {
  return (
    <div>
      <JsonLd data={[productsItemListSchema, productsBreadcrumbSchema]} />
      <Products />
    </div>
  );
};

export default page;
