import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    // Main container with transitions for a smooth visual change
    <div
      className={`
        rounded-lg transition-all duration-300 ease-in-out
        ${isOpen ? 'bg-green-600 text-white' : 'bg-white border border-gray-300'}
      `}
    >
      {/* Button to toggle the accordion state */}
      <button
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`font-bold ${isOpen ? 'text-white' : 'text-green-600'}`}>
          {question}
        </span>
        
        {/* Icon container styled to match the image */}
        <div
          className={`
            w-6 h-6 rounded-md flex items-center justify-center transition-colors
            ${isOpen ? 'bg-white' : 'bg-green-600'}
          `}
        >
          {isOpen 
            ? <IoIosArrowUp className="text-green-600" /> 
            : <IoIosArrowDown className="text-white" />}
        </div>
      </button>

      {/* Answer panel with smooth slide-down animation */}
      <div
        className={`
          overflow-hidden transition-[max-height] duration-500 ease-in-out
          ${isOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <div className="px-4 pb-4 text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;