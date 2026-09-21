"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

export interface ProductServiceBannerProps {
  /** Array of image URLs to change every 3 seconds */
  imageUrls?: string[];
  /** Custom action button text */
  buttonText?: string;
  className?: string;
}

const DEFAULT_BANNER_IMAGES = [
  "/banners/email.png",
  "/banners/digital.png",
  "/banners/performance.png",
];

export default function ProductServiceBanner({
  imageUrls = DEFAULT_BANNER_IMAGES,
  buttonText = "Request Service",
  className = "",
}: ProductServiceBannerProps) {
  const images = imageUrls.length > 0 ? imageUrls : DEFAULT_BANNER_IMAGES;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Change banner image after 3 seconds using setTimeout
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1200);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSubmittedSuccess(false);
  };

  return (
    <section
      className={`w-full py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 ${className}`}
    >
      {/* Banner container */}
      <div className="relative w-full rounded-2xl h-[80px] sm:h-[80px] lg:h-[160px] overflow-hidden shadow-lg border border-gray-200 group">
        {/* Banner Images Carousel */}
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex] + currentIndex}
            src={images[currentIndex]}
            alt={`M360 Product & Service Banner ${currentIndex + 1}`}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full lg:object-contain object-fit "
          />
        </AnimatePresence>

        {/* Soft Minimal Overlay for button contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none flex items-center justify-center px-6 sm:px-10">
          {/* Action Button */}
          <button
            onClick={handleOpenModal}
            className="absolute md:right-3 md:bottom-3 right-2 bottom-3 z-10 pointer-events-auto bg-[#ff5100] hover:bg-[#d94500] text-white md:font-bold font-medium px-2 py-1.5 sm:px-4 sm:py-2.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span className="text-xs  md:text-sm">{buttonText}</span>
            <Icon icon="lucide:arrow-right" className="md:w-4 w-3 h-3 md:h-4" />
          </button>
        </div>

        {/* Clickable slide indicators (dots) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {images.map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "md:w-6 w-4 bg-[#ff5100]"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* GLASSMORPHIC LEAD GENERATION MODAL FORM */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xl overflow-y-auto transition-all">
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#061b4b]/70 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden text-white my-8 z-10"
            >
              {/* Decorative Subtle Glowing Orbs inside Modal */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#ff5100]/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#fcc935]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Header Close */}
              <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff5100] to-orange-400 flex items-center justify-center text-white font-black text-xs shadow-md shadow-[#ff5100]/30">
                    M360
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      Request Service Consultation
                    </h3>
                    <p className="text-[11px] text-gray-300">
                      Sales Representative Outreach
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer border border-white/10"
                  aria-label="Close modal"
                >
                  <Icon icon="lucide:x" className="w-4 h-4" />
                </button>
              </div>

              <div className="relative z-10 p-6 sm:p-7">
                {submittedSuccess ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center mx-auto mb-4"
                    >
                      <Icon
                        icon="lucide:check"
                        className="w-9 h-9 stroke-[3]"
                      />
                    </motion.div>
                    <h4 className="text-2xl font-extrabold text-white mb-2">
                      Request Submitted!
                    </h4>
                    <p className="text-gray-200 text-xs sm:text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                      Thank you,{" "}
                      <span className="text-white font-bold">
                        {formData.name}
                      </span>
                      . A sales representative will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-white/15 hover:bg-white/25 text-white font-semibold px-7 py-2.5 rounded-full text-xs sm:text-sm transition-all border border-white/20 shadow-md cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Glassmorphic Callout Banner */}
                    <div className="relative overflow-hidden mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#ff5100]/20 to-amber-500/10 border border-[#ff5100]/40 backdrop-blur-md">
                      <div className="flex items-start gap-3">
                        <Icon
                          icon="lucide:sparkles"
                          className="w-5 h-5 text-[#ff5100] flex-shrink-0 mt-0.5"
                        />
                        <p className="text-xs sm:text-sm text-gray-100 leading-relaxed font-medium">
                          If you need the service(s), kindly fill the below form
                          and a sales representative will reachout to you,
                          accordingly.
                        </p>
                      </div>
                    </div>

                    <form
                      onSubmit={handleFormSubmit}
                      className="space-y-4 text-left"
                    >
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="form-name"
                          className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5"
                        >
                          Name <span className="text-[#ff5100]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="form-name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Damilola Alex"
                            className="w-full bg-white/10 border border-white/15 focus:border-[#ff5100] focus:bg-white/15 text-white placeholder-gray-400 text-xs sm:text-sm rounded-xl px-4 py-2.5 pl-10 transition-all outline-none focus:ring-2 focus:ring-[#ff5100]/40 shadow-inner"
                          />
                          <Icon
                            icon="lucide:user"
                            className="w-4 h-4 text-gray-300 absolute left-3.5 top-3"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="form-email"
                          className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5"
                        >
                          Email <span className="text-[#ff5100]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="form-email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@company.com"
                            className="w-full bg-white/10 border border-white/15 focus:border-[#ff5100] focus:bg-white/15 text-white placeholder-gray-400 text-xs sm:text-sm rounded-xl px-4 py-2.5 pl-10 transition-all outline-none focus:ring-2 focus:ring-[#ff5100]/40 shadow-inner"
                          />
                          <Icon
                            icon="lucide:mail"
                            className="w-4 h-4 text-gray-300 absolute left-3.5 top-3"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="form-phone"
                          className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5"
                        >
                          Phone <span className="text-[#ff5100]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="form-phone"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+234 800 000 0000"
                            className="w-full bg-white/10 border border-white/15 focus:border-[#ff5100] focus:bg-white/15 text-white placeholder-gray-400 text-xs sm:text-sm rounded-xl px-4 py-2.5 pl-10 transition-all outline-none focus:ring-2 focus:ring-[#ff5100]/40 shadow-inner"
                          />
                          <Icon
                            icon="lucide:phone"
                            className="w-4 h-4 text-gray-300 absolute left-3.5 top-3"
                          />
                        </div>
                      </div>

                      {/* Location */}
                      <div>
                        <label
                          htmlFor="form-location"
                          className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5"
                        >
                          Location <span className="text-[#ff5100]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="form-location"
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="e.g. Lagos, Nigeria"
                            className="w-full bg-white/10 border border-white/15 focus:border-[#ff5100] focus:bg-white/15 text-white placeholder-gray-400 text-xs sm:text-sm rounded-xl px-4 py-2.5 pl-10 transition-all outline-none focus:ring-2 focus:ring-[#ff5100]/40 shadow-inner"
                          />
                          <Icon
                            icon="lucide:map-pin"
                            className="w-4 h-4 text-gray-300 absolute left-3.5 top-3"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#ff5100] to-[#e04800] hover:from-[#e04800] hover:to-[#ff5100] text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-[#ff5100]/30 hover:shadow-xl hover:shadow-[#ff5100]/50 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Icon
                                icon="lucide:loader-2"
                                className="w-4 h-4 animate-spin"
                              />
                              <span>Submitting Request...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Request</span>
                              <Icon icon="lucide:send" className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
