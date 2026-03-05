
"use client";

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold font-headline text-primary mb-4 block">
              IlmuNesia
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Membangun masa depan Indonesia melalui pendidikan yang inklusif dan interaktif.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Github
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} IlmuNesia. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
