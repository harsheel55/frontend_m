import React from 'react';

const ContactForm: React.FC = () => {
  return (
    // The form itself, no extra wrappers needed
    <form 
      className="w-full space-y-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600">
        Get in touch with us
      </h2>
      
      {/* Inputs with simplified styling and focus states */}
      <input 
        type="text" 
        placeholder="Name" 
        className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-green-600 transition-colors" 
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-green-600 transition-colors" 
      />
      <input 
        type="tel" 
        placeholder="Number" 
        className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-green-600 transition-colors" 
      />
      <textarea 
        placeholder="Enquiry" 
        rows={4} 
        className="w-full border border-gray-400 rounded-md px-4 py-3 resize-none focus:outline-none focus:border-green-600 transition-colors" 
      />

      {/* Submit button styled to match the image */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white text-lg font-semibold rounded-md px-6 py-3 hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
      >
        Ask A Question →
      </button>
    </form>
  );
};

export default ContactForm;