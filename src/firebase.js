# Save the provided Firebase config to include it in the web app code

firebase_config_code = """
// Firebase configuration for SoulMate AI
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMRz1D7SacVOwioqXIS4HFcJGAhsJoR5U",
  authDomain: "soulmate-ai-7efdf.firebaseapp.com",
  projectId: "soulmate-ai-7efdf",
  storageBucket: "soulmate-ai-7efdf.firebasestorage.app",
  messagingSenderId: "874406542067",
  appId: "1:874406542067:web:d11c6e59c5685586d65586"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
"""

firebase_path = "/mnt/data/soulmate_ai_app/firebase.js"
with open(firebase_path, "w") as f:
    f.write(firebase_config_code)

firebase_path
