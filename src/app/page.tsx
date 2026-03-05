
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Timeline } from '@/components/timeline';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
