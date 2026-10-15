import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { openBooking, PHONE_TEL } from '../lib/booking';

// Mobile: sticky bottom bar (Book + Call). Desktop: the CRM chat bubble is already on the page,
// so we only add a floating "Book" pill above it.
const ContactWidget = () => (
  <>
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-3 py-2 flex gap-2 pr-20">
      <button
        type="button"
        onClick={() => openBooking('sticky-mobile')}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-black font-bold rounded-full py-3"
      >
        <CalendarCheck size={18} /> Book Free Inspection
      </button>
      <a
        href={PHONE_TEL}
        className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-bold rounded-full px-4 py-3"
        aria-label="Call us"
      >
        <Phone size={18} /> Call
      </a>
    </div>

    <button
      type="button"
      onClick={() => openBooking('floating-desktop')}
      className="hidden lg:inline-flex fixed bottom-28 right-6 z-40 items-center gap-2 bg-gold text-black font-bold rounded-full px-5 py-3 shadow-xl hover:bg-black hover:text-white transition-colors"
    >
      <CalendarCheck size={18} /> Book Free Inspection
    </button>
  </>
);

export default ContactWidget;
