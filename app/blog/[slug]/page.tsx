import { getBlogPost, getRelatedPosts, urlFor } from "@/utils/sanity";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json_ld";
import BlogPost from "./BlogPost";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await getBlogPost(slug);

	if (!post) {
		return {
			title: "Post Not Found | Tech360 Blog",
			description: "This blog post could not be found on T360.",
		};
	}

	const description =
		post.body?.[0]?.children?.[0]?.text?.slice(0, 160) ||
		`Read ${post.title} on T360 Blog and learn strategies for business growth.`;

	return {
		title: `${post.title} | Tech360 Blog`,
		description,
		openGraph: {
			title: post.title,
			description,
			url: `https://btech360online.com/blog/${slug}`,
			images: post.mainImage
				? [
						{
							url: urlFor(post.mainImage).url(),
							width: 1200,
							height: 630,
							alt: post.title,
						},
					]
				: [],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description,
			images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
		},
	};
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
	const { slug } = await params;
	const post = await getBlogPost(slug);

	if (!post) notFound();

	const relatedPosts = await getRelatedPosts(post.categories || [], post._id);
	const articleDescription =
		post.body?.[0]?.children?.[0]?.text?.slice(0, 200) ||
		`Read ${post.title} on BTech360 Solutions.`;

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: articleDescription,
		image: post.mainImage
			? urlFor(post.mainImage).url()
			: "https://www.btech360online.com/logo.png",
		author: {
			"@type": "Organization",
			name: "BTech360 Solutions",
		},
		publisher: { "@id": "https://www.btech360online.com/#organization" },
		datePublished: post.publishedAt,
		dateModified: post.publishedAt,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://www.btech360online.com/blog/${slug}`,
		},
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://www.btech360online.com/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Blog",
				item: "https://www.btech360online.com/blog",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: post.title,
				item: `https://www.btech360online.com/blog/${slug}`,
			},
		],
	};

	return (
		<>
			<JsonLd data={[articleSchema, breadcrumbSchema]} />
			<BlogPost post={post} relatedPosts={relatedPosts} />
		</>
	);
};

export default BlogPostPage;
