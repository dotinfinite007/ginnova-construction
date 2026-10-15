import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BookButton from './BookButton';
import { openBooking } from '../lib/booking';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Ginnova' },
  { href: '#process', label: 'How It Works' },
  { href: '#book', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-12 h-20 md:h-24 flex justify-between items-center">
        <a href="#top" className="flex items-center h-full py-2" aria-label="Ginnova Construction home">
          <img src="/logo.png" alt="Ginnova Construction LLC" className="h-full w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-black hover:text-gold transition-colors text-base font-semibold tracking-wide">
              {l.label}
            </a>
          ))}
          <BookButton source="nav" size="md">Book Free Inspection</BookButton>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <BookButton source="nav-mobile" size="sm">Book Free</BookButton>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg py-4 px-6 flex flex-col">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="text-black text-lg font-semibold py-3 hover:text-gold border-b border-gray-100">
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setIsOpen(false); openBooking('menu'); }}
            className="bg-gold text-black text-center px-6 py-4 rounded-full font-bold text-lg mt-4"
          >
            Book Your Free Inspection
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
