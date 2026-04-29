import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Home, Factory, Hammer } from 'lucide-react';

const services = [
  {
    icon: <Factory size={40} className="text-gold mb-4" />,
    title: "Metal Roofing",
    desc: "The longest-lasting roof you can put on a Kentucky home. Energy-efficient, weather-resistant, and built to outlast the alternatives by decades."
  },
  {
    icon: <Home size={40} className="text-gold mb-4" />,
    title: "Shingle Roofing",
    desc: "Premium asphalt shingles installed with precision. The classic choice — reliable, cost-effective, and available in a range of styles to match your home."
  },
  {
    icon: <Shield size={40} className="text-gold mb-4" />,
    title: "Standing Seam",
    desc: "The gold standard in metal roofing. Concealed fasteners, a sleek profile, and superior performance in high-wind and heavy-rain conditions."
  },
  {
    icon: <Hammer size={40} className="text-gold mb-4" />,
    title: "General Renovations",
    desc: "Beyond the roof — siding, framing, stone, and interior renovation services for homeowners who want one trusted contractor for the full job."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-black mb-6"
          >
            Roofing Solutions Built for Kentucky Weather
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg"
          >
            Kentucky weather doesn't forgive a weak roof. From summer hailstorms to winter ice loads, every installation we do is built to handle what the Bluegrass State throws at it.
          </motion.p>
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
              className="bg-white border-t-2 border-gray-200 p-8 rounded-b-lg shadow-sm hover:border-gold hover:shadow-lg transition-all duration-300 group"
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
                <h3 className="text-xl font-serif font-bold text-gold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
