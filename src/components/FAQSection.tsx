import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
  // ... (using the same faqData from the previous example)
  {
    question: "1. What is Magik Back Coat used for?",
    answer: "Protects marble & granite slabs from watermarks, stains, and discoloration during installation."
  },
  {
    question: "2. When should I apply it?",
    answer: "Apply before tile installation to ensure best results and bonding."
  },
  {
    question: "3. How do I prepare the surface?",
    answer: "Clean and dry the surface thoroughly before applying the product."
  },
  {
    question: "4. How do I apply Magik Back Coat properly?",
    answer: "Use a brush or roller to apply an even layer on the back side of the tile."
  },
  {
    question: "5. Do I need a second coat?",
    answer: "Only if required by surface absorption; one coat is usually sufficient."
  }
];

const FAQSection: React.FC = () => {
  return (
    // Logical container for the FAQ content
    <div className="w-full">
      {/* Title with mixed font weights to match the image */}
      <h2 className="text-3xl lg:text-4xl text-green-600 mb-3">
        Frequently <span className="font-bold">asked</span> questions
      </h2>
      <p className="text-gray-500 text-base mb-8">
        Construction chemicals are specialty products used to enhance concrete strength, durability, waterproofing, and overall construction quality in civil structures.
      </p>
      
      {/* List of FAQ items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpenDefault={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;