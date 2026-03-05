
"use client";

import { useState } from 'react';
import { MaterialCard } from './material-card';
import { MaterialModal } from './material-modal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MATERIALS = [
  {
    id: 'm1',
    title: 'Literasi Digital',
    description: 'Memahami dasar-dasar navigasi dunia digital dengan aman dan efektif.',
    fullContent: 'Literasi digital adalah kemampuan untuk menemukan, mengevaluasi, dan mengomunikasikan informasi melalui berbagai platform digital. Di era modern ini, kecakapan ini menjadi sangat krusial.\n\nAnda akan mempelajari bagaimana membedakan informasi valid dari hoaks, dasar-dasar keamanan siber pribadi, dan cara berinteraksi secara etis di media sosial. Pembelajaran ini dirancang untuk semua usia.',
    image: PlaceHolderImages.find(img => img.id === 'material-1')!.imageUrl,
    points: ['Keamanan Kata Sandi', 'Etika Internet', 'Verifikasi Sumber', 'Privasi Data'],
    references: [
      { name: 'Kementerian Komunikasi dan Informatika', url: 'https://kominfo.go.id' },
      { name: 'Wikipedia: Digital Literacy', url: 'https://id.wikipedia.org/wiki/Literasi_digital' }
    ]
  },
  {
    id: 'm2',
    title: 'Dasar Pemrograman',
    description: 'Langkah pertama memasuki dunia pembuatan perangkat lunak.',
    fullContent: 'Pemrograman bukan hanya tentang menulis kode, tapi tentang pemecahan masalah (problem solving). Materi ini akan membawa Anda mengenal konsep logika dasar yang digunakan oleh semua bahasa pemrograman.\n\nKita akan membahas tentang variabel, tipe data, struktur kontrol (if/else), dan pengulangan (loops). Konsep-konsep ini adalah fondasi bagi siapa pun yang ingin menjadi pengembang web atau aplikasi mobile.',
    image: PlaceHolderImages.find(img => img.id === 'material-2')!.imageUrl,
    points: ['Logika Algoritma', 'Struktur Data Dasar', 'Sintaksis Dasar', 'Debugging'],
    references: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
      { name: 'W3Schools Indonesia', url: 'https://w3schools.com' }
    ]
  },
  {
    id: 'm3',
    title: 'Prinsip Desain Grafis',
    description: 'Seni menyampaikan pesan melalui elemen visual yang estetis.',
    fullContent: 'Desain grafis adalah tentang komunikasi visual. Materi ini mengeksplorasi bagaimana elemen seperti warna, tipografi, dan tata letak bekerja sama untuk menciptakan kesan tertentu.\n\nAnda akan belajar tentang psikologi warna, aturan "rule of thirds", dan bagaimana memilih font yang tepat untuk berbagai tujuan. Memahami estetika dasar akan membantu Anda menciptakan karya yang tidak hanya cantik tapi juga fungsional.',
    image: PlaceHolderImages.find(img => img.id === 'material-3')!.imageUrl,
    points: ['Psikologi Warna', 'Tipografi Modern', 'Komposisi Visual', 'Branding Dasar'],
    references: [
      { name: 'Canva Design School', url: 'https://www.canva.com/learn/' },
      { name: 'Adobe Design Principles', url: 'https://creativecloud.adobe.com' }
    ]
  },
  {
    id: 'm4',
    title: 'Analisis Data',
    description: 'Mengubah angka-angka mentah menjadi wawasan yang berharga.',
    fullContent: 'Data adalah emas baru di abad ke-21. Namun, data mentah tidak berguna tanpa analisis yang tepat. Materi ini mengajarkan dasar-dasar pengolahan data menggunakan metode statistik sederhana.\n\nKita akan melihat cara menggunakan spreadsheet secara efektif, memvisualisasikan data dalam bentuk grafik yang mudah dipahami, dan menarik kesimpulan berdasarkan bukti yang ada.',
    image: PlaceHolderImages.find(img => img.id === 'material-4')!.imageUrl,
    points: ['Pengolahan Spreadsheet', 'Visualisasi Grafik', 'Statistik Deskriptif', 'Interpretasi Tren'],
    references: [
      { name: 'Kaggle Data Science', url: 'https://www.kaggle.com/learn' },
      { name: 'Data.go.id', url: 'https://data.go.id' }
    ]
  },
  {
    id: 'm5',
    title: 'Keamanan Siber',
    description: 'Melindungi aset digital Anda dari ancaman di dunia maya.',
    fullContent: 'Dengan semakin banyaknya aktivitas kita yang berpindah ke internet, keamanan siber menjadi kebutuhan mendasar. Materi ini membahas cara-cara praktis untuk membentengi diri dari serangan umum seperti phishing, malware, dan social engineering.\n\nAnda akan belajar mengapa Multi-Factor Authentication (MFA) itu penting dan bagaimana menjaga identitas digital tetap aman di jaringan publik.',
    image: PlaceHolderImages.find(img => img.id === 'material-5')!.imageUrl,
    points: ['Ancaman Phishing', 'Enkripsi Dasar', 'Keamanan Jaringan', 'Manajemen Identitas'],
    references: [
      { name: 'BSSN Indonesia', url: 'https://bssn.go.id' },
      { name: 'Cisco Networking Academy', url: 'https://www.netacad.com' }
    ]
  }
];

export function Timeline() {
  const [selectedMaterial, setSelectedMaterial] = useState<typeof MATERIALS[0] | null>(null);

  return (
    <section id="materi" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Jalur Pembelajaran</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ikuti kurikulum kami yang disusun secara sistematis untuk memandu Anda dari nol hingga mahir.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {MATERIALS.map((item, index) => (
              <MaterialCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                side={index % 2 === 0 ? 'right' : 'left'}
                onClick={() => setSelectedMaterial(item)}
              />
            ))}
          </div>
        </div>
      </div>

      <MaterialModal
        material={selectedMaterial}
        isOpen={!!selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
      />
    </section>
  );
}
