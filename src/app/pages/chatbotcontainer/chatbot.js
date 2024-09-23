import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4', // Adjust the model as needed
        messages: [{ role: 'user', content: message }],
      }),
    });

    const openAIData = await openAIResponse.json();
    const responseMessage = openAIData.choices[0]?.message?.content || 'No response from chatbot';
    
    return NextResponse.json({ response: responseMessage });
  } catch (error) {
    console.error('Error communicating with chatbot:', error);
    return NextResponse.json({ response: 'Error communicating with chatbot' });
  }
}
