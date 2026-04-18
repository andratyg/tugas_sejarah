"use client";

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Decorative gold bar */}
          <div className="space-y-4">
            <div className="h-1.5 w-16 bg-primary/60 mx-auto rounded-full" />
          </div>

          {/* Historical Narrative - Only Quote */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-headline font-medium text-foreground leading-tight italic max-w-2xl mx-auto">
              "Bangsa yang besar adalah bangsa yang tidak pernah melupakan sejarahnya."
            </p>
          </div>

          {/* Bottom Copyright Section with visible border */}
          <div className="pt-16 border-t border-primary/30">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">
              © 2026 Seluruh Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
