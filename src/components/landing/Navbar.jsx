import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection, handleCTAClick }) => {
  const navItems = [
    { label: "Tentang", id: "about" },
    { label: "Cara Kerja", id: "how-it-works" },
    { label: "Tutor", id: "tutors" },
    { label: "Paket", id: "courses" },
    { label: "Testimoni", id: "testimonials" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-2xl bg-transparent rounded-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="text-2xl font-bold bg-gradient-to-r from-white via-sky-300 to-blue-300 text-transparent bg-clip-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Correctly
          </motion.a>

          <div className="hidden lg:flex gap-x-10 items-center">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-300 hover:text-white transition duration-300"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => handleCTAClick('register')} className="ml-6">
              Mulai Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-br from-blue-950 via-sky-800 to-blue-900 text-white px-6 py-4 space-y-3"
          >
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => handleCTAClick('register')} className="w-full mt-4">
              Mulai Gratis
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
