import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gold/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 mb-12">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-gold mb-2 tracking-wider">
              GINNOVA
            </h3>
            <span className="text-white font-medium mb-2">Construction LLC</span>
            <p className="text-gray-400 text-sm">
              Quality Construction & Renovation
            </p>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <a href="#services" className="text-gray-300 hover:text-gold transition-colors text-sm">Services</a>
            <a href="#why-us" className="text-gray-300 hover:text-gold transition-colors text-sm">Why Choose Us</a>
            <a href="#process" className="text-gray-300 hover:text-gold transition-colors text-sm">Our Process</a>
            <a href="#contact" className="text-gray-300 hover:text-gold transition-colors text-sm">Contact</a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <a href="tel:3038748955" className="text-2xl font-bold text-gold mb-2 hover:text-white transition-colors">
              (303) 874-8955
            </a>
            <p className="text-white italic mb-2">Hablamos Español</p>
            <p className="text-gray-400 text-sm">
              London, KY & Surrounding Areas
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/30 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-xs text-center">
            &copy; 2025 Ginnova Construction LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
