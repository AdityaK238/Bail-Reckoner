"use client"
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);  // Initialize messages state
  const [loading, setLoading] = useState(false);

  // Initialize the model
  const VITE_API_KEY = "AIzaSyCeJ9_qfaeSDbUhzXZnni_CAgCLci_lkhw";
  const genAI = new GoogleGenerativeAI(VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  let history = [];

  async function getResponse(prompt) {
    const chat = await model.startChat({ history: history });
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }

  async function handleSendMessage(event) {
    event.preventDefault();
    setLoading(true);
    const prompt = userMessage.trim();
    if (prompt === "") {
      setLoading(false);
      return;
    }

    console.log("user message", prompt);

    // Update the chat with user message
    setMessages(prevMessages => [...prevMessages, { user: prompt }]);
    setUserMessage('');

    // Get AI response
    try {
      const aiResponse = await getResponse(prompt);

      // Update chat with AI response
      setMessages(prevMessages => [...prevMessages, { user: prompt }, { bot: aiResponse }]);

      // Update history
      history.push({ role: "user", parts: prompt });
      history.push({ role: "model", parts: aiResponse });

      console.log(history);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages(prevMessages => [...prevMessages, { user: prompt }, { bot: "Sorry, I encountered an error. Please try again." }]);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        maxWidth: '100%',
        padding: '20px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            color: '#333',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          LegalMitraAI
        </h1>
      </div>
      <div
        id="chat-container"
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          maxHeight: '400px',
          overflowY: 'scroll',color: 'black'
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <strong
              style={{
                fontSize: '16px',
                color: '#333',
                fontWeight: 'bold',
              }}
            >
              {message.user ? 'You:' : 'AI:'}
            </strong>
            <p>{message.user || message.bot}</p>
          </div>
        ))}
      </div>
      <form
        id="chat-form"
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',color:'black',
        }}
        onSubmit={handleSendMessage}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',color:'black',
          }}
        >
          <textarea
            id="prompt"
            name="prompt"
            style={{
              width: '80%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '10px',
              border: '1px solid #ccc',color: 'black',
            }}
            rows="2"
            placeholder="Ask me anything..."
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              color: '#fff',
              backgroundColor: '#337ab7',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',color:'black',
            }}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
