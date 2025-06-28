import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import faqImage from '../assets/images/faq.png';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const faqs = [
    {
      question: "What condition are your iPhones in?",
      answer: "All our iPhones are Apple Certified Refurbished and graded by condition—Excellent, Good, or Fair—so you know exactly what to expect. Every device is professionally cleaned, tested, and fully functional with a fresh battery."
    },
    {
      question: "Do your iPhones come with original accessories?",
      answer: "Yes! Every iPhone comes with an original Apple charging cable and may include additional accessories based on availability. All accessories are tested and certified to work perfectly with your device."
    },
    {
      question: "What if I'm not satisfied with my iPhone?",
      answer: "We offer a 30-day no-questions-asked return policy. If you're not completely satisfied with your iPhone, simply return it for a full refund or exchange within 30 days of delivery."
    },
    {
      question: "How long is the warranty on refurbished iPhones?",
      answer: "All our iPhones come with a 1-year warranty that covers any manufacturing defects. You can also extend the warranty up to 3 years for additional peace of mind."
    },
    {
      question: "Are your iPhones truly authentic Apple products?",
      answer: "Absolutely. We only sell 100% authentic Apple products that have been certified through Apple's rigorous refurbishment process. No clones, no knockoffs—just genuine iPhones at unbeatable prices."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
              EVERYTHING YOU <span className="text-primary">NEED TO KNOW</span>
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">iPhone Center FAQs</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
            {/* Image container - full width on mobile, then shifts to side */}
            <div className="w-full lg:w-1/3 flex items-center justify-center order-first lg:order-none">
              <img 
                src={faqImage} 
                alt="Customer support team" 
                className="w-full h-auto max-h-96 object-contain md:object-cover rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
            
            {/* FAQ items - full width on mobile */}
            <div className="w-full lg:w-2/3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-200 py-4 ${activeIndex === index ? 'active' : ''}`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left font-medium md:font-bold text-sm md:text-base"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    {activeIndex === index ? (
                      <FiMinus className="text-primary text-lg md:text-xl font-bold" />
                    ) : (
                      <FiPlus className="text-primary text-lg md:text-xl font-bold" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <div className="mt-3 text-gray-600 text-sm md:text-base">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;