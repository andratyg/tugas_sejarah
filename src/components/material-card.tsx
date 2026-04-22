"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface MaterialCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  side: 'left' | 'right';
  onClick: () => void;
}

export function MaterialCard({ title, description, image, side, onClick }: MaterialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative w-full mb-16 flex items-center animate-on-scroll",
        side === 'left' ? "justify-start md:pr-1/2" : "justify-end md:pl-1/2"
      )}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="h-6 w-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20 ring-4 ring-primary/10" />
      </div>

      <Card
        onClick={onClick}
        className={cn(
          "group w-full md:w-[calc(50%-40px)] cursor-pointer overflow-hidden border-none shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-card rounded-[2rem]",
          side === 'left' ? "md:mr-auto" : "md:ml-auto"
        )}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <CardContent className="p-8">
          <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
