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
    </div>
  );
}

export default App;
