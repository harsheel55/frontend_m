import React from 'react';
import bgImage from '../assets/background1.png';
import imgStone from '../assets/stone-care.png';     // Replace with actual image file names
import imgGrouts from '../assets/adhesive-grouts.png';
import imgConstruction from '../assets/construction.png';

const categories = [
  {
    title: 'Stone Care Chemicals',
    subtitle: 'Cleaners, Sealers\nPolishers',
    image: imgStone, // Replace with your actual image path
  },
  {
    title: 'Adhesive & Grouts',
    subtitle: 'Epoxies, Cementitious\nGrouts',
    image: imgGrouts, // Replace with your actual image path
  },
  {
    title: 'Construction Chemicals',
    subtitle: 'Repairs, Waterproofing\nAdditives',
    image: imgConstruction, // Replace with your actual image path
  },
];

const CategoriesSection = () => {
  return (
    <section
      className="relative w-full py-12 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bgImage})`, // Replace with your background image
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#47454B] mb-8 md:mb-16 px-4">
          Categories
        </h2>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-[320px] flex flex-col items-center p-6 text-center group"
              >
                <div className="w-full h-48 md:h-52 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-[#34711C] mb-2">
                  {cat.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 whitespace-pre-line mb-4 leading-relaxed">
                  {cat.subtitle}
                </p>
                
                <button className="mt-auto px-6 py-2 md:px-8 md:py-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-sm md:text-base font-medium">
                  View All Products
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;