
"use client";

import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'TikTok', href: 'https://tiktok.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Email', href: 'mailto:halo@ilmunesia.com' },
  ];

  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/about' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <footer className="bg-background border-t py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand & History Description */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="text-3xl font-bold font-headline text-primary block tracking-tight">
              IlmuNesia
            </Link>
            <div className="space-y-4">
              <p className="text-muted-foreground text-base leading-relaxed max-w-md italic">
                "Bangsa yang besar adalah bangsa yang tidak pernah melupakan sejarahnya."
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Menjelajahi lorong waktu, menghidupkan kembali narasi sejarah yang membentuk jati diri bangsa. IlmuNesia hadir untuk menginspirasi masa depan dengan belajar dari setiap jejak langkah masa lalu melalui edukasi yang modern dan interaktif.
              </p>
            </div>
          </div>

          {/* Spacer for better layout on desktop */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Quick Menu */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-bold text-foreground uppercase text-xs tracking-[0.2em]">Navigasi Utama</h4>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit border-b border-transparent hover:border-primary/30"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-bold text-foreground uppercase text-xs tracking-[0.2em]">Terhubung dengan Kami</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            © {new Date().getFullYear()} IlmuNesia — Menjaga Warisan, Membangun Peradaban.
          </p>
          <div className="h-px w-12 bg-primary/20 hidden md:block" />
        </div>
      </div>
    </footer>
  );
}
