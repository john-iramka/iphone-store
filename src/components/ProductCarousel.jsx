import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import iphone15Pro from '../assets/images/2025 Lineup.jpg';
import iphone15 from '../assets/images/2025 Lineup.jpg';
import iphone14Pro from '../assets/images/2025 Lineup.jpg';
import iphone13 from '../assets/images/2025 Lineup.jpg';
import iphoneSE from '../assets/images/2025 Lineup.jpg';
import iphone12 from '../assets/images/2025 Lineup.jpg';

const ProductCarousel = () => {
  const carouselRef = useRef(null);
  
  const products = [
    {
      badge: 'Bestseller',
      image: iphone15Pro,
      title: 'iPhone 15 Pro • Unlocked',
      desc: '256 GB • Titanium',
      rating: '★★★★★ 4.9/5 (1024)',
      price: '$899.99',
      oldPrice: '$1,099.00'
    },
    {
      badge: 'Bestseller',
      image: iphone15,
      title: 'iPhone 15 • Unlocked',
      desc: '128 GB • Black',
      rating: '★★★★☆ 4.7/5 (876)',
      price: '$699.00',
      oldPrice: '$829.00'
    },
    {
      badge: 'Bestseller',
      image: iphone14Pro,
      title: 'iPhone 14 Pro • Unlocked',
      desc: '256 GB • Space Black',
      rating: '★★★★★ 4.8/5 (2048)',
      price: '$749.00',
      oldPrice: '$1,099.00'
    },
    {
      badge: 'Bestseller',
      image: iphone13,
      title: 'iPhone 13 • Unlocked',
      desc: '128 GB • Midnight',
      rating: '★★★★☆ 4.6/5 (3876)',
      price: '$499.00',
      oldPrice: '$699.00'
    },
    {
      badge: 'Bestseller',
      image: iphoneSE,
      title: 'iPhone SE (2022)',
      desc: '64 GB • Midnight',
      rating: '★★★★☆ 4.4/5 (1532)',
      price: '$249.00',
      oldPrice: '$429.00'
    },
    {
      badge: 'Bestseller',
      image: iphone12,
      title: 'iPhone 12 • Unlocked',
      desc: '64 GB • Blue',
      rating: '★★★★☆ 4.5/5 (2914)',
      price: '$349.00',
      oldPrice: '$599.00'
    }
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800">Best Selling iPhones</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollCarousel(-1)}
              className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-black transition-colors"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => scrollCarousel(1)}
              className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-black transition-colors"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth gap-5 pb-5 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-md hover:border-primary transition-all"
              >
                <span className="inline-block bg-red-50 text-primary text-xs font-semibold px-3 py-1 rounded mb-4 uppercase">
                  {product.badge}
                </span>
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.desc}</p>
                <p className="text-yellow-400 text-sm mb-3">{product.rating}</p>
                <p className="font-bold text-primary text-lg">{product.price}</p>
                <p className="text-gray-400 text-sm line-through">{product.oldPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;