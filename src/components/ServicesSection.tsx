import React from 'react';
// 1. Import 'motion' AND the 'Variants' type from Framer Motion
import { motion, Variants } from 'framer-motion';

// (Optional but good practice) Define a type for a single service
interface Service {
  title: string;
  image: string; // The result of 'require' is treated as a string by the bundler
}

const services: Service[] = [
  {
    title: 'Stone Maintenance',
    image: require('../assets/stone-maintenance.jpg'),
  },
  {
    title: 'On Site Guidance',
    image: require('../assets/on-site-guidance.jpg'),
  },
  {
    title: 'Tile Maintenance',
    image: require('../assets/tile-maintenance.png'),
  },
  {
    title: 'Expert Guidance',
    image: require('../assets/expert-guidance.png'),
  },
];

// 2. Explicitly type the variants object with the 'Variants' type
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 3. Do the same for itemVariants. This is the key fix for the error.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut', // TypeScript now correctly validates this string
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#444444] py-12 md:py-16 lg:py-20 px-4 text-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Title with responsive border */}
        <motion.div variants={itemVariants} className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif border-2 border-white inline-block px-4 py-2 md:px-6 md:py-3">
            Services We Provide!
          </h2>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-center text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-12 lg:mb-16 font-medium px-4"
        >
          Beyond Products We Provide Complete Stone Care Services
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[293px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[373px] rounded-[10px] bg-[#F3F4EF] relative overflow-hidden shadow-lg group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute bottom-0 w-full bg-white bg-opacity-40 backdrop-blur-sm text-black py-3 md:py-4 text-center font-bold text-lg md:text-xl lg:text-2xl capitalize">
                {service.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;