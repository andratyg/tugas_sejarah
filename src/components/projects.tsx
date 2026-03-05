
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProjectModal } from './project-modal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PROJECTS = [
  {
    id: 'p1',
    title: 'Portofolio Pribadi',
    description: 'Bangun identitas digital Anda dengan website portofolio modern menggunakan HTML dan CSS.',
    image: PlaceHolderImages.find(img => img.id === 'project-1')!.imageUrl,
    goals: 'Menciptakan representasi diri yang profesional di dunia maya.',
    steps: [
      'Tentukan struktur konten (Tentang Saya, Proyek, Kontak).',
      'Buat file HTML dasar.',
      'Tambahkan styling menggunakan CSS Flexbox.',
      'Gunakan media queries untuk responsivitas.'
    ],
    expectedResult: 'Halaman web statis yang rapi dan dapat diakses dengan baik melalui perangkat mobile maupun desktop.'
  },
  {
    id: 'p2',
    title: 'Dashboard Cuaca',
    description: 'Aplikasi sederhana untuk menganalisis dan memvisualisasikan tren cuaca lokal.',
    image: PlaceHolderImages.find(img => img.id === 'project-2')!.imageUrl,
    goals: 'Memahami cara mengolah data mentah menjadi informasi visual.',
    steps: [
      'Cari sumber data cuaca publik.',
      'Gunakan spreadsheet untuk membersihkan data.',
      'Buat visualisasi grafik menggunakan alat bantu.',
      'Susun laporan ringkas mengenai temuan data.'
    ],
    expectedResult: 'Satu halaman dashboard yang berisi minimal 3 grafik berbeda tentang suhu, curah hujan, dan kelembapan.'
  },
  {
    id: 'p3',
    title: 'Redesain UI Aplikasi',
    description: 'Mengidentifikasi masalah UX pada aplikasi populer dan membuat desain solusi baru.',
    image: PlaceHolderImages.find(img => img.id === 'project-3')!.imageUrl,
    goals: 'Mengasah kemampuan berpikir kritis dalam desain antarmuka.',
    steps: [
      'Pilih satu aplikasi mobile yang sering Anda gunakan.',
      'Identifikasi minimal 3 masalah kegunaan.',
      'Buat sketsa wireframe solusi baru.',
      'Rancang desain high-fidelity.'
    ],
    expectedResult: 'File desain digital (minimal 5 layar) yang menunjukkan perbaikan alur pengguna dibandingkan aplikasi asli.'
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const items = sectionRef.current?.querySelectorAll('.animate-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proyek" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Proyek Pembelajaran</h2>
            <p className="text-muted-foreground">
              Terapkan pengetahuan Anda melalui proyek-proyek praktis yang menantang dan relevan dengan industri saat ini.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="animate-item animate-on-scroll overflow-hidden border-none shadow-lg rounded-[2rem] bg-card flex flex-col h-full group">
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-8 pt-4">
                <Button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full rounded-full h-12 font-semibold shadow-md hover:shadow-xl transition-all"
                >
                  Lihat Detail Proyek
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
