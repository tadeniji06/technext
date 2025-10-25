"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { dm360 } from "@/assets";

const Products = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
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
				"Plan, schedule, and manage content seamlessly while tracking real-time engagement.",
		},
		{
			icon: "mdi:search-web",
			title: "SEO Dashboard",
			description:
				"Stay ahead of competition with an intuitive dashboard that tracks your keywords, backlinks, and site health.",
		},
	];

	return (
		<section
			ref={ref}
			className='relative bg-gray-50 py-20 md:py-28 overflow-hidden'
		>
			{/* Decorative shapes */}
			<div className='absolute top-0 left-0 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
			<div className='absolute bottom-0 right-0 w-72 h-72 bg-bold-blue/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3'></div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-3xl md:text-5xl font-bold text-bold-blue mb-4'>
						Meet <span className='text-primary-yellow'>DM360</span>
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto text-base md:text-lg'>
						Your all-in-one intelligent automation suite — built to
						simplify, optimize, and scale your business operations
						from day one.
					</p>
				</motion.div>

				{/* Main Product Overview */}
				<motion.div
					className='flex flex-col md:flex-row items-center gap-12 md:gap-16'
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					{/* Product Image */}
					<motion.div
						className='w-full md:w-1/2 flex justify-center'
						initial={{ opacity: 0, x: -40 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<Image
							src={dm360}
							alt='DM360 Platform Preview'
							className='rounded-xl shadow-xl w-full max-w-md'
						/>
					</motion.div>

					{/* Product Description */}
					<motion.div
						className='w-full md:w-1/2 flex flex-col space-y-6'
						initial={{ opacity: 0, x: 40 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<h3 className='text-2xl md:text-3xl font-semibold text-bold-blue'>
							Revolutionize how your business operates.
						</h3>
						<p className='text-gray-700 text-base md:text-lg leading-relaxed'>
							DM360 is a comprehensive business automation platform
							that brings together marketing, operations, and data
							under one sleek, intuitive dashboard. Think less chaos,
							more clarity — powered by automation that works *while
							you sleep*.
						</p>

						<ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
							{features.slice(0, 4).map((feature, idx) => (
								<li
									key={idx}
									className='flex items-start gap-3 text-gray-700 text-sm md:text-base'
								>
									<Icon
										icon='mdi:check-decagram'
										className='text-primary-yellow mt-1'
										width={20}
									/>
									{feature.title}
								</li>
							))}
						</ul>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='mt-6 bg-primary-yellow text-bold-blue px-6 py-3 rounded-md font-semibold w-fit shadow-md hover:shadow-lg transition-all'
						>
							Join the Waitlist
						</motion.button>
					</motion.div>
				</motion.div>

				{/* Features Section */}
				<motion.div
					className='mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
					initial='hidden'
					animate={inView ? "visible" : "hidden"}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.15 },
						},
					}}
				>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300'
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className='w-12 h-12 flex items-center justify-center rounded-full bg-primary-yellow/10 mb-4'>
								<Icon
									icon={feature.icon}
									width={24}
									className='text-bold-blue'
								/>
							</div>
							<h4 className='text-lg font-semibold text-bold-blue mb-2'>
								{feature.title}
							</h4>
							<p className='text-gray-600 text-sm leading-relaxed'>
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
