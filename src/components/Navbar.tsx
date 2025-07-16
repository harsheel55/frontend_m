import React, { useState } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import logo from "../assets/image.png"; // Adjust the path as necessary

const NAV_ITEMS = [
  { name: "Products", hasDropdown: true },
  { name: "Services", hasDropdown: true },
  { name: "Magik Stories", hasDropdown: true },
  { name: "Blogs" },
  { name: "About Us" },
  { name: "Contact Us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[85px] bg-[rgba(243,242,239,0.68)] backdrop-blur-sm z-50 border-b border-[rgba(101,101,101,0.16)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative">
        {/* Logo & Tagline Block */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[50px] h-[50px] rounded-[1px] object-contain"
          />

          {/* Divider Line */}
          <div className="w-[1px] h-[40px] sm:h-[50px] bg-[#656565]" />

          {/* Tagline */}
          <div className="leading-[130%] font-semibold text-[#656565] text-[14px] sm:text-[16px] font-sans">
            <div>A STONE CARE</div>
            <div>SOLUTION</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[20px] xl:gap-[30px]">
          {NAV_ITEMS.map((item, index) => (
            // Added `relative` to position the animated underline
            <div
              key={index}
              className="relative flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-[#656565] text-[16px] xl:text-[18px] font-medium leading-[120%] group-hover:text-[#4F9533] transition-colors duration-300">
                {item.name}
              </span>
              {/* --- ANIMATION: Underline grows on hover --- */}
              <div className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-[#4F9533] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />

              {item.hasDropdown && (
                // --- ANIMATION: Chevron rotates 180 degrees on hover ---
                <ChevronDown className="w-4 h-4 text-[#5F5E5E] group-hover:text-[#4F9533] transition-all duration-300 group-hover:rotate-180" />
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Get Quote Button */}
          {/* Added `group` to the button for animating the child chevron */}
          <button className="group flex items-center gap-2 bg-[#4F9533] hover:bg-[#3d7329] text-white font-semibold text-[14px] sm:text-[16px] lg:text-[18px] px-3 sm:px-4 lg:px-6 py-2 rounded transition-colors duration-300">
            <span className="hidden sm:inline">Get Quote</span>
            <span className="sm:hidden">Quote</span>
            {/* --- ANIMATION: Arrow moves right on hover --- */}
            <ChevronDown className="w-4 h-4 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center p-2 text-[#656565] hover:text-[#4F9533] transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {/* The transition between Menu and X icons is handled by React's re-render */}
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* --- ANIMATION: Slide down and fade in effect --- */}
      <div
        className={`lg:hidden absolute top-[85px] left-0 w-full bg-[rgba(243,242,239,0.95)] backdrop-blur-sm border-b border-[rgba(101,101,101,0.16)] transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between cursor-pointer group py-2 border-b border-[rgba(101,101,101,0.1)] last:border-b-0"
              >
                <span className="text-[#656565] text-[16px] font-medium leading-[120%] group-hover:text-[#4F9533] transition-colors">
                  {item.name}
                </span>
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-[#5F5E5E] group-hover:text-[#4F9533] transition-colors" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;