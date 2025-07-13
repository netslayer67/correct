import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const footerLinks = {
    Layanan: [
      { name: 'Sesi Percakapan', href: 'courses' },
      { name: 'Kelas TOEFL/IELTS', href: 'courses' },
      { name: 'Inggris untuk Bisnis', href: 'courses' },
      { name: 'Cari Guru', href: 'tutors' },
    ],
    Perusahaan: [
      { name: 'Tentang Kami', href: 'about' },
      { name: 'Cara Kerja', href: 'how-it-works' },
      { name: 'Testimoni', href: 'testimonials' },
      { name: 'Kontak', href: '#' },
    ],
    Dukungan: [
      { name: 'Pusat Bantuan', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' },
    ],
  };

  return (
    <footer className="relative z-10 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[160px] animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Branding */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-300 to-blue-400">
              Correctly
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-md">
              Belajar bahasa Inggris yang terstruktur, personal, dan efektif. Dirancang untuk hasil nyata.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={`#${link.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="group relative inline-block text-slate-300 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      {link.name}
                      <span className="block h-[1.5px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-white"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Correctly. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[{ icon: Facebook, label: 'Facebook' }, { icon: Twitter, label: 'Twitter' }, { icon: Instagram, label: 'Instagram' }].map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                aria-label={label}
                className="transition backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 rounded-full"
              >
                <Icon className="size-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
