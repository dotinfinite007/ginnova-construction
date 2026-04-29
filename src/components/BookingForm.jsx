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
    <section id="booking" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-black mb-4"
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
          className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-200 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base text-black focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base text-black focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Address / Location</label>
            <input 
              type="text" 
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-base text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="123 Main St, Lexington, KY 40502"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Appointment Date</label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 text-base text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              style={{ colorScheme: 'dark' }}
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Situation</label>
            <textarea 
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base text-black focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
              placeholder="Tell us what's going on with your roof — the more detail, the better."
            ></textarea>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-2">Upload Photos (Optional)</label>
            <input 
              type="file" 
              multiple
              className="w-full text-base text-gray-600 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border-0 file:text-base file:font-semibold file:bg-gray-200 file:text-black hover:file:bg-gray-300 transition-colors"
            />
            <p className="text-xs text-gray-500 mt-2">Helps us prepare before we arrive.</p>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gold text-black font-bold text-lg py-4 rounded-md hover:bg-white transition-colors duration-300 shadow-lg shadow-gold/20"
          >
            Schedule My Free Inspection
          </button>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-1">
              Your information goes directly to our team and is never shared. Expect a call or text within 24 hours.
            </p>
            <p className="text-sm text-gray-600">
              ¿Prefieres hablar en Español? Sin problema — nuestro equipo está listo para atenderte.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
