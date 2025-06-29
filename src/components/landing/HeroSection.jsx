import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Star } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-40 pb-32 lg:pt-52 lg:pb-44 bg-gradient-to-br from-blue-950 via-sky-800 to-blue-900 overflow-hidden">
      {/* Background Aurora / Blur Effect */}
      <div className="absolute inset-0 -z-10 backdrop-blur-2xl bg-white/5"></div>
      <div className="absolute inset-0 -z-20 aurora-bg animate-aurora opacity-30" />

      <div className="max-w-6xl w-full mx-auto text-center space-y-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm text-white"
        >
          <Star className="size-4 text-yellow-400" />
          <span className="opacity-80">Rated 4.9/5 by 1,000+ happy students</span>
        </motion.div>

        {/* Heading & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Learn English <span className="text-sky-400">correctly</span> with <span className="gradient-text">Correctly</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Pesan guru bahasa Inggris profesional secara online atau tatap muka — sesuai gaya belajar kamu.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection('tutors')}
            className="px-6 py-3 text-base font-medium rounded-xl bg-white text-blue-950 hover:bg-sky-100 transition-all shadow-md"
          >
            <Search className="size-4 mr-2" />
            Cari Guru Sekarang
          </Button>
          <Button
            onClick={() => scrollToSection('how-it-works')}
            variant="ghost"
            className="px-6 py-3 text-base text-white hover:bg-white/10 rounded-xl border border-white/30 transition-all"
          >
            Lihat Cara Kerja
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl shadow-black/30 border border-white/10 backdrop-blur-lg">
            <img
              src="https://images.unsplash.com/photo-1649762544354-79b698b2f27e"
              alt="Dashboard Correctly"
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
