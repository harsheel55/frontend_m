import React from 'react';
// We'll use icons from the popular 'react-icons' library
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const DownloadButtons: React.FC = () => {
  // In a real application, you would replace the '#' with your actual app store URLs.
  // We use <a> tags because they are semantically correct for navigation/links.

  return (
    // This container ensures the buttons are centered on mobile and start-aligned on larger screens.
    // The 'font-sans' class assumes 'Inter' is your default sans-serif font.
    <div className="font-sans flex flex-wrap justify-center lg:justify-start gap-4">
      
      {/* Google Play Button */}
      <a
        href="/android" // Replace with your Google Play Store link
        className="
          flex items-center gap-3 bg-black text-white rounded-xl 
          px-5 py-3 shadow-md
          transform transition-transform duration-300 ease-in-out hover:scale-105
        "
      >
        <FaGooglePlay className="h-7 w-7" />
        <div>
          <p className="text-xs">Download our</p>
          <p className="text-xl font-semibold leading-tight">Android App</p>
        </div>
      </a>

      {/* Apple App Store Button */}
      <a
        href="app_store" // Replace with your Apple App Store link
        className="
          flex items-center gap-3 bg-black text-white rounded-xl 
          px-5 py-3 shadow-md
          transform transition-transform duration-300 ease-in-out hover:scale-105
        "
      >
        {/* Apple icon is often slightly larger visually, so h-8 w-8 works well */}
        <FaApple className="h-8 w-8" />
        <div>
          <p className="text-xs">Download on the</p>
          <p className="text-xl font-semibold leading-tight">App Store</p>
        </div>
      </a>
      
    </div>
  );
};

export default DownloadButtons;