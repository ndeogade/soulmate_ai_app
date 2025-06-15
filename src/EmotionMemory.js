// src/EmotionMemory.js
import React from 'react';

export const loadUserMemory = () => {
  // Placeholder logic - replace with actual data retrieval later
  console.log("User memory loaded.");
  return {
    lastEmotion: 'happy',
    rememberedTopics: ['career', 'relationship', 'fitness'],
  };
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
