"use client";
import { BlogPost as BlogPostType } from "@/utils/sanity";
import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";
import {
	CalendarIcon,
	ClockIcon,
	UserIcon,
	ArrowLeftIcon,
	TwitterIcon,
	LinkedinIcon,
	LinkIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

interface BlogPostProps {
	post: BlogPostType;
	relatedPosts: BlogPostType[];
}

const PortableText = ({ content }: { content: any[] }) => {
	const renderBlock = (block: any, index: number) => {
		const { _type, style, children, markDefs = [] } = block;

		if (_type !== "block") return null;

		const renderChildren = (children: any[]) => {
			if (!children || !Array.isArray(children)) return null;
			return children.map((child: any, childIndex: number) => {
				if (child._type === "span") {
					let content = child.text;

					if (child.marks && child.marks.length > 0) {
						child.marks.forEach((mark: string) => {
							const markDef = markDefs.find(
								(def: any) => def._key === mark
							);

							if (markDef && markDef._type === "link") {
								content = (
									<a
										key={childIndex}
										href={markDef.href}
										className="text-primary-yellow font-semibold underline decoration-2 underline-offset-4 decoration-primary-yellow/30 hover:decoration-primary-yellow transition-all"
										target={markDef.blank ? "_blank" : "_self"}
										rel={markDef.blank ? "noopener noreferrer" : ""}
									>
										{content}
									</a>
								);
							} else if (mark === "strong") {
								content = <strong key={childIndex} className="font-bold text-gray-900">{content}</strong>;
							} else if (mark === "em") {
								content = <em key={childIndex} className="italic">{content}</em>;
							}
						});
					}

					return <span key={childIndex}>{content}</span>;
				}
				return child.text;
			});
		};

		switch (style) {
			case "h1":
				return <h1 key={index} className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-14 mb-6 leading-tight tracking-tight">{renderChildren(children)}</h1>;
			case "h2":
				return <h2 key={index} className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-5 leading-tight tracking-tight">{renderChildren(children)}</h2>;
			case "h3":
				return <h3 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 leading-snug">{renderChildren(children)}</h3>;
			case "blockquote":
				return (
					<blockquote key={index} className="border-l-4 border-primary-yellow pl-6 md:pl-8 py-2 my-10 text-xl md:text-2xl font-medium italic text-gray-800 bg-gray-50/50 rounded-r-2xl">
						{renderChildren(children)}
					</blockquote>
				);
			default:
				return <p key={index} className="text-lg md:text-[1.3rem] text-gray-700 leading-[1.85] mb-8 font-normal">{renderChildren(children)}</p>;
		}
	};

	return (
		<div className="w-full">
			{Array.isArray(content) && content.map((block, index) => renderBlock(block, index))}
		</div>
	);
};

const BlogPost = ({ post, relatedPosts }: BlogPostProps) => {
	const [shareUrl, setShareUrl] = useState("");
	const [copySuccess, setCopySuccess] = useState(false);

	useEffect(() => {
		setShareUrl(window.location.href);
	}, []);

	const formatDate = (date: string) => {
		return new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const shareTitle = typeof post.title === 'string' ? post.title : 'Read this article on Tech360';

	const handleShare = (platform: string) => {
		switch (platform) {
			case "twitter":
				window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
				break;
			case "linkedin":
				window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
				break;
		}
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl);
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2000);
		} catch (err) {
			console.error("Failed to copy URL:", err);
		}
	};

	return (
		<div className="min-h-screen bg-[#FDFDFD] selection:bg-primary-yellow selection:text-black font-sans">
			{/* Top Navigation */}
			<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
				<div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
					<Link
						href="/blog"
						className="group flex items-center gap-3 text-sm md:text-base font-semibold text-gray-700 hover:text-black transition-colors duration-300"
					>
						<div className="p-2.5 bg-gray-50 rounded-full group-hover:bg-primary-yellow/20 group-hover:text-primary-yellow transition-colors duration-300">
							<ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
						</div>
						Back to All Articles
					</Link>
					<div className="flex items-center gap-2 md:gap-4">
						<button onClick={() => handleShare('twitter')} className="p-2.5 text-gray-500 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 rounded-full transition-all">
							<TwitterIcon className="w-5 h-5" />
						</button>
						<button onClick={() => handleShare('linkedin')} className="p-2.5 text-gray-500 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 rounded-full transition-all">
							<LinkedinIcon className="w-5 h-5" />
						</button>
						<button onClick={copyToClipboard} className="p-2.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-all relative">
							{copySuccess ? <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-bold bg-black text-white px-3 py-1.5 rounded-lg shadow-lg">Copied!</span> : <LinkIcon className="w-5 h-5" />}
						</button>
					</div>
				</div>
			</nav>

			<main className="pb-24">
				{/* Hero Section */}
				<header className="relative w-full max-w-5xl mx-auto mt-12 md:mt-16 px-4 md:px-8">
					{post.categories && post.categories.length > 0 && (
						<div className="flex flex-wrap gap-3 mb-8">
							{post.categories.map((category) => (
								<span
									key={category._id}
									className="px-4 py-1.5 bg-gray-900 text-white text-xs md:text-sm font-bold tracking-widest uppercase rounded-full shadow-md"
								>
									{typeof category.title === 'string' ? category.title : 'Category'}
								</span>
							))}
						</div>
					)}
					
					<h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-10 w-full max-w-4xl">
						{typeof post.title === 'string' ? post.title : 'Read Article'}
					</h1>

					<div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-500 mb-12">
						{post.author && typeof post.author.name === 'string' && (
							<div className="flex items-center gap-3">
								{post.author.image ? (
									<Image
										src={urlFor(post.author.image).width(56).height(56).url()}
										alt={post.author.name}
										width={56}
										height={56}
										className="rounded-full object-cover shadow-sm ring-2 ring-white"
									/>
								) : (
									<div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
										<UserIcon className="w-5 h-5 text-gray-400" />
									</div>
								)}
								<span className="text-gray-900 font-bold text-lg">{post.author.name}</span>
							</div>
						)}
						<div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden md:block"></div>
						<div className="flex items-center gap-2">
							<CalendarIcon className="w-5 h-5 text-gray-400" />
							{formatDate(post.publishedAt)}
						</div>
						<div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden md:block"></div>
						<div className="flex items-center gap-2 text-primary-yellow font-bold">
							<ClockIcon className="w-5 h-5" />
							{post.estimatedReadingTime} min read
						</div>
					</div>
					
					{post.mainImage && (
						<div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
							<Image
								src={urlFor(post.mainImage).width(1200).height(600).url()}
								alt={typeof post.title === 'string' ? post.title : 'Article Image'}
								fill
								className="object-cover transition-transform duration-1000 group-hover:scale-105"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
						</div>
					)}
				</header>

				{/* Article Content */}
				<article className="relative max-w-[46rem] mx-auto px-4 md:px-0 mt-16 md:mt-24">
					<PortableText content={post.body} />
				</article>

				{/* Related Posts */}
				{relatedPosts.length > 0 && (
					<section className="max-w-7xl mx-auto px-4 md:px-8 mt-32 border-t py-16 border-gray-200 bg-gray-50/50 rounded-3xl">
						<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
							<div>
								<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Keep Reading</h2>
								<p className="text-gray-500 text-lg">Discover more articles and insights.</p>
							</div>
							<Link href="/blog" className="inline-flex items-center gap-2 text-primary-yellow font-bold hover:gap-4 transition-all pb-1 border-b-2 border-primary-yellow">
								View all articles <ArrowLeftIcon className="w-5 h-5 rotate-180" />
							</Link>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{relatedPosts.map((relatedPost) => (
								<Link
									key={relatedPost._id}
									href={`/blog/${relatedPost.slug.current}`}
									className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:border-transparent transition-all duration-500 translate-y-0 hover:-translate-y-2"
								>
									<div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
										{relatedPost.mainImage ? (
											<Image
												src={urlFor(relatedPost.mainImage).width(600).height(400).url()}
												alt={typeof relatedPost.title === 'string' ? relatedPost.title : 'Article Image'}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-105"
											/>
										) : (
											<div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
												<span className="text-white text-xl font-bold tracking-widest">TECH360</span>
											</div>
										)}
									</div>
									<div className="p-6 md:p-8 flex-1 flex flex-col">
										<h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-3 leading-snug group-hover:text-primary-yellow transition-colors duration-300">
											{typeof relatedPost.title === 'string' ? relatedPost.title : 'Read Article'}
										</h3>
										<div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between text-sm text-gray-500 font-medium">
											{relatedPost.author && typeof relatedPost.author.name === 'string' ? (
												<span className="text-gray-900 font-bold">{relatedPost.author.name}</span>
											) : <span />}
											<span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full"><ClockIcon className="w-4 h-4" /> {relatedPost.estimatedReadingTime} min</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</section>
				)}
			</main>
		</div>
	);
};

export default BlogPost;