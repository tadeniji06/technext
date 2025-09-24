"use client";

import { dash, app, project, sales, it, bizz } from "@/assets";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type Feature = {
	image: StaticImageData | string;
	title: string;
	description: string;
};

const Core = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: "easeOut" },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	const features: Feature[] = [
		{
			image: dash,
			title: "Dashboard & Analytics",
			description:
				"Get real-time insights with customizable dashboards that help you make data-driven decisions.",
		},
		{
			image: app,
			title: "Mobile App & Web Development",
			description:
				"Custom mobile and web applications tailored to your specific business needs and workflows.",
		},
		{
			image: it,
			title: "IT Support & Maintenance",
			description:
				"IT support and maintenance services to keep your systems running smoothly and efficiently.",
		},
		{
			image: bizz,
			title: "Business Process Automation",
			description:
				"Custom mobile and web applications tailored to your specific business needs and workflows.",
		},
		{
			image: project,
			title: "Project & Task Management",
			description:
				"Streamline your operations with our intuitive project management tools designed for African businesses.",
		},
		{
			image: sales,
			title: "Sales & Customer Relationship Management (CRM)",
			description:
				"Build stronger customer connections with our integrated CRM system optimized for local markets.",
		},
	];

	return (
		<div className='py-20 px-4 sm:px-6 lg:px-8' ref={ref}>
			<motion.div
				className='max-w-7xl mx-auto'
				variants={containerVariants}
				initial='hidden'
				animate={isInView ? "visible" : "hidden"}
			>
				{/* Header Section */}
				<motion.div
					className='text-center mb-12'
					variants={headerVariants}
				>
					<h2 className='text-3xl font-bold text-gray-900 mb-4'>
						Our Core Features and Solutions
					</h2>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Explore few out of what we offer, Smart services designed
						to help your businesses run better and grow faster
					</p>
				</motion.div>

				{/* Features Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 bg-white'
							variants={cardVariants}
							whileHover={{
								y: -5,
								boxShadow:
									"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
							}}
						>
							<div className='h-48 overflow-hidden'>
								<Image
									className='w-full h-full object-cover'
									src={feature.image}
									alt={feature.title}
									loading='lazy'
								/>
							</div>

							<div className='p-5'>
								<h3 className='text-lg font-semibold text-gray-900 mb-2'>
									{feature.title}
								</h3>
								<p className='text-gray-600 text-sm'>
									{feature.description}
								</p>
							</div>

							<div className='px-5 pb-5'>
								<motion.button
									className='text-primary-yellow font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm'
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
								>
									Learn more
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-4 w-4'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Core;
