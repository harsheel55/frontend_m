// src/components/RangeOfProducts.tsx

import React from 'react';
import { motion, Variants } from 'framer-motion';



import bottle from '../assets/small-can.png';
import tinCan from '../assets/tin-box.png';
import jerryCan from '../assets/can.png';
import bucket from '../assets/bucket.png';  //1
import pouch from '../assets/pouch.png'; //1
import bag from '../assets/bag.png'; //1
import tube from '../assets/tube.png'; //1


// --- MOCK ASSET IMPORTS ---
// In a real project, these would be imported from your assets folder.
// e.g., import productBottle from '../assets/product-bottle.svg';


// --- TYPESCRIPT INTERFACE ---
interface Product {
  id: number;
  image: string;
  alt: string;
  className?: string; // Optional class for custom styling
}

// --- DATA ARRAY ---
const products: Product[] = [
  { id: 1, image: bottle, alt: 'Repair & Water Proofing Bottle' },
  { id: 2, image: tinCan, alt: 'Repair & Water Proofing Tin Can' },
  { id: 3, image: jerryCan, alt: 'Repair & Water Proofing Jerry Can' },
  { id: 4, image: bucket, alt: 'Polish, Densifier, Sealer & Epoxy Bucket', className: 'w-40 sm:w-48' },
  { id: 5, image: pouch, alt: 'Lube & 2K Grey Pouch' },
  { id: 6, image: bag, alt: 'Powder Adhesive Bag' },
  { id: 7, image: tube, alt: 'Remover & Past Tube' },
];

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const zoomIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// --- REACT COMPONENT ---
const RangeOfProducts: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-[#444444] py-20 px-4 text-white text-center overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-serif mb-16"
          variants={fadeInUp}
        >
          Range Of Products
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-end gap-x-6 sm:gap-x-8 gap-y-12"
          variants={staggerContainer}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={zoomIn}>
              <img
                src={product.image}
                alt={product.alt}
                className={`h-40 sm:h-48 object-contain ${product.className || 'w-28 sm:w-32'}`}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20"
          variants={fadeInUp}
        >
          <button className="bg-white text-[#333] font-bold text-base md:text-lg px-8 py-3.5 rounded-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 w-full sm:w-auto">
            Explore Our All Products
          </button>
          <button className="border-2 border-white text-white font-semibold text-base md:text-lg px-8 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-[#333] hover:scale-105 w-full sm:w-auto">
            Get A Free Quote
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RangeOfProducts;