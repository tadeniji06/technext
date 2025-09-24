import type { Metadata } from "next";
import BlogPostsClient from "./BlogPostsClient";

export const metadata: Metadata = {
  title: "Tech360 Blog | Insights for Marketing & Growth",
  description:
    "Tech360 Blog shares expert insights, data-driven strategies, and tools to help companies start, grow, and expand their businesses across African markets.",
  openGraph: {
    title: "Tech360 Blog | Insights for Business & Marketing Growth",
    description:
      "Stay ahead with Tech360 Solutions insights on consulting, expansion, and growth opportunities in Africa.",
    url: "https://tech360online.com/blog",
    siteName: "Tech360 Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech360 Solutions Blog | Insights for Business Growth",
    description:
      "Discover expert content and strategies from Tech360 to grow your business in Africa.",
    images: ["https://tech360online.com/logo.png"],
  },
};

const BlogsPage = () => {
  return <BlogPostsClient />;
};

export default BlogsPage;