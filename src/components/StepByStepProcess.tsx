import React from 'react';
// Import relevant, high-quality icons from Lucide
import { Package, PaintBucket, Sparkles, Clock, Play } from 'lucide-react';
// Import a placeholder video thumbnail (replace with your actual image)
import videoThumbnail from '../assets/video-thumbnail.jpg'; // Ensure this path is correct

// Data-driven approach for clean and maintainable code
const processSteps = [
  {
    icon: <Package size={32} className="text-green-600" />,
    title: "Product Overview",
    points: [
      "Single component milky liquid",
      "Used for marble & granite",
      "Protects from mortar stains",
      "Prevents watermarks",
    ],
  },
  {
    icon: <PaintBucket size={32} className="text-green-600" />,
    title: "Preparation Steps",
    points: [
      "Remove all stains",
      "Wipe surface clean",
      "Surface must be fully dry",
    ],
  },
  {
    icon: <Sparkles size={32} className="text-green-600" />,
    title: "Application Process",
    points: [
      "Apply generous amount",
      "Use pump, brush, or sponge",
      "Low hand pressure",
      "Apply second coat after drying",
    ],
  },
  {
    icon: <Clock size={32} className="text-green-600" />,
    title: "Drying and Finishing",
    points: [
      "Dry at least 6 hours",
      "Lay stone after drying"
    ],
  },
];

const StepByStepProcess: React.FC = () => {
  return (
    <section className="font-sans bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 lg:mb-16 text-center lg:text-left animate-fadeInUp">
          Step-by-Step Process to Apply
        </h2>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Step Instructions */}
          <div className="space-y-10 animate-fadeInUp">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Icon Container */}
                <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                {/* Content Container */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {step.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Video Player Placeholder */}
          <div className="w-full animate-fadeInUp [animation-delay:200ms]">
            <div className="aspect-video bg-black rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl">
              {/* Optional: Add a thumbnail image */}
              <img src={videoThumbnail} alt="How to apply product tutorial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Centered Play Button with hover effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepByStepProcess;