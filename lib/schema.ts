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
  name: "BTech360",
  alternateName: "Tech360 Solutions",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/logo.png`,
    width: 250,
    height: 60,
  },
  description:
    "BTech360 is a marketing technology platform providing AI-powered CRM, ERP, automation, dashboards, and custom app development tailored for African businesses.",
  foundingDate: "2020",
  areaServed: {
    "@type": "GeoShape",
    description: "Africa and emerging markets",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/btech360",
    "https://www.linkedin.com/company/btech360",
    "https://twitter.com/btech360",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BTech360",
  url: BASE_URL,
  description:
    "Marketing technology solutions for African businesses — CRM, ERP, AI automation, and more.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "BTech360",
    url: BASE_URL,
  },
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
  "@type": "Product",
  name: "BTech360 Platform",
  description:
    "All-in-one marketing technology platform for African businesses.",
  brand: {
    "@type": "Brand",
    name: "BTech360",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Verified Client" },
      reviewBody:
        "BTech360 helped us break down silos across departments. Marketing, sales, and operations are now fully connected. Communication improved and decision-making is faster.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Fast-Growing Startup" },
      reviewBody:
        "BTech360 gave us the structure and clarity we were missing. From task management to CRM, it scaled with us every step of the way.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Enterprise Client" },
      reviewBody:
        "The level of customer support from BTech360 is exceptional. Their team partners with you to ensure your success. The platform customization is outstanding.",
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
  "@type": "LocalBusiness",
  name: "BTech360",
  image: `${BASE_URL}/images/logo.png`,
  url: BASE_URL,
  description:
    "Marketing technology solutions provider for African businesses, offering AI automation, CRM, ERP, and custom app development.",
  areaServed: "Africa",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/btech360",
    "https://www.linkedin.com/company/btech360",
  ],
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
