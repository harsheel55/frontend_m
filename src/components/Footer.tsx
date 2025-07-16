import React from "react";
import logo from "../assets/image.png"; // Ensure image path is correct
import office from "../assets/office.png";
import add2 from "../assets/add2.png";
import add3 from "../assets/add3.png";
import add4 from "../assets/add4.png";
import add5 from "../assets/add5.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdBusiness,
  MdFactory,
  MdAccountBalance,
} from "react-icons/md";

const GoogleFonts = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
);

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  const categories = [
    { name: "Stone Care", href: "#" },
    { name: "Stone Adhesive", href: "#" },
    { name: "Construction Chemical", href: "#" },
  ];

  const services = [
    { name: "Ayodhya Ram Mandir", href: "#" },
    { name: "Stone Adhesive", href: "#" },
    { name: "Construction Chemical", href: "#" },
  ];

  const ourStory = [
    { name: "Ayodhya Ram Mandir", href: "#" },
    { name: "Stone Adhesive", href: "#" },
    { name: "Construction Chemical", href: "#" },
  ];

  const offices = [
    {
      title: "Corporate Office",
      icon: (
        <img
          src={office} // Update the path based on where you placed the image
          alt="Corporate Office Icon"
          className="w-8 h-8"
        />
      ),
      address:
        "418, Happy Hallmark Shoppers, Vesu-Abhava Road, Surat, Gujarat -395017",
    },
    {
      title: "Manufacturing Office",
      icon: (
        <img
          src={add2} // Update the path based on where you placed the image
          alt="Corporate Office Icon"
          className="w-8 h-8"
        />
      ),
      address:
        "C-5/4, Hojiwala Industrial Estate, Road No. 8, Susml, Sachin-alsana Road, Surat, Gujarat -394230",
    },
    {
      title: "Delhi Office",
      icon: (
        <img
          src={add3} // Update the path based on where you placed the image
          alt="Corporate Office Icon"
          className="w-8 h-8"
        />
      ),
      address:
        "Plot No 155, Ground Floor, Kh. No. 13/25, Udey Vihar Nilothi Extn. Near Manoj Shokin Farm House, Delhi -110041",
    },
    {
      title: "Bengaluru Office",
      icon: (
        <img
          src={add4} // Update the path based on where you placed the image
          alt="Corporate Office Icon"
          className="w-8 h-8"
        />
      ),
      address:
        "304/26 Ground Floor, Omkar Nilaya, 7th Main Road, Near Swastik Marble Lakkasandra Extension, Bengaluru, Karnataka - 560030",
    },
    {
      title: "Hyderabad Office",
      icon: (
        <img
          src={add5} // Update the path based on where you placed the image
          alt="Corporate Office Icon"
          className="w-8 h-8"
        />
      ),
      address:
        "Shop no 11-5-198/1, Bhavani Nagar, Hyderabad, Telangana - 500081",
    },
  ];

  return (
    <>
      <GoogleFonts />
      <footer
        className="bg-gray-50 text-black px-4 sm:px-6 py-8 sm:py-12"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Section - Brand Info */}
            <div className="lg:w-1/3">
              <div className="flex items-center gap-2 sm:gap-3 mb-6">
                {/* Logo placeholder - using green square for demo */}
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

              {/* Description */}
              <p
                className="text-gray-600 text-sm mb-6 leading-relaxed font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Trusted By National Heritage Sites, Top Builders & Global Brands
                For Over 20 Years Sites, Top Builders & Global Brands For Over
                20 Years
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <FaPhone className="w-4 h-4 text-green-600" />
                  <span
                    className="text-sm font-semibold text-gray-800"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    +91 9909923232
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4 text-green-600" />
                  <span
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    rahi@marbelmagik.com
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/MarbleMagikCorporation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-600 rounded flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <FaFacebookF className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/marblemagik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-600 rounded flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <FaInstagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/marble-magik-corporations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-600 rounded flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@marblemagikcorporation3188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-600 rounded flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <FaYoutube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Middle Section - Links */}
            <div className="lg:w-1/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Quick Links */}
                <div>
                  <h3
                    className="text-green-700 font-semibold text-lg sm:text-xl mb-4 tracking-wide"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    QUICK LINKS
                  </h3>
                  <ul className="space-y-2">
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="text-gray-700 hover:text-green-600 transition-colors text-sm"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h3
                    className="text-green-700 font-semibold text-lg sm:text-xl mb-4 tracking-wide"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    CATEGORIES
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, idx) => (
                      <li key={idx}>
                        <a
                          href={category.href}
                          className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3
                    className="text-green-700 font-semibold text-lg sm:text-xl mb-4 tracking-wide"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Services
                  </h3>
                  <ul className="space-y-2">
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <a
                          href={service.href}
                          className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Story */}
                <div>
                  <h3
                    className="text-green-700 font-semibold text-lg sm:text-xl mb-4 tracking-wide"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Our Story
                  </h3>
                  <ul className="space-y-2">
                    {ourStory.map((story, idx) => (
                      <li key={idx}>
                        <a
                          href={story.href}
                          className="text-gray-700 hover:text-green-600 transition-colors text-sm"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {story.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section - Address */}
            <div className="lg:w-1/3">
              <h3
                className="text-green-700 font-semibold text-lg sm:text-xl mb-4 tracking-wide"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ADDRESS
              </h3>
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">{office.icon}</div>
                    <div>
                      <h4
                        className="font-bold text-gray-800 mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {office.title}
                      </h4>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-6 border-t border-gray-300 text-center">
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2024 Marbel Magik. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
