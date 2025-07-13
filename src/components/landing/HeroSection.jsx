import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, MoveRight, Star } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
        />
      </div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center px-6 pt-28 pb-20 sm:pt-32 md:grid-cols-2 md:gap-12 lg:pt-40"
      >
        {/* Left - Text Content */}
        <div className="flex flex-col gap-6 text-left">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm"
          >
            <Star className="size-4 text-yellow-400" />
            <span className="text-white/90">Rated 4.9/5 by 1,000+ happy students</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
          >
            Learn English Correctly <br className="hidden sm:block" />
            <span className="inline-block text-sky-400">with Correctly</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            Personalized English lessons with certified tutors. Online or offline, built around your goals — fluency, confidence, and career growth.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollToSection('tutors')}
              size="lg"
              className="group flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/20"
            >
              Find Your Tutor
              <Search className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection('how-it-works')}
              size="lg"
              variant="ghost"
              className="group flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
            >
              How It Works
              <MoveRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
          variants={imageVariants}
          className="relative mt-12 md:mt-0"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1649762544354-79b698b2f27e"
              alt="Correctly Platform Preview"
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
