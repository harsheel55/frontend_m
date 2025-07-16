import React from 'react';
// Import motion and Variants type for animation
import { motion, Variants } from 'framer-motion';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import icon1 from '../assets/experience.png';
import icon2 from '../assets/products.png';
import icon3 from '../assets/counters.png';
import icon4 from '../assets/countries.png';

// --- Data Arrays for Cleaner Mapping ---
const storyCards = [
  { img: img1, label: 'Ram Mandir, Ayodhya' },
  { img: img2, label: 'Prodapt IT Park, Chennai' },
  { img: img3, label: 'MMC 2022 Event' },
  { img: img4, label: 'Magik Products Display' },
];

const stats = [
  { icon: icon1, alt: 'Years', value: '20+ Years', label: 'Industry Experience' },
  { icon: icon2, alt: 'Products', value: '100+', label: 'Products' },
  { icon: icon3, alt: 'Counters', value: '850+', label: 'Counters' },
  { icon: icon4, alt: 'Countries', value: '13 Countries', label: 'Spread Across' },
];

// --- Animation Variants ---
const fadeInUp: Variants = {
  initial: { y: 60, opacity: 0 },
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
      staggerChildren: 0.15, // Delay between each child animating in
    },
  },
};

const scaleIn: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};


const MagikStories: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 overflow-hidden"> {/* Added overflow-hidden to contain animations */}
      {/* Header */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-12 border border-gray-700 p-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp} // Animate the whole header block at once
      >
        <h2 className="text-[60px] font-serif leading-[78px] tracking-[0.01em] text-black">
          Our Magik Stories
        </h2>
        <p className="text-[20px] md:text-[30px] leading-[45px] text-black mt-4">
          We’re always up to something and Magik Stories lets you in! Get the
          latest on our work, events, and what happens behind the scenes.
        </p>
      </motion.div>

      {/* Cards and Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-screen-xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the grid is visible
        variants={staggerContainer} // This will orchestrate the staggering of children
      >
        {storyCards.map(({ img, label }, index) => (
          // Each card is now a motion.div and will be animated by the parent's staggerContainer
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden h-[310px] shadow-lg"
            variants={scaleIn} // Each card uses the scale-in animation
          >
            <img src={img} alt={label} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-green-700 bg-opacity-70 py-3 px-4">
              <p className="text-white font-extrabold text-sm md:text-base text-center">{label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-screen-xl mx-auto text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {stats.map(({ icon, alt, value, label }, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <img src={icon} alt={alt} className="mx-auto mb-4 w-[80px] h-[80px]" />
            <p className="text-2xl font-bold text-black">{value}</p>
            <p className="text-lg text-black font-light">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp} // Reuse the fade-in-up animation
      >
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold text-xl px-10 py-4 rounded-md transition-transform duration-300 ease-out hover:scale-105">
          Get A Free Quote
        </button>
      </motion.div>
    </section>
  );
};

export default MagikStories;