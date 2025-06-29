import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ValuePropsSection = ({ valueProps }) => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-blue-950 via-sky-900 to-blue-950 text-white overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 -z-10 backdrop-blur-xl bg-white/5 pointer-events-none" />

      {/* Container */}
      <div className="max-w-7xl px-6 md:px-12 mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Pilar <span className="text-sky-400">Pembelajaran</span> Correctly
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light">
            Kami membangun fondasi belajar yang kuat melalui pendekatan yang terstruktur, personal, dan fleksibel.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_8px_24px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-sky-500/10 text-sky-300 group-hover:bg-sky-500/20 transition">
                {prop.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-white/95 transition-colors">
                {prop.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed font-light">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
