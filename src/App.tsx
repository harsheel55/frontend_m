import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import StepByStepProcess from './components/StepByStepProcess';
import FeaturesAndBenefits from './components/FeaturesAndBenefits';
import DownloadSection from './components/DownloadSection';
import ContactAndFAQ from './components/ContactAndFAQ';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <ProductDetailPage />
      <StepByStepProcess />
      <FeaturesAndBenefits />
      <DownloadSection />
      <ContactAndFAQ />
      <Footer />
    </>
  );
}

export default App;
