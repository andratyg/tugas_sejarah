
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { generateMaterialSummary } from '@/ai/flows/ai-material-summary-flow';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface Material {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  points: string[];
  references: { name: string; url: string }[];
}

interface MaterialModalProps {
  material: Material | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MaterialModal({ material, isOpen, onClose }: MaterialModalProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const { toast } = useToast();

  // Reset state when material changes or modal is closed
  useEffect(() => {
    setSummary(null);
    setIsLoadingSummary(false);
  }, [material?.id, isOpen]);

  if (!material) return null;

  const handleGenerateSummary = async () => {
    setIsLoadingSummary(true);
    try {
      const result = await generateMaterialSummary({ materialContent: material.fullContent });
      setSummary(result.summary);
    } catch (error) {
      console.error("Failed to generate summary", error);
      toast({
        variant: "destructive",
        title: "Gagal Meringkas",
        description: "Terjadi kesalahan saat menghubungi AI. Silakan coba lagi nanti.",
      });
    } finally {
      setIsLoadingSummary(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[90vh] p-0 border-none rounded-[2rem] overflow-hidden gap-0 bg-background">
        {/* Scrollable Container with hidden scrollbar */}
        <div className="h-full overflow-y-auto no-scrollbar">
          <div className="relative h-64 md:h-80 w-full shrink-0">
            <Image
              src={material.image}
              alt={material.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="p-6 md:p-10 -mt-12 relative z-10 bg-background rounded-t-[2.5rem]">
            <DialogHeader className="mb-8 text-left">
              <DialogTitle className="text-3xl md:text-4xl font-bold font-headline mb-2 leading-tight">{material.title}</DialogTitle>
              <DialogDescription className="text-lg text-primary font-medium">
                {material.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-8">
              <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-base md:text-lg">
                {material.fullContent.split('\n').map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>

              <div className="bg-muted/30 p-6 md:p-8 rounded-3xl border border-border/50">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Poin-Poin Penting
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {material.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                      <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Summary Tool */}
              <div className="bg-primary/5 p-6 md:p-8 rounded-3xl border border-primary/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-bold text-foreground">Ringkasan AI</h4>
                  </div>
                  {!summary && (
                    <Button
                      onClick={handleGenerateSummary}
                      disabled={isLoadingSummary}
                      className="rounded-full px-6 shadow-lg shadow-primary/20"
                    >
                      {isLoadingSummary ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Meringkas...
                        </>
                      ) : (
                        "Ringkas Materi"
                      )}
                    </Button>
                  )}
                </div>
                {summary && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-500 text-base text-muted-foreground italic leading-relaxed border-l-4 border-primary/30 pl-4 py-2">
                    "{summary}"
                  </div>
                )}
              </div>

              <Separator className="opacity-50" />

              <div className="pt-2 pb-10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Sumber Materi & Referensi</h4>
                <ul className="flex flex-wrap gap-4">
                  {material.references.map((ref, i) => (
                    <li key={i}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline flex items-center gap-1 bg-primary/5 px-4 py-2 rounded-full border border-primary/10 transition-colors hover:bg-primary/10"
                      >
                        {ref.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
