// src/components/SeeTheMagik.tsx

import React from 'react'
import beforeImageSrc from '../assets/before.png'; // Your local image
import afterImageSrc from '../assets/after.png';


// Reusable component for the image panel
interface ImagePanelProps {
  src: string;
  alt: string;
  label: string;
  labelColorClass: string;
}

const ImagePanel: React.FC<ImagePanelProps> = ({ src, alt, label, labelColorClass }) => (
  <div className="relative flex-1">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    <span
      className={`absolute top-5 left-5 text-2xl font-extrabold uppercase tracking-widest ${labelColorClass}`}
    >
      {label}
    </span>
  </div>
);

// Main Component
const SeeTheMagik: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headings */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl text-white/90 font-light">
            See the Magik
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-white/70 mt-1 font-light">
            Real Projects, Real Results
          </p>
        </div>

        {/* Main Content Wrapper */}
        <div className="relative">
          {/* Before & After Container with Border */}
          <div className="border-2 border-white/20 rounded-2xl p-1 sm:p-2 overflow-hidden shadow-2xl shadow-white/5">
            <div className="flex flex-col md:flex-row">
              <ImagePanel
                src={beforeImageSrc}
                alt="Floor tiles before restoration"
                label="Before"
                labelColorClass="text-white"
              />
              <ImagePanel
                src={afterImageSrc}
                alt="Floor tiles after restoration"
                label="After"
                labelColorClass="text-green-500"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm sm:text-base border-2 border-white/20 transition-transform duration-300 hover:scale-105 shadow-lg">
              View More Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeTheMagik;