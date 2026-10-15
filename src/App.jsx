import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyGinnova from './components/WhyGinnova';
import Process from './components/Process';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ContactWidget from './components/ContactWidget';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gold selection:text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyGinnova />
        <Process />
        <BookingForm />
      </main>
      <Footer />
      <ContactWidget />
      <BookingModal />
    </div>
  );
}

export default App;
