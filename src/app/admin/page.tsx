
'use client';

import { FirebaseCMSApp, useAuthenticator } from "firecms";
import "firecms/styles.css";

import { firebaseConfig } from "@/lib/firebase";
import { myCollections } from "@/lib/firecms-collections";

export default function AdminPage() {

    const authenticator = useAuthenticator({
        firebaseConfig
    });

    if (process.env.NODE_ENV !== 'production' && (!firebaseConfig?.apiKey || !firebaseConfig?.projectId)) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Firebase Configuration Missing</h2>
                    <p className="text-gray-700">
                        Your Firebase configuration is not set up correctly. Please make sure all the required Firebase environment variables are set.
                    </p>
                </div>
            </div>
        );
    }
  
    return (
        <FirebaseCMSApp
            name={"Malaga Travel Guide CMS"}
            authentication={authenticator}
            collections={myCollections}
            firebaseConfig={firebaseConfig}
        />
    );
}
