import React from 'react';
import { motion } from 'framer-motion';
import BookButton from './BookButton';

const services = [
  {
    img: '/images/metal-roof.jpg',
    alt: 'Brick house with a metal roof',
    title: 'Metal Roofing',
    desc: 'A durable, low-maintenance option for Kentucky weather. We help you pick the panel and color that fit your home.',
  },
  {
    img: '/images/shingle-roof.jpg',
    alt: 'Roofer carrying shingles on a roof',
    title: 'Shingle Roofing',
    desc: 'Asphalt shingle replacement and repair. The classic choice, available in styles to match your home.',
  },
  {
    img: '/images/standing-seam.jpg',
    alt: 'House with a standing seam metal roof',
    title: 'Standing Seam',
    desc: 'Metal panels with concealed fasteners and a clean, modern profile that handles wind and heavy rain.',
  },
  {
    img: '/images/siding.jpg',
    alt: 'House exterior siding renovation in progress',
    title: 'Siding',
    desc: 'Repair or replace siding damaged by wind, moisture or age, and refresh the look of your home.',
  },
  {
    img: '/images/framing.jpg',
    alt: 'House under construction with wooden framing',
    title: 'Framing & Additions',
    desc: 'Structural framing for remodels and additions — one contractor from the frame to the roof.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-5">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hail, wind and winter ice are hard on Kentucky homes. Start with a free inspection and we'll tell you what your home actually needs.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img src={s.img} alt={s.alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-serif font-bold text-black mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">{s.desc}</p>
                <BookButton source={`service-${s.title}`} variant="dark" size="sm" className="self-start">
                  Book Free Inspection
                </BookButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
