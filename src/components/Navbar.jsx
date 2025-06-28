import { useState } from 'react';
import logoImage from '../assets/images/logo.jpg';
import { FiSearch, FiUser, FiShoppingCart, FiHelpCircle, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState('Hot Deals');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const categories = [
    { name: 'Hot Deals', icon: '✨' },
    'iPhone 15 Series',
    'iPhone 14 Series',
    'iPhone 13 Series',
    'iPhone 12 Series',
    'iPads',
    'Apple Watches',
    'MacBooks',
    'Accessories'
  ];

  return (
    <>
      {/* Main Nav */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="bg-white text-black py-2 md:py-4">
          <div className="container mx-auto px-4">
            {/* Top Row - Mobile Menu, Logo, and Icons */}
            <div className="flex items-center justify-between gap-4 mb-2 md:mb-0">
              {/* Mobile menu button - left side */}
              <button 
                className="lg:hidden text-black text-xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <FiMenu />
              </button>

              {/* Logo - centered on mobile */}
              <div className="lg:hidden flex-1 flex justify-center min-w-[120px]">
                <img 
                  src={logoImage} 
                  alt="iPhone Center Logo" 
                  className="h-10"
                />
              </div>

              {/* Logo - left side on desktop */}
              <div className="hidden lg:block min-w-[150px]">
                <img 
                  src={logoImage} 
                  alt="iPhone Center Logo" 
                  className="h-14"
                />
              </div>

              {/* Desktop Search - centered */}
              <div className="hidden lg:block flex-1 max-w-[600px] relative mx-4">
                <input
                  type="text"
                  placeholder="Search for iPhones, iPads and more..."
                  className="w-full py-2 md:py-3 px-5 pl-12 rounded-full bg-gray-100 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl" />
              </div>

              {/* Navigation Icons - right side */}
              <div className="flex items-center gap-3 md:gap-5">
                <a href="#" className="hidden md:block border border-black text-black hover:bg-black hover:text-white px-3 md:px-4 py-1 md:py-2 rounded-full transition-colors text-sm md:text-base">
                  Trade-in
                </a>
                <a href="#" className="hidden md:block text-black hover:text-primary transition-colors text-sm md:text-base">
                  <FiHelpCircle className="inline mr-1 text-black" />
                  Need help?
                </a>
                <button className="text-black text-lg md:text-xl">
                  <FiUser />
                </button>
                <button className="text-black text-lg md:text-xl relative">
                  <FiShoppingCart />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Search - appears below logo */}
            <div className="lg:hidden mb-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for iPhones, iPads..."
                  className="w-full py-2 px-5 pl-10 rounded-full bg-gray-100 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-lg" />
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-2 px-4">
            <div className="flex flex-col space-y-3">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="py-2 px-2 text-black border-b border-gray-100"
                >
                  {typeof category === 'object' ? category.name : category}
                </a>
              ))}
              <a href="#" className="py-2 px-2 text-black border-b border-gray-100">
                Trade-in
              </a>
              <a href="#" className="py-2 px-2 text-black">
                <FiHelpCircle className="inline mr-2" />
                Need help?
              </a>
            </div>
          </div>
        )}

        {/* Category Nav */}
        <div className="bg-gray-100 border-t border-b border-gray-200 py-2 md:py-4 overflow-x-auto">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 md:gap-6">
              {categories.map((category, index) => {
                const isActive = activeCategory === (typeof category === 'string' ? category : category.name);
                return (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(typeof category === 'string' ? category : category.name);
                    }}
                    className={`whitespace-nowrap text-sm md:text-base font-medium transition-colors px-2 py-1 ${
                      isActive ? 'text-primary' : 'text-black hover:text-primary'
                    } ${typeof category !== 'string' && 'flex items-center gap-1'}`}
                  >
                    {typeof category !== 'string' && <span>{category.icon}</span>}
                    <span>{typeof category === 'string' ? category : category.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;