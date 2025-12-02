import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Mensagem não enviada." });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "Você é a IA oficial da SMUCK. Responda com clareza, simpatia e profissionalismo.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    return res.status(200).json({ reply: aiResponse });
  } catch (error) {
    console.error("Erro na API:", error);
    return res.status(500).json({ error: "Erro interno na IA." });
  }
}
