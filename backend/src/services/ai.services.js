import { GoogleGenAI } from "@google/genai";

const aiClient = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

const generateContent = async (prompt) => {
  const result = await aiClient.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

//   console.log("Full AI response:", JSON.stringify(result, null, 2));
  console.log("Extracted text:", text);

  if (!text) throw new Error("Failed to get a valid AI response.");

  return text;
};

export default { generateContent };
