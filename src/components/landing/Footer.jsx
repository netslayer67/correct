import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const footerLinks = {
    Layanan: [
      { name: "Sesi Percakapan", href: "courses" },
      { name: "Kelas TOEFL/IELTS", href: "courses" },
      { name: "Inggris untuk Bisnis", href: "courses" },
      { name: "Cari Guru", href: "tutors" },
    ],
    Perusahaan: [
      { name: "Tentang Kami", href: "about" },
      { name: "Cara Kerja", href: "how-it-works" },
      { name: "Testimoni", href: "testimonials" },
      { name: "Kontak", href: "#" },
    ],
    Dukungan: [
      { name: "Pusat Bantuan", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-sky-800 to-blue-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-300 to-blue-300">
              Correctly
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Platform edukasi personal untuk belajar bahasa Inggris dengan cara yang benar, terstruktur, dan efektif.
            </p>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    <a
                      href={`#${link.href}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-slate-300 hover:text-white transition-colors duration-300 ease-in-out"
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
        <div className="mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Correctly. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="Facebook" className="hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Facebook className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter" className="hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Twitter className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram" className="hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Instagram className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
