import React from 'react';

const services = [
  {
    title: 'Stone Maintenance',
    image: require('../assets/stone-maintenance.jpg'), // Replace with your actual image path
  },
  {
    title: 'On Site Guidance',
    image: require('../assets/on-site-guidance.jpg'), // Replace with your actual image path
  },
  {
    title: 'Tile Maintenance',
    image: require('../assets/tile-maintenance.png'), // Replace with your actual image path
  },
  {
    title: 'Expert Guidance',
    image: require('../assets/expert-guidance.png'), // Replace with your actual image path
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#444444] py-12 md:py-16 lg:py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title with responsive border */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif border-2 border-white inline-block px-4 py-2 md:px-6 md:py-3">
            Services We Provide!
          </h2>
        </div>
        
        {/* Subtitle */}
        <p className="text-center text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-12 lg:mb-16 font-medium px-4">
          Beyond Products We Provide Complete Stone Care Services
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-[293px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[373px] rounded-[10px] bg-[#F3F4EF] relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay with title */}
              <div className="absolute bottom-0 w-full bg-white bg-opacity-40 backdrop-blur-sm text-black py-3 md:py-4 text-center font-bold text-lg md:text-xl lg:text-2xl capitalize">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;