import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import HeroBanner from './components/HeroBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductCarousel from './components/ProductCarousel';
import FAQSection from './components/FAQSection';
import BannerSlider from './components/BannerSlider';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/next';


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
      <Analytics />
    </div>
  );
}

export default App;