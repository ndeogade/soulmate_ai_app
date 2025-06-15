# Finalizing App.js to integrate emotional memory loading/saving using the previous EmotionMemory.js logic

app_js_code = """
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

    // Onboarding phase
    if (!userData) {
      const updatedData = { name: message }; // extend later
      await saveUserMemory(userId, updatedData);
      setUserData(updatedData);
      addToChat(`Nice to meet you, ${message}! I’m your SoulMate AI.`);
    } else {
      // normal chat logic
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
"""

# Save the updated App.js
app_js_path = "/mnt/data/soulmate_ai_app/App.js"
with open(app_js_path, "w") as f:
    f.write(app_js_code)

app_js_path
