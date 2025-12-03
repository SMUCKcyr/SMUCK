import OpenAI from "openai";

// Cliente da OpenAI usando sua chave do Vercel
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🔒 Rate limit simples em memória
// Janela: 1 minuto | Máx: 10 requisições por IP por minuto
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 10;
const buckets = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const current = buckets.get(ip);

  if (!current) {
    buckets.set(ip, { count: 1, start: now });
    return false;
  }

  // Se passou a janela, reseta o contador
  if (now - current.start > WINDOW_MS) {
    buckets.set(ip, { count: 1, start: now });
    return false;
  }

  current.count += 1;
  if (current.count > MAX_REQUESTS) {
    return true;
  }

  return false;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  // tenta identificar o IP do cliente
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  // verifica se passou do limite
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "Muitas mensagens em pouco tempo. Tente novamente em 1 minuto.",
    });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Mensagem inválida." });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are the official AI assistant of SMUCK, a smart support platform for small and medium businesses.

Language rules:
- Always answer in the SAME language the user used.
- If the user writes in Portuguese, answer in Brazilian Portuguese.
- If the user writes in English, answer in natural American English.
- If the user mixes both, choose the language that makes more sense and keep it consistent.

Tone and behavior:
- Be clear, professional and friendly.
- Speak like a support specialist who understands business and customer service.
- When it makes sense, show how SMUCK helps to:
  - reduce support time,
  - automate replies on WhatsApp and on the website,
  - increase sales conversions,
  - improve customer experience.
- If the user asks something completely outside this context, say politely that your focus is SMUCK, customer support and automation.
- Keep answers between 4 and 6 sentences, direto ao ponto.
          `.trim(),
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 220,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Não consegui gerar uma resposta agora. Tente novamente.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Erro na API SMUCK:", error);
    return res.status(500).json({
      error: "Erro interno na IA da SMUCK.",
    });
  }
}
