import Core from "@/components/home/Core";
import OurDiff from "@/components/services/OurDiff";
import ServiceOver from "@/components/services/ServiceOver";
import ServicesHero from "@/components/services/ServicesHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Services | Tech360 Solutions",
	description:
		"Explore Tech360 Solutions services – scalable marketing technology, AI-driven tools, and tailored strategies that help businesses thrive in Africa and beyond.",
	keywords: [
		"Tech360 services",
		"marketing technology",
		"AI business tools",
		"digital transformation Nigeria",
		"scalable business solutions",
		"Tech360 consulting",
		"enterprise marketing solutions",
	],
	openGraph: {
		title: "Our Services | Tech360 Solutions",
		description:
			"Explore Tech360 Solutions services – scalable marketing technology, AI-driven tools, and tailored strategies.",
		url: "https://www.tech360online.com/services",
		siteName: "Tech360 Solutions",
		images: ["/logo.png"],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Our Services | Tech360 Solutions",
		description:
			"Explore Tech360 Solutions services – scalable marketing technology, AI-driven tools, and tailored strategies.",
		images: ["/logo.png"],
	},
};

const page = () => {
	return (
		<div>
			<ServicesHero />
			<ServiceOver />
			<Core />
			<OurDiff />
		</div>
	);
};
export default page;
