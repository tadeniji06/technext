import AboutHero from "@/components/about/AboutHero";
import Cause from "@/components/about/Cause";
import OurStand from "@/components/about/OurStand";
import Vision from "@/components/about/Vision";
import Testimonials from "@/components/home/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us | Tech360 Solutions",
	description:
		"Discover Tech360 Solutions – our mission, vision, and values. Learn how our team is driving digital transformation through innovative marketing technology solutions.",
	keywords: [
		"About Tech360",
		"Tech360 Solutions team",
		"Tech360 mission",
		"Tech360 vision",
		"digital marketing solutions",
		"marketing technology company",
		"business growth Nigeria",
		"tech company Lagos",
	],
	openGraph: {
		title: "About Us | Tech360 Solutions",
		description:
			"Discover Tech360 Solutions – our mission, vision, and values.",
		url: "https://www.tech360online.com/about",
		siteName: "Tech360 Solutions",
		images: ["/logo.png"],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Us | Tech360 Solutions",
		description:
			"Discover Tech360 Solutions – our mission, vision, and values.",
		images: ["/logo.png"],
	},
};

const page = () => {
	return (
		<div>
			<AboutHero />
			<Cause />
			<Vision />
			<OurStand />
			<Testimonials />
		</div>
	);
};
export default page;
