import React from 'react';
import ContactForm from './ContactForm';
import FAQSection from './FAQSection';

const ContactAndFAQSection: React.FC = () => {
  return (
    <section className="font-sans bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive grid for the two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Form with animation */}
          <div className="animate-fadeInUp">
            <ContactForm />
          </div>

          {/* Right Column: FAQ Section with staggered animation */}
          <div className="animate-fadeInUp [animation-delay:200ms]">
            <FAQSection />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactAndFAQSection;