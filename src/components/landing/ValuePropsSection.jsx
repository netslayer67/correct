import React from 'react';
import { motion } from 'framer-motion';

const ValuePropsSection = ({ valueProps }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="value"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-28 text-white"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
          }}
        />
      </div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[130px] animate-pulse" />

      {/* Title */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight md:text-5xl"
        >
          Why Choose <span className="text-sky-400">Correctly?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-lg text-white/70 md:text-xl"
        >
          Our hybrid-first, mentor-led platform is designed to make you fluent, confident, and ready for global success — no matter your starting point.
        </motion.p>
      </div>

      {/* Value Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {valueProps.map((prop, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            {/* Hover Glow */}
            <div className="absolute -top-1/2 -right-1/2 h-[200%] w-[200%] bg-[radial-gradient(circle,rgba(14,165,233,0.08),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300 transition duration-300 group-hover:bg-sky-500/20">
                {React.cloneElement(prop.icon, { className: 'h-8 w-8' })}
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">
                {prop.title}
              </h3>
              <p className="text-base leading-relaxed text-white/70">
                {prop.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ValuePropsSection;
