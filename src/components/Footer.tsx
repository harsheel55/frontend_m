import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/image.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black px-8 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="MMC Logo" className="w-10 h-10 mr-3" />
            <span className="text-lg font-semibold">A Stone Care Solution</span>
          </div>
          <p className="text-green-800 font-semibold text-sm leading-6">
            Trusted By National Heritage Sites, Top Builders & Global Brands For
            Over 20 Years
          </p>
          <div className="mt-4 text-green-900 font-semibold text-sm">
            <p>+91 99099923232</p>
            <p>rahi@marbelmagik.com</p>
          </div>
          <div className="flex space-x-4 mt-4 text-green-700 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-700 font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-green-700 font-bold text-lg mb-2">Services</h3>
          <ul className="space-y-2">
            <li>Ayodhya Ram Mandir</li>
            <li>Stone Adhesive</li>
            <li>Construction Chemical</li>
          </ul>
        </div>

        {/* Our Story */}
        <div>
          <h3 className="text-green-700 font-bold text-lg mb-2">Our Story</h3>
          <ul className="space-y-2">
            <li>Ayodhya Ram Mandir</li>
            <li>Stone Adhesive</li>
            <li>Construction Chemical</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-green-700 font-bold text-lg mb-2">Categories</h3>
          <ul className="space-y-2">
            <li>Stone Care</li>
            <li>Stone Adhesive</li>
            <li>Construction Chemical</li>
          </ul>
        </div>
      </div>

      {/* Address Section */}
      <div className="max-w-screen-xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Corporate Office",
            address:
              "418, Happy Hallmark Shoppers, Vesu-Abhava Road, Surat, Gujarat -395017",
          },
          {
            title: "Manufacturing Office",
            address:
              "C-5/4, Hojiwala Industrial Estate, Road No. 8, Susml, Sachin-Alsana Road, Surat, Gujarat -394230",
          },
          {
            title: "Delhi Office",
            address:
              "Plot No 155, Ground Floor, Kh. No. 13/25, Udey Vihar Nilothi Extn. Near Manoj Shokin Farm House, Delhi -110041",
          },
          {
            title: "Bengaluru Office",
            address:
              "304/26 Ground Floor, Omkar Nilaya, 7th Main Road, Near Swastik Marble, Lakkasandra Extension, Bengaluru, Karnataka - 560030",
          },
          {
            title: "Hyderabad Office",
            address:
              "Shop no 11-5-198/1, Bhavani Nagar, Hyderabad, Telangana - 500081",
          },
        ].map((office, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-gray-800">{office.title}</h4>
            <p className="text-gray-600 text-sm">{office.address}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}
