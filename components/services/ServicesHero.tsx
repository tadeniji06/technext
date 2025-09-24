"use client";
import { hero } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ServicesHero = () => {
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div className='relative text-white overflow-hidden w-full min-h-[90vh] flex items-center'>
			{/* Background image */}
			<Image
				src={hero}
				alt='hero'
				priority
				fill
				className='object-cover -z-10'
			/>

			{/* Content */}
			<div
				ref={heroRef}
				className='ml-4 sm:ml-8 md:ml-16 lg:ml-24 pr-4 sm:pr-8 md:pr-16 mt-5 max-w-6xl'
			>
				<motion.h1
					className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-left'
					initial={{ opacity: 0, y: 20 }}
					animate={heroInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Empowering Your Business with{" "}
					<br className='hidden md:block' />
					Smart Digital Tools
				</motion.h1>

				<motion.h2
					className='text-primary-yellow text-lg sm:text-xl md:text-2xl font-medium mb-4 text-left md:max-w-3xl'
					initial={{ opacity: 0, x: -20 }}
					animate={heroInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					At B360, our service philosophy is rooted in simplicity,
					adaptability, and value.
				</motion.h2>

				<motion.p
					className='text-gray-200 mb-8 leading-relaxed text-left md:max-w-4xl lg:max-w-5xl'
					initial={{ opacity: 0 }}
					animate={heroInView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					We believe technology should work for businesses—not
					complicate them. That's why we design modular, user-friendly
					solutions tailored to the unique needs of each client.
					Whether you're a startup or a growing enterprise, our goal
					is to empower you with tools that streamline operations,
					support smart decision-making, and drive long-term success.
				</motion.p>

				<motion.div
					className='text-left'
					initial={{ opacity: 0, y: 20 }}
					animate={heroInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<motion.button
						className='bg-white mb-5 text-bold-blue px-6 py-3 rounded-lg font-medium hover:bg-light-blue transition-colors duration-300 shadow-lg'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
					>
						Request A Quote
					</motion.button>
				</motion.div>
			</div>

			{/* Accent line animation */}
			<motion.div
				className='absolute top-1/4 left-0 w-1 h-0 bg-primary-yellow'
				animate={heroInView ? { height: 96 } : { height: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			/>
		</div>
	);
};

export default ServicesHero;
