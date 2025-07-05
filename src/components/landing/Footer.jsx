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
    <footer className="relative z-10 bg-gradient-to-br from-blue-950 via-sky-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">
          {/* Brand Section */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-300 to-blue-300 tracking-tight">
              Correctly
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-md">
              Platform edukasi modern untuk belajar bahasa Inggris secara terstruktur dan personal, didesain untuk kamu yang ingin belajar dengan cara yang benar.
            </p>
          </div>

          {/* Dynamic Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white tracking-wide uppercase">
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
                      className="text-slate-300 hover:text-white transition-all duration-300 ease-in-out relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Correctly. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Facebook"
              className="hover:bg-white/10 text-slate-300 hover:text-white transition rounded-full border border-white/10 backdrop-blur-lg"
            >
              <Facebook className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Twitter"
              className="hover:bg-white/10 text-slate-300 hover:text-white transition rounded-full border border-white/10 backdrop-blur-lg"
            >
              <Twitter className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Instagram"
              className="hover:bg-white/10 text-slate-300 hover:text-white transition rounded-full border border-white/10 backdrop-blur-lg"
            >
              <Instagram className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
