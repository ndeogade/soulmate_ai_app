import React, { useState, useEffect } from 'react';
import { saveUserMemory, loadUserMemory } from './EmotionMemory';

function App() {
  const [userId, setUserId] = useState('user-123'); // Replace with unique ID logic
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const memory = await loadUserMemory(userId);
      if (memory) {
        setUserData(memory);
        addToChat(`Hey ${memory.name}, welcome back! How was your day?`);
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
    if (!message.trim()) return;

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
          <div key={idx} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Say something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '80%' }}
      />
      <button onClick={handleUserMessage} style={{ marginLeft: 10 }}>Send</button>
    </div>
  );
}

export default App;
