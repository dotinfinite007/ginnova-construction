import React from 'react';
import BookButton from './BookButton';

const steps = [
  {
    number: '01',
    title: 'Book Your Free Inspection',
    desc: "Fill out the short form. Tell us what's going on and we'll call you to set a day and time.",
  },
  {
    number: '02',
    title: 'We Inspect & Explain',
    desc: 'We check your roof, show you what we find, and walk you through your options.',
  },
  {
    number: '03',
    title: 'Get Your Written Quote',
    desc: 'You receive a written quote with the scope of work. You decide — no pressure.',
  },
];

const Process = () => (
  <section id="process" className="bg-gray-50 py-16 md:py-24 scroll-mt-24">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
          How It Works
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {steps.map((s) => (
          <div key={s.number} className="flex flex-col items-center text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center text-2xl font-serif font-bold text-gold mb-5">
              {s.number}
            </div>
            <h3 className="text-2xl font-serif font-bold text-black mb-3">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <BookButton source="process" size="lg">Book My Free Inspection</BookButton>
      </div>
    </div>
  </section>
);

export default Process;
