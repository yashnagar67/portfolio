import { GoogleGenAI } from "@google/genai";
import { ChatMessage, OwnerData } from "../types";

// Initialize Gemini Client
// In a real production app, you might proxy this through a backend to protect the key,
// but for this client-side demo, we use the env variable directly.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
    history: ChatMessage[],
    newMessage: string,
    ownerData: OwnerData
): Promise<string> => {
    try {
        if (!apiKey) {
            return "I'm currently offline (API Key missing). Please email me instead!";
        }

        // Prepare the model
        // Using gemini-3-flash-preview as it is the recommended model for text tasks
        const model = "gemini-3-flash-preview"; 
        
        // Construct the history for the API
        // We only take the last 10 messages to keep context relevant and save tokens
        let recentHistory = history.slice(-10).map(msg => ({
            role: msg.role === 'model' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        }));

        // Ensure history starts with a user message (API requirement)
        // If the first message in our history slice is from the model (e.g. the welcome message), remove it.
        while (recentHistory.length > 0 && recentHistory[0].role === 'model') {
            recentHistory.shift();
        }

        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: ownerData.systemPrompt,
                temperature: 0.7, // A bit of creativity, but mostly grounded
            },
            history: recentHistory,
        });

        const result = await chat.sendMessage({
            message: newMessage
        });

        const responseText = result.text;
        return responseText || "I'm thinking about that...";

    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
};