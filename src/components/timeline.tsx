
"use client";

import { useState } from 'react';
import { MaterialCard } from './material-card';
import { MaterialModal } from './material-modal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MATERIALS = [
  {
    id: 'm1',
    title: 'Rekayasa Transportasi Rel (1864)',
    description: 'Penerapan teknologi mesin uap dan infrastruktur rel modern pertama di Jawa.',
    fullContent: 'Dampak teknologi yang paling terlihat adalah pengenalan sistem transportasi kereta api berbasis mesin uap. Jalur pertama dibangun oleh Nederlandsch-Indische Spoorweg Maatschappij (NIS) yang menghubungkan Kemijen dan Tanggung.\n\nTeknologi ini melibatkan rekayasa infrastruktur yang kompleks, mulai dari pembangunan jembatan besi hingga mekanika lokomotif uap. Kereta api mengubah dinamika ekonomi kolonial, memungkinkan pengangkutan hasil perkebunan dalam jumlah masif ke pelabuhan ekspor secara efisien.',
    image: PlaceHolderImages.find(img => img.id === 'material-1')!.imageUrl,
    points: ['Teknologi Mesin Uap', 'Pembangunan Jalur Rel', 'Jembatan Konstruksi Besi', 'Logistik Massal Efisien'],
    references: [
      { name: 'Heritage KAI', url: 'https://heritage.kai.id' },
      { name: 'Sejarah Perkeretaapian', url: 'https://id.wikipedia.org/wiki/Sejarah_perkeretaapian_di_Indonesia' }
    ]
  },
  {
    id: 'm2',
    title: 'Fisika Telekomunikasi: Telegraf (1855)',
    description: 'Integrasi sistem komunikasi elektromagnetik kabel pertama di Nusantara.',
    fullContent: 'IPTEK di bidang komunikasi berkembang dengan diperkenalkannya telegraf elektrik. Jalur pertama menghubungkan Batavia (Jakarta) dan Buitenzorg (Bogor).\n\nPrinsip kerja telegraf menggunakan elektromagnetik untuk mengirimkan kode Morse melalui kabel tembaga. Teknologi ini mempercepat transmisi informasi dari hitungan minggu menjadi hitungan menit, memungkinkan kontrol administratif pusat terhadap daerah-daerah terpencil secara real-time.',
    image: PlaceHolderImages.find(img => img.id === 'material-2')!.imageUrl,
    points: ['Prinsip Elektromagnetik', 'Kode Morse', 'Jaringan Kabel Tembaga', 'Transmisi Data Instan'],
    references: [
      { name: 'Sejarah Telegraf', url: 'https://id.wikipedia.org/wiki/Telegraf' },
      { name: 'Museum Pos Indonesia', url: 'https://posindonesia.co.id' }
    ]
  },
  {
    id: 'm3',
    title: 'Sains Botani: Kebun Raya Bogor (1817)',
    description: 'Pusat riset aklimatisasi tanaman dan klasifikasi flora tropis.',
    fullContent: 'Kebun Raya Bogor (Lands Plantentuin) didirikan sebagai laboratorium botani terbuka. Di sini, para ilmuwan melakukan riset aklimatisasi tanaman bernilai ekonomi tinggi dari luar negeri seperti Kina (Cinchona) dan Kelapa Sawit.\n\nLembaga ini menjadi pusat penelitian taksonomi tumbuhan di Asia Tenggara, menghasilkan ribuan dokumentasi ilmiah yang menjadi dasar bagi industri perkebunan modern di Indonesia.',
    image: PlaceHolderImages.find(img => img.id === 'material-6')!.imageUrl,
    points: ['Aklimatisasi Tanaman', 'Riset Taksonomi', 'Pengenalan Kina & Sawit', 'Dokumentasi Flora Tropis'],
    references: [
      { name: 'Kebun Raya Bogor', url: 'https://kebunraya.id/bogor' },
      { name: 'Sejarah Botani Indonesia', url: 'https://id.wikipedia.org/wiki/Kebun_Raya_Bogor' }
    ]
  },
  {
    id: 'm4',
    title: 'Kedokteran: Lembaga Eijkman (1888)',
    description: 'Riset biologi molekuler perdana dan penemuan Vitamin B1.',
    fullContent: 'Didirikan di Batavia, laboratorium ini menjadi saksi penelitian revolusioner Christiaan Eijkman mengenai penyakit beri-beri. Melalui eksperimen laboratoris, ia menemukan bahwa beri-beri disebabkan oleh kekurangan zat tertentu dalam beras poles.\n\nPenemuan ini menjadi landasan bagi ilmu gizi dunia dan penemuan Vitamin B1. Atas kontribusi ilmiah ini, Eijkman dianugerahi Hadiah Nobel Kedokteran pada tahun 1929.',
    image: PlaceHolderImages.find(img => img.id === 'material-4')!.imageUrl,
    points: ['Eksperimen Laboratoris', 'Penemuan Vitamin B1', 'Etiologi Penyakit Beri-beri', 'Riset Gizi Global'],
    references: [
      { name: 'Lembaga Eijkman', url: 'https://www.eijkman.go.id' },
      { name: 'Nobel Prize Eijkman', url: 'https://www.nobelprize.org/prizes/medicine/1929/summary/' }
    ]
  },
  {
    id: 'm5',
    title: 'Pendidikan Teknik: THS Bandung (1920)',
    description: 'Lembaga pendidikan tinggi teknik pertama untuk mencetak insinyur.',
    fullContent: 'Technische Hoogeschool te Bandoeng (sekarang ITB) didirikan untuk memenuhi kebutuhan tenaga ahli teknik di koloni. Kurikulumnya mengadopsi standar Delft University di Belanda.\n\nMahasiswa diajarkan prinsip matematika terapan, mekanika fluida, dan teknik sipil. Lembaga ini melahirkan insinyur pribumi pertama seperti Ir. Soekarno dan meletakkan fondasi bagi pendidikan sains modern di Indonesia.',
    image: PlaceHolderImages.find(img => img.id === 'material-3')!.imageUrl,
    points: ['Kurikulum Teknik Eropa', 'Matematika Terapan', 'Pendidikan Insinyur Lokal', 'Fondasi ITB'],
    references: [
      { name: 'Sejarah ITB', url: 'https://itb.ac.id/sejarah' },
      { name: 'Pendidikan Teknik Kolonial', url: 'https://id.wikipedia.org/wiki/Institut_Teknologi_Bandung' }
    ]
  },
  {
    id: 'm6',
    title: 'Astronomi Tropis: Observatorium Bosscha (1923)',
    description: 'Pusat observasi langit selatan pertama di garis khatulistiwa.',
    fullContent: 'Observatorium Bosscha di Lembang merupakan kontribusi besar dalam bidang astrofisika. Dengan teleskop refraktor besar ganda Zeiss, para astronom melakukan pengamatan terhadap sistem bintang ganda di belahan langit selatan.\n\nLokasinya yang strategis di dekat khatulistiwa menjadikan Bosscha salah satu pusat penelitian astronomi terpenting di dunia pada masanya, yang menghubungkan riset astronomi Eropa dengan pengamatan di wilayah tropis.',
    image: PlaceHolderImages.find(img => img.id === 'material-7')!.imageUrl,
    points: ['Astrofisika Modern', 'Teleskop Zeiss', 'Observasi Langit Selatan', 'Penelitian Bintang Ganda'],
    references: [
      { name: 'Observatorium Bosscha', url: 'https://bosscha.itb.ac.id' },
      { name: 'Astronomi di Indonesia', url: 'https://id.wikipedia.org/wiki/Observatorium_Bosscha' }
    ]
  },
  {
    id: 'm7',
    title: 'Elektrifikasi: ANIEM & OGEM (1897)',
    description: 'Pembangunan jaringan listrik dan pembangkit listrik tenaga air.',
    fullContent: 'Modernisasi kota-kota besar ditandai dengan pendirian perusahaan listrik seperti ANIEM. Pembangkit Listrik Tenaga Air (PLTA) mulai dibangun untuk menyuplai energi ke pabrik dan pemukiman.\n\nTeknologi distribusi listrik ini membawa perubahan besar pada gaya hidup perkotaan, termasuk lampu jalan elektrik dan penggunaan motor listrik dalam industri manufaktur, mengakhiri era lampu gas di kota-kota kolonial.',
    image: PlaceHolderImages.find(img => img.id === 'material-8')!.imageUrl,
    points: ['Pembangkit Listrik (PLTA)', 'Jaringan Distribusi Kota', 'Industrialisasi Elektrik', 'Lampu Jalan Modern'],
    references: [
      { name: 'Sejarah Listrik Indonesia', url: 'https://pln.co.id/sejarah' },
      { name: 'Modernisasi Kolonial', url: 'https://id.wikipedia.org/wiki/Perusahaan_Listrik_Negara' }
    ]
  },
  {
    id: 'm8',
    title: 'Teknik Hidrolika: Sistem Irigasi (1850-an)',
    description: 'Manajemen aliran air sistematis dengan pintu air dan bendungan beton.',
    fullContent: 'Belanda memperkenalkan teknik hidrolika sipil untuk mengelola sumber daya air bagi pertanian. Mereka membangun bendungan besar dan saluran primer dengan sistem pintu air mekanis.\n\nInovasi ini memungkinkan rotasi tanaman yang lebih baik dan pencegahan banjir. Teknologi manajemen air ini menjadi dasar bagi infrastruktur irigasi yang masih digunakan oleh Kementerian PUPR hingga saat ini.',
    image: PlaceHolderImages.find(img => img.id === 'material-5')!.imageUrl,
    points: ['Pintu Air Mekanis', 'Manajemen Debit Air', 'Bendungan Beton Sipil', 'Irigasi Teknis Modern'],
    references: [
      { name: 'Sejarah Pengairan', url: 'https://sda.pu.go.id' },
      { name: 'Teknik Sipil Air', url: 'https://id.wikipedia.org/wiki/Irigasi' }
    ]
  },
  {
    id: 'm9',
    title: 'Teknologi Dirgantara: KNILM (1928)',
    description: 'Lahirnya penerbangan sipil dan pengiriman pos udara lintas benua.',
    fullContent: 'K Koninklijke Nederlandsch-Indische Luchtvaart Maatschappij (KNILM) memperkenalkan transportasi udara komersial di Nusantara. Bandara Kemayoran menjadi pusat hub internasional.\n\nTeknologi penerbangan ini memperpendek waktu tempuh antar pulau secara drastis. Penggunaan pesawat seperti Fokker dan Douglas dalam pengiriman pos udara (Airmail) mengintegrasikan Indonesia ke dalam jaringan logistik global di awal abad ke-20.',
    image: PlaceHolderImages.find(img => img.id === 'material-9')!.imageUrl,
    points: ['Penerbangan Komersial', 'Bandara Internasional', 'Teknologi Fokker/Douglas', 'Logistik Pos Udara'],
    references: [
      { name: 'Sejarah Penerbangan', url: 'https://id.wikipedia.org/wiki/KNILM' },
      { name: 'Arsip Dirgantara', url: 'https://kemenhub.go.id' }
    ]
  },
  {
    id: 'm10',
    title: 'Geologi: Industri Pertambangan (1885)',
    description: 'Eksplorasi sumber daya bumi dan teknologi pengeboran minyak.',
    fullContent: 'Penemuan minyak di Pangkalan Brandan oleh J.B. August Kessler memicu revolusi industri ekstraktif. Teknologi pengeboran dalam dan penyulingan minyak (kilang) diperkenalkan untuk pertama kalinya.\n\nPerkembangan geologi terapan ini melahirkan Royal Dutch Shell. Teknik pemetaan geologi yang dilakukan saat itu masih menjadi referensi utama bagi industri migas dan pertambangan batubara modern di Indonesia.',
    image: PlaceHolderImages.find(img => img.id === 'material-10')!.imageUrl,
    points: ['Pengeboran Minyak Bumi', 'Kilang Penyulingan', 'Pemetaan Geologi', 'Industri Ekstraktif'],
    references: [
      { name: 'Sejarah Migas', url: 'https://migas.esdm.go.id' },
      { name: 'Sejarah Shell', url: 'https://www.shell.co.id/id_id/about-us/who-we-are/our-history.html' }
    ]
  },
  {
    id: 'm11',
    title: 'Arsitektur Nieuwe Bouwen (1920-an)',
    description: 'Rekayasa bangunan tropis modern berbasis beton dan sirkulasi udara.',
    fullContent: 'Arsitek kolonial seperti Wolff Schoemaker memperkenalkan gaya Nieuwe Bouwen yang mengutamakan fungsi dan adaptasi iklim. Teknologi beton bertulang memungkinkan struktur bangunan yang lebih kokoh dan luas.\n\nInovasi pada ventilasi alami, dinding ganda, dan atap tinggi dirancang secara teknis untuk mendinginkan ruangan tanpa AC. Gedung Sate di Bandung adalah salah satu contoh puncak rekayasa arsitektur tropis modern pada masa itu.',
    image: PlaceHolderImages.find(img => img.id === 'material-11')!.imageUrl,
    points: ['Beton Bertulang', 'Adaptasi Iklim Tropis', 'Sirkulasi Udara Alami', 'Gaya Arsitektur Modern'],
    references: [
      { name: 'Arsitektur Kolonial', url: 'https://id.wikipedia.org/wiki/Arsitektur_kolonial_Belanda_di_Indonesia' },
      { name: 'Sejarah Gedung Sate', url: 'https://jabarprov.go.id' }
    ]
  },
  {
    id: 'm12',
    title: 'Mekanisasi Pabrik Gula (Abad 19)',
    description: 'Transmisi tenaga uap ke mesin penggiling tebu industri.',
    fullContent: 'Hingga akhir masa penjajahan, industri gula di Jawa adalah salah satu yang tercanggih di dunia. Pengalihan dari tenaga hewan ke mesin giling uap meningkatkan kapasitas produksi secara eksponensial.\n\nTeknologi vakum dalam proses kristalisasi gula diperkenalkan untuk efisiensi bahan bakar. Pabrik-pabrik gula ini menjadi pusat mekanisasi pertama di pedesaan Jawa, memperkenalkan konsep *assembly line* dan manajemen pabrik modern bagi masyarakat lokal.',
    image: PlaceHolderImages.find(img => img.id === 'material-12')!.imageUrl,
    points: ['Mesin Giling Uap', 'Proses Kristalisasi Vakum', 'Mekanisasi Industri', 'Manajemen Pabrik'],
    references: [
      { name: 'Industri Gula Jawa', url: 'https://id.wikipedia.org/wiki/Industri_gula_di_Indonesia' },
      { name: 'Sejarah Gula Kolonial', url: 'https://historia.id' }
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
            Kurikulum lengkap perkembangan Ilmu Pengetahuan dan Teknologi dari awal industrialisasi hingga berakhirnya masa kolonial di Indonesia.
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
