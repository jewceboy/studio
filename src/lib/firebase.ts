
// src/lib/firebase.ts
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

// IMPORTANT: Replace with your actual Firebase project configuration.
// You can find this in your Firebase project settings.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "your-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "your-project-id.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "your-project-id.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "your-sender-id",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "your-app-id",
};

let app: FirebaseApp;
let db: Firestore;
let storage: FirebaseStorage;

// A flag to check if Firebase credentials are real or placeholders.
// The image uploader will be disabled if these are not set.
const firebaseCredentialsExist = 
    firebaseConfig.apiKey !== "your-api-key" && 
    firebaseConfig.projectId !== "your-project-id";

try {
    // Initialize Firebase only if credentials exist
    if (firebaseCredentialsExist) {
        if (!getApps().length) {
            app = initializeApp(firebaseConfig);
        } else {
            app = getApp();
        }
        db = getFirestore(app);
        storage = getStorage(app);
    }
} catch (error) {
    console.error("Firebase initialization failed:", error);
    // Features requiring Firebase will not be available.
}

// Export the initialized app and services, which will be undefined if credentials are not set
export { app, db, storage, firebaseCredentialsExist };
