import React from 'react';
import { openBooking } from '../lib/booking';

const variants = {
  gold: 'bg-gold text-black hover:bg-black hover:text-white',
  dark: 'bg-black text-white hover:bg-gold hover:text-black',
  outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const BookButton = ({ children = 'Book Your Free Inspection', variant = 'gold', size = 'md', source, className = '' }) => (
  <button
    type="button"
    onClick={() => openBooking(source)}
    className={`inline-flex items-center justify-center rounded-full font-bold transition-colors duration-300 shadow-lg shadow-gold/20 ${variants[variant]} ${sizes[size]} ${className}`}
  >
    {children}
  </button>
);

export default BookButton;
