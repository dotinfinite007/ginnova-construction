import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, FileCheck, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: <Award size={48} className="text-gold mb-6" />,
    title: "Premium Craftsmanship",
    desc: "Uncompromising quality and attention to detail in every installation."
  },
  {
    icon: <Globe size={48} className="text-gold mb-6" />,
    title: "Bilingual Service",
    desc: "English & Spanish / Hablamos Español. Clear communication for everyone."
  },
  {
    icon: <FileCheck size={48} className="text-gold mb-6" />,
    title: "Transparent Process",
    desc: "No surprises, no hidden fees. Honest estimates you can rely on."
  },
  {
    icon: <MapPin size={48} className="text-gold mb-6" />,
    title: "Local & Licensed",
    desc: "Proud to serve London, KY and surrounding Laurel County with integrity."
  }
];

const WhyGinnova = () => {
  return (
    <section id="why-us" className="bg-black py-24 border-y border-darker">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Why London, KY Homeowners Choose Ginnova
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-dark p-6 rounded-full border border-gold/20 mb-6 group hover:border-gold transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGinnova;
