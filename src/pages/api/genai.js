import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory, SafetySetting } from "@google/generative-ai";

export default async function getResponseGemini(req, res) {
  if (req.method === 'POST') {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey ?? "");
    const geminiModel = "gemini-pro";
    const generationConfig = {
      "candidate_count": 1,
      "temperature": 0.5
    };
    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE }
    ];

    const model = genAI.getGenerativeModel({ 
      model: geminiModel,
      generationConfig,
      safetySettings
    });

    const { prompt } = req.body;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    res.status(200).json({ text });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
