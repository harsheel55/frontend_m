import React from 'react';
import DownloadButtons from './DownloadButtons';
import PhoneMockup from './PhoneMockup';

const DownloadSection: React.FC = () => {
  return (
    // Main section container with the light grey background and rounded corners
    <section className="font-sans bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">
          
          {/* Responsive grid for the two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left animate-fadeInUp">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight">
                Download the<br />
                <span className="text-green-600">Official App</span>
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
                Earn reward points instantly on each product you buy. Download the app and start earning today.
              </p>
              <div className="mt-8">
                <DownloadButtons />
              </div>
            </div>

            {/* Right Column: Phone Mockup */}
            <div className="flex justify-center lg:justify-end animate-fadeInUp [animation-delay:200ms]">
              <PhoneMockup />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;