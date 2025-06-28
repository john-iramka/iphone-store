import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const links = [
    {
      title: "Shop",
      items: ["iPhone", "iPad", "MacBook", "Apple Watch", "Accessories"]
    },
    {
      title: "Support",
      items: ["Contact Us", "FAQs", "Shipping", "Returns", "Warranty"]
    },
    {
      title: "Company",
      items: ["About Us", "Blog", "Careers", "Press", "Sustainability"]
    },
    {
      title: "Legal",
      items: ["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR"]
    }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} iPhone Center. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-4 bg-gray-300 rounded-sm"></div>
              <span className="text-gray-400 text-sm">United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;