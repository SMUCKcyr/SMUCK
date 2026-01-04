export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { mensagem } = req.body;

    if (!mensagem) {
      return res.status(400).json({ error: "Mensagem não encontrada no body" });
    }

    // DADOS DO SEU WHATSAPP API
    const token = process.env.WHATSAPP_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

    const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

    const payload = {
      messaging_product: "whatsapp",
      to: "5535992362570",
      type: "text",
      text: { body: mensagem },
    };

    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resposta.json();

    return res.status(200).json({ enviado: true, data });

  } catch (e) {
    return res.status(500).json({ error: "Erro interno", detalhe: e.message });
  }
}
