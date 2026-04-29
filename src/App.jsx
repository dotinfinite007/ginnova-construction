import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyGinnova from './components/WhyGinnova';
import Process from './components/Process';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold selection:text-black">
      <Navigation />
      <Hero />
      <Services />
      <WhyGinnova />
      <Process />
      <BookingForm />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
