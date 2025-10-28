"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const ProductBanner = () => {
  const products = [
    {
      icon: "mdi:email-outline",
      text: "Automate your marketing with DM360",
    },
    {
      icon: "mdi:chart-line",
      text: "Track your growth with Analytics & Reporting",
    },
    {
      icon: "mdi:bullhorn-outline",
      text: "Manage all your Ads in one dashboard",
    },
    {
      icon: "mdi:search-web",
      text: "Dominate Google with SEO Insights",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % products.length),
      3500
    );
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="w-full bg-white/10 backdrop-blur-md text-white py-3 sm:py-4 overflow-hidden">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center gap-3"
      >
        <Icon icon={products[index].icon} width={22} className="text-primary-yellow" />
        <p className="font-medium text-sm sm:text-base">{products[index].text}</p>
      </motion.div>
    </div>
  );
};

export default ProductBanner;
