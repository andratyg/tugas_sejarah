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
const materialSummaryPrompt = ai.definePrompt({
  name: 'materialSummaryPrompt',
  model: 'googleai/gemini-1.5-flash',
  input: { schema: MaterialSummaryInputSchema },
  output: { schema: MaterialSummaryOutputSchema },
  prompt: `Tolong berikan ringkasan yang singkat, jelas, dan informatif mengenai materi pembelajaran berikut dalam Bahasa Indonesia.
Fokus pada poin-poin kunci dan konsep sejarah IPTEK yang paling penting.
Ringkasan harus mudah dipahami dan cocok untuk pemahaman cepat bagi pelajar.

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
    const { output } = await materialSummaryPrompt(input);
    if (!output) {
      throw new Error('Gagal menghasilkan ringkasan.');
    }
    return output;
  }
);
