import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

import {
  tutors, testimonials, howItWorksSteps, valueProps, pricingPlans
} from '@/data/landingData';

import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ValuePropsSection from '@/components/landing/ValuePropsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import TutorsSection from '@/components/landing/TutorsSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CtaSection from '@/components/landing/CtaSection';
import Footer from '@/components/landing/Footer';
import PageLoader from '@/components/ui/PageLoader';

import SessionPage from '@/pages/SessionPage';
import CheckoutPage from '@/pages/CheckoutPage';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleCTAClick = (action) => {
    toast({
      title: "🚧 Fitur Belum Siap",
      description: "Tapi kamu bisa minta bantuan lanjutan dari tim kami! 😊",
      duration: 3000,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <BrowserRouter>
      <Helmet>
        <title>Correctly - Learn English Correctly with Correctly</title>
        <meta name="description" content="Belajar bahasa Inggris dengan tutor profesional, online & offline. Terstruktur dan fleksibel." />
        <html lang="id" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <div className="bg-background text-foreground font-sans">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          handleCTAClick={handleCTAClick}
        />

        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={
            <>
              <main>
                <HeroSection scrollToSection={scrollToSection} />
                <ValuePropsSection valueProps={valueProps} />
                <HowItWorksSection steps={howItWorksSteps} />
                <TutorsSection tutors={tutors} handleCTAClick={handleCTAClick} />
                <TestimonialsSection testimonials={testimonials} />
                <PricingSection plans={pricingPlans} handleCTAClick={handleCTAClick} />
                <CtaSection handleCTAClick={handleCTAClick} />
              </main>
              <Footer scrollToSection={scrollToSection} />
            </>
          } />

          {/* Halaman sesi video call */}
          <Route path="/session" element={<SessionPage />} />

          {/* Halaman pembayaran */}
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>

        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

