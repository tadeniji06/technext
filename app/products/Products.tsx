"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { dm360, hrm } from "@/assets";

const productsData = [
	{
		id: "marketing",
		name: "Marketing360",
		tagline: "Intelligent Marketing Automation",
		description:
			"A comprehensive business automation platform that brings together marketing, operations, and data under one sleek dashboard. Streamline your communication with behavior-driven workflows and real-time insights.",
		url: "https://marketing.biz360prime.com",
		color: "#fcc935",
		icon: "mdi:bullhorn-variant",
		image: dm360,
		features: [
			"Email & SMS Automation",
			"Cross-Platform Ads Manager",
			"AI-Powered Insights",
			"Social Media Scheduler",
		],
		status: "active",
	},
	{
		id: "hrm",
		name: "HRM360",
		tagline: "Modern Human Capital Management",
		description:
			"Empower your workforce with a modern HR solution. From automated payroll and attendance tracking to performance management and recruitment, HRM360 makes people management effortless.",
		url: "https://hr.biz360prime.com",
		color: "#000647",
		icon: "mdi:account-tie",
		image: hrm,
		features: [
			"Automated Payroll",
			"Attendance & Leave Tracking",
			"Performance Analytics",
			"Seamless Recruitment",
		],
		status: "active",
	},
	{
		id: "crm",
		name: "CRM360",
		tagline: "Relational Growth Engine",
		description:
			"Build and nurture lasting customer relationships. Our CRM is being built to provide deep visibility into your sales pipeline, lead scoring, and customer lifecycle management.",
		url: "#",
		color: "#daeefe", // light-blue
		icon: "mdi:handshake",
		features: [
			"Sales Pipeline Management",
			"Smart Lead Scoring",
			"Customer Support Suite",
			"Lifecycle Marketing",
		],
		status: "in-progress",
	},
];

const Products = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<section className='relative min-h-screen bg-white py-24 overflow-hidden'>
			{/* Decorative Elements */}
			<div className='absolute top-0 right-0 w-[800px] h-[800px] bg-primary-yellow/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3'></div>
			<div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-bold-blue/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4'></div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='max-w-5xl mx-auto'>
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl md:text-6xl font-black text-bold-blue mb-6 tracking-tight'>
							Explore Our <span className='text-primary-yellow'>Enterprise Ecosystem</span>
						</h2>
						<p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto'>
							Select a specialized solution from our suite of 360° business tools designed to scale your operations.
						</p>
					</motion.div>

					{/* Custom Dropdown Selector */}
					<div className='relative mb-20 flex justify-center' ref={dropdownRef}>
						<div className="w-full max-w-md">
							<motion.button
								whileTap={{ scale: 0.98 }}
								onClick={() => setIsOpen(!isOpen)}
								className='w-full flex items-center justify-between bg-white border-2 border-bold-blue/10 rounded-2xl p-5 shadow-sm hover:border-primary-yellow transition-all duration-300'
							>
								<div className='flex items-center gap-4'>
									<div className='w-12 h-12 rounded-xl bg-primary-yellow/10 flex items-center justify-center'>
										<Icon icon={selectedProduct.icon} width={28} className='text-bold-blue' />
									</div>
									<div className='text-left'>
										<span className='block text-xs font-bold text-gray-400 uppercase tracking-widest'>Select Product</span>
										<span className='text-xl font-bold text-bold-blue'>{selectedProduct.name}</span>
									</div>
								</div>
								<motion.div
									animate={{ rotate: isOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<Icon icon="mdi:chevron-down" width={28} className='text-gray-400' />
								</motion.div>
							</motion.button>

							<AnimatePresence>
								{isOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10, scale: 0.95 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: 10, scale: 0.95 }}
										className='absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-2xl p-3 grid gap-2 z-50'
									>
										{productsData.map((product) => (
											<button
												key={product.id}
												onClick={() => {
													setSelectedProduct(product);
													setIsOpen(false);
												}}
												className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
													selectedProduct.id === product.id 
													? 'bg-bold-blue text-white' 
													: 'hover:bg-gray-50 text-bold-blue'
												}`}
											>
												<div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
													selectedProduct.id === product.id ? 'bg-white/20' : 'bg-bold-blue/5'
												}`}>
													<Icon icon={product.icon} width={22} />
												</div>
												<div className='text-left flex-1'>
													<p className='font-bold'>{product.name}</p>
													<p className={`text-xs ${selectedProduct.id === product.id ? 'text-white/60' : 'text-gray-400'}`}>
														{product.status === 'in-progress' ? 'Coming Soon' : 'View Enterprise'}
													</p>
												</div>
												{selectedProduct.id === product.id && (
													<Icon icon="mdi:check-circle" width={20} className='text-primary-yellow' />
												)}
											</button>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>

					{/* Product Showcase Card */}
					<AnimatePresence mode='wait'>
						<motion.div
							key={selectedProduct.id}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50/50 rounded-[40px] p-8 md:p-16 border border-gray-100'
						>
							<div className='space-y-8'>
								<div>
									<div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6 ${
										selectedProduct.status === 'in-progress' ? 'bg-light-blue text-bold-blue' : 'bg-primary-yellow/10 text-bold-blue'
									}`}>
										<span className='w-2 h-2 rounded-full bg-current animate-pulse'></span>
										{selectedProduct.status === 'in-progress' ? 'Under Development' : 'Live Ecosystem'}
									</div>
									<h3 className='text-4xl md:text-5xl font-extrabold text-bold-blue mb-4'>
										{selectedProduct.name}
									</h3>
									<p className='text-gray-500 text-xl font-medium leading-tight'>
										{selectedProduct.tagline}
									</p>
								</div>

								<p className='text-gray-600 text-lg leading-relaxed'>
									{selectedProduct.description}
								</p>

								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									{selectedProduct.features.map((feature, idx) => (
										<div key={idx} className='flex items-center gap-3'>
											<div className='w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0'>
												<Icon icon="mdi:check" className='text-primary-yellow' width={14} />
											</div>
											<span className='text-gray-700 font-medium'>{feature}</span>
										</div>
									))}
								</div>

								<div className='pt-8'>
									{selectedProduct.status === 'in-progress' ? (
										<Link href="/contact">
											<motion.button
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className='bg-white text-bold-blue border-2 border-bold-blue/10 px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all'
											>
												Join the Waitlist
												<Icon icon="mdi:clock-outline" width={24} className="text-primary-yellow" />
											</motion.button>
										</Link>
									) : (
										<Link 
											href={selectedProduct.url} 
											target="_blank"
											className='inline-flex'
										>
											<motion.button
												whileHover={{ scale: 1.05, x: 5 }}
												whileTap={{ scale: 0.95 }}
												className='bg-bold-blue text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-bold-blue/20 hover:bg-bold-blue/90 transition-all flex items-center gap-3'
											>
												Launch {selectedProduct.name}
												<Icon icon="mdi:rocket-launch" width={24} className='text-primary-yellow' />
											</motion.button>
										</Link>
									)}
								</div>
							</div>

							<div className='relative'>
								<div className='absolute inset-0 bg-primary-yellow/20 rounded-full blur-[100px] scale-75'></div>
								<motion.div
									initial={{ scale: 0.9, rotate: -2 }}
									animate={{ scale: 1, rotate: 0 }}
									transition={{ duration: 0.8 }}
									className='relative z-10'
								>
									<div className='bg-white p-4 rounded-[32px] shadow-2xl border border-gray-100 min-h-[300px] flex items-center justify-center overflow-hidden relative'>
										{selectedProduct.image ? (
											<Image
												src={selectedProduct.image}
												alt={selectedProduct.name}
												className='rounded-[24px] w-full h-auto object-cover'
											/>
										) : (
											<div className="text-center py-12 px-8">
												<motion.div
													initial={{ opacity: 0, scale: 0.8 }}
													animate={{ opacity: 1, scale: 1 }}
													className="w-32 h-32 bg-bold-blue/5 rounded-full flex items-center justify-center mx-auto mb-8"
												>
													<Icon icon={selectedProduct.icon} width={80} className="text-bold-blue/10" />
												</motion.div>
												<h4 className="text-3xl font-black text-bold-blue/20 uppercase tracking-tighter mb-2">
													{selectedProduct.name}
												</h4>
												<div className="inline-block px-4 py-1 bg-primary-yellow/10 text-primary-yellow text-xs font-bold rounded-full uppercase tracking-widest">
													Design in Progress
												</div>
											</div>
										)}
									</div>
									
									{/* Floating Stats or Badges */}
									<motion.div
										animate={{ y: [0, -10, 0] }}
										transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
										className='absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3'
									>
										<div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
											<Icon icon="mdi:trending-up" className='text-green-600' width={24} />
										</div>
										<div>
											<p className='text-xs text-gray-400 font-bold'>Efficiency</p>
											<p className='text-sm font-black text-bold-blue'>+40% Increase</p>
										</div>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Products;
