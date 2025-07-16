import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import icon1 from '../assets/experience.png';
import icon2 from '../assets/products.png';
import icon3 from '../assets/counters.png';
import icon4 from '../assets/countries.png';

const MagikStories: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 border border-gray-700 p-4">
        <h2 className="text-[60px] font-serif leading-[78px] tracking-[0.01em] text-black">
          Our Magik Stories
        </h2>
        <p className="text-[20px] md:text-[30px] leading-[45px] text-black mt-4">
          We’re always up to something and Magik Stories lets you in! Get the
          latest on our work, events, and what happens behind the scenes.
        </p>
      </div>

      {/* Cards and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {/* Image Cards */}
        {[{ img: img1, label: 'Ram Mandir, Ayodhya' },
          { img: img2, label: 'Prodapt IT Park, Chennai' },
          { img: img3, label: 'MMC 2022 Event' },
          { img: img4, label: 'Magik Products Display' }].map(({ img, label }, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden h-[310px]">
            <img src={img} alt={label} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-green-700 bg-opacity-70 py-3 px-4">
              <p className="text-white font-extrabold text-sm md:text-base text-center">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-screen-xl mx-auto text-center">
        {/* Stat Block 1 */}
        <div>
          <img src={icon1} alt="Years" className="mx-auto mb-4 w-[80px] h-[80px]" />
          <p className="text-2xl font-bold text-black">20+ Years</p>
          <p className="text-lg text-black font-light">Industry Experience</p>
        </div>

        {/* Stat Block 2 */}
        <div>
          <img src={icon2} alt="Products" className="mx-auto mb-4 w-[80px] h-[80px]" />
          <p className="text-2xl font-bold text-black">100+</p>
          <p className="text-lg text-black font-light">Products</p>
        </div>

        {/* Stat Block 3 */}
        <div>
          <img src={icon3} alt="Counters" className="mx-auto mb-4 w-[80px] h-[80px]" />
          <p className="text-2xl font-bold text-black">850+</p>
          <p className="text-lg text-black font-light">Counters</p>
        </div>

        {/* Stat Block 4 */}
        <div>
          <img src={icon4} alt="Countries" className="mx-auto mb-4 w-[80px] h-[80px]" />
          <p className="text-2xl font-bold text-black">13 Countries</p>
          <p className="text-lg text-black font-light">Spread Across</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold text-xl px-10 py-4 rounded-md">
          Get A Free Quote
        </button>
      </div>
    </section>
  );
};

export default MagikStories;
