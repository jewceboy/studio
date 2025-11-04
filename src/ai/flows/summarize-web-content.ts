'use server';
/**
 * @fileOverview A flow that scrapes a website and summarizes its content.
 *
 * - summarizeWebsite - A function that takes a URL, scrapes it, and returns a summary.
 * - SummarizeWebsiteInput - The input type for the summarizeWebsite function.
 * - SummarizeWebsiteOutput - The return type for the summarizeWebsite function.
 */

import { ai } from '@/ai/genkit';
import { scrapeUrl } from '@/ai/tools/firecrawl';
import { z } from 'genkit';

const SummarizeWebsiteInputSchema = z.object({
  url: z.string().url().describe('The URL of the website to summarize.'),
});
export type SummarizeWebsiteInput = z.infer<typeof SummarizeWebsiteInputSchema>;

const SummarizeWebsiteOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the website content.'),
});
export type SummarizeWebsiteOutput = z.infer<typeof SummarizeWebsiteOutputSchema>;

export async function summarizeWebsite(
  input: SummarizeWebsiteInput
): Promise<SummarizeWebsiteOutput> {
  return summarizeWebsiteFlow(input);
}

const summarizePrompt = ai.definePrompt({
  name: 'summarizeWebsitePrompt',
  input: { schema: z.object({ content: z.string() }) },
  output: { schema: SummarizeWebsiteOutputSchema },
  prompt: `You are an expert content summarizer. Your task is to provide a clear and concise summary of the following website content.

Focus on the key points and main arguments. The summary should be easy to understand for someone who has not read the article.

Website Content:
{{{content}}}
`,
});

const summarizeWebsiteFlow = ai.defineFlow(
  {
    name: 'summarizeWebsiteFlow',
    inputSchema: SummarizeWebsiteInputSchema,
    outputSchema: SummarizeWebsiteOutputSchema,
  },
  async (input) => {
    // Step 1: Use the scrapeUrl tool to get the website content
    const scrapedContent = await scrapeUrl({ url: input.url });

    if (scrapedContent.startsWith('Failed to scrape')) {
        // Handle scraping error
        return { summary: "Could not summarize the content because the website failed to load or could not be scraped." };
    }

    // Step 2: Pass the scraped content to the summarization prompt
    const { output } = await summarizePrompt({ content: scrapedContent });

    return output!;
  }
);
