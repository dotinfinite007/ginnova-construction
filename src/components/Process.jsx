import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Book Your Free Inspection",
    desc: "Fill out the form or call us directly. Tell us what's going on and we'll schedule a time that works for you — no pressure, no obligation."
  },
  {
    number: "02",
    title: "Receive Your Custom Quote",
    desc: "We inspect the roof, assess what's needed, and walk you through your options clearly. You get a detailed quote in writing — no vague estimates."
  },
  {
    number: "03",
    title: "We Handle Everything",
    desc: "Once you're ready to move forward, we take it from there. Materials, scheduling, installation, cleanup — handled. You'll hear from us every step of the way."
  }
];

const Process = () => {
  return (
    <section id="process" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-black mb-4"
          >
            Getting a New Roof Is Simpler Than You Think
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gold/30 -translate-y-1/2 z-0"></div>
          
          {/* Vertical Connecting Line (Mobile/Tablet) */}
          <div className="block lg:hidden absolute top-0 left-1/2 h-full w-0.5 bg-gold/30 -translate-x-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative"
              >
                <div className="w-20 h-20 bg-gray-50 border-2 border-gold rounded-full flex items-center justify-center text-3xl font-serif font-bold text-gold mb-6 shadow-md shadow-gold/10">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
