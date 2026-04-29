import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-black py-4 shadow-xl border-b border-gold/20 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Ginnova Construction LLC" className="h-24 md:h-32" />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white hover:text-gold transition-colors text-base font-semibold tracking-wide">Services</a>
          <a href="#why-us" className="text-white hover:text-gold transition-colors text-base font-semibold tracking-wide">Why Us</a>
          <a href="#process" className="text-white hover:text-gold transition-colors text-base font-semibold tracking-wide">Our Process</a>
          <a href="#contact" className="text-white hover:text-gold transition-colors text-base font-semibold tracking-wide">Contact</a>
          <a href="#booking" className="bg-gold text-black px-8 py-3 rounded-full font-bold text-base hover:bg-white transition-colors duration-300 shadow-lg shadow-gold/20">
            Book Free Inspection
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gold/20 shadow-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold py-3 hover:text-gold border-b border-white/10">Services</a>
          <a href="#why-us" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold py-3 hover:text-gold border-b border-white/10">Why Us</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold py-3 hover:text-gold border-b border-white/10">Our Process</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold py-3 hover:text-gold border-b border-white/10">Contact</a>
          <a href="#booking" onClick={() => setIsOpen(false)} className="bg-gold text-black text-center px-6 py-4 rounded-full font-bold text-lg mt-4">
            Book Free Inspection
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
