import React from 'react';
// Make sure this path is correct for your project structure
import phoneImage from '../assets/phone-mockup(2).png'; 

const PhoneMockup: React.FC = () => {
  return (
    // The image itself, sized responsively.
    // The 'drop-shadow' adds a realistic depth.
    <img
      src={phoneImage}
      alt="App screenshot showing rewards on a phone"
      className="w-60 md:w-64 lg:w-72 drop-shadow-2xl"
    />
  );
};

export default PhoneMockup;