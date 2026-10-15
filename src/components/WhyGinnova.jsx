import React from 'react';
import { Globe, FileCheck, MapPin, Hammer } from 'lucide-react';

const pillars = [
  {
    icon: <MapPin size={40} className="text-gold" />,
    title: 'Local to Kentucky',
    desc: "We're based in London, KY — not a crew passing through after a storm. We're here before and after the job.",
  },
  {
    icon: <Globe size={40} className="text-gold" />,
    title: 'Bilingual Service',
    desc: 'English & Spanish. Hablamos Español. We explain every step in your language.',
  },
  {
    icon: <FileCheck size={40} className="text-gold" />,
    title: 'Clear Written Quote',
    desc: 'After the inspection you get the scope and the price in writing before any work starts.',
  },
  {
    icon: <Hammer size={40} className="text-gold" />,
    title: 'One Contractor',
    desc: 'Roof, siding and framing handled by one team, so you have one point of contact for the whole job.',
  },
];

const WhyGinnova = () => (
  <section id="why-us" className="bg-white py-16 md:py-24 scroll-mt-24">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
          Why Homeowners Call Ginnova
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {pillars.map((p) => (
          <div key={p.title} className="flex flex-col items-center text-center">
            <div className="bg-gray-50 p-5 rounded-full border border-gray-200 mb-5">{p.icon}</div>
            <h3 className="text-xl font-serif font-bold text-black mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyGinnova;
