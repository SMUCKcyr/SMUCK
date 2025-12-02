import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();

    // adiciona mensagem do usuário
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorText =
          data?.error || "Erro ao falar com a IA. Tente novamente.";
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: `⚠️ ${errorText}` },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: data.reply || "Sem resposta da IA." },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Erro de conexão com o servidor." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      marginBottom: 20,
      color: "#555",
    },
    box: {
      border: "1px solid #ddd",
      borderRadius: 12,
      padding: 16,
      minHeight: 300,
      maxHeight: 400,
      overflowY: "auto",
      marginBottom: 16,
      background: "#fff",
    },
    msgUser: {
      textAlign: "right",
      marginBottom: 8,
    },
    msgBot: {
      textAlign: "left",
      marginBottom: 8,
    },
    label: {
      fontWeight: "bold",
      marginRight: 4,
    },
    form: {
      display: "flex",
      gap: 8,
    },
    input: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      border: "1px solid #ccc",
      fontSize: 16,
    },
    button: {
      padding: "10px 16px",
      borderRadius: 8,
      border: "none",
      background: "#000",
      color: "#fff",
      fontSize: 16,
    },
    hint: {
      marginTop: 8,
      fontSize: 12,
      color: "#777",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Chat SMUCK 🤖</h1>
      <p style={styles.subtitle}>
        Converse com a IA oficial da SMUCK sobre atendimento para empresas.
      </p>

      <div style={styles.box}>
        {messages.length === 0 && (
          <p style={{ color: "#777" }}>
            Comece mandando um "Oi" ou pergunte: "O que a SMUCK faz?"
          </p>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            style={msg.from === "user" ? styles.msgUser : styles.msgBot}
          >
            <span style={styles.label}>
              {msg.from === "user" ? "Você:" : "SMUCK:"}
            </span>
            <span>{msg.text}</span>
          </div>
        ))}

        {loading && <p>SMUCK está pensando… ⏳</p>}
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <p style={styles.hint}>
        Dica: peça exemplos de respostas para WhatsApp, scripts de atendimento,
        objeções de clientes etc.
      </p>
    </div>
  );
  }
