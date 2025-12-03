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
          content:
            "Você é a IA oficial da SMUCK, uma plataforma de atendimento para empresas. Responda em português do Brasil, com clareza, objetividade e tom profissional amigável. Foque em explicar como a SMUCK ajuda empresas com atendimento, automação, WhatsApp, redução de custos e experiência do cliente.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 300,
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "Não consegui gerar uma resposta agora. Tente novamente.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Erro na API SMUCK:", error);
    return res.status(500).json({
      error: "Erro interno na IA da SMUCK.",
    });
  }
}
