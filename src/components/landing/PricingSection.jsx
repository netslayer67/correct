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
    <section
      id="courses"
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
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />

      {/* Section Header */}
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto mb-20 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Investasi Terbaik untuk <span className="text-sky-400">Masa Depan Anda</span>
        </h2>
        <p className="text-lg text-white/70">
          Pilih paket belajar sesuai kebutuhanmu. Harga jujur, tanpa biaya tersembunyi.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            className={cn(
              'relative flex flex-col h-full p-8 rounded-3xl border shadow-lg backdrop-blur-xl bg-white/5 text-white transition-all duration-300',
              plan.popular
                ? 'border-sky-500 shadow-sky-500/20 scale-[1.015]'
                : 'border-white/10 hover:shadow-xl hover:scale-[1.01]'
            )}
          >
            {/* Badge */}
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="px-4 py-1.5 rounded-full bg-sky-500 text-white text-xs font-semibold uppercase tracking-widest shadow-md">
                  Paling Populer
                </div>
              </div>
            )}

            {/* Plan Info */}
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-white/70">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight">
                  Rp{plan.price}
                </span>
                <span className="text-white/50 text-base"> /{plan.priceUnit}</span>
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

            {/* CTA Button */}
            <div className="mt-10">
              <Button
                onClick={() => handleCTAClick?.(`select-plan-${plan.name}`)}
                className={cn(
                  'w-full rounded-xl px-5 py-3 text-sm font-medium transition-all',
                  plan.popular
                    ? 'bg-sky-500 hover:bg-sky-400 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                )}
              >
                Pilih Paket
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;
