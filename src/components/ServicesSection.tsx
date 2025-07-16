import React from 'react';

const services = [
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

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#444444] py-20 px-4 text-white">
      <div className="max-w-[1293px] mx-auto">
        <h2 className="text-center text-[64px] font-serif border border-white mb-4">
          Services We Provide!
        </h2>
        <p className="text-center text-[24px] mb-16 font-medium">
          Beyond Products We Provide Complete Stone Care Services
        </p>

        <div className="flex justify-center items-center gap-10 flex-wrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[293px] h-[373px] rounded-[10px] bg-[#F3F4EF] relative overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white bg-opacity-40 text-black py-3 text-center font-bold text-[24px] capitalize">
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
