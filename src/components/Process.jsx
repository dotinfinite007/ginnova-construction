import React from 'react';

const steps = [
  {
    number: "01",
    title: "Book Your Free Inspection",
    desc: "Fill out the form or call us directly. Tell us what's going on and we'll schedule a time that works for you — no pressure, no obligation."
  },
  {
    number: "02",
    title: "Receive Your Custom Quote",
    desc: "We inspect the roof, assess what's needed, and walk you through your options clearly. You get a detailed quote in writing — no vague estimates."
  },
  {
    number: "03",
    title: "We Handle Everything",
    desc: "Once you're ready to move forward, we take it from there. Materials, scheduling, installation, cleanup — handled. You'll hear from us every step of the way."
  }
];

const Process = () => {
  return (
    /* En desktop el scroll vertical se traduce a movimiento horizontal.
       El motor calcula la altura de [data-hor] a partir del ancho del track.
       En movil el bloque cae a columna normal y no pasa nada raro. */
    <section id="process" data-hor className="bg-gray-50">
      <div data-hor-screen className="py-16 lg:py-0">
        <div
          data-hor-track
          className="flex-col lg:flex-row gap-12 lg:gap-16 px-6 md:px-12 lg:pl-[8vw] lg:pr-[12vw] w-full lg:w-auto"
        >
          {/* Panel de entrada */}
          <div className="lg:flex-[0_0_min(38vw,460px)] flex flex-col justify-center lg:self-center mb-8 lg:mb-0">
            <p data-reveal="a" className="text-gold font-medium tracking-[0.28em] uppercase text-xs mb-5">
              Our Process
            </p>
            <h2 data-reveal="h" className="text-3xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight">
              Getting a New Roof <br />Is Simpler Than <br />You Think
            </h2>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p data-reveal="p" className="text-gray-600 text-base leading-relaxed">
              Tres pasos. Cero sorpresas. Sigue haciendo scroll — el proceso avanza contigo.
            </p>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              data-reveal="ctn"
              className="lg:flex-[0_0_min(30vw,400px)] flex flex-col items-center text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm lg:self-center"
            >
              <div className="w-20 h-20 bg-gray-50 border-2 border-gold rounded-full flex items-center justify-center text-3xl font-serif font-bold text-gold mb-6 shadow-md shadow-gold/10">
                {step.number}
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}

          {/* Panel de cierre: aterriza el valor y alarga el recorrido */}
          <div
            data-reveal="ctn"
            className="lg:flex-[0_0_min(28vw,360px)] flex flex-col justify-center text-center lg:text-left lg:self-center"
          >
            <p className="text-gold font-medium tracking-[0.28em] uppercase text-xs mb-4">
              Ready when you are
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-5 leading-snug">
              Free inspection. <br />No obligation.
            </h3>
            <a
              href="tel:3038748955"
              data-mag
              className="inline-block bg-gold text-black px-8 py-4 rounded-full font-bold text-base hover:bg-black hover:text-white transition-colors self-center lg:self-start"
            >
              Call (303) 874-8955
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
