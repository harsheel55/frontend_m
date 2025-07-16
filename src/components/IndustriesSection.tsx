import React from 'react';
import bgImage from '../assets/backgrond.png';


const IndustriesSection: React.FC = () => {
  return (
    <section
      className="relative w-[1440px] h-[902px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main Heading */}
      <h1 className="absolute top-[230px] left-1/2 transform -translate-x-1/2 w-[1149px] text-[72px] font-normal font-['IM FELL French Canon'] text-[#47454B] leading-[130%] text-center">
        India’s Trusted Stone Care <br /> & Construction Chemical Experts
      </h1>

      {/* Subheading */}
      <p className="absolute top-[442px] left-1/2 transform -translate-x-1/2 text-[28px] font-semibold text-[#1E5E04] text-center font-['Inter'] capitalize">
        Trusted By National Heritage Sites, Top Builders & Global Brands For Over 20 Years
      </p>

      {/* CTA Buttons */}
      <div className="absolute top-[494px] left-1/2 transform -translate-x-1/2 flex gap-5">
        <button className="w-[240px] h-[68px] bg-[#4F9533] text-white text-[24px] font-medium rounded-md font-['Inter']">
          Get A Free Quote
        </button>
        <button className="w-[240px] h-[68px] border-2 border-[#4F9533] text-[#1E5E04] text-[24px] font-medium rounded-md font-['Inter'] bg-white bg-opacity-25">
          Contact Our Team
        </button>
      </div>

      {/* Industry Icons & Titles */}
      
    </section>
  );
};

export default IndustriesSection;
