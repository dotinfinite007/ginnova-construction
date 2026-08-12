import React, { useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyGinnova from './components/WhyGinnova';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { initNx23Motion } from './lib/nx23-motion';

function App() {
  // useLayoutEffect y no useEffect: el motor tiene que medir el DOM ya
  // pintado. Con useEffect alcanza a verse un frame sin animar.
  useLayoutEffect(() => {
    const cleanup = initNx23Motion();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gold selection:text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <WhyGinnova />
      <Process />
      <Testimonials />
      <Footer />

      {/* barra de progreso de lectura */}
      <div
        data-progress
        className="hidden lg:block fixed right-5 top-1/2 -translate-y-1/2 z-40 w-px h-[26vh] bg-black/15 text-gold"
      >
        <i />
      </div>
      <span
        data-progress-num
        className="hidden lg:block fixed right-9 top-1/2 -translate-y-1/2 z-40 text-[0.65rem] tracking-widest text-black/40 font-sans"
      >
        00
      </span>
    </div>
  );
}

export default App;
