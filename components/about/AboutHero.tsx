"use client";
import { hero, about } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutHero = () => {
	// Animation triggers
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const [imageRef, imageInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div className='relative overflow-hidden w-full'>
			{/* Hero Background */}
			<Image
				src={hero}
				alt='Hero'
				fill
				priority
				style={{ zIndex: -2 }}
			/>
			<div className='text-white flex flex-start items-center gap-2 max-w-6xl w-full'>
				<div>
					<motion.h1
						className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
						initial={{ opacity: 0, y: 30 }}
						animate={
							heroInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<motion.span
							initial={{ opacity: 0 }}
							animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							Driven by Innovation.{" "}
						</motion.span>
						<motion.span
							className='text-primary-yellow whitespace-nowrap'
							initial={{ opacity: 0 }}
							animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
						>
							Designed for Growth.
						</motion.span>
						<br />
						<motion.span
							initial={{ opacity: 0 }}
							animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.6, delay: 1.1 }}
						>
							Built for Africa.
						</motion.span>
					</motion.h1>
				</div>
			</div>

			{/* About Image + Right-Aligned Text Block */}
			<div className='relative' ref={imageRef}>
				<Image
					className='w-full object-cover h-[300px] sm:h-[400px] md:h-[500px]'
					src={about}
					alt='About Tech360'
				/>

				{/* Glassy Overlay */}
				<motion.div
					className='absolute top-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 max-w-full sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] h-full flex items-center'
					initial={{ opacity: 0, x: 50 }}
					animate={
						imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
					}
					transition={{
						duration: 0.7,
						delay: 0.4,
						type: "spring",
						stiffness: 100,
					}}
				>
					<motion.div
						className='bg-bold-blue/70 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg text-white'
						whileHover={{
							boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
							scale: 1.02,
							transition: { duration: 0.3 },
						}}
					>
						<motion.h2
							className='text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4'
							initial={{ opacity: 0, y: 10 }}
							animate={
								imageInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 10 }
							}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							About Tech360
						</motion.h2>
						<motion.p
							className='text-sm sm:text-base leading-relaxed'
							initial={{ opacity: 0 }}
							animate={imageInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.9 }}
						>
							Tech360 (T360) is a leading provider of innovative,
							scalable, and localized enterprise solutions designed to
							empower African SMEs. We deliver intelligent software
							that simplifies operations, boosts productivity, and
							supports businesses at every stage of their growth.
						</motion.p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutHero;
