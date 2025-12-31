
import { GoogleGenAI } from "@google/genai";

export async function getBriefSummary(investorReportText: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an operator-precise founder. Summarize the following highlights for a sophisticated investor in exactly 3 short, high-conviction bullet points.
      Report: ${investorReportText}`,
      config: {
        systemInstruction: "Tone: Quiet ambition. Understated confidence. No hype. Clear execution focus.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini summary failed:", error);
    return "Precision execution. Partner validated. Scaling infrastructure.";
  }
}
