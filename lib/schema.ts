// lib/schema.ts
// Centralized JSON-LD structured data for BTech360.
// Render these through the <JsonLd /> component.

const BASE_URL = "https://www.btech360online.com";

// ---------------------------------------------------------------------------
// GLOBAL — render in app/layout.tsx on every page
// ---------------------------------------------------------------------------

export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${BASE_URL}/#organization`,
	name: "BTech360 Solutions",
	alternateName: "B360",
	legalName: "BTech (B360)",
	url: BASE_URL,
	logo: {
		"@type": "ImageObject",
		url: `${BASE_URL}/logo.png`,
	},
	description:
		"BTech360 (B360) is a software solutions corporation focused on developing modular, industry-specific enterprise resource management (ERM) systems for African businesses.",
	foundingLocation: {
		"@type": "Place",
		address: "Lagos, Nigeria",
	},
	address: {
		"@type": "PostalAddress",
		streetAddress: "426a Damilola Fashade Street, Omole Phase 1",
		addressLocality: "Lagos",
		addressCountry: "NG",
	},
	contactPoint: [
		{
			"@type": "ContactPoint",
			email: "tech@theb360.com",
			contactType: "customer support",
			areaServed: "NG",
			availableLanguage: ["English"],
		},
		{
			"@type": "ContactPoint",
			contactType: "sales",
			url: "https://wa.me/2348064968725",
			areaServed: "Africa",
			availableLanguage: ["English"],
		},
	],
	sameAs: [
		"https://www.linkedin.com/company/btech360",
		"https://www.facebook.com/btech360",
		"https://twitter.com/btech360",
		"https://www.instagram.com/btech360",
	],
};

export const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${BASE_URL}/#website`,
	url: BASE_URL,
	name: "BTech360 Solutions",
	publisher: {
		"@id": `${BASE_URL}/#organization`,
	},
	inLanguage: "en-US",
};

export const siteLinksSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "BTech360",
	url: BASE_URL,
	potentialAction: [
		{
			"@type": "ViewAction",
			name: "Services",
			target: `${BASE_URL}/services`,
		},
		{
			"@type": "ViewAction",
			name: "About Us",
			target: `${BASE_URL}/about`,
		},
		{
			"@type": "ViewAction",
			name: "Contact",
			target: `${BASE_URL}/contact`,
		},
		{
			"@type": "ViewAction",
			name: "Pricing",
			target: `${BASE_URL}/pricing`,
		},
	],
};

// ---------------------------------------------------------------------------
// HOMEPAGE — render in app/page.tsx
// ---------------------------------------------------------------------------

export const homepageSchema = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": `${BASE_URL}/#webpage`,
	url: BASE_URL,
	name: "BTech360 — Marketing Tech Solutions for Africa",
	description:
		"Scale your African business with AI, automation, and digital transformation tools from BTech360.",
	isPartOf: {
		"@type": "WebSite",
		url: BASE_URL,
	},
	about: {
		"@type": "Organization",
		name: "BTech360",
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: BASE_URL,
			},
		],
	},
};

export const softwareApplicationSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "BTech360 Platform",
	applicationCategory: "BusinessApplication",
	operatingSystem: "Web, iOS, Android",
	description:
		"An all-in-one marketing technology platform for African businesses featuring CRM, ERP, AI automation, dashboards, gamification, and custom app development.",
	url: BASE_URL,
	offers: {
		"@type": "Offer",
		priceCurrency: "USD",
		availability: "https://schema.org/InStock",
		seller: {
			"@type": "Organization",
			name: "BTech360",
		},
	},
	featureList: [
		"AI-powered automation",
		"CRM (Customer Relationship Management)",
		"ERP (Enterprise Resource Planning)",
		"Real-time customizable dashboards",
		"Gamification & productivity tools",
		"Custom mobile and web app development",
		"IT support and maintenance",
		"Local currency and compliance support",
	],
	screenshot: `${BASE_URL}/images/platform-screenshot.png`,
};

export const reviewSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${BASE_URL}/#organization`,
	review: [
		{
			"@type": "Review",
			reviewBody:
				"Before BTech360, we juggled multiple tools just to stay on top of our operations. Now, everything from inventory tracking to sales analytics is centralized and automated.",
			author: { "@type": "Person", name: "Adebola M." },
			itemReviewed: { "@id": `${BASE_URL}/#organization` },
		},
		{
			"@type": "Review",
			reviewBody:
				"BTech360 gave us the structure and clarity we were missing. From task management to CRM, BTech360 scaled with us every step of the way.",
			author: { "@type": "Person", name: "Ifeanyi O.", jobTitle: "COO" },
			itemReviewed: { "@id": `${BASE_URL}/#organization` },
		},
		{
			"@type": "Review",
			reviewBody:
				"The level of customer support from BTech360 is exceptional. The platform's flexibility allowed us to customize workflows that perfectly match our unique business processes.",
			author: { "@type": "Person", name: "John E.A.", jobTitle: "CTO" },
			itemReviewed: { "@id": `${BASE_URL}/#organization` },
		},
	],
};

export const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "What is BTech360?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "BTech360 is a marketing technology platform providing AI-powered tools, CRM, ERP, automation, and custom app development services tailored for African businesses.",
			},
		},
		{
			"@type": "Question",
			name: "What services does BTech360 offer?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "BTech360 offers AI-powered automation, CRM, ERP, real-time dashboards, gamification tools, custom mobile and web app development, and IT support and maintenance.",
			},
		},
		{
			"@type": "Question",
			name: "Is BTech360 suitable for African businesses?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes. BTech360 is specifically designed for African businesses, supporting local currency, compliance rules, and business workflows for a perfect regional fit.",
			},
		},
		{
			"@type": "Question",
			name: "How does BTech360 use AI?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "BTech360 uses AI to automate tasks, improve business decisions, and drive operational efficiency across its platform modules including CRM, ERP, and analytics.",
			},
		},
		{
			"@type": "Question",
			name: "Does BTech360 offer custom app development?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes. BTech360 builds custom mobile and web applications tailored to your specific business needs and workflows.",
			},
		},
	],
};

// ---------------------------------------------------------------------------
// SERVICES PAGE — render in app/services/page.tsx
// ---------------------------------------------------------------------------

export const servicesItemListSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "BTech360 Services",
	description:
		"Full suite of marketing technology services offered by BTech360.",
	url: `${BASE_URL}/services`,
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			item: {
				"@type": "Service",
				name: "AI-Powered Automation",
				description:
					"Automate tasks, improve decisions, and drive efficiency with AI-powered features.",
				provider: { "@type": "Organization", name: "BTech360" },
				serviceType: "Business Automation",
			},
		},
		{
			"@type": "ListItem",
			position: 2,
			item: {
				"@type": "Service",
				name: "CRM Solutions",
				description:
					"Customer relationship management tools tailored for African business workflows.",
				provider: { "@type": "Organization", name: "BTech360" },
				serviceType: "CRM Software",
			},
		},
		{
			"@type": "ListItem",
			position: 3,
			item: {
				"@type": "Service",
				name: "ERP System",
				description:
					"Enterprise resource planning to centralize operations, inventory, and reporting.",
				provider: { "@type": "Organization", name: "BTech360" },
				serviceType: "Enterprise Software",
			},
		},
		{
			"@type": "ListItem",
			position: 4,
			item: {
				"@type": "Service",
				name: "Custom Mobile & Web App Development",
				description:
					"Bespoke mobile and web applications tailored to specific business needs and workflows.",
				provider: { "@type": "Organization", name: "BTech360" },
				serviceType: "Software Development",
			},
		},
		{
			"@type": "ListItem",
			position: 5,
			item: {
				"@type": "Service",
				name: "Customizable Dashboards & Analytics",
				description:
					"Real-time data dashboards providing actionable insights for data-driven decisions.",
				provider: { "@type": "Organization", name: "BTech360" },
				serviceType: "Business Intelligence",
			},
		},
		{
			"@type": "ListItem",
			position: 6,
			item: {
				"@type": "Service",
				name: "IT Support & Maintenance",
				description:
					"Ongoing IT support and system maintenance to keep operations running smoothly.",
				provider: { "@type": "Organization", name: "BTech360" },
				serviceType: "IT Support",
			},
		},
		{
			"@type": "ListItem",
			position: 7,
			item: {
				"@type": "Service",
				name: "Gamification & Productivity Tools",
				description:
					"Game-like features that motivate users and keep teams engaged and productive.",
				provider: { "@type": "Organization", name: "BTech360" },
				serviceType: "Productivity Software",
			},
		},
	],
};

export const servicesBreadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: BASE_URL,
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Services",
			item: `${BASE_URL}/services`,
		},
	],
};

// ---------------------------------------------------------------------------
// ABOUT / CONTACT PAGES
// ---------------------------------------------------------------------------

export const aboutBreadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: BASE_URL,
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "About",
			item: `${BASE_URL}/about`,
		},
	],
};

export const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": `${BASE_URL}/#localbusiness`,
	name: "BTech360 Solutions",
	image: `${BASE_URL}/logo.png`,
	url: BASE_URL,
	email: "tech@theb360.com",
	priceRange: "$$",
	address: {
		"@type": "PostalAddress",
		streetAddress: "426a Damilola Fashade Street, Omole Phase 1",
		addressLocality: "Lagos",
		addressRegion: "Lagos State",
		addressCountry: "NG",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: "6.5510",
		longitude: "3.3655",
	},
	areaServed: {
		"@type": "Continent",
		name: "Africa",
	},
	parentOrganization: {
		"@id": `${BASE_URL}/#organization`,
	},
};

// ---------------------------------------------------------------------------
// GETTING STARTED / HOW IT WORKS PAGE
// Note: Google deprecated the HowTo rich result. Still valid structured data,
// but it will not render as a rich result in search.
// ---------------------------------------------------------------------------

export const howToSchema = {
	"@context": "https://schema.org",
	"@type": "HowTo",
	name: "How to Get Started with BTech360",
	description:
		"A step-by-step guide to onboarding your business onto the BTech360 platform.",
	step: [
		{
			"@type": "HowToStep",
			position: 1,
			name: "Schedule a Demo",
			text: "Visit btech360online.com and book a free consultation or live platform demo with the BTech360 team.",
		},
		{
			"@type": "HowToStep",
			position: 2,
			name: "Choose Your Plan",
			text: "Select the modules and services that match your business needs — from CRM to full ERP and automation.",
		},
		{
			"@type": "HowToStep",
			position: 3,
			name: "Onboarding & Setup",
			text: "The BTech360 team configures the platform to your workflows, local currency, and compliance requirements.",
		},
		{
			"@type": "HowToStep",
			position: 4,
			name: "Team Training",
			text: "Your staff receives training on using the platform's dashboards, automation tools, and collaboration features.",
		},
		{
			"@type": "HowToStep",
			position: 5,
			name: "Go Live & Scale",
			text: "Launch your optimized operations and scale with ongoing IT support and new feature rollouts.",
		},
	],
};

export const blogBreadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: BASE_URL,
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Blog",
			item: `${BASE_URL}/blog`,
		},
	],
};

// ---------------------------------------------------------------------------
// PRODUCTS PAGE
// ---------------------------------------------------------------------------

export const productsItemListSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "BTech360 Enterprise Ecosystem",
	description:
		"A suite of 360° business applications by BTech360 — marketing automation, HR management, CRM, and vertical ERP for African businesses.",
	url: `${BASE_URL}/products`,
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			item: {
				"@type": "SoftwareApplication",
				name: "Marketing360",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "https://marketing.biz360prime.com",
				description:
					"Intelligent marketing automation bringing marketing, operations, and data into one dashboard with behavior-driven workflows and real-time insights.",
				featureList: [
					"Email & SMS Automation",
					"Cross-Platform Ads Manager",
					"AI-Powered Insights",
					"Social Media Scheduler",
				],
				provider: { "@type": "Organization", name: "BTech360" },
			},
		},
		{
			"@type": "ListItem",
			position: 2,
			item: {
				"@type": "SoftwareApplication",
				name: "HRM360",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "https://hr.biz360prime.com",
				description:
					"Modern human capital management covering automated payroll, attendance tracking, performance management, and recruitment.",
				featureList: [
					"Automated Payroll",
					"Attendance & Leave Tracking",
					"Performance Analytics",
					"Seamless Recruitment",
				],
				provider: { "@type": "Organization", name: "BTech360" },
			},
		},
		{
			"@type": "ListItem",
			position: 3,
			item: {
				"@type": "SoftwareApplication",
				name: "CRM360",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				description:
					"A relational growth engine in development, providing sales pipeline visibility, lead scoring, and customer lifecycle management.",
				featureList: [
					"Sales Pipeline Management",
					"Smart Lead Scoring",
					"Customer Support Suite",
					"Lifecycle Marketing",
				],
				provider: { "@type": "Organization", name: "BTech360" },
			},
		},
		{
			"@type": "ListItem",
			position: 4,
			item: {
				"@type": "SoftwareApplication",
				name: "Biz360Prime",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "https://biz360prime.com",
				description:
					"Vertical ERP with industry-specific modules for financial services, retail, manufacturing, services, and transport & logistics — with compliance built in.",
				featureList: [
					"Industry-Specific Modules",
					"End-to-End Workflow Automation",
					"Regulatory Compliance Built-In",
					"Unified Reporting Dashboard",
				],
				provider: { "@type": "Organization", name: "BTech360" },
			},
		},
	],
};

export const productsBreadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: BASE_URL,
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Products",
			item: `${BASE_URL}/products`,
		},
	],
};
