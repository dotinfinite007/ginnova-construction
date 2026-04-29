import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Home, Factory, Hammer } from 'lucide-react';

const services = [
  {
    icon: <Factory size={40} className="text-gold mb-4" />,
    title: "Metal Roofing",
    desc: "Durable, energy-efficient metal roofs built to withstand severe weather."
  },
  {
    icon: <Home size={40} className="text-gold mb-4" />,
    title: "Shingle Roofing",
    desc: "High-quality asphalt shingles available in multiple styles and colors."
  },
  {
    icon: <Shield size={40} className="text-gold mb-4" />,
    title: "Standing Seam",
    desc: "Premium, sleek, and highly protective standing seam metal installations."
  },
  {
    icon: <Hammer size={40} className="text-gold mb-4" />,
    title: "General Renovations",
    desc: "Expert craftsmanship for exterior and interior home improvements."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-dark py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Roofing Solutions Built for Kentucky Weather
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border-t-2 border-gold/50 p-8 rounded-b-lg shadow-lg hover:border-gold hover:shadow-gold/10 transition-all duration-300 group"
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
                <h3 className="text-xl font-serif font-bold text-gold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
