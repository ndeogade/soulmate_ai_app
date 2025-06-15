# Create the logic to handle emotional memory (Firestore integration with Firebase)

emotional_memory_code = """
// EmotionMemory.js – Handles storing and retrieving user emotional memory

import { db } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Save user data
export const saveUserMemory = async (userId, data) => {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, data, { merge: true });
    console.log('User memory saved successfully!');
  } catch (error) {
    console.error('Error saving user memory:', error);
  }
};

// Load user data
export const loadUserMemory = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No memory found, new user.');
      return null;
    }
  } catch (error) {
    console.error('Error loading user memory:', error);
    return null;
  }
};
"""

# Save this to the project directory
emotional_memory_path = "/mnt/data/soulmate_ai_app/EmotionMemory.js"
with open(emotional_memory_path, "w") as f:
    f.write(emotional_memory_code)

emotional_memory_path
