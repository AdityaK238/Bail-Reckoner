'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Scale } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { ScrollArea } from "@/app/components/ui/scroll-area"
import { GoogleGenerativeAI } from "@google/generative-ai"

interface Message {
  user?: string
  bot?: string
}

export default function ChatBot() {
  const [userMessage, setUserMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize the model
  const VITE_API_KEY = "AIzaSyCeJ9_qfaeSDbUhzXZnni_CAgCLci_lkhw"
  const genAI = new GoogleGenerativeAI(VITE_API_KEY)
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  let history: { role: string; parts: string }[] = []

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  async function getResponse(prompt: string) {
    const chat = await model.startChat({ history: history.map(item => ({
      ...item,
      parts: [{ text: item.parts }]
    })) })
    const result = await chat.sendMessage(prompt)
    const response = await result.response
    const text = response.text()
    console.log(text)
    return text
  }

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault()
    const prompt = userMessage.trim()
    if (prompt === "") return

    setLoading(true)
    console.log("user message", prompt)

    setMessages(prevMessages => [...prevMessages, { user: prompt }])
    setUserMessage('')

    try {
      const aiResponse = await getResponse(prompt)
      setMessages(prevMessages => [...prevMessages, { bot: aiResponse }])
      history.push({ role: "user", parts: prompt })
      history.push({ role: "model", parts: aiResponse })
      console.log(history)
    } catch (error) {
      console.error("Error getting AI response:", error)
      setMessages(prevMessages => [...prevMessages, { bot: "Sorry, I encountered an error. Please try again." }])
    }

    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4" style={{ backgroundColor: 'rgb(20, 20, 24)' }}>
      <div 
        className="flex flex-col w-full max-w-2xl h-[900px] bg-white rounded-xl shadow-lg overflow-hidden" 
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: '1000px',
          border: '2px solid transparent',
          borderRadius: '15px',
          backgroundClip: 'padding-box',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          fontSize: '1.5rem',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)';
        }}
      >
        <div className="bg-black p-4 text-white flex items-center">
          <Scale className="w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold">LegalMitraAI</h1>
        </div>
        
        <ScrollArea className="flex-grow p-6 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.user ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg max-w-[80%] ${
                  message.user ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                }`} style={message.user ? { backgroundColor: 'rgb(60, 214, 52)', fontFamily: 'Montserrat, sans-serif', color: 'white' } : { backgroundColor: 'rgb(20, 100, 220)', fontFamily: 'Montserrat, sans-serif', color: 'white' }}>
                <p>{message.user || message.bot}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2" style={{ border: '0.5px solid black', borderRadius:'8px' }}> {/* Added inline CSS for bold border */}
            <Input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex-grow text-gray-800 focus:ring-2 focus:ring-blue-500"
              style={{ fontSize: '1.25rem', height: '3rem', backgroundColor: 'rgb(245, 245, 245)', color: 'black' }} // Increased font size, box size, and darker background
            />
            <Button 
              type="submit" 
              disabled={loading} 
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
              <Send className="w-5 h-5 transform rotate-45" />
              )}
            </Button>
            </div>
        </form>
      </div>
    </div>
  )
}