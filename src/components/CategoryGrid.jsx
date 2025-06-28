
import iphone15Image from '../assets/images/iPhone 12 png.jpg';
const CategoryGrid = () => {
  const categories = [
    {
      label: 'IPHONE 15',
      labelClass: 'bg-gradient-to-r from-purple-500 to-orange-400 text-white px-2 py-1 rounded text-xs',
      headline: 'Seamless. Secure. Simply iPhone.',
      imageUrl: iphone15Image
    },
    {
      label: 'IPHONE 14',
      labelClass: 'bg-gradient-to-r from-blue-500 to-green-400 text-white px-2 py-1 rounded text-xs',
      headline: 'Pro Performance. Non-Pro Price.',
      imageUrl: iphone15Image
    },
    {
      label: 'IPHONE 13',
      labelClass: 'bg-gradient-to-r from-red-500 to-yellow-400 text-white px-2 py-1 rounded text-xs',
      headline: 'Value. Reliability. Perfection.',
      imageUrl: iphone15Image
    },
    {
      label: 'IPHONE 12',
      labelClass: 'bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-2 py-1 rounded text-xs',
      headline: 'Classic Design. Modern Power.',
      imageUrl: iphone15Image
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-wider text-sm text-gray-500 mb-2">
            Apple Certified <span className="text-primary">Pre-Owned</span> Devices
          </p>
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="mb-5 text-center">
                <span className={`inline-block ${category.labelClass}`}>
                  {category.label}
                </span>
              </div>
              
              <h3 className="text-center text-lg font-medium mb-8 flex-grow">
                {category.headline}
              </h3>
              
              <div className="flex justify-center items-end w-full h-44">
                <img 
                  src={category.imageUrl} 
                  alt={category.label}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;