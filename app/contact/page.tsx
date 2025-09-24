import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Tech360 Solutions",
	description:
		"Get in touch with Tech360 Solutions. Reach us via WhatsApp, email, or visit our office in Lagos, Nigeria. We're here to support your business growth.",
	keywords: [
		"Contact Tech360",
		"Tech360 support",
		"Tech360 Lagos office",
		"Tech360 email",
		"Tech360 WhatsApp",
		"business inquiries Nigeria",
	],
	openGraph: {
		title: "Contact Us | Tech360 Solutions",
		description:
			"Reach out to Tech360 via WhatsApp, email, or visit our Lagos office.",
		url: "https://www.tech360online.com/contact",
		siteName: "Tech360 Solutions",
		images: ["/logo.png"],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Us | Tech360 Solutions",
		description:
			"Reach out to Tech360 via WhatsApp, email, or visit our Lagos office.",
		images: ["/logo.png"],
	},
};

const page = () => {
	return (
		<div>
			<Contact />
		</div>
	);
};
export default page;
