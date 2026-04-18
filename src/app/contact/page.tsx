
"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Mail, Instagram, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const team = [
    {
      name: "Nara Andra T.",
      id: "12511245",
      role: "Lead Strategist",
      email: "naraandratyaga@smkwikrama.sch.id",
      instagram: "andra_tyg",
      // Instruksi: Taruh file foto Anda di: public/team/nara.jpg
      imageUrl: "/team/nara.jpg"
    },
    {
      name: "Bagus Arief I.",
      role: "Creative Director",
      email: "bagusariefishakyudin@smkwikrama.sch.id",
      instagram: "bagus_arief",
      imageUrl: "/team/bagus.jpg"
    },
    {
      name: "Rafa Alfarizky",
      role: "Technical Lead",
      email: "rafaalfarizky@smkwikrama.sch.id",
      instagram: "rafa_alfa",
      imageUrl: "/team/rafa.jpg"
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
              Kenali lebih dekat orang-orang di balik platform analisis IPTEK Kolonial ini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2.5rem] bg-card overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pt-10 pb-4">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-32 w-32 border-4 border-primary/10 rounded-2xl">
                      <AvatarImage 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="object-cover"
                      />
                      <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl font-bold font-headline">{member.name}</CardTitle>
                  {member.id && (
                    <p className="text-xs text-muted-foreground font-mono mt-1 mb-1 tracking-wider">{member.id}</p>
                  )}
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="px-6 pb-10">
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors h-12" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                        <span className="text-[10px] truncate">{member.email}</span>
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl hover:bg-pink-500/5 hover:text-pink-600 transition-colors h-12" asChild>
                      <a href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="text-xs">@{member.instagram}</span>
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
