import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div data-reveal="w" className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 mb-12">
          {/* Left Column (Logo) */}
          <div data-reveal="ctn" className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <img src="/logo.png" alt="Ginnova Construction LLC" className="h-32 md:h-40 mb-2" loading="lazy" />
          </div>

          {/* Center Column (Links) */}
          <div data-reveal="ctn" className="flex flex-col items-center justify-center space-y-3 order-3 md:order-2">
            <a href="#services" className="text-gray-600 hover:text-gold transition-colors text-sm min-h-[48px] flex items-center">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-gold transition-colors text-sm min-h-[48px] flex items-center">Why Us</a>
            <a href="#process" className="text-gray-600 hover:text-gold transition-colors text-sm min-h-[48px] flex items-center">Our Process</a>
            <a href="tel:3038748955" className="text-gray-600 hover:text-gold transition-colors text-sm min-h-[48px] flex items-center">Contact</a>
          </div>

          {/* Right Column (Contact) */}
          <div data-reveal="ctn" className="flex flex-col items-center md:items-end text-center md:text-right order-1 md:order-3">
            <a href="tel:3038748955" data-mag className="text-2xl font-bold text-gold mb-2 hover:text-black transition-colors">
              (303) 874-8955
            </a>
            <p className="text-black italic mb-2">Hablamos Español</p>
            <p className="text-gray-500 text-sm">
              Proudly Serving All of Kentucky
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-xs text-center">
            &copy; 2025 Ginnova Construction LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
