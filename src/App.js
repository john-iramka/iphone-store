import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import HeroBanner from './components/HeroBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductCarousel from './components/ProductCarousel';
import FAQSection from './components/FAQSection';
import BannerSlider from './components/BannerSlider';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Navbar />
      <HeroBanner />
      <CategoryGrid />
      <ProductCarousel />
      <FAQSection />
      <BannerSlider />
      <Footer />
    </div>
  );
}

export default App;