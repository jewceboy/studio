// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let db: Firestore;
let storage: FirebaseStorage;

// Check if all necessary environment variables are defined
const firebaseCredentialsExist = firebaseConfig.apiKey && firebaseConfig.projectId;

try {
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
    // We can choose to not throw an error here to allow builds to succeed
    // without full Firebase credentials, but features will be disabled.
}

// Export the initialized app and services, which might be undefined if credentials are not set
export { app, db, storage, firebaseCredentialsExist };
