import React from "react";
// Import professional icons that match the feature concepts
// Import your main image
import showcaseImage from "../assets/product-showcase.png";
import features1 from "../assets/features-photo/features-photo(1).png";
import features2 from "../assets/features-photo/features-photo(2).png";
import features3 from "../assets/features-photo/features-photo(3).png";
import features4 from "../assets/features-photo/features-photo(4).png";
import features5 from "../assets/features-photo/features-photo(5).png";

const featuresData = [
  {
    image: features1,
    title: "Anti-Stain",
  },
  {
    image: features2,
    title: "Stain Repellency",
  },
  {
    image: features3,
    title: "Durable",
  },
  {
    image: features4,
    title: "Ecological",
  },
  {
    image: features5,
    title: "Aesthetic Looks Remain As It Is",
  },
];
const FeaturesAndBenefits: React.FC = () => {
  return (
    <section className="font-sans bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive two-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Image */}
          <div className="animate-fadeInUp">
            <img
              src={showcaseImage}
              alt="Modern living room with terrazzo flooring"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Column: Features */}
          <div className="flex flex-col items-start gap-8 animate-fadeInUp [animation-delay:200ms]">
            {/* Section Title */}
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
              FEATURES & BENEFITS
            </h2>

            {/* Responsive Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full">
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm aspect-square flex flex-col items-center justify-center p-4 text-center group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndBenefits;
