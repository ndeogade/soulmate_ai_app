import React, { useState, useEffect } from 'react';
import { saveUserMemory, loadUserMemory } from './EmotionMemory';

function App() {
  const [userId, setUserId] = useState('user-123'); // You can generate real IDs later
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const memory = await loadUserMemory(userId);
      if (memory) {
        setUserData(memory);
        addToChat('Hey ' + memory.name + ', welcome back! How was your day?');
      } else {
        addToChat('Hi there! Let’s get to know you. What’s your name?');
      }
    };
    fetchData();
  }, []);

  const addToChat = (text, sender = 'AI') => {
    setChatHistory(prev => [...prev, { sender, text }]);
  };

  const handleUserMessage = async () => {
    addToChat(message, 'User');

    if (!userData) {
      const updatedData = { name: message };
      await saveUserMemory(userId, updatedData);
      setUserData(updatedData);
      addToChat(`Nice to meet you, ${message}! I’m your SoulMate AI.`);
    } else {
      addToChat('Tell me more about how you feel today.');
    }

    setMessage('');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>SoulMate AI 💬</h2>
      <div style={{ maxHeight: 300, overflowY: 'scroll', marginBottom: 10 }}>
        {chatHistory.map((msg, idx) => (
          <div key={idx} style={{ t
