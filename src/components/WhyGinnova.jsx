import React from 'react';
import { Award, Globe, FileCheck, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: <Award size={48} className="text-gold mb-6" />,
    title: "Premium Craftsmanship",
    desc: "We don't cut corners to cut costs. Every roof we install is built to the standard we'd put on our own homes — quality materials, clean work, and a result you can see from the street."
  },
  {
    icon: <Globe size={48} className="text-gold mb-6" />,
    title: "Bilingual Service",
    desc: "English & Spanish · Hablamos Español. We communicate clearly — in your language. No confusion, no miscommunication, no surprises. Just a straightforward process from the first call to the final inspection."
  },
  {
    icon: <FileCheck size={48} className="text-gold mb-6" />,
    title: "Transparent Process",
    desc: "You'll know the scope, the timeline, and the price before we ever pick up a tool. No hidden fees, no sudden change orders, no guesswork."
  },
  {
    icon: <MapPin size={48} className="text-gold mb-6" />,
    title: "Local & Licensed",
    desc: "We're not a national chain or a storm-chasing crew passing through. Ginnova is based here, licensed here, and building a reputation here — one roof at a time."
  }
];

const WhyGinnova = () => {
  return (
    <section id="why-us" className="bg-white py-16 md:py-24 border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2
            data-reveal="h"
            className="text-3xl md:text-5xl font-serif font-bold text-black mb-4"
          >
            Why Kentucky Homeowners Choose Ginnova
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div data-reveal="w" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              data-reveal="ctn"
              className="flex flex-col items-center text-center"
            >
              <div className="bg-gray-50 p-6 rounded-full border border-gray-200 mb-6 group hover:border-gold transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-black mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGinnova;
