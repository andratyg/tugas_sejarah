
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
    <footer className="bg-background border-t py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold font-headline text-primary block">
              IlmuNesia
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Membangun masa depan Indonesia melalui pendidikan yang inklusif, terstruktur, dan didukung teknologi AI.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Menu Cepat</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Media Sosial</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} IlmuNesia. Seluruh Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
