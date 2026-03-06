import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const url = "https://i.postimg.cc/tC1G0Rf2/2-(1).png";
    const resp = await fetch(url);
    const arrayBuffer = await resp.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-preview",
      contents: [
        {
          inlineData: {
            data: buffer.toString("base64"),
            mimeType: "image/png"
          }
        },
        "Describe this architectural image in 1 to 3 words (e.g., 'Swimming Pool', 'Living Room', 'Exterior View', 'Kitchen'). Only output the short description."
      ]
    });
    console.log("Result:", response.text);
  } catch (e) {
    console.error(e);
  }
}
run();
