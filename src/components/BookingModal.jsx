import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { FORM_URL, FORM_ID } from '../lib/booking';

const AUTO_OPEN_MS = 15000;
const SESSION_KEY = 'ginnova_popup_shown';

const readFlag = () => {
  try { return sessionStorage.getItem(SESSION_KEY) === '1'; } catch { return false; }
};
const writeFlag = () => {
  try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* storage unavailable */ }
};

const BookingModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => { setOpen(true); writeFlag(); };
    window.addEventListener('ginnova:open-booking', onOpen);

    // "Book your free inspection today" pop-up: once per visit, after the visitor has had time to read.
    const timer = setTimeout(() => {
      if (!readFlag()) { setOpen(true); writeFlag(); }
    }, AUTO_OPEN_MS);

    return () => {
      window.removeEventListener('ginnova:open-booking', onOpen);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-6"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full sm:max-w-xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-3 border-b border-gray-100">
          <div>
            <h2 id="booking-modal-title" className="text-2xl md:text-3xl font-serif font-bold text-black">
              Book Your Free Inspection Today
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Tell us what's going on. Our team will call you to set a day and time.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="shrink-0 p-2 rounded-full hover:bg-gray-100 text-gray-600"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
        <div className="overflow-y-auto flex-1">
          <iframe
            src={FORM_URL}
            id={`popup-${FORM_ID}`}
            title="Free Inspection Request"
            className="w-full border-0"
            style={{ height: '1050px' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
