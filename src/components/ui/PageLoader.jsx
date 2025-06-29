import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-950 via-sky-800 to-blue-900 flex items-center justify-center"
                initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.87, 0, 0.13, 1],
                    delay: 1.5
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center"
                >
                    <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight font-heading bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-300 to-blue-300">
                        Correctly
                    </h1>
                    <p className="mt-3 text-slate-300 text-sm md:text-base">Learn English correctly.</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PageLoader;
