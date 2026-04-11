"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { dm360 } from "@/assets";
import Link from "next/link";

const Products = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const features = [
		{
			icon: "mdi:email-outline",
			title: "Email Automation",
			description:
				"Streamline your customer communication with intelligent, behavior-driven email workflows.",
		},
		{
			icon: "mdi:chart-line",
			title: "Analytics & Reporting",
			description:
				"Make data-driven decisions with comprehensive insights into your campaigns, sales, and audience engagement.",
		},
		{
			icon: "mdi:bullhorn-outline",
			title: "Ads Management",
			description:
				"Launch, manage, and optimize your ad campaigns across multiple platforms — all in one place.",
		},
		{
			icon: "mdi:account-group-outline",
			title: "Social Media Management",
			description:
				"Plan, schedule, and manage content seamlessly while tracking real-time engagement and growth metrics.",
		},
		{
			icon: "mdi:robot-outline",
			title: "AI-Powered Insights",
			description:
				"Leverage advanced machine learning algorithms to predict customer behavior and optimize your marketing funnels.",
		},
		{
			icon: "mdi:cash-fast",
			title: "Automated Billing",
			description:
				"Handle recurring memberships, send smart invoices, and manage payment collections automatically without human intervention.",
		},
		{
			icon: "mdi:shield-check-outline",
			title: "Enterprise-Grade Security",
			description:
				"Your business data is protected by industry-leading encryption and robust access control measures.",
		},
	];

	return (
		<section
			ref={ref}
			className='relative bg-gradient-to-b from-gray-50 to-white py-24 md:py-32 overflow-hidden'
		>
			{/* Decorative shapes */}
			<div className='absolute top-0 left-0 w-[500px] h-[500px] bg-primary-yellow/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-70'></div>
			<div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-bold-blue/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 opacity-70'></div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<motion.div
					className='text-center mb-20'
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="inline-block px-4 py-1.5 bg-bold-blue/5 border border-bold-blue/10 rounded-full text-bold-blue font-semibold text-sm mb-6 uppercase tracking-wider">
						Flagship Product
					</div>
					<h2 className='text-4xl md:text-6xl font-extrabold text-bold-blue mb-6 tracking-tight'>
						Meet <span className='text-primary-yellow drop-shadow-sm'>Marketing360</span>
					</h2>
					<p className='text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed'>
						Your all-in-one intelligent automation suite — built to
						simplify, optimize, and scale your business operations
						from day one securely and effectively.
					</p>
				</motion.div>

				{/* Main Product Overview */}
				<motion.div
					className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24'
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{/* Product Image */}
					<motion.div
						className='w-full lg:w-1/2 flex justify-center relative'
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
					>
						<div className="absolute inset-0 rounded-2xl transform -rotate-3 scale-105 blur-lg mix-blend-multiply"></div>
						<Image
							src={dm360}
							alt='Marketing360 Platform Preview Dashboard'
							className='rounded-2xl shadow-2xl relative z-10 w-full max-w-xl border border-gray-100/50'
							priority
						/>
					</motion.div>

					{/* Product Description */}
					<motion.div
						className='w-full lg:w-1/2 flex flex-col space-y-8'
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
					>
						<div>
							<h3 className='text-3xl md:text-4xl font-bold text-bold-blue mb-4 leading-tight'>
								Revolutionize how your business operates.
							</h3>
							<p className='text-gray-600 text-lg md:text-xl leading-relaxed border-l-4 border-primary-yellow pl-4'>
								Marketing360 is a comprehensive business automation platform
								that brings together marketing, operations, and data
								under one sleek, intuitive dashboard. Think less chaos,
								more clarity — powered by automation that works while
								you sleep.
							</p>
						</div>

						<ul className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 bg-white/50 p-6 rounded-xl border border-gray-100'>
							{features.slice(0, 6).map((feature, idx) => (
								<li
									key={idx}
									className='flex items-start gap-3 text-gray-800 font-medium text-base'
								>
									<Icon
										icon='mdi:check-circle'
										className='text-primary-yellow mt-0.5 flex-shrink-0'
										width={22}
									/>
									{feature.title}
								</li>
							))}
						</ul>

						<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
							<Link href={'/contact'} className="w-full sm:w-auto">
								<motion.button
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className='w-full sm:w-auto bg-primary-yellow text-bold-blue px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2'
								>
									Join the Waitlist
									<Icon icon="mdi:arrow-right" width={24} />
								</motion.button>
							</Link>

							<Link href='https://biz360prime.com' target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
								<motion.button
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className='w-full sm:w-auto bg-white text-bold-blue border-2 border-bold-blue/10 hover:border-bold-blue/30 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2'
								>
									View All Products
									<Icon icon="mdi:open-in-new" width={20} />
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</motion.div>

				{/* Extended Features Grid */}
				<div className="text-center mb-12">
					<h3 className="text-2xl md:text-3xl font-bold text-bold-blue">Everything you need to grow</h3>
				</div>
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
					initial='hidden'
					animate={inView ? "visible" : "hidden"}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.1 },
						},
					}}
				>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 hover:border-primary-yellow/30 transition-all duration-500 hover:-translate-y-2'
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className='w-14 h-14 flex items-center justify-center rounded-xl bg-bold-blue/5 group-hover:bg-primary-yellow/10 group-hover:scale-110 transition-all duration-300 mb-6'>
								<Icon
									icon={feature.icon}
									width={28}
									className='text-bold-blue group-hover:text-primary-yellow transition-colors'
								/>
							</div>
							<h4 className='text-xl font-bold text-bold-blue mb-3 group-hover:text-primary-yellow transition-colors'>
								{feature.title}
							</h4>
							<p className='text-gray-600 text-base leading-relaxed'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Products;
