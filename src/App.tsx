<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import Navbar from './components/Navbar';
import IndustriesSection from './components/IndustriesSection';
import CategoriesSection from './components/CategoriesSection';
import ServicesSection from './components/ServicesSection';
import CaseStudySection from './components/CaseStudySection';
import MagikStories from './components/MagikStories';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      {/* Other components */}
      <IndustriesSection />
      <CategoriesSection />
      <ServicesSection />
      <CaseStudySection />
      <MagikStories />
      <ProductShowcase />
      <Footer />
>>>>>>> 4b8a4726d4f313eb634b53688c3d5096bab56eff
    </div>
  );
}

export default App;
