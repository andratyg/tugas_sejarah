
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Timeline } from '@/components/timeline';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
