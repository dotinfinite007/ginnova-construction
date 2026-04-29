import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Ginnova replaced our entire roof after storm damage and the whole process was smooth from start to finish. Professional crew, clean work, and they kept us informed the whole time.",
    name: "James R.",
    location: "Lexington, KY"
  },
  {
    quote: "We needed someone we could communicate with easily — Ginnova's bilingual team made everything so much simpler. The metal roof they installed looks incredible and we couldn't be happier.",
    name: "Maria L.",
    location: "Corbin, KY"
  },
  {
    quote: "Fair pricing, honest people, and outstanding craftsmanship. I've already recommended Ginnova to two of my neighbors. If you need a roofer in Kentucky, these are your guys.",
    name: "Tom W.",
    location: "Louisville, KY"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-black mb-4"
          >
            What Our Clients Are Saying
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gold/30 transition-colors duration-300 flex flex-col h-full relative shadow-sm"
            >
              <div className="flex space-x-1 mb-6 text-gold">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 text-lg italic mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="text-gold font-bold text-lg">{testimonial.name}</h4>
                <span className="text-gray-500 text-sm">{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
