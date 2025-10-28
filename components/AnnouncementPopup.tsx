"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const AnnouncementPopup = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShow(true), 2000); // appear after 2s
		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => setShow(false);

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0, y: 60, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 40, scale: 0.95 }}
					transition={{ type: "spring", stiffness: 120, damping: 12 }}
					className='fixed bottom-8 right-8 z-50 bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-2xl shadow-2xl p-5 sm:p-6 max-w-xs w-full flex flex-col gap-3'
				>
					<div className='flex items-start justify-between'>
						<div className='flex items-center gap-2'>
							<Icon
								icon='mdi:lightning-bolt'
								className='text-primary-yellow'
								width={24}
							/>
							<h3 className='font-semibold text-base sm:text-lg'>
								New Product Update ⚡
							</h3>
						</div>
						<button onClick={handleClose}>
							<Icon
								icon='mdi:close'
								width={20}
								className='text-white/70 hover:text-white transition'
							/>
						</button>
					</div>

					<p className='text-sm sm:text-base text-white/90 leading-relaxed'>
						Introducing{" "}
						<span className='text-primary-yellow font-medium'>
							DM360
						</span>{" "}
						— automate your marketing, SEO, and analytics from one
						dashboard.
					</p>

					<Link
						href='/contact'
						className='mt-2 bg-primary-yellow text-bold-blue font-semibold px-4 py-2 rounded-lg text-sm hover:bg-yellow-400 transition-colors text-center'
					>
						Join the Waitlist
					</Link>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AnnouncementPopup;
