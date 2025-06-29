import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const PricingSection = ({ plans, handleCTAClick }) => {
  return (
    <section id="courses" className="relative py-28 bg-gradient-to-b from-blue-950 via-sky-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 backdrop-blur-2xl bg-white/5" />

      <div className="container-max text-white">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investasi Terbaik untuk <span className="text-sky-400">Masa Depan Anda</span>
          </h2>
          <p className="text-lg text-white/80 font-light">
            Pilih paket belajar sesuai kebutuhanmu. Harga jujur, tanpa biaya tersembunyi.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={cn(
                'relative flex flex-col h-full p-8 rounded-2xl border shadow-lg backdrop-blur-md bg-white/5 text-white transition-all',
                plan.popular
                  ? 'border-sky-500 shadow-sky-500/20 scale-[1.015]'
                  : 'border-white/10 hover:shadow-xl hover:scale-[1.01]'
              )}
            >
              {/* Badge Populer */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-sky-500 text-white text-xs font-semibold uppercase tracking-widest shadow-sm">
                    Paling Populer
                  </div>
                </div>
              )}

              {/* Header & Price */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-white/70">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold tracking-tight">
                    Rp{plan.price}
                  </span>
                  <span className="text-white/60"> /{plan.priceUnit}</span>
                </div>

                <ul className="mt-8 space-y-4 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="size-5 text-sky-400 mr-3 mt-1" />
                      <span className="text-white/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Button
                  onClick={() => handleCTAClick(`select-plan-${plan.name}`)}
                  className={cn(
                    'w-full',
                    plan.popular
                      ? 'bg-sky-500 text-white hover:bg-sky-400'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  )}
                >
                  Pilih Paket
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
