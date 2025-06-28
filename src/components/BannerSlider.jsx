import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import summerSaleBg from '../assets/images/download (1).jpg';
import newArrivalsBg from '../assets/images/1.png';
import tradeInBg from '../assets/images/iphone 15.png';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Summer Sale!",
      subtitle: "Up to 50% off select models",
      cta: "Shop Now",
      image: summerSaleBg
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh stock of iPhone 15 Pro",
      cta: "View Details",
      image: newArrivalsBg
    },
    {
      title: "Trade-In Bonus",
      subtitle: "Get extra $50 for your old device",
      cta: "Learn More",
      image: tradeInBg
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden h-72 xs:h-64 sm:h-80 md:h-96 lg:h-[30rem] bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={`${slide.title} banner`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 text-white max-w-4xl mx-auto">
            <h2 className="text-3xl xs:text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
              {slide.title}
            </h2>
            <p className="text-xl sm:text-xl md:text-2xl mb-4 sm:mb-6">
              {slide.subtitle}
            </p>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors focus:outline-none"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors focus:outline-none"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default BannerSlider;