"use client"
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Send, Loader2 } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import styles from "@/app/components/Chatbot/chatbot.module.css";

const ChatBot1 = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messagesState, setMessages] = useState<{ user: string, bot: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messagesEndRef, messagesState]);

  const handleSendMessage = async (event: React.FormEvent) => {
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
      <ScrollArea className={styles.chatContainer}>
        {messagesState.map((message, index) => (
          <div key={index} className={message.user ? styles.userMessage : styles.botMessage}>
            {message.user && (
              <p className={styles.userText}>{message.user}</p>
            )}
            {message.bot && (
              <p className={styles.botText}>{message.bot}</p>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>
      <form
        onSubmit={handleSendMessage}
        className={styles.chatForm}
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className={styles.textarea}
          style={{
            width: '80%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            color: 'black',
          }}
        />
        <Button
          type="submit"
          disabled={loading}
          className={styles.button}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#337ab7',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Send />
          )}
        </Button>
      </form>
    </div>
  );
};

export default ChatBot1;
