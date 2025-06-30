// backend/services/gemini.service.js
import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.js";

const ai = new GoogleGenAI({ apiKey: env.GOOGLE_AI_KEY });

export const generateResult = async (prompt) => {
    try {
        // call the Pro model directly
        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: prompt,
            config: {
                systemInstruction: `
                    You are an expert in MERN and Development with over 10 years of experience in the field. 
                    You consistently write modular code, breaking it down wherever possible while following the best development practices. 
                    Your code includes clear and understandable comments, and you create files as needed without affecting existing functionality. 
                    You ensure that your code adheres to industry standards, never overlooks edge cases, and is always scalable and maintainable. 
                    Additionally, you prioritize error and exception handling in every part of your development process.
                `
            },
        });
        // console.log(response.text);

        return response.text;
    } catch (err) {
        console.error("❌ Gemini Service error:", err);
        throw err;
    }
};