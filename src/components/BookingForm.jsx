import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you! Your inspection request has been received.');
  };

  return (
    <section id="booking" className="bg-black py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Request Your Free Roof Inspection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold italic text-lg"
          >
            We'll reach out within 24 hours to confirm your appointment.
          </motion.p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-dark p-8 md:p-10 rounded-xl border border-darker shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">Service Address / Location</label>
            <input 
              type="text" 
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="123 Main St, London, KY 40741"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Appointment Date</label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              style={{ colorScheme: 'dark' }}
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-2">Describe Your Situation</label>
            <textarea 
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
              placeholder="Tell us about your roof (e.g., leaks, storm damage, full replacement needed)..."
            ></textarea>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-2">Upload Photos (Optional)</label>
            <input 
              type="file" 
              multiple
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-darker file:text-gold hover:file:bg-black transition-colors"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gold text-black font-bold text-lg py-4 rounded-md hover:bg-white transition-colors duration-300 shadow-lg shadow-gold/20"
          >
            Schedule My Free Inspection
          </button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            This form will connect to our scheduling system — your info goes directly to our team.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
