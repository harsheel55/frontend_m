import React from 'react';
import ProductCard from './ProductCard';

// import your images
import smallCan from '../assets/small-can.png';
import tinBox from '../assets/tin-box.png';
import can from '../assets/can.png';
import bucket from '../assets/bucket.png';
import pouch from '../assets/pouch.png';
import bag from '../assets/bag.png';
import tube from '../assets/tube.png';

const ProductShowcase: React.FC = () => {
  return (
    <section className="w-full bg-[#444444] py-16 text-white text-center relative">
      <h2 className="text-[48px] md:text-[64px] font-serif border border-white inline-block px-6 py-2 mb-12">
        Range Of Products
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
        <ProductCard image={smallCan} label="Repair & Water Proofing" />
        <ProductCard image={tinBox} label="Repair & Water Proofing" />
        <ProductCard image={can} label="Repair & Water Proofing" />
        <ProductCard image={bucket} label="POLISH, DENSIFIER SEALER & EPOXY" />
        <ProductCard image={pouch} label="Lube & 2K grey" />
        <ProductCard
          image={bag}
          label="Powder Adhesive"
          rotate="rotate-[-15deg]"
        />
        <ProductCard image={tube} label="Remover & Past" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
        <button className="bg-white text-black font-bold text-xl px-10 py-4 rounded-md hover:bg-gray-200">
          Explore Our All Products
        </button>
        <button className="border-2 border-white text-white font-semibold text-xl px-10 py-4 rounded-md hover:bg-white hover:text-black transition">
          Get A Free Quote
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
