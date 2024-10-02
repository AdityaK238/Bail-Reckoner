"use client"
import React, { useState } from 'react';
import axios from 'axios';
import styles from "@/app/components/Chatbot/chatbot.module.css";

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messagesState, setMessages] = useState([]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await axios.post('/HomePage', { message: userMessage });
    const botResponse = response.data.message;
    setMessages([...messagesState, { user: userMessage, bot: botResponse }]);
    setUserMessage('');
    setLoading(false);
  };

  return (
    <div
      className={styles.container}
      style={{
        maxWidth: '100%',
        padding: '20px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: 'black',
      }}
    >
      <div
        className={styles.header}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h1>LegalMitraAI</h1>
      </div>
      <div
        id="chat-container"
        className={styles.chatContainer}
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
      </div>

      <form
        id="chat-form"
        className={styles.chatForm}
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
        onSubmit={handleSendMessage}>
          <textarea
            id="prompt"
            name="prompt"
            className={styles.textarea}
            style={{
              width: '80%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              color: 'black',
            }}
            rows="1"
            placeholder="Ask me anything..."
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
          />
          <button
            type="submit"
            className={styles.button}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              color: '#fff',
              backgroundColor: '#337ab7',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              color: 'black',
            }}
          >
            Send
          </button>
        
      </form>
    </div>
  );
};

export default ChatBot;