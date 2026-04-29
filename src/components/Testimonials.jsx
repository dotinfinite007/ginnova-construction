import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Ginnova Construction replaced our entire roof after a severe storm. The crew was professional, fast, and the new standing seam metal roof looks incredible. Highly recommend their services to anyone in London.",
    name: "Michael R.",
    location: "London, KY"
  },
  {
    quote: "They gave us an honest quote with zero pressure. The shingles they recommended are top-tier and they cleaned up the yard perfectly after the job was done. Fantastic bilingual team!",
    name: "Sarah & David T.",
    location: "Corbin, KY"
  },
  {
    quote: "It's hard to find contractors you can trust these days. Ginnova showed up on time, stuck to the budget, and delivered premium craftsmanship. Our home looks brand new.",
    name: "James L.",
    location: "Laurel County"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-dark py-24 border-t border-darker">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
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
              className="bg-black p-8 rounded-lg border border-darker hover:border-gold/30 transition-colors duration-300 flex flex-col h-full relative"
            >
              <div className="flex space-x-1 mb-6 text-gold">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-300 text-lg italic mb-8 flex-grow">
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
