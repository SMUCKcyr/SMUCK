import OpenAI from "openai";

// cria o cliente da OpenAI usando a variável de ambiente
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // só aceitamos POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use o método POST." });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Mensagem inválida." });
    }

    // chama o modelo da OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "Você é a IA oficial da SMUCK. Fale de forma simples, direta e profissional, como se estivesse explicando o produto para donos de pequenas empresas.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 300,
    });

    const aiReply = completion.choices[0]?.message?.content || "Sem resposta.";

    return res.status(200).json({ reply: aiReply });
  } catch (error) {
    console.error("Erro na rota /api/chat:", error);

    return res.status(500).json({
      error: "Erro interno na IA.",
      // isso aqui é só pra debug – mostra o erro real
      details:
        error?.response?.data ||
        error?.message ||
        JSON.stringify(error, null, 2),
    });
  }
}
