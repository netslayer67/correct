import React from 'react';
import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const HowItWorksSection = ({ steps }) => {
  return (
    <section id="how-it-works" className="relative py-28 bg-gradient-to-b from-sky-950 via-blue-900 to-sky-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 backdrop-blur-xl bg-white/5" />
      <div className="container-max text-white">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Mulai Belajar dalam <span className="text-sky-400">4 Langkah</span> Mudah
          </h2>
          <p className="text-lg text-white/80 font-light">
            Proses kami dirancang sederhana, cepat, dan menyenangkan — dari pemilihan guru hingga sesi pertamamu.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-3xl mx-auto relative">
          <div className="hidden md:block absolute top-0 left-8 w-px h-full bg-white/10" />
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex items-start space-x-6 group"
              >
                <div className="flex-shrink-0 size-14 rounded-full bg-sky-500/10 border border-white/20 flex items-center justify-center text-sky-300 group-hover:bg-sky-500/20 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="flex-1 pt-1.5">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-sky-100 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-white/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
