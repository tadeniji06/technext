import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
	title: "Tech360 Solutions – Marketing Tech Solutions for Africa",
	description:
		"Tech360 Solutions provides innovative marketing technology tools and services tailored to African businesses. Scale your growth with AI, automation, and digital transformation.",
	keywords: [
		"Tech360 Solutions",
		"marketing technology Africa",
		"AI business tools Nigeria",
		"digital transformation",
		"business automation",
		"enterprise tech Lagos",
	],
	icons: {
		icon: "/logo.png",
	},
	openGraph: {
		title: "Tech360 Solutions – Marketing Tech Solutions for Africa",
		description:
			"Tech360 Solutions provides innovative marketing technology tools and services tailored to African businesses.",
		url: "https://www.tech360online.com",
		siteName: "Tech360 Solutions",
		images: ["/logo.png"],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tech360 Solutions – Marketing Tech Solutions for Africa",
		description:
			"Tech360 Solutions provides innovative marketing technology tools and services tailored to African businesses.",
		images: ["/logo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
