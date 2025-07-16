import React from 'react';
// 1. Import motion and Variants for animations
import { motion, Variants } from 'framer-motion';
import ProductCard from './ProductCard';

// Import your images
import smallCan from '../assets/small-can.png';
import tinBox from '../assets/tin-box.png';
import can from '../assets/can.png';
import bucket from '../assets/bucket.png';
import pouch from '../assets/pouch.png';
import bag from '../assets/bag.png';
import tube from '../assets/tube.png';

// 2. Best Practice: Move component data into an array for easy mapping
const products = [
  { image: smallCan, label: 'Repair & Water Proofing' },
  { image: tinBox, label: 'Repair & Water Proofing' },
  { image: can, label: 'Repair & Water Proofing' },
  { image: bucket, label: 'POLISH, DENSIFIER SEALER & EPOXY' },
  { image: pouch, label: 'Lube & 2K grey' },
  { image: bag, label: 'Powder Adhesive', rotate: 'rotate-[-15deg]' },
  { image: tube, label: 'Remover & Past' },
];

// 3. Define the animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // A quick stagger for a snappy feel
    },
  },
};

const zoomIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

const ProductShowcase: React.FC = () => {
  return (
    // The main section is now the animation trigger
    <motion.section 
      className="w-full bg-[#444444] py-16 text-white text-center relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }} // Animate when 20% is in view
    >
      <motion.h2 
        className="text-[48px] md:text-[64px] font-serif border border-white inline-block px-6 py-2 mb-12"
        variants={fadeInUp}
      >
        Range Of Products
      </motion.h2>

      {/* This container will orchestrate the staggered animation for the cards */}
      <motion.div 
        className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4"
        variants={staggerContainer}
      >
        {products.map((product, index) => (
          // We wrap each ProductCard in a motion.div to animate it.
          // This is the standard way to animate custom components.
          <motion.div key={index} variants={zoomIn}>
            <ProductCard image={product.image} label={product.label} rotate={product.rotate} />
          </motion.div>
        ))}
      </motion.div>

      {/* This container will animate the two buttons together */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
        variants={fadeInUp} // Reuse the fade-in-up animation
      >
        <button className="bg-white text-black font-bold text-xl px-10 py-4 rounded-md hover:bg-gray-200 transition-all duration-300 hover:scale-105">
          Explore Our All Products
        </button>
        <button className="border-2 border-white text-white font-semibold text-xl px-10 py-4 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
          Get A Free Quote
        </button>
      </motion.div>
    </motion.section>
  );
};

export default ProductShowcase;