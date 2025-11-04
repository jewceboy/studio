'use server';
/**
 * @fileOverview A Genkit tool for scraping website content using Firecrawl.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import FireCrawl from '@mendable/firecrawl-js';

// Define the input schema for the scrapeUrl tool
const ScrapeUrlInputSchema = z.object({
  url: z.string().url().describe('The URL of the website to scrape.'),
});

// Initialize Firecrawl with the API key from environment variables
const firecrawl = new FireCrawl({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

/**
 * A Genkit tool that scrapes a website for its main content using Firecrawl.
 * It takes a URL as input and returns the content in Markdown format.
 */
export const scrapeUrl = ai.defineTool(
  {
    name: 'scrapeUrl',
    description: 'Scrapes a website to extract its main content. Use this to get the text from any webpage.',
    inputSchema: ScrapeUrlInputSchema,
    outputSchema: z.string().describe('The scraped content of the website in Markdown format.'),
  },
  async (input) => {
    try {
      const response = await firecrawl.scrape(input.url, {
        pageOptions: {
          onlyMainContent: true, // Focus on the main article/content
        },
        extractorOptions: {
          mode: 'markdown', // Get clean markdown output
        },
      });

      if (response.markdown) {
        return response.markdown;
      } else {
        throw new Error('Firecrawl did not return any markdown content.');
      }
    } catch (error) {
      console.error(`Error scraping URL ${input.url}:`, error);
      // Return a user-friendly error message to the AI model
      return `Failed to scrape the website. The server responded with an error.`;
    }
  }
);
