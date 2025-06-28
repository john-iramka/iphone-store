import { useEffect, useState } from 'react';

const PromoBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-orange-400 text-black py-3 font-bold text-sm overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          Get $100 off iPhone 15 Pro with code IPHONE100*{' '}
          <a href="#" className="underline font-bold ml-1">
            Shop now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-orange-400 text-black py-3 text-center font-bold text-sm">
      Get $100 off iPhone 15 Pro with code IPHONE100*{' '}
      <a href="#" className="underline font-bold ml-1">
        Shop now
      </a>
    </div>
  );
};

export default PromoBanner;