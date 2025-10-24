
'use server';

import { generatePersonalizedTrip, type PersonalizedTripInput, type PersonalizedTripOutput } from '@/ai/flows/generate-personalized-trip';
import type { QuizAnswers } from '@/types';
import { redirect } from 'next/navigation';

export async function submitQuiz(answers: QuizAnswers): Promise<{ success: boolean, data?: PersonalizedTripOutput, error?: string }> {
  try {
    const input: PersonalizedTripInput = {
      travelStyle: answers.travelStyle,
      interests: answers.interests,
      duration: Number(answers.duration), // Ensure duration is a number
      budget: answers.budget,
    };

    // Validate input if needed using Zod schema from the flow (optional here as flow does it)
    // PersonalizedTripInputSchema.parse(input); 

    const result = await generatePersonalizedTrip(input);
    
    // Instead of returning data, redirect with query params
    const queryParams = new URLSearchParams({
        town: result.townRecommendation,
        activities: result.suggestedActivities.join(','),
        accommodations: result.idealAccommodations
    }).toString();
    
    redirect(`/plan-your-trip/results?${queryParams}`);

  } catch (error) {
    console.error("Error generating personalized trip:", error);
    let errorMessage = "Failed to generate your personalized trip plan. Please try again.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    // This path won't be hit due to redirect, but good practice for