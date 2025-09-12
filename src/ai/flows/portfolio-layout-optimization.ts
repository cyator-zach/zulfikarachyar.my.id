'use server';

/**
 * @fileOverview Optimizes the layout of portfolio cards for maximum visual appeal and user engagement.
 *
 * - optimizePortfolioLayout - A function that suggests the best layout for portfolio cards.
 * - PortfolioLayoutOptimizationInput - The input type for the optimizePortfolioLayout function.
 * - PortfolioLayoutOptimizationOutput - The return type for the optimizePortfolioLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioItemSchema = z.object({
  imageUrl: z.string().describe('URL of the project image or logo'),
  title: z.string().describe('Title of the project'),
  description: z.string().describe('Short description of the project'),
});

const PortfolioLayoutOptimizationInputSchema = z.object({
  portfolioItems: z.array(PortfolioItemSchema).describe('Array of portfolio items to be optimized'),
  userPreferences: z.string().optional().describe('Optional user preferences for the layout'),
});

export type PortfolioLayoutOptimizationInput = z.infer<
  typeof PortfolioLayoutOptimizationInputSchema
>;

const PortfolioLayoutOptimizationOutputSchema = z.object({
  suggestedLayout: z
    .string()
    .describe(
      'Suggested layout arrangement for the portfolio cards, described in natural language.'
    ),
  reasoning: z
    .string()
    .describe('Reasoning behind the suggested layout, explaining why it is optimal.'),
});

export type PortfolioLayoutOptimizationOutput = z.infer<
  typeof PortfolioLayoutOptimizationOutputSchema
>;

export async function optimizePortfolioLayout(
  input: PortfolioLayoutOptimizationInput
): Promise<PortfolioLayoutOptimizationOutput> {
  return optimizePortfolioLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioLayoutOptimizationPrompt',
  input: {schema: PortfolioLayoutOptimizationInputSchema},
  output: {schema: PortfolioLayoutOptimizationOutputSchema},
  prompt: `You are an expert in visual design and user experience.
Given a set of portfolio items and optional user preferences, suggest the best layout arrangement for the portfolio cards to maximize visual appeal and user engagement.

Portfolio Items:
{{#each portfolioItems}}
- Title: {{this.title}}
  Description: {{this.description}}
  Image URL: {{this.imageUrl}}
{{/each}}

User Preferences (if any): {{{userPreferences}}}

Consider factors such as visual hierarchy, balance, and user flow. Explain your reasoning behind the suggested layout.

Output the suggested layout arrangement and the reasoning behind it.

`,
});

const optimizePortfolioLayoutFlow = ai.defineFlow(
  {
    name: 'optimizePortfolioLayoutFlow',
    inputSchema: PortfolioLayoutOptimizationInputSchema,
    outputSchema: PortfolioLayoutOptimizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
