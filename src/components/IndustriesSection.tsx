import React from "react";
import bgImage from "../assets/backgrond.png";
import "@fontsource/im-fell-french-canon"; // defaults to weight 400

const IndustriesSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[800px] sm:min-h-[902px] pt-[120px] sm:pt-[150px] lg:pt-[180px] pb-[50px] sm:pb-[80px] px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Heading */}
      <h1 className="w-full max-w-[1149px] mx-auto text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal font-['IM_FELL_French_Canon'] text-[#47454B] leading-[130%] text-center mb-6 sm:mb-8 lg:mb-12">
        India's Trusted Stone Care <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        & Construction Chemical Experts
      </h1>

      {/* Subheading */}
      <p className="max-w-[900px] mx-auto text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-semibold text-[#1E5E04] text-center font-['Inter'] capitalize mb-8 sm:mb-12 lg:mb-16 px-2">
        Trusted By National Heritage Sites, Top Builders & Global Brands For
        Over 20 Years
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-[520px] mx-auto mb-16 sm:mb-20 lg:mb-24">
        <button className="w-full sm:w-[200px] md:w-[220px] lg:w-[240px] h-[56px] sm:h-[60px] lg:h-[68px] bg-[#4F9533] hover:bg-[#3d7329] text-white text-[16px] sm:text-[20px] lg:text-[24px] font-medium rounded-md font-['Inter'] transition-colors">
          Get A Free Quote
        </button>
        <button className="w-full sm:w-[200px] md:w-[220px] lg:w-[240px] h-[56px] sm:h-[60px] lg:h-[68px] border-2 border-[#4F9533] text-[#1E5E04] hover:text-[#4F9533] hover:bg-white hover:bg-opacity-40 text-[16px] sm:text-[20px] lg:text-[24px] font-medium rounded-md font-['Inter'] bg-white bg-opacity-25 transition-colors">
          Contact Our Team
        </button>
      </div>

      {/* Industry Icons & Titles - These are part of the background image */}
      <div className="w-full h-[120px] sm:h-[150px] lg:h-[180px] flex justify-center items-end">
        {/* The industry icons (Real Estate, Cadila Limited, Ayodhya Mandir, Prodapt, Office, Hotels) 
            are already part of the background image */}
      </div>
    </section>
  );
};

export default IndustriesSection;