import React, { useEffect } from 'react';
import { FORM_URL, FORM_ID } from '../lib/booking';

const EMBED_SCRIPT = 'https://api.nexum23.com/js/form_embed.js';

// Inline version of the CRM form (submissions land in the Ginnova sub-account).
const BookingForm = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const s = document.createElement('script');
    s.src = EMBED_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="book" className="bg-black py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-12 max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-5">
            Book Your Free Inspection
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Takes less than a minute. Our team will call you to confirm a day and time that works for you.
          </p>
          <ul className="text-gray-300 space-y-3 text-left inline-block">
            <li>✓ Free inspection</li>
            <li>✓ Written quote before any work</li>
            <li>✓ English &amp; Español</li>
          </ul>
        </div>
        <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={FORM_URL}
            id={`inline-${FORM_ID}`}
            title="Free Inspection Request"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Website - Free Inspection Request"
            data-height="1050"
            data-form-id={FORM_ID}
            className="w-full border-0"
            style={{ height: '1050px' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
