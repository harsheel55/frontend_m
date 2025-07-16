import React from 'react';
import bgImage1 from '../assets/before.png'; // Your local image
import bgImage2 from '../assets/after.png';

const CaseStudySection: React.FC = () => {
  return (
    <section className="relative w-full max-w-screen-xl mx-auto py-24 px-4">
      {/* Heading */}
      <div className="text-center border border-gray-700 mb-12 px-4">
        <h2 className="font-serif text-[60px] leading-[78px] tracking-[0.01em] text-black">
          See the Magik<br />
          <span className="block">Real Projects, Real Results</span>
        </h2>
      </div>

      {/* Before/After Container */}
      <div
        className="relative flex flex-col md:flex-row justify-between items-center gap-4 mb-16 rounded-[24.3px] overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Before Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src={bgImage1} // Reuse for demonstration, replace with actual "before" image if different
            alt="Before"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-5 left-5 text-white text-3xl font-bold uppercase">Before</span>
        </div>

        {/* After Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src={bgImage2} // Reuse for demonstration, replace with actual "after" image if different
            alt="After"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-5 left-5 md:left-auto md:right-5 text-green-700 text-3xl font-bold uppercase">After</span>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-black text-white text-2xl md:text-3xl font-medium px-8 py-4 rounded-md uppercase hover:bg-gray-800 transition">
          View More Case Studies    
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;
