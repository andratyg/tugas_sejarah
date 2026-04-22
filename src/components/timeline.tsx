"use client";

import { useState } from 'react';
import { MaterialCard } from './material-card';
import { MaterialModal } from './material-modal';

const MATERIALS = [
  {
    id: 'm3',
    title: 'Sains Botani: Kebun Raya Bogor (1817)',
    description: 'Pusat riset aklimatisasi tanaman dan klasifikasi flora tropis.',
    fullContent: 'Kebun Raya Bogor (Lands Plantentuin) didirikan sebagai laboratorium botani terbuka. Di sini, para ilmuwan melakukan riset aklimatisasi tanaman bernilai ekonomi tinggi dari luar negeri seperti Kina (Cinchona) dan Kelapa Sawit.\n\nLembaga ini menjadi pusat penelitian taksonomi tumbuhan di Asia Tenggara, menghasilkan ribuan dokumentasi ilmiah yang menjadi dasar bagi industri perkebunan modern di Indonesia.',
    image: 'https://www.ikons.id/wp-content/uploads/2017/05/AK_buitenzorg_ingang.jpg',
    points: ['Aklimatisasi Tanaman', 'Riset Taksonomi', 'Pengenalan Kina & Sawit', 'Dokumentasi Flora Tropis'],
    references: [
      { name: 'Kebun Raya Bogor', url: 'https://kebunraya.id' },
      { name: 'BRIN (Kebun Raya)', url: 'https://pusatriset.brin.go.id' }
    ]
  },
  {
    id: 'm8',
    title: 'Teknik Hidrolika: Sistem Irigasi (1850-an)',
    description: 'Manajemen aliran air sistematis dengan pintu air dan bendungan beton.',
    fullContent: 'Belanda memperkenalkan teknik hidrolika sipil untuk mengelola sumber daya air bagi pertanian. Mereka membangun bendungan besar dan saluran primer dengan sistem pintu air mekanis.\n\nInovasi ini memungkinkan rotasi tanaman yang lebih baik dan pencegahan banjir. Teknologi manajemen air ini menjadi dasar bagi infrastruktur irigasi yang masih digunakan oleh Kementerian PUPR hingga saat ini.',
    image: 'https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-05699-9_1/MediaObjects/315715_1_En_1_Fig12_HTML.jpg',
    points: ['Pintu Air Mekanis', 'Manajemen Debit Air', 'Bendungan Beton Sipil', 'Irigasi Teknis Modern'],
    references: [
      { name: 'Direktorat SDA', url: 'https://sda.pu.go.id' },
      { name: 'Irigasi (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Irigasi' }
    ]
  },
  {
    id: 'm2',
    title: 'Fisika Telekomunikasi: Telegraf (1855)',
    description: 'Integrasi sistem komunikasi elektromagnetik kabel pertama di Nusantara.',
    fullContent: 'IPTEK di bidang komunikasi berkembang dengan diperkenalkannya telegraf elektrik. Jalur pertama menghubungkan Batavia (Jakarta) dan Buitenzorg (Bogor).\n\nPrinsip kerja telegraf menggunakan elektromagnetik untuk mengirimkan kode Morse melalui kabel tembaga. Teknologi ini mempercepat transmisi informasi dari hitungan minggu menjadi hitungan menit, memungkinkan kontrol administratif pusat terhadap daerah-daerah terpencil secara real-time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzkRkWAG5WnBvSJO1eJdMC7mtCtm_JvJvhA&s',
    points: ['Prinsip Elektromagnetik', 'Kode Morse', 'Jaringan Kabel Tembaga', 'Transmisi Data Instan'],
    references: [
      { name: 'Sejarah Telegraf (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Telegraf' },
      { name: 'Pos Indonesia', url: 'https://www.posindonesia.co.id' }
    ]
  },
  {
    id: 'm1',
    title: 'Rekayasa Transportasi Rel (1864)',
    description: 'Penerapan teknologi mesin uap dan infrastruktur rel modern pertama di Jawa.',
    fullContent: 'Dampak teknologi yang paling terlihat adalah pengenalan sistem transportasi kereta api berbasis mesin uap. Jalur pertama dibangun oleh Nederlandsch-Indische Spoorweg Maatschappij (NIS) yang menghubungkan Kemijen dan Tanggung.\n\nTeknologi ini melibatkan rekayasa infrastruktur yang kompleks, mulai dari pembangunan jembatan besi hingga mekanika lokomotif uap. Kereta api mengubah dinamika ekonomi kolonial, memungkinkan pengangkutan hasil perkebunan dalam jumlah masif ke pelabuhan ekspor secara efisien.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8vqfwUKOZo8mcdFZ1HsaVd1sTRnoNFgGIg&s',
    points: ['Teknologi Mesin Uap', 'Pembangunan Jalur Rel', 'Jembatan Konstruksi Besi', 'Logistik Massal Efisien'],
    references: [
      { name: 'Heritage KAI', url: 'https://heritage.kai.id' },
      { name: 'Sejarah Kereta Api (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Sejarah_perkeretaapian_di_Indonesia' }
    ]
  },
  {
    id: 'm10',
    title: 'Geologi: Industri Pertambangan (1885)',
    description: 'Eksplorasi sumber daya bumi dan teknologi pengeboran minyak.',
    fullContent: 'Penemuan minyak di Pangkalan Brandan memicu revolusi industri ekstraktif. Teknologi pengeboran dalam dan penyulingan minyak diperkenalkan untuk pertama kalinya.\n\nPerkembangan geologi terapan ini melahirkan Royal Dutch Shell. Teknik pemetaan geologi yang dilakukan saat itu masih menjadi referensi utama bagi industri migas modern di Indonesia.',
    image: 'https://peragaanmuseumgeologi.wordpress.com/wp-content/uploads/2019/10/2-1.jpg?w=435',
    points: ['Pengeboran Minyak Bumi', 'Kilang Penyulingan', 'Pemetaan Geologi', 'Industri Ekstraktif'],
    references: [
      { name: 'Sejarah Migas (ESDM)', url: 'https://migas.esdm.go.id' },
      { name: 'Sejarah Shell', url: 'https://www.shell.co.id/id_id/about-us/who-we-are/our-history.html' }
    ]
  },
  {
    id: 'm4',
    title: 'Kedokteran: Lembaga Eijkman (1888)',
    description: 'Riset biologi molekuler perdana dan penemuan Vitamin B1.',
    fullContent: 'Didirikan di Batavia, laboratorium ini menjadi saksi penelitian revolusioner Christiaan Eijkman mengenai penyakit beri-beri. Melalui eksperimen laboratoris, ia menemukan bahwa beri-beri disebabkan oleh kekurangan zat tertentu dalam beras poles.\n\nPenemuan ini menjadi landasan bagi ilmu gizi dunia dan penemuan Vitamin B1. Atas kontribusi ilmiah ini, Eijkman dianugerahi Hadiah Nobel Kedokteran pada tahun 1929.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7CRFJ5vrd8xf-PdBEsahMh_dhi-vvgQeAQ&s',
    points: ['Eksperimen Laboratoris', 'Penemuan Vitamin B1', 'Etiologi Penyakit Beri-beri', 'Riset Gizi Global'],
    references: [
      { name: 'Nobel Prize Eijkman', url: 'https://www.nobelprize.org/prizes/medicine/1929/summary/' },
      { name: 'Lembaga Eijkman (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Lembaga_Eijkman' }
    ]
  },
  {
    id: 'm7',
    title: 'Elektrifikasi: Jaringan Listrik (1897)',
    description: 'Pembangunan jaringan listrik dan pembangkit listrik tenaga air.',
    fullContent: 'Modernisasi kota-kota besar ditandai dengan pendirian perusahaan listrik seperti ANIEM. Pembangkit Listrik Tenaga Air (PLTA) mulai dibangun untuk menyuplai energi ke pabrik dan pemukiman.\n\nTeknologi distribusi listrik ini membawa perubahan besar pada gaya hidup perkotaan, termasuk lampu jalan elektrik and penggunaan motor listrik dalam industri manufaktur, mengakhiri era lampu gas di kota-kota kolonial.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Trempealeau-Electric-Cooperative-Arcadia-Wis.jpg',
    points: ['Pembangkit Listrik (PLTA)', 'Jaringan Distribusi Kota', 'Industrialisasi Elektrik', 'Lampu Jalan Modern'],
    references: [
      { name: 'Sejarah Listrik (PLN)', url: 'https://web.pln.co.id/tentang-kami/sejarah-pt-pln-persero' },
      { name: 'Modernisasi Kolonial', url: 'https://id.wikipedia.org/wiki/Perusahaan_Listrik_Negara' }
    ]
  },
  {
    id: 'm12',
    title: 'Mekanisasi Pabrik Gula (Abad 19)',
    description: 'Transmisi tenaga uap ke mesin penggiling tebu industri.',
    fullContent: 'Industri gula di Jawa pernah menjadi yang tercanggih di dunia. Pengalihan dari tenaga hewan ke mesin giling uap meningkatkan kapasitas produksi secara eksponensial.\n\nTeknologi vakum dalam proses kristalisasi gula diperkenalkan untuk efisiensi. Pabrik-pabrik ini menjadi pusat mekanisasi pertama di pedesaan Jawa, memperkenalkan konsep manajemen pabrik modern bagi masyarakat lokal.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sugar_factory_Tjomal_Java.jpg/1280px-Sugar_factory_Tjomal_Java.jpg',
    points: ['Mesin Giling Uap', 'Kristalisasi Vakum', 'Mekanisasi Industri', 'Manajemen Pabrik'],
    references: [
      { name: 'Industri Gula (Historia)', url: 'https://historia.id' },
      { name: 'Pabrik Gula (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Industri_gula_di_Indonesia' }
    ]
  },
  {
    id: 'm5',
    title: 'Pendidikan Teknik: THS Bandung (1920)',
    description: 'Lembaga pendidikan tinggi teknik pertama untuk mencetak insinyur.',
    fullContent: 'Technische Hoogeschool te Bandoeng (sekarang ITB) didirikan untuk memenuhi kebutuhan tenaga ahli teknik di koloni. Kurikulumnya mengadopsi standar Delft University di Belanda.\n\nMahasiswa diajarkan prinsip matematika terapan, mekanika fluida, dan teknik sipil. Lembaga ini melahirkan insinyur pribumi pertama seperti Ir. Soekarno dan meletakkan fondasi bagi pendidikan sains modern di Indonesia.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/COLLECTIE_TROPENMUSEUM_Technische_Hogeschool_aan_het_IJzermanpark_te_Bandung_Java_TMnr_10002359.jpg',
    points: ['Kurikulum Teknik Eropa', 'Matematika Terapan', 'Pendidikan Insinyur Lokal', 'Fondasi ITB'],
    references: [
      { name: 'Sejarah ITB', url: 'https://www.itb.ac.id/sejarah' },
      { name: 'Delft University History', url: 'https://www.tudelft.nl/en/about-tu-delft/history' }
    ]
  },
  {
    id: 'm11',
    title: 'Arsitektur Nieuwe Bouwen (1920-an)',
    description: 'Rekayasa bangunan tropis modern berbasis beton dan sirkulasi udara.',
    fullContent: 'Arsitek kolonial memperkenalkan gaya Nieuwe Bouwen yang mengutamakan fungsi dan adaptasi iklim. Teknologi beton bertulang memungkinkan struktur bangunan yang lebih kokoh dan luas.\n\nInovasi pada ventilasi alami dan dinding ganda dirancang secara teknis untuk mendinginkan ruangan tanpa AC. Gedung Sate adalah contoh puncak rekayasa arsitektur tropis pada masa itu.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gedung-Sate-Trees.jpg/1280px-Gedung-Sate-Trees.jpg',
    points: ['Beton Bertulang', 'Adaptasi Iklim Tropis', 'Sirkulasi Udara Alami', 'Gaya Arsitektur Modern'],
    references: [
      { name: 'Sejarah Gedung Sate', url: 'https://jabarprov.go.id' },
      { name: 'Arsitektur Kolonial (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Arsitektur_kolonial_Belanda_di_Indonesia' }
    ]
  },
  {
    id: 'm6',
    title: 'Astronomi Tropis: Observatorium Bosscha (1923)',
    description: 'Pusat observasi langit selatan pertama di garis khatulistiwa.',
    fullContent: 'Observatorium Bosscha di Lembang merupakan kontribusi besar dalam bidang astrofisika. Dengan teleskop refraktor besar ganda Zeiss, para astronom melakukan pengamatan terhadap sistem bintang ganda di belahan langit selatan.\n\nLokasinya yang strategis di dekat khatulistiwa menjadikan Bosscha salah satu pusat penelitian astronomi terpenting di dunia pada masanya, yang menghubungkan riset astronomi Eropa dengan pengamatan di wilayah tropis.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Bosscha_001.JPG',
    points: ['Astrofisika Modern', 'Teleskop Zeiss', 'Observasi Langit Selatan', 'Penelitian Bintang Ganda'],
    references: [
      { name: 'Observatorium Bosscha', url: 'https://bosscha.itb.ac.id' },
      { name: 'Bosscha (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Observatorium_Bosscha' }
    ]
  },
  {
    id: 'm9',
    title: 'Teknologi Dirgantara: KNILM (1928)',
    description: 'Lahirnya penerbangan sipil dan pengiriman pos udara.',
    fullContent: 'KNILM memperkenalkan transportasi udara komersial di Nusantara. Bandara Kemayoran menjadi pusat hub internasional.\n\nTeknologi penerbangan ini memperpendek waktu tempuh antar pulau secara drastis. Penggunaan pesawat seperti Fokker dan Douglas dalam pengiriman pos udara mengintegrasikan Indonesia ke dalam jaringan logistik global di awal abad ke-20.',
    image: 'https://www.anjani.id/wp-content/uploads/2025/03/knilm3.png',
    points: ['Penerbangan Komersial', 'Bandara Internasional', 'Teknologi Fokker', 'Logistik Pos Udara'],
    references: [
      { name: 'Sejarah Penerbangan (Kemkes)', url: 'https://hubud.dephub.go.id' },
      { name: 'KNILM (Wikipedia)', url: 'https://id.wikipedia.org/wiki/KNILM' }
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
            Analisis mendalam mengenai perkembangan Ilmu Pengetahuan dan Teknologi dari awal industrialisasi hingga berakhirnya masa kolonial di Nusantara.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
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
