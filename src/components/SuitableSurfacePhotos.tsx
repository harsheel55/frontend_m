import React from 'react';

// --- Placeholder Imports ---
// Replace these with your actual image paths
import naturalStoneImg from '../assets/suitable_surface(1).png';
import graniteImg from '../assets/suitable_surface(2).png';
import marbleImg from '../assets/suitable_surface(3).png';
import photo1 from '../assets/photo(1).png';
import photo2 from '../assets/photo(2).png';
import photo3 from '../assets/photo(3).png';
// -------------------------

// Data for the "Suitable Surface" section
const suitableSurfaces = [
  { name: 'Natural Stone', imageUrl: naturalStoneImg },
  { name: 'Granite', imageUrl: graniteImg },
  { name: 'Marbles', imageUrl: marbleImg },
];

// Data for the "Photos" section
const galleryPhotos = [
  { alt: 'Modern interior with glossy floors', imageUrl: photo1 },
  { alt: 'Luxury bathroom with marble wall and bathtub', imageUrl: photo2 },
  { alt: 'Polished marble countertop', imageUrl: photo3 },
];

const ProductGallerySection: React.FC = () => {
  return (
    <section className="font-sans bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive grid for the two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Suitable Surface */}
          <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Suitable Surface
            </h2>
            <div className="flex flex-wrap justify-start gap-8 sm:gap-12">
              {suitableSurfaces.map((surface) => (
                <div key={surface.name} className="flex flex-col items-center gap-4 group">
                  <img
                    src={surface.imageUrl}
                    alt={surface.name}
                    className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                  />
                  <span className="font-bold text-gray-800 text-md">
                    {surface.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photos */}
          <div className="animate-fadeInUp [animation-delay:200ms]">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Photos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="rounded-lg group shadow-md">
                  <img
                    src={photo.imageUrl}
                    alt={photo.alt}
                    className="w-full h-full object-cover aspect-[4/5] sm:aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;