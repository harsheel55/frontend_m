import React from 'react';
// 1. Import 'motion' AND 'Variants' from framer-motion
import { motion, Variants } from 'framer-motion'; 

import bgImage1 from '../assets/before.png'; // Your local image
import bgImage2 from '../assets/after.png';

const CaseStudySection: React.FC = () => {
  // 2. Add the ': Variants' type to each variant constant
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft: Variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInRight: Variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  return (
    <motion.section 
      className="relative w-full max-w-screen-xl mx-auto py-24 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Heading */}
      <motion.div 
        className="text-center border border-gray-700 mb-12 px-4"
        variants={fadeInUp}
      >
        <h2 className="font-serif text-[60px] leading-[78px] tracking-[0.01em] text-black">
          See the Magik<br />
          <span className="block">Real Projects, Real Results</span>
        </h2>
      </motion.div>

      {/* Before/After Container */}
      <div
        className="relative flex flex-col md:flex-row justify-between items-center gap-4 mb-16 rounded-[24.3px] overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Before Image */}
        <motion.div 
          className="relative w-full md:w-1/2"
          variants={slideInLeft}
        >
          <img
            src={bgImage1}
            alt="Before"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-5 left-5 text-white text-3xl font-bold uppercase">Before</span>
        </motion.div>

        {/* After Image */}
        <motion.div 
          className="relative w-full md:w-1/2"
          variants={slideInRight}
        >
          <img
            src={bgImage2}
            alt="After"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-5 left-5 md:left-auto md:right-5 text-green-700 text-3xl font-bold uppercase">After</span>
        </motion.div>
      </div>

      {/* Button */}
      <motion.div 
        className="flex justify-center"
        variants={fadeInUp}
      >
        <button className="bg-black text-white text-2xl md:text-3xl font-medium px-8 py-4 rounded-md uppercase hover:bg-gray-800 transition">
          View More Case Studies    
        </button>
      </motion.div>
    </motion.section>
  );
};

export default CaseStudySection;