import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.js"; 

const genAI = new GoogleGenAI({ apiKey: env.GOOGLE_AI_KEY });
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

export const generateResult = async (prompt) => {
    const result = await model.generateContent(prompt)
    console.log(result);
    return result.response.text()
}