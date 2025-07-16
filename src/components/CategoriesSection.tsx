import React from 'react';
import bgImage from '../assets/background1.png';
import imgStone from '../assets/stone-care.png';     // Replace with actual image file names
import imgGrouts from '../assets/adhesive-grouts.png';
import imgConstruction from '../assets/construction.png';

const categories = [
  {
    title: 'Stone Care Chemicals',
    subtitle: 'Cleaners, Sealers\nPolishers',
    image: imgStone,
  },
  {
    title: 'Adhesive & Grouts',
    subtitle: 'Epoxies, Cementitious\nGrouts',
    image: imgGrouts,
  },
  {
    title: 'Construction Chemicals',
    subtitle: 'Repairs, Waterproofing\nAdditives',
    image: imgConstruction,
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-5xl font-serif text-center text-[#47454B] mb-16">Categories</h2>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md w-[300px] flex flex-col items-center p-6 text-center"
          >
            <img src={cat.image} alt={cat.title} className="h-[200px] object-contain mb-4" />
            <h3 className="text-xl font-semibold text-[#34711C]">{cat.title}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{cat.subtitle}</p>
            <button className="mt-4 px-5 py-2 border border-black rounded hover:bg-gray-100 transition">
              View All Products
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
