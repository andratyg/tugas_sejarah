
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Mail, Instagram, Linkedin, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.2-.67.33-1.24.87-1.5 1.56-.25.53-.29 1.15-.1 1.72.3 1.03 1.14 1.83 2.16 2.08 1.1.25 2.29-.11 3.08-.91.5-.47.74-1.13.78-1.8.03-3.23.01-6.46.01-9.69.01-2.43.01-4.87.01-7.3z"/>
  </svg>
);

export default function ContactPage() {
  const team = [
    {
      name: "Nara Andra Tyaga",
      role: "Lead Strategist",
      email: "nara@ilmunesia.com",
      instagram: "nara_andra",
      tiktok: "nara.tyaga",
      linkedin: "naratyaga",
      avatarSeed: "nara"
    },
    {
      name: "Aulia Putri",
      role: "Creative Director",
      email: "aulia@ilmunesia.com",
      instagram: "aulia_design",
      tiktok: "aulia.creative",
      linkedin: "auliaputri",
      avatarSeed: "aulia"
    },
    {
      name: "Reza Pratama",
      role: "Technical Lead",
      email: "reza@ilmunesia.com",
      instagram: "reza_pratama",
      tiktok: "reza.dev",
      linkedin: "rezapratama",
      avatarSeed: "reza"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Hubungi Tim Kami</h1>
            <p className="text-lg text-muted-foreground">
              Kenali lebih dekat orang-orang di balik IlmuNesia. Jangan ragu untuk menyapa kami!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2.5rem] bg-card overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pt-10 pb-4">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24 border-4 border-primary/10">
                      <AvatarImage src={`https://picsum.photos/seed/${member.avatarSeed}/200/200`} alt={member.name} />
                      <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl font-bold font-headline">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="px-6 pb-10">
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors h-12" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                        <span className="text-xs truncate">{member.email}</span>
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl hover:bg-pink-500/5 hover:text-pink-600 transition-colors h-12" asChild>
                      <a href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="text-xs">@{member.instagram}</span>
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors h-12" asChild>
                      <a href={`https://tiktok.com/@${member.tiktok}`} target="_blank" rel="noopener noreferrer">
                        <TikTokIcon className="h-4 w-4" />
                        <span className="text-xs">@{member.tiktok}</span>
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl hover:bg-blue-600/5 hover:text-blue-600 transition-colors h-12" asChild>
                      <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="text-xs">{member.name}</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
