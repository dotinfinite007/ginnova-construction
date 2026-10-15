import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import BookButton from './BookButton';
import { openChat } from '../lib/booking';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" aria-hidden="true">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0.1) 85%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-black text-gold text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
        >
          Free Roof Inspection · Kentucky Homeowners
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black mb-5 leading-tight"
        >
          Leak, storm damage or <br className="hidden md:block" />an old roof? We'll take a look.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gold font-semibold mb-5"
        >
          Metal Roofs · Shingles · Standing Seam · Siding · Framing
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Ginnova Construction is a local Kentucky contractor. We inspect your roof, show you what we find, and give you a clear written quote — no pressure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6"
        >
          <BookButton source="hero" size="lg" className="w-full sm:w-auto">Book My Free Inspection</BookButton>
          <button
            type="button"
            onClick={openChat}
            className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
          >
            <MessageCircle size={20} /> Chat With Us
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-black text-sm md:text-base font-medium"
        >
          Hablamos Español — atendemos en tu idioma.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
