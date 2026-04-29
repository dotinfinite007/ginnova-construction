import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-md shadow-gold/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-serif font-bold text-gold tracking-wider">
          GINNOVA <span className="text-white text-sm tracking-normal block md:inline md:ml-2">Construction LLC</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white hover:text-gold transition-colors text-sm font-medium">Services</a>
          <a href="#why-us" className="text-white hover:text-gold transition-colors text-sm font-medium">Why Us</a>
          <a href="#process" className="text-white hover:text-gold transition-colors text-sm font-medium">Process</a>
          <a href="#contact" className="text-white hover:text-gold transition-colors text-sm font-medium">Contact</a>
          <a href="#booking" className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
            Book Inspection
          </a>
        </div>
        
        {/* Mobile Menu Button - simplified for now */}
        <div className="md:hidden">
          <a href="#booking" className="bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
