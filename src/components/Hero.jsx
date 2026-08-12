import React from 'react';

const Hero = () => {
  return (
    /* La altura del padre ES la duracion de la animacion.
       El hijo sticky se queda fijo mientras el scroll la recorre -
       sin pin:true, sin pin-spacer, sin reflow. */
    <div data-hero-area className="relative h-[200svh]">
      <section data-scene-screen className="flex items-center justify-center">
        {/* Video de fondo - se acerca con el scroll */}
        <div data-hero-media className="absolute inset-0 z-0 overflow-hidden will-change-transform">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Gradiente radial para legibilidad sin tapar los bordes del video */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0) 75%)',
            }}
          ></div>
        </div>

        <div data-hero-copy className="relative z-10 container mx-auto px-6 md:px-12 text-center mt-16">
          <h1
            data-reveal="h"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black mb-4 leading-tight"
          >
            Kentucky's Premier <br className="hidden md:block" />Roofing Contractor
          </h1>

          <p data-reveal="a" className="text-xl md:text-2xl text-gold font-medium mb-6">
            Metal Roofs · Shingles · Standing Seam · Built to Last
          </p>

          <p data-reveal="p" className="text-gray-700 text-lg md:text-xl font-light max-w-2xl mx-auto mb-6">
            Ginnova Construction LLC delivers premium roofing installations across the entire state
            of Kentucky. Whether you need a full roof replacement, a metal upgrade, or storm damage
            repair — we show up, we communicate, and we get it done right.
          </p>

          <p data-reveal="p" className="text-black text-sm md:text-base font-medium max-w-2xl mx-auto mb-10 opacity-80">
            Proudly serving English &amp; Spanish-speaking homeowners. — Atendemos en Español.
          </p>

          <div data-reveal="ctn" className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:3038748955"
              data-mag
              className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
            >
              Call Now
            </a>
          </div>
        </div>

        <div data-hero-cue className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-70">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Hero;
