import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMsg = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠ Erro de conexão com o servidor.",
        },
      ]);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Chat SMUCK 🤖</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: 15,
          borderRadius: 10,
          minHeight: 300,
          marginBottom: 20,
        }}
      >
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.role === "user" ? "Você:" : "SMUCK:"}</b> {msg.content}
          </p>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          style={{ width: "80%", padding: 10 }}
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            padding: "10px 20px",
            marginLeft: 10,
            background: "black",
            color: "white",
            borderRadius: 5,
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
