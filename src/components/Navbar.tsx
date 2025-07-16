import React from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/image.png"; // Adjusted to match uploaded file

const NAV_ITEMS = [
  { name: "Products", hasDropdown: true },
  { name: "Services", hasDropdown: true },
  { name: "Magik Stories", hasDropdown: true },
  { name: "Blogs" },
  { name: "About Us" },
  { name: "Contact Us" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[85px] bg-[rgba(243,242,239,0.68)] backdrop-blur-sm z-50 border-b border-[rgba(101,101,101,0.16)]">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">
        {/* Logo & Tagline Block */}
        <div className="flex items-center gap-3 absolute top-[22px] left-[88px]">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[50px] h-[50px] rounded-[1px] object-contain"
          />

          {/* Divider Line */}
          <div className="w-[1px] h-[50px] bg-[#656565]" />

          {/* Tagline */}

          <div className="leading-[130%] font-semibold text-[#656565] text-[16px] font-roboto">
            <div>A STONE CARE</div>
            <div>SOLUTION</div>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-[30px] ml-[320px]">
          {" "}
          {/* adjust spacing as needed */}
          {NAV_ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-[#656565] text-[18px] font-medium leading-[120%] group-hover:text-[#4F9533] transition-colors">
                {item.name}
              </span>
              {item.hasDropdown && (
                <ChevronDown className="w-4 h-4 text-[#5F5E5E] group-hover:text-[#4F9533] transition-colors" />
              )}
            </div>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4 ml-auto">
          <button className="flex items-center gap-2 bg-[#4F9533] hover:bg-[#3d7329] text-white font-semibold text-[18px] px-6 py-2 rounded transition-colors">
            Get Quote
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden flex flex-col gap-1 p-2">
            <div className="w-6 h-0.5 bg-[#656565]" />
            <div className="w-6 h-0.5 bg-[#656565]" />
            <div className="w-6 h-0.5 bg-[#656565]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
