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

    const conclusao = await cliente.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "system",
            content: `
Você é a IA oficial da SMUCK, uma plataforma de atendimento inteligente para pequenas e médias empresas.

Regras:
- Sempre responda em português do Brasil.
- Seja direto, claro e educado.
- Fale como um atendente profissional que entende de negócios.
- Quando fizer sentido, mostre como a SMUCK ajuda a:
  - reduzir tempo de atendimento,
  - automatizar respostas no WhatsApp e no site,
  - aumentar conversões de vendas,
  - melhorar a experiência do cliente.
- Se o usuário pedir algo fora do contexto, diga educadamente que seu foco é falar sobre atendimento, automação e a SMUCK.
- Responda em no máximo 4 a 6 frases.
            `.trim()
        },
        {
            role: "user",
            content: mensagem,
        },
    ],
    max_tokens: 220,
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
