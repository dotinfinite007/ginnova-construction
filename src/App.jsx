import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyGinnova from './components/WhyGinnova';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gold selection:text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <WhyGinnova />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
