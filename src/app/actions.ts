
'use server';

import { z } from 'zod';
import { db, firebaseCredentialsExist } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

// --- Zod Schema for Validation ---
const NewsletterSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

// --- Server Action ---
export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  // Gracefully handle if Firebase is not configured
  if (!firebaseCredentialsExist) {
    console.error('Firebase is not configured. Cannot subscribe to newsletter.');
    return {
      success: false,
      message: 'Service is not available at the moment. Please try again later.',
    };
  }

  const validatedFields = NewsletterSchema.safeParse({
    firstName: formData.get('firstName'),
    email: formData.get('email'),
  });

  // Handle validation errors
  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Validation failed.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, email } = validatedFields.data;

  // --- Firestore Logic ---
  try {
    const subscribersCollection = collection(db, 'subscribers');
    await addDoc(subscribersCollection, {
      firstName: firstName,
      email: email,
      subscribedAt: serverTimestamp(),
    });

    revalidatePath('/'); // Revalidate the homepage if needed
    
    // --- Success Response ---
    return {
      success: true,
      message: 'Thanks! Your travel tips are on the way.',
    };

  } catch (error) {
    console.error('Firebase Error:', error);
    // In a real app, you might want more specific error handling based on error.code
    let userMessage = 'An unexpected error occurred. Please try again.';
    if (error instanceof Error && 'code' in error) {
        switch ((error as any).code) {
            case 'permission-denied':
                userMessage = "You don't have permission to perform this action.";
                break;
            case 'unavailable':
                userMessage = "The service is temporarily unavailable. Please try again later.";
                break;
        }
    }
    return {
      success: false,
      message: userMessage,
    };
  }
}
