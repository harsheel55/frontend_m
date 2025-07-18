import React from 'react';
// Social media icons from react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// Lucide icons for address section
import image from '../assets/image.png'; // Ensure this path is correct
import { Building2, Factory, Landmark, MapPin } from 'lucide-react';

// --- Data for Footer Links & Addresses (cleaner and easier to manage) ---
const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/privacy', label: 'Privacy Policy' },
];

const categories = [
  { href: '/stone-care', label: 'Stone Care' },
  { href: '/stone-adhesive', label: 'Stone Adhesive' },
  { href: '/construction-chemical', label: 'Construction Chemical' },
];

const addresses = [
  { 
    icon: <Building2 size={32} className="text-green-600" />,
    title: 'Corporate Office',
    lines: ['418, Happy Hallmark Shoppers, Vesu-Abhava Road,', 'Surat, Gujarat - 395017'] 
  },
  { 
    icon: <Factory size={32} className="text-green-600" />,
    title: 'Manufacturing Office',
    lines: ['C-5/4, Hojiwala Industrial Estate, Road No. 8, Susml,', 'Sachin-alsana Road, Surat, Gujarat - 394230'] 
  },
  { 
    icon: <Landmark size={32} className="text-green-600" />,
    title: 'Delhi Office',
    lines: ['Plot No 155, Ground Floor, Kh. No. 13/25, Udey Vihar', 'Nilothi Extn. Near Manoj Shokin Farm House,', 'Delhi - 110041'] 
  },
  { 
    icon: <MapPin size={32} className="text-green-600" />, // Using generic icons for other cities
    title: 'Bengaluru Office',
    lines: ['304/26 Ground Floor, Omkar Nilaya, 7th Main Road,', 'Near Swastik Marble Lakkasandra Extension,', 'Bengaluru, Karnataka - 560030'] 
  },
  { 
    icon: <MapPin size={32} className="text-green-600" />,
    title: 'Hyderabad Office',
    lines: ['Shop no 11-5-198/1, Bhavani Nagar, Hyderabad,', 'Telangana - 500081'] 
  },
];
// -----------------------------------------------------------------------

const Footer: React.FC = () => {
  return (
    <footer className="font-sans bg-[#f7f7f7] text-gray-700 py-16 lg:py-20 animate-fadeInUp">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid for Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src= {image} alt="MMC Logo" className="w-12 h-12  p-1" />
              <span className="text-gray-600 font-semibold text-sm leading-tight">A STONE CARE<br/>SOLUTION</span>
            </div>
            <div>
              <h3 className="text-green-700 font-bold mb-4">FOLLOW US</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/MarbleMagikCorporation" className="w-9 h-9 flex items-center justify-center bg-green-600 text-white rounded-md transition-transform hover:scale-110"><FaFacebookF /></a>
                <a href="https://www.instagram.com/marblemagik/" className="w-9 h-9 flex items-center justify-center bg-green-600 text-white rounded-md transition-transform hover:scale-110"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/marble-magik-corporations/" className="w-9 h-9 flex items-center justify-center bg-green-600 text-white rounded-md transition-transform hover:scale-110"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com/@marblemagikcorporation3188" className="w-9 h-9 flex items-center justify-center bg-green-600 text-white rounded-md transition-transform hover:scale-110"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-green-700 font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3 text-gray-800">
              {quickLinks.map(link => (
                <li key={link.href}><a href={link.href} className="hover:text-green-600 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-green-700 font-bold mb-6">CATEGORIES</h3>
            <ul className="space-y-3 text-gray-800">
              {categories.map(cat => (
                <li key={cat.href}><a href={cat.href} className="hover:text-green-600 transition-colors">{cat.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address */}
          <div>
            <h3 className="text-green-700 font-bold mb-6">ADDRESS</h3>
            <ul className="space-y-6">
              {addresses.map(addr => (
                <li key={addr.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{addr.icon}</div>
                  <div>
                    <p className="font-bold text-gray-800">{addr.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {addr.lines.join(' ')}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;