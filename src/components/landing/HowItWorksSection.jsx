import React from 'react';
import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const HowItWorksSection = ({ steps }) => {
  return (
    <section
      id="how-it-works"
      className="relative isolate min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-28 text-white"
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
          }}
        />
      </div>

      {/* Radial Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />

      {/* Section Title */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight md:text-5xl"
        >
          Learn English in <span className="text-sky-400">4 Simple Steps</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-white/70 md:text-xl"
        >
          From booking your first class to achieving fluency — our process is intuitive, fast, and enjoyable.
        </motion.p>
      </div>

      {/* Step Timeline */}
      <div className="relative z-10 mt-20 max-w-3xl mx-auto px-6">
        <div className="hidden md:block absolute top-0 left-8 w-px h-full bg-white/10" />

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex items-start space-x-6 group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 size-14 rounded-full border border-white/20 bg-sky-500/10 flex items-center justify-center text-sky-300 group-hover:bg-sky-500/20 transition duration-300 shadow-inner backdrop-blur-xl">
                {step.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 pt-1.5">
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-sky-100 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/70 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
