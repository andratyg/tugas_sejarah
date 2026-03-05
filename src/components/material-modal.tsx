
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
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

  if (!material) return null;

  const handleGenerateSummary = async () => {
    setIsLoadingSummary(true);
    try {
      const result = await generateMaterialSummary({ materialContent: material.fullContent });
      setSummary(result.summary);
    } catch (error) {
      console.error("Failed to generate summary", error);
    } finally {
      setIsLoadingSummary(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 border-none rounded-3xl">
        <div className="relative h-64 w-full">
          <Image
            src={material.image}
            alt={material.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/50 backdrop-blur-md rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold font-headline mb-2">{material.title}</DialogTitle>
            <DialogDescription className="text-lg text-primary font-medium">
              {material.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              {material.fullContent.split('\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </div>

            <div className="bg-muted/30 p-6 rounded-2xl border border-border">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Poin-Poin Penting
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {material.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Summary Tool */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold">Ringkasan AI</h4>
                </div>
                {!summary && (
                  <Button
                    onClick={handleGenerateSummary}
                    disabled={isLoadingSummary}
                    size="sm"
                    className="rounded-full"
                  >
                    {isLoadingSummary ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sedang Meringkas...
                      </>
                    ) : (
                      "Ringkas Materi"
                    )}
                  </Button>
                )}
              </div>
              {summary && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-500 text-sm text-muted-foreground italic leading-relaxed">
                  "{summary}"
                </div>
              )}
            </div>

            <Separator />

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Sumber Materi & Referensi</h4>
              <ul className="space-y-2">
                {material.references.map((ref, i) => (
                  <li key={i}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      {ref.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
