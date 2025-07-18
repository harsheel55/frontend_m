import React from 'react';
import ProductSection from '../components/ProductSection';
import ProductGallerySection from '../components/SuitableSurfacePhotos';
// You might also have a navigation bar, footer, etc.

const ProductDetailPage: React.FC = () => {
  return (
    <div>
      {/* Your Navbar would go here */}
      
      <main>
        {/* The main product details section */}
        <ProductSection />
        
        {/* The new gallery section added right below it */}
        <ProductGallerySection />
        
        {/* Other sections like FAQs or Contact Forms could go here */}
      </main>
      
      {/* Your Footer would go here */}
    </div>
  );
};

export default ProductDetailPage;