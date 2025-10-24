'use server';

import { z } from 'zod';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

// --- Firebase Config ---
// IMPORTANT: Use environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
// This check prevents re-initializing the app on every server action.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// --- Zod Schema for Validation ---
const NewsletterSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

// --- Server Action ---
export async function subscribeToNewsletter(prevState: any, formData: FormData) {
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
    return {
      success: false,
      message: 'An error occurred. Please try again.',
    };
  }
}
