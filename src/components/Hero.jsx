import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background / Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Localized radial gradient to ensure text readability without hiding the video edges */}
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0) 75%)' 
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black mb-4 leading-tight"
        >
          Kentucky's Premier <br className="hidden md:block" />Roofing Contractor
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gold font-medium mb-6"
        >
          Metal Roofs · Shingles · Standing Seam · Built to Last
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 text-lg md:text-xl font-light max-w-2xl mx-auto mb-6"
        >
          Ginnova Construction LLC delivers premium roofing installations across the entire state of Kentucky. Whether you need a full roof replacement, a metal upgrade, or storm damage repair — we show up, we communicate, and we get it done right.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-black text-sm md:text-base font-medium max-w-2xl mx-auto mb-10 opacity-80"
        >
          Proudly serving English & Spanish-speaking homeowners. — Atendemos en Español.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#booking" className="bg-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all w-full sm:w-auto shadow-lg shadow-gold/20">
            Book a Free Inspection
          </a>
          <a href="tel:3038748955" className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all w-full sm:w-auto">
            Call (303) 874-8955
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-70">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
