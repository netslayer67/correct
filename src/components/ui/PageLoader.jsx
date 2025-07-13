import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-950 via-sky-900 to-blue-950"
                initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.87, 0, 0.13, 1],
                    delay: 1.5,
                }}
            >
                {/* Grid Pattern */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
                        style={{
                            maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
                        }}
                    />
                </div>

                {/* Glow Pulse */}
                <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[140px] animate-pulse" />

                {/* Loader Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative z-10 text-center backdrop-blur-xl bg-white/5 px-8 py-10 rounded-xl border border-white/10 shadow-xl"
                >
                    <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-300 to-blue-300">
                        Correctly
                    </h1>
                    <p className="mt-3 text-slate-300 text-sm md:text-base font-medium tracking-wide">
                        Learn English Correctly with Correctly.
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PageLoader;
