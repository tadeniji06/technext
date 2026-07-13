import type { Metadata } from "next";
import BlogPostsClient from "./BlogPostsClient";
import { JsonLd } from "@/components/json_ld";
import { blogBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "BTech360 Blog | Insights for Marketing & Growth",
  description:
    "BTech360 Blog shares expert insights, data-driven strategies, and tools to help companies start, grow, and expand their businesses across African markets.",
  openGraph: {
    title: "BTech360 Blog | Insights for Business & Marketing Growth",
    description:
      "Stay ahead with BTech360 Solutions insights on consulting, expansion, and growth opportunities in Africa.",
    url: "https://www.btech360online.com/blog",
    siteName: "BTech360 Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BTech360 Solutions Blog | Insights for Business Growth",
    description:
      "Discover expert content and strategies from BTech360 to grow your business in Africa.",
    images: ["https://www.btech360online.com/logo.png"],
  },
};

const BlogsPage = () => {
  return (
    <>
      <JsonLd data={blogBreadcrumbSchema} />
      <BlogPostsClient />
    </>
  );
};

export default BlogsPage;
