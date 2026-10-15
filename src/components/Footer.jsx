import React from 'react';
import BookButton from './BookButton';

const Footer = () => (
  <footer id="contact" className="bg-white pt-14 pb-28 lg:pb-10 border-t border-gray-200">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-10">
        <div className="flex justify-center md:justify-start">
          <img src="/logo.png" alt="Ginnova Construction LLC" className="h-24 md:h-28 w-auto" loading="lazy" />
        </div>
        <nav className="flex flex-col items-center gap-3">
          <a href="#services" className="text-gray-600 hover:text-gold text-sm">Services</a>
          <a href="#why-us" className="text-gray-600 hover:text-gold text-sm">Why Ginnova</a>
          <a href="#process" className="text-gray-600 hover:text-gold text-sm">How It Works</a>
        </nav>
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <BookButton source="footer" size="md">Book Free Inspection</BookButton>
          <p className="text-black italic">Hablamos Español</p>
          <p className="text-gray-500 text-sm">Serving Kentucky homeowners · Based in London, KY</p>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6 text-center">
        <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Ginnova Construction LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
