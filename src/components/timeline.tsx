"use client";

import { useState } from 'react';
import { MaterialCard } from './material-card';
import { MaterialModal } from './material-modal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MATERIALS = [
  {
    id: 'm1',
    title: 'Rekayasa Transportasi Rel',
    description: 'Penerapan teknologi mesin uap dan infrastruktur rel modern.',
    fullContent: 'Dampak teknologi yang paling terlihat adalah pengenalan sistem transportasi kereta api berbasis mesin uap. Teknologi ini melibatkan rekayasa infrastruktur yang kompleks, mulai dari perhitungan beban bantalan rel hingga mekanika lokomotif.\n\nPada tahun 1864, pembangunan jalur pertama di Jawa memperkenalkan teknik konstruksi jembatan besi dan sistem persinyalan mekanik yang sebelumnya tidak dikenal oleh masyarakat lokal. Ini menandai dimulainya era mekanisasi transportasi massal yang efisien untuk mengangkut sumber daya dan manusia secara cepat.',
    image: PlaceHolderImages.find(img => img.id === 'material-1')!.imageUrl,
    points: ['Teknologi Mesin Uap', 'Mekanika Lokomotif', 'Rekayasa Infrastruktur Rel', 'Sistem Persinyalan Mekanik'],
    references: [
      { name: 'Sejarah Perkeretaapian', url: 'https://heritage.kai.id' },
      { name: 'Teknologi Transportasi Kolonial', url: 'https://id.wikipedia.org/wiki/Sejarah_perkeretaapian_di_Indonesia' }
    ]
  },
  {
    id: 'm2',
    title: 'Fisika Telekomunikasi: Telegraf',
    description: 'Integrasi sistem komunikasi kabel dan sinyal elektrik.',
    fullContent: 'IPTEK di bidang komunikasi berkembang pesat dengan diperkenalkannya teknologi telegraf. Pada 1855, jalur telegraf elektrik pertama menghubungkan Batavia dan Buitenzorg.\n\nTeknologi ini bekerja berdasarkan prinsip elektromagnetik untuk mengirimkan kode-kode informasi melalui kabel tembaga. Perkembangan ini kemudian diikuti dengan pemasangan kabel bawah laut yang menghubungkan pulau-pulau di Nusantara dengan jaringan komunikasi global, memungkinkan transmisi data hampir seketika antar benua.',
    image: PlaceHolderImages.find(img => img.id === 'material-2')!.imageUrl,
    points: ['Prinsip Elektromagnetik', 'Teknologi Kabel Bawah Laut', 'Komunikasi Data Cepat', 'Infrastruktur Jaringan'],
    references: [
      { name: 'Sejarah Telekomunikasi', url: 'https://id.wikipedia.org/wiki/Telegraf' },
      { name: 'Museum Pos dan Telegraf', url: 'https://posindonesia.co.id' }
    ]
  },
  {
    id: 'm3',
    title: 'Sains Inovatif: Lembaga Eijkman',
    description: 'Penelitian biologi kedokteran dan penemuan Vitamin B1.',
    fullContent: 'Salah satu kontribusi ilmiah terbesar adalah berdirinya Laboratorium Medis di Batavia (sekarang Lembaga Eijkman). Di sinilah Christiaan Eijkman melakukan penelitian fundamental tentang penyebab beri-beri.\n\nMelalui serangkaian eksperimen laboratorium yang ketat, ia menemukan bahwa penyakit tersebut disebabkan oleh kekurangan nutrisi (Vitamin B1) pada beras yang diproses secara mekanis. Penemuan ini merupakan tonggak sejarah dalam sains nutrisi dunia dan dianugerahi Hadiah Nobel Kedokteran pada tahun 1929.',
    image: PlaceHolderImages.find(img => img.id === 'material-4')!.imageUrl,
    points: ['Penelitian Biologi Molekuler', 'Metode Eksperimen Sains', 'Penemuan Vitamin B1', 'Laboratorium Medis Modern'],
    references: [
      { name: 'Lembaga Eijkman', url: 'https://www.eijkman.go.id' },
      { name: 'Sejarah Kedokteran Tropis', url: 'https://id.wikipedia.org/wiki/Lembaga_Biologi_Molekuler_Eijkman' }
    ]
  },
  {
    id: 'm4',
    title: 'Standarisasi Pendidikan Teknik',
    description: 'Lahirnya THS Bandung sebagai pusat pendidikan insinyur.',
    fullContent: 'Pendidikan teknik tinggi formal dimulai dengan pendirian Technische Hoogeschool te Bandoeng (THS) pada tahun 1920. Lembaga ini memperkenalkan kurikulum teknik Eropa dan standarisasi keahlian insinyur.\n\nMahasiswa diajarkan prinsip-prinsip matematika terapan, fisika bangunan, dan teknik sipil tingkat lanjut. Institusi ini tidak hanya melahirkan tenaga ahli seperti Ir. Soekarno, tetapi juga menjadi pondasi bagi Institut Teknologi Bandung (ITB) yang menjadi pusat pengembangan IPTEK di Indonesia hingga saat ini.',
    image: PlaceHolderImages.find(img => img.id === 'material-3')!.imageUrl,
    points: ['Standar Teknik Eropa', 'Pendidikan Insinyur Lokal', 'Sains Terapan', 'Laboratorium Teknik Fisika'],
    references: [
      { name: 'Sejarah ITB', url: 'https://itb.ac.id/sejarah' },
      { name: 'Arsip Pendidikan Teknik', url: 'https://id.wikipedia.org/wiki/Institut_Teknologi_Bandung' }
    ]
  },
  {
    id: 'm5',
    title: 'Teknik Hidrolika & Irigasi',
    description: 'Penerapan bendungan beton dan manajemen aliran air.',
    fullContent: 'Belanda memperkenalkan prinsip-prinsip teknik hidrolika modern untuk membangun sistem irigasi yang sistematis. Mereka menggunakan konstruksi beton dan pintu air otomatis untuk mengatur debit air di lahan pertanian.\n\nInovasi ini memungkinkan pengairan lahan yang lebih luas dan efisien, menggantikan sistem tadah hujan yang kurang stabil. Teknologi pintu air ini memungkinkan manajemen sumber daya air yang presisi, yang menjadi dasar bagi infrastruktur bendungan besar yang digunakan Indonesia di masa depan.',
    image: PlaceHolderImages.find(img => img.id === 'material-5')!.imageUrl,
    points: ['Rekayasa Hidrolika', 'Konstruksi Bendungan Beton', 'Manajemen Debit Air', 'Irigasi Sistematis'],
    references: [
      { name: 'Sejarah Irigasi', url: 'https://sda.pu.go.id' },
      { name: 'Teknik Sipil Air', url: 'https://id.wikipedia.org/wiki/Irigasi' }
    ]
  }
];

export function Timeline() {
  const [selectedMaterial, setSelectedMaterial] = useState<typeof MATERIALS[0] | null>(null);

  return (
    <section id="materi" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Dampak IPTEK Masa Kolonial Belanda</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Eksplorasi perkembangan Ilmu Pengetahuan dan Teknologi yang membentuk fondasi modernitas infrastruktur dan pendidikan teknik di Indonesia.
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
