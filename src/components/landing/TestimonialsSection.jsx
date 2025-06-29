import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const TestimonialCard = ({ name, role, content, className }) => (
  <div
    className={cn(
      'relative w-[320px] md:w-[360px] lg:w-[400px] flex-shrink-0 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white p-6 shadow-md hover:shadow-lg transition-all duration-300',
      className
    )}
  >
    <Quote className="size-6 text-sky-400 mb-4" />
    <blockquote className="text-white/80 text-base leading-relaxed">“{content}”</blockquote>
    <figcaption className="mt-6">
      <div className="font-semibold text-white">{name}</div>
      <div className="text-sm text-white/60">{role}</div>
    </figcaption>
  </div>
);

const TestimonialsSection = ({ testimonials }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-gradient-to-b from-blue-950 via-sky-900 to-blue-950 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 backdrop-blur-2xl bg-white/5" />
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kisah Sukses dari <span className="text-sky-400">Murid Kami</span>
          </h2>
          <p className="text-lg text-white/80 font-light">
            Pengalaman nyata mereka yang meningkatkan kemampuan berbahasa Inggris bersama Correctly.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative mt-20 overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-950 via-blue-950/60 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-950 via-blue-950/60 to-transparent z-20" />

        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
