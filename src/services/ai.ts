import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY || "" });

export const sendMessageToGemini = async (history: any[], newMessage: string, ownerData: any) => {
  try {
    // Format history for Google GenAI (needs to exclude the very last user message which is sent via sendMessage)
    const formattedHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const chat = ai.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: ownerData.systemPrompt
    }).startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(newMessage);
    const response = await result.response;
    return response.text() || "I'm thinking...";
  } catch (e) {
    console.error("Gemini Error:", e);
    return "Error connecting to Yash's AI. Please check your API key.";
  }
};
