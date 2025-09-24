"use client";
import { hero } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<div className='relative overflow-hidden w-full'>
			<Image
				src={hero}
				alt='Hero Images'
				fill
				priority
				style={{ zIndex: -2 }}
			/>
			<motion.div
				className='flex mx-auto p-8 flex-col gap-6 sm:gap-8 max-w-6xl w-full text-center mb-10'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.div
					className='border mx-auto flex items-center justify-center border-white w-[300px] sm:w-[320px] h-[50px] rounded-2xl backdrop-blur-sm bg-white/10'
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					whileHover={{ scale: 1.05 }}
				>
					<p className='text-white font-medium text-sm sm:text-base'>
						Trusted by 200+ businesses
					</p>
				</motion.div>

				<motion.div
					className='text-white w-full'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6 }}
				>
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mx-auto max-w-5xl'>
						Empowering{" "}
						<span className='text-primary-yellow'>African</span>{" "}
						Businesses with Smart, Scalable{" "}
						<br className='hidden md:block' />
						Solutions. The Future of ERM starts with{" "}
						<span className='text-primary-yellow'>Tech360</span>
					</h1>
				</motion.div>

				<motion.div
					className='text-white text-base sm:text-lg'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.6 }}
				>
					<p className='max-w-3xl mx-auto'>
						Customizable ERM solutions designed to simplify
						operations, drive growth, and{" "}
						<br className='hidden md:block' />
						support the unique needs of African businesses
					</p>
				</motion.div>

				<motion.div
					className='flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center mt-6 sm:mt-8'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.6 }}
				>
					<Link href={"/about"}>
						<motion.button
							className='text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl border border-white hover:bg-white/10 transition-colors font-medium text-base sm:text-lg'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Learn More
						</motion.button>
					</Link>

					<Link href={"/contact"}>
						<motion.button
							className='bg-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors font-medium text-base sm:text-lg'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Get Started
						</motion.button>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
