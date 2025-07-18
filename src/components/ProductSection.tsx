// File: website/src/components/ProductSection.tsx
import React from "react";
import { Calculator, Download, FileText } from "lucide-react";
import image1 from "../assets/mmc_product.png";

const ProductSection: React.FC = () => {
  return (
    // Enhanced padding for better spacing on all screen sizes
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8 lg:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main content container with refined gaps */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Product Image Section with animation and hover effect */}
          <div className="w-full lg:w-1/2 animate-fadeInUp">
            {/* Added 'group' for hover effect on child image */}
            <div className="bg-white rounded-xl shadow-md p-4 group"> 
              <div className="aspect-square rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center overflow-hidden">
                <img
                  src={image1}
                  alt="Magik Impregnator WB"
                  // Responsive image sizing and smooth transition for hover effect
                  className="w-full bg-[#f4f4f4] h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Product Details Section with staggered animation */}
          {/* Staggered animation using arbitrary value for delay */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 animate-fadeInUp [animation-delay:200ms]">
            
            {/* Product Title with responsive text size */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-700 leading-tight">
              MAGIK IMPREGNATOR WB
            </h1>

            {/* Product Description with responsive text size */}
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                A water-based impregnating sealer for stone & tile surfaces: natural, artificial, or vitrified.
                Suitable for polished & unpolished surfaces with no special prep needed.
                Ideal for high-traffic areas like kitchens & bathrooms. Perfect for outdoor applications too.
                Works for both residential & commercial sites.
              </p>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="text-md font-semibold text-green-700">
                Product Code: S227
              </div>
              <div className="text-md font-semibold text-green-700">
                Categories: Sealer, Stone Care Range
              </div>
            </div>

            {/* Action Buttons with enhanced styling and hover effects */}
            <div className="flex flex-wrap gap-4 items-center pt-4">
              {/* Added consistent transition and hover effects */}
              <button className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-800">Coverage Calculator</span>
              </button>

              <button className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-800">Download TDS</span>
              </button>

              <button className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-800">Download MSDS</span>
              </button>
            </div>

            {/* Inquire Button with enhanced styling and hover effect */}
            <button className="w-full max-w-lg mt-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-1">
              Inquire About This Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;