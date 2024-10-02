"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define the Message interface to match the expected response structure
interface Message {
  content: {
    parts: { text: string }[];
  };
}

export default function ChatBot() {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const VITE_API_KEY = "YOUR_API_KEY"; // Use your actual API key
  const genAI = new GoogleGenerativeAI(VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini" });

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [messages]);

  async function getResponse(prompt: string) {
    const newMessage: Message = {
      content: {
        parts: [{ text: prompt }],
      },
    };

    const updatedMessages = [...messages, newMessage];

    try {
      // Using a hypothetical method for generating responses
      const response = await model.call({
        input: prompt,
        history: updatedMessages.map(msg => msg.content.parts[0].text), // Provide the history
      });

      const aiResponse: Message = {
        content: {
          parts: [{ text: response.text }], // Adjusted to match expected response
        },
      };

      setMessages([...updatedMessages, aiResponse]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        content: {
          parts: [{ text: "Sorry, I encountered an error. Please try again." }],
        },
      };
      setMessages([...updatedMessages, errorMessage]);
    }
  }

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    const prompt = userMessage.trim();
    if (prompt === "") return;

    setLoading(true);
    setUserMessage('');

    const userMessageContent: Message = {
      content: {
        parts: [{ text: prompt }],
      },
    };
    setMessages(prevMessages => [...prevMessages, userMessageContent]);

    await getResponse(prompt);
    setLoading(false);
  };

  return (
    <div className="chat-bot">
      <ScrollArea className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.content.parts[0].text === userMessage ? 'user' : 'bot'}>
            {message.content?.parts.map((part, i) => (
              <p key={i}>{part.text}</p>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>
      <form onSubmit={handleSendMessage}>
        <Input
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : <Send />}
        </Button>
      </form>
    </div>
  );
}
