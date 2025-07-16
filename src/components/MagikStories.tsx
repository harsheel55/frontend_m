// src/components/MagikStories.tsx

import React from 'react';
import { motion, Variants } from 'framer-motion';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import icon1 from '../assets/experience.png';
import icon2 from '../assets/products.png';
import icon3 from '../assets/counters.png';
import icon4 from '../assets/countries.png';



// --- TYPESCRIPT INTERFACES ---
interface StoryCard {
  img: string;
  label: string;
}

interface Stat {
  icon: string;
  alt: string;
  value: string;
  label: string;
}

// --- DATA ARRAYS (Typed) ---
const storyCards: StoryCard[] = [
  { img: img1, label: 'Ram Mandir, Ayodhya' },
  { img: img2, label: 'Prodapt IT Park, Chennai' },
  { img: img3, label: 'MMC 2022 Event' }, // Placeholder name based on visual
  { img: img4, label: 'Magik Products Display' }, // Placeholder name based on visual
];

const stats: Stat[] = [
  { icon: icon1, alt: 'Experience', value: '20+ Years', label: 'Industry Experience' },
  { icon: icon2, alt: 'Products', value: '100+', label: 'Products' },
  { icon: icon3, alt: 'Counters', value: '850+', label: 'Counters' },
  { icon: icon4, alt: 'Countries', value: '13 Countries', label: 'Spread Across' },
];

// --- ANIMATION VARIANTS (Typed with Framer Motion's Variants type) ---
const fadeInUp: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// --- REACT COMPONENT (Typed with React.FC) ---
const MagikStories: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900 leading-tight">
            Our Magik Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            We’re always up to something and Magik Stories lets you in! Get the
            latest on our work, events, and what happens behind the scenes.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {storyCards.map(({ img, label }) => (
              <motion.div
                key={label}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg"
                variants={scaleIn}
              >
                <img src={img} alt={label} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 w-full bg-green-700 bg-opacity-80 p-3">
                  <p className="text-white font-bold text-sm md:text-base text-center">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Stats and CTA */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              className="grid grid-cols-2 gap-x-8 gap-y-10 w-full max-w-md lg:max-w-none"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {stats.map(({ icon, alt, value, label }) => (
                <motion.div key={label} className="text-center" variants={fadeInUp}>
                  <img src={icon} alt={alt} className="mx-auto mb-3 w-14 h-14" />
                  <p className="text-3xl font-bold text-gray-900">{value}</p>
                  <p className="text-base text-gray-600">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 w-full flex justify-center lg:justify-start"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeInUp}
            >
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-xl hover:shadow-2xl">
                Get A Free Quote
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagikStories;