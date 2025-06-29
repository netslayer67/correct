import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const CtaSection = ({ handleCTAClick }) => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-blue-950 via-sky-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 backdrop-blur-lg bg-white/5" />

      <div className="container-max">
        <motion.div
          className="relative mx-auto max-w-3xl text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-16 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Meningkatkan Bahasa Inggris Anda?
          </h2>
          <p className="text-lg text-white/80 mb-10 font-light">
            Coba sesi perkenalan gratis 15 menit bersama tutor pilihan Anda. Tanpa risiko, tanpa komitmen.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => handleCTAClick('start-free-trial')}
              className="px-6 py-3 text-base font-semibold bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition"
            >
              Mulai Free Trial
              <ArrowRight className="size-4 ml-2" />
            </Button>
            <Button
              onClick={() => handleCTAClick('whatsapp')}
              className="px-6 py-3 text-base border border-white/20 text-white/90 hover:bg-white/10 rounded-xl transition"
            >
              <MessageCircle className="size-4 mr-2" />
              Hubungi via WhatsApp
            </Button>
          </div>

          <p className="text-sm text-white/60 mt-6">
            * Free Trial 15 Menit & Garansi Kepuasan 100%
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
