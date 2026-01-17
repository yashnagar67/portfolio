import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY || "" });
export const sendMessageToGemini = async (history: any[], newMessage: string, ownerData: any) => {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: { systemInstruction: ownerData.systemPrompt, temperature: 0.7 }
    });
    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm thinking...";
  } catch (e) { return "Error connecting to Yash's AI."; }
};