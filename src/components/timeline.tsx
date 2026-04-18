
"use client";

import { useState } from 'react';
import { MaterialCard } from './material-card';
import { MaterialModal } from './material-modal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MATERIALS = [
  {
    id: 'm1',
    title: 'Revolusi Transportasi Rel',
    description: 'Pembangunan jalur kereta api pertama di Hindia Belanda.',
    fullContent: 'Salah satu dampak signifikan penjajahan Belanda di bidang IPTEK adalah pengenalan sistem transportasi kereta api. Pada tahun 1864, Gubernur Jenderal Baron Sloet van de Beele meresmikan pembangunan jalur kereta api pertama yang menghubungkan Semarang dan Kedungjati oleh perusahaan NIS (Nederlandsch-Indische Spoorweg Maatschappij).\n\nTeknologi ini awalnya ditujukan untuk mempermudah mobilisasi hasil bumi dari pedalaman ke pelabuhan, namun kemudian berkembang menjadi sarana transportasi publik yang revolusioner bagi masyarakat pribumi. Pembangunan ini memperkenalkan teknologi jembatan besi dan lokomotif uap canggih pada masanya.',
    image: PlaceHolderImages.find(img => img.id === 'material-1')!.imageUrl,
    points: ['Jalur Semarang-Solo-Yogya', 'Teknologi Lokomotif Uap', 'Stasiun Bersejarah', 'Mobilisasi Ekonomi'],
    references: [
      { name: 'Sejarah Perkeretaapian Indonesia', url: 'https://heritage.kai.id' },
      { name: 'Wikipedia: Kereta Api Kolonial', url: 'https://id.wikipedia.org/wiki/Sejarah_perkeretaapian_di_Indonesia' }
    ]
  },
  {
    id: 'm2',
    title: 'Sistem Telekomunikasi Modern',
    description: 'Lahirnya jaringan telegraf dan integrasi informasi.',
    fullContent: 'Belanda memperkenalkan teknologi komunikasi jarak jauh melalui telegraf. Jaringan telegraf pertama di Indonesia dibangun pada tahun 1855, menghubungkan Batavia (Jakarta) dan Buitenzorg (Bogor).\n\nTeknologi ini memungkinkan pengiriman pesan kilat untuk keperluan militer dan birokrasi pemerintahan kolonial. Selain telegraf, pembangunan "Grote Postweg" (Jalan Raya Pos) oleh Daendels juga menjadi pondasi sistem logistik dan komunikasi darat yang menghubungkan ujung barat hingga timur pulau Jawa.',
    image: PlaceHolderImages.find(img => img.id === 'material-2')!.imageUrl,
    points: ['Kabel Telegraf Bawah Laut', 'Layanan Pos Modern', 'Integrasi Pulau Jawa', 'Teknologi Sinyal'],
    references: [
      { name: 'Museum Pos Indonesia', url: 'https://posindonesia.co.id' },
      { name: 'Sejarah Telekomunikasi', url: 'https://id.wikipedia.org/wiki/Telegraf' }
    ]
  },
  {
    id: 'm3',
    title: 'Lembaga Pendidikan Teknik',
    description: 'Pendirian THS Bandung sebagai pusat sains modern.',
    fullContent: 'Di bidang pendidikan tinggi, Belanda mendirikan Technische Hoogeschool te Bandoeng (THS) pada 3 Juli 1920, yang sekarang dikenal sebagai ITB. Ini adalah lembaga pendidikan tinggi teknik pertama di Indonesia.\n\nPendirian ini membawa kurikulum sains Barat, metode eksperimen laboratorium, dan standar teknik Eropa ke tanah air. Salah satu lulusan ternama dari THS adalah Ir. Soekarno, presiden pertama Indonesia, yang merupakan bukti nyata dampak intelektual lembaga ini terhadap bangsa Indonesia.',
    image: PlaceHolderImages.find(img => img.id === 'material-3')!.imageUrl,
    points: ['Lahirnya ITB', 'Pendidikan Insinyur Lokal', 'Laboratorium Fisika-Kimia', 'Sains Terapan'],
    references: [
      { name: 'Sejarah ITB', url: 'https://itb.ac.id/sejarah' },
      { name: 'Wikipedia: THS Bandoeng', url: 'https://id.wikipedia.org/wiki/Institut_Teknologi_Bandung' }
    ]
  },
  {
    id: 'm4',
    title: 'Ilmu Kedokteran Tropis',
    description: 'Peran STOVIA dalam kesehatan dan penemuan Nobel.',
    fullContent: 'Perkembangan IPTEK kesehatan dimulai dengan pendirian Sekolah Dokter Jawa yang berkembang menjadi STOVIA (School tot Opleiding van Indische Artsen). Lembaga ini memperkenalkan metode medis Barat untuk menangani penyakit endemik di wilayah tropis.\n\nPenelitian besar terjadi di Batavia, di mana Christiaan Eijkman menemukan penyebab penyakit beri-beri (kekurangan Vitamin B1) di laboratorium kesehatan yang sekarang bernama Lembaga Eijkman. Penemuan ini dianugerahi Hadiah Nobel Kedokteran pada tahun 1929.',
    image: PlaceHolderImages.find(img => img.id === 'material-4')!.imageUrl,
    points: ['Penelitian Beri-beri', 'Lahirnya STOVIA', 'Vaksinasi Massal', 'Farmasi Modern'],
    references: [
      { name: 'Lembaga Eijkman', url: 'https://www.eijkman.go.id' },
      { name: 'Museum Kebangkitan Nasional', url: 'https://muskebangnas.id' }
    ]
  },
  {
    id: 'm5',
    title: 'Teknologi Irigasi & Pertanian',
    description: 'Penerapan bendungan dan sistem pengairan sistematis.',
    fullContent: 'Belanda memperkenalkan teknologi irigasi modern untuk mendukung sistem perkebunan besar (Plantation System). Mereka membangun bendungan-bendungan besar dan sistem pintu air otomatis di berbagai daerah di Jawa dan Sumatera.\n\nTeknologi ini menggunakan prinsip hidrolika Eropa untuk mengatur debit air secara presisi. Meskipun awalnya untuk kepentingan ekspor kolonial, infrastruktur ini menjadi pondasi bagi sistem pengairan pertanian padi di Indonesia pasca-kemerdekaan.',
    image: PlaceHolderImages.find(img => img.id === 'material-5')!.imageUrl,
    points: ['Bendungan Beton', 'Pintu Air Otomatis', 'Hidrolika Pertanian', 'Tanaman Ekspor Baru'],
    references: [
      { name: 'Sejarah Irigasi Indonesia', url: 'https://sda.pu.go.id' },
      { name: 'Wikipedia: Irigasi Belanda', url: 'https://id.wikipedia.org/wiki/Irigasi' }
    ]
  }
];

export function Timeline() {
  const [selectedMaterial, setSelectedMaterial] = useState<typeof MATERIALS[0] | null>(null);

  return (
    <section id="materi" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Dampak Penjajahan Belanda di Bidang IPTEK</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pelajari bagaimana teknologi, sains, dan infrastruktur modern diperkenalkan ke Indonesia melalui jalur sejarah kolonialisme.
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
