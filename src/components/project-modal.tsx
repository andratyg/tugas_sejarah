
"use client";

import Image from 'next/image';
import { Target, ListChecks, Flag } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  goals: string;
  steps: string[];
  expectedResult: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[85vh] p-0 border-none rounded-3xl overflow-hidden bg-background">
        {/* Scrollable Container with hidden scrollbar */}
        <div className="h-full overflow-y-auto no-scrollbar">
          <div className="relative h-56 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="p-8">
            <DialogHeader className="mb-8 text-left">
              <DialogTitle className="text-3xl font-bold font-headline">{project.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-8">
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <Target className="h-5 w-5" />
                  Tujuan Proyek
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.goals}</p>
              </div>

              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <ListChecks className="h-5 w-5" />
                  Langkah Pengerjaan
                </h4>
                <ul className="space-y-3">
                  {project.steps.map((step, i) => (
                    <li key={i} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <Flag className="h-5 w-5" />
                  Hasil yang Diharapkan
                </h4>
                <p className="text-sm text-muted-foreground italic leading-relaxed">{project.expectedResult}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
