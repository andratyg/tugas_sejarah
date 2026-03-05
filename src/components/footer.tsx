
"use client";

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-4xl font-bold font-headline text-primary tracking-tighter inline-block">
              IlmuNesia
            </Link>
            <div className="h-1 w-12 bg-primary/30 mx-auto rounded-full" />
          </div>

          {/* Historical Narrative */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-headline font-medium text-foreground leading-tight italic">
              "Bangsa yang besar adalah bangsa yang tidak pernah melupakan sejarahnya."
            </p>
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-muted-foreground text-base leading-relaxed">
                IlmuNesia hadir sebagai jembatan antara masa lalu dan masa depan. Kami percaya bahwa dengan memahami jejak langkah para pendahulu, kita dapat membangun fondasi yang lebih kokoh untuk peradaban yang akan datang.
              </p>
              <p className="text-sm text-primary/60 font-medium uppercase tracking-[0.3em]">
                Menjaga Warisan • Menginspirasi Masa Depan
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-16 border-t border-primary/10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">
              © {new Date().getFullYear()} IlmuNesia. Seluruh Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
