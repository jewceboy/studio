
// src/ai/flows/generate-personalized-trip.ts
'use server';

/**
 * @fileOverview Generates a personalized trip plan based on user's quiz responses.
 *
 * - generatePersonalizedTrip - A function that generates a personalized trip plan.
 * - PersonalizedTripInput - The input type for the generatePersonalizedTrip function.
 * - PersonalizedTripOutput - The return type for the generatePersonalizedTrip function.
 */

import {ai} from '@/ai/genkit';
import { googleSearch } from '@genkit-ai/googleai';
import {z} from 'genkit';

const PersonalizedTripInputSchema = z.object({
  travelStyle: z
    .string()
    .describe('The user selected travel style, e.g., luxury, budget, adventure.'),
  interests: z
    .array(z.string())
    .describe('An array of user interests, e.g., history, food, beaches.'),
  duration: z.number().describe('The duration of the trip in days.'),
  budget: z.string().describe('The user selected budget, e.g., low, medium, high.'),
});

export type PersonalizedTripInput = z.infer<typeof PersonalizedTripInputSchema>;

const PersonalizedTripOutputSchema = z.object({
  townRecommendation: z.string().describe('Recommended town to visit.'),
  suggestedActivities: z.array(z.string()).describe('Suggested activities.'),
  idealAccommodations: z.string().describe('Ideal accommodations for the trip.'),
});

export type PersonalizedTripOutput = z.infer<typeof PersonalizedTripOutputSchema>;

export async function generatePersonalizedTrip(
  input: PersonalizedTripInput
): Promise<PersonalizedTripOutput> {
  return generatePersonalizedTripFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTripPrompt',
  input: {schema: PersonalizedTripInputSchema},
  output: {schema: PersonalizedTripOutputSchema},
  tools: [googleSearch],
  prompt: `You are an expert travel planner for the Costa del Sol region in Spain. Based on the user's quiz responses,
you will generate a personalized trip plan including town recommendations, suggested activities, and ideal accommodations.

Consider these parameters when creating the plan:

Travel Style: {{{travelStyle}}}
Interests: {{#each interests}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Duration: {{{duration}}} days
Budget: {{{budget}}}

Output the town recommendation, suggested activities, and ideal accommodations.
`,
});

const generatePersonalizedTripFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedTripFlow',
    inputSchema: PersonalizedTripInputSchema,
    outputSchema: PersonalizedTripOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
