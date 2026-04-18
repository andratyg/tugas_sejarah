import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const points = [
    "Transformasi infrastruktur transportasi berbasis mesin uap.",
    "Pembentukan standar pendidikan tinggi teknik (Technische Hoogeschool).",
    "Riset kedokteran tropis dan penemuan vitamin molekuler.",
    "Manajemen sumber daya air melalui hidrolika sipil modern.",
    "Eksplorasi geologi dan teknologi pengeboran industri ekstraktif."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-primary">Tentang Kajian IPTEK Kolonial</h1>
            
            <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Platform ini bertujuan untuk menganalisis bagaimana Ilmu Pengetahuan dan Teknologi pada masa kolonial Belanda meletakkan fondasi bagi modernitas fisik dan institusi pendidikan teknik di Indonesia saat ini.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Fokus Analisis</h2>
              <p>
                Kami menelaah berbagai disiplin ilmu mulai dari teknik sipil, kelistrikan, telekomunikasi, hingga biologi molekuler yang berkembang antara abad ke-19 hingga pertengahan abad ke-20.
              </p>

              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 my-12">
                <h3 className="text-xl font-bold text-primary mb-6">Objektif Pembelajaran</h3>
                <ul className="space-y-4">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Metodologi Historis</h2>
              <p>
                Setiap materi disusun berdasarkan data sejarah yang diverifikasi melalui dokumentasi lembaga terkait (KAI, ITB, BRIN, dan Lembaga Eijkman) untuk memberikan pemahaman yang akurat mengenai perkembangan teknologi masa lalu.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
