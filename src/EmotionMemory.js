// src/EmotionMemory.js
import React from 'react';

// Dummy memory object
let userMemory = {
  lastEmotion: 'happy',
  rememberedTopics: ['career', 'relationship', 'fitness'],
};

// Function to load user memory (simulate fetching from DB)
export const loadUserMemory = () => {
  console.log("Loading user memory...");
  return userMemory;
};

// Function to save user memory (simulate saving to DB)
export const saveUserMemory = (memory) => {
  console.log("Saving user memory...", memory);
  userMemory = memory;
};

const EmotionMemory = () => {
  const memory = loadUserMemory();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🧠 Emotion Memory</h2>
      <p>Last remembered emotion: <strong>{memory.lastEmotion}</strong></p>
      <p>Topics:</p>
      <ul>
        {memory.rememberedTopics.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmotionMemory;
