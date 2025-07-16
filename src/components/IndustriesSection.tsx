import React from "react";
// Import motion AND the Variants type for better type-checking
import { motion, Variants } from "framer-motion";

import bgImage from "../assets/backgrond.png";
import "@fontsource/im-fell-french-canon"; // defaults to weight 400

// --- Animation Variants ---

// Define a container variant to orchestrate the animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time delay between each child animating in
    },
  },
};

// Define the animation for individual items (text, buttons)
// THE FIX: Add "as const" to tell TypeScript these values are read-only literals
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // Now TypeScript knows this is the literal "easeOut", not any string
    },
  },
} as const; // <--- THIS IS THE FIX

const IndustriesSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[800px] sm:min-h-[902px] pt-[120px] sm:pt-[150px] lg:pt-[180px] pb-[50px] sm:pb-[80px] px-4 sm:px-6 lg:px-8 overflow-hidden" // Added overflow-hidden to contain animations
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants} // This will now work correctly
          className="w-full max-w-[1149px] mx-auto text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal font-['IM_FELL_French_Canon'] text-[#47454B] leading-[130%] text-center mb-6 sm:mb-8 lg:mb-12"
        >
          India's Trusted Stone Care <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          & Construction Chemical Experts
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants} // This will now work correctly
          className="max-w-[900px] mx-auto text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-semibold text-[#1E5E04] text-center font-['Inter'] capitalize mb-8 sm:mb-12 lg:mb-16 px-2"
        >
          Trusted By National Heritage Sites, Top Builders & Global Brands For
          Over 20 Years
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants} // This will now work correctly
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-[520px] mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-[200px] md:w-[220px] lg:w-[240px] h-[56px] sm:h-[60px] lg:h-[68px] bg-[#4F9533] hover:bg-[#3d7329] text-white text-[16px] sm:text-[20px] lg:text-[24px] font-medium rounded-md font-['Inter'] transition-colors"
          >
            Get A Free Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-[200px] md:w-[220px] lg:w-[240px] h-[56px] sm:h-[60px] lg:h-[68px] border-2 border-[#4F9533] text-[#1E5E04] hover:text-[#4F9533] hover:bg-white hover:bg-opacity-40 text-[16px] sm:text-[20px] lg:text-[24px] font-medium rounded-md font-['Inter'] bg-white bg-opacity-25 transition-colors"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Industry Icons & Titles - These are part of the background image */}
      <div className="w-full h-[120px] sm:h-[150px] lg:h-[180px] flex justify-center items-end">
        {/* The industry icons are part of the background image */}
      </div>
    </section>
  );
};

export default IndustriesSection;