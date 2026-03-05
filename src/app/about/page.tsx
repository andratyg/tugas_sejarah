
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const points = [
    "Kurikulum terstruktur untuk pemula hingga tingkat lanjut.",
    "Materi yang diperbarui sesuai dengan tren industri teknologi saat ini.",
    "Pendekatan interaktif dengan bantuan teknologi AI untuk ringkasan cepat.",
    "Fokus pada penguasaan konsep dasar yang kuat sebelum beralih ke praktik.",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-primary">Tentang Platform Kami</h1>
            
            <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Kami adalah platform edukasi modern yang berdedikasi untuk mendemokratisasi akses pembelajaran berkualitas bagi seluruh masyarakat Indonesia. Kami percaya bahwa setiap individu memiliki potensi besar jika diberikan alat dan bimbingan yang tepat.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Misi Kami</h2>
              <p>
                Menyediakan jalur pembelajaran yang sistematis dan mudah dipahami, terutama di bidang literasi digital, pemrograman, desain, dan analisis data. Kami menggabungkan visual yang menarik dengan teknologi AI untuk memastikan setiap pengguna dapat menyerap informasi dengan lebih efisien.
              </p>

              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 my-12">
                <h3 className="text-xl font-bold text-primary mb-6">Mengapa Belajar di Sini?</h3>
                <ul className="space-y-4">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Metodologi Pembelajaran</h2>
              <p>
                Kami menggunakan metode "Progressive Learning Path" di mana materi disajikan secara bertahap. Mulai dari pemahaman literasi dasar hingga teknik teknis yang mendalam. Setiap modul dirancang untuk saling melengkapi, memastikan tidak ada celah dalam pemahaman Anda.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
