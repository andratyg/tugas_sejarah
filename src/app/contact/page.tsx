
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const contacts = [
    {
      platform: "Email",
      value: "halo@ilmunesia.com",
      link: "mailto:halo@ilmunesia.com",
      icon: <Mail className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      platform: "Instagram",
      value: "@ilmunesia_edu",
      link: "https://instagram.com",
      icon: <Instagram className="h-6 w-6" />,
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      platform: "TikTok",
      value: "ilmunesia.official",
      link: "https://tiktok.com",
      icon: <MessageCircle className="h-6 w-6" />, // No TikTok icon in lucide-react, using MessageCircle
      color: "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white"
    },
    {
      platform: "LinkedIn",
      value: "IlmuNesia Indonesia",
      link: "https://linkedin.com",
      icon: <Linkedin className="h-6 w-6" />,
      color: "bg-blue-700/10 text-blue-700"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Hubungi Kami</h1>
            <p className="text-lg text-muted-foreground">
              Punya pertanyaan atau ingin berkolaborasi? Kami siap mendengarkan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contacts.map((contact, i) => (
              <a 
                key={i} 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-card">
                  <CardContent className="p-8 flex items-center gap-6">
                    <div className={`p-4 rounded-2xl ${contact.color} transition-transform group-hover:scale-110`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{contact.platform}</h3>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-20 text-center bg-muted/30 p-12 rounded-[3rem] max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Informasi Tim</h2>
            <p className="text-muted-foreground mb-2">Admin Utama: <span className="text-foreground font-semibold">Tim IlmuNesia</span></p>
            <p className="text-muted-foreground leading-relaxed">
              Tim kami berbasis di Jakarta, Indonesia, dan bekerja secara remote untuk menjangkau setiap sudut nusantara melalui pendidikan digital.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
