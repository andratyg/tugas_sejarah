'use server';

/**
 * @fileOverview A Genkit flow to generate a concise summary of learning material.
 *
 * - generateMaterialSummary - A function that generates an AI-powered summary of given material.
 * - MaterialSummaryInput - The input type for the generateMaterialSummary function.
 * - MaterialSummaryOutput - The return type for the generateMaterialSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input Schema for the material summary flow.
const MaterialSummaryInputSchema = z.object({
  materialContent: z.string().describe('The full text content of the learning material to be summarized.'),
});
export type MaterialSummaryInput = z.infer<typeof MaterialSummaryInputSchema>;

// Output Schema for the material summary flow.
const MaterialSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise AI-generated summary of the learning material in Indonesian, highlighting key points.'),
});
export type MaterialSummaryOutput = z.infer<typeof MaterialSummaryOutputSchema>;

/**
 * Generates a concise AI-powered summary of the provided learning material in Indonesian.
 * @param input - The input containing the material content.
 * @returns A promise that resolves to the generated summary.
 */
export async function generateMaterialSummary(input: MaterialSummaryInput): Promise<MaterialSummaryOutput> {
  return materialSummaryFlow(input);
}

// Defines the prompt for generating material summaries.
// Using 'gemini-1.0-pro' which is the standard identifier.
const materialSummaryPrompt = ai.definePrompt({
  name: 'materialSummaryPrompt',
  model: 'gemini-1.0-pro',
  input: { schema: MaterialSummaryInputSchema },
  output: { schema: MaterialSummaryOutputSchema },
  prompt: `Tolong berikan ringkasan yang singkat, jelas, dan informatif mengenai materi pembelajaran berikut dalam Bahasa Indonesia.
Fokus pada poin-poin kunci dan konsep sejarah IPTEK yang paling penting.
Ringkasan harus dalam Bahasa Indonesia yang mudah dipahami.

Materi Pembelajaran:
{{{materialContent}}}`,
});

// Defines the Genkit flow for generating material summaries.
const materialSummaryFlow = ai.defineFlow(
  {
    name: 'materialSummaryFlow',
    inputSchema: MaterialSummaryInputSchema,
    outputSchema: MaterialSummaryOutputSchema,
  },
  async (input) => {
    // Ganti API: Temporarily using a simple substring as the AI API is not working.
    // This will prevent the app from crashing and provide a temporary summary.
    const summary = input.materialContent.substring(0, 250) + '... (Ringkasan otomatis sedang dalam perbaikan, ini adalah ringkasan sementara).';
    return { summary };
    
    // The original code that was failing is commented out below.
    // const { output } = await materialSummaryPrompt(input);
    // if (!output) {
    //   throw new Error('Gagal menghasilkan ringkasan.');
    // }
    // return output;
  }
);
