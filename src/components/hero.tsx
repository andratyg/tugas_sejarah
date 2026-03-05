
"use client";

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg')!;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg.imageUrl}
          alt={heroImg.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImg.imageHint}
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Wawasan Luas, <span className="text-primary">Masa Depan Cerah.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          Platform pembelajaran interaktif yang dirancang untuk membantu Anda menguasai keahlian baru dengan cara yang menyenangkan dan sistematis.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full bg-primary hover:scale-105 transition-transform" asChild>
            <a href="#materi">Mulai Belajar</a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-transform" asChild>
            <a href="#proyek">Lihat Proyek</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <a href="#materi" aria-label="Scroll to content">
          <ArrowDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  );
}
