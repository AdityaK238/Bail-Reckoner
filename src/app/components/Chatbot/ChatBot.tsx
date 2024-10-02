"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";

// Initialize the model with your API key
const VITE_API_KEY = "AIzaSyCeJ9_qfaeSDbUhzXZnni_CAgCLci_lkhw"; 
const genAI = new GoogleGenerativeAI(VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

interface Part {
  text: string;
}

interface Content {
  role: string;
  parts: Part[];
}

interface Message {
  content: Content;
}

export default function ChatBot() {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use const for history since it is not reassigned
  const history: Content[] = [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  async function getResponse(prompt: string) {
    const chat = await model.startChat({ history: history });
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  }

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    const prompt = userMessage.trim();
    if (prompt === "") return;

    setLoading(true);
    setUserMessage('');

    const userMessageContent: Message = {
      content: {
        role: "user",
        parts: [{ text: prompt }],
      },
    };
    setMessages(prevMessages => [...prevMessages, userMessageContent]);

    try {
      const aiResponse = await getResponse(prompt);
      const aiMessageContent: Message = {
        content: {
          role: "model",
          parts: [{ text: aiResponse }],
        },
      };
      setMessages(prevMessages => [...prevMessages, aiMessageContent]);

      // Update history to match the expected structure
      history.push(userMessageContent.content);
      history.push(aiMessageContent.content);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        content: {
          role: "error",
          parts: [{ text: "Sorry, I encountered an error. Please try again." }],
        },
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-bot">
      <ScrollArea className="messages">
        {messages.map((message, index) => (
          <div key={index}>
            {message.content?.parts.map((part, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: md().render(part.text) }} />
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
