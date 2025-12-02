import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();

    const botMessage = {
      role: "assistant",
      content: data.reply || "Erro ao gerar resposta.",
    };

    setMessages((prev) => [...prev, botMessage]);
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Chat SMUCK 🤖</h1>
      <p>Converse com a IA oficial da SMUCK.</p>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "10px",
          height: "400px",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "10px",
            }}
          >
            <strong>
              {msg.role === "user" ? "Você:" : "SMUCK:"}
            </strong>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            background: "black",
            color: "white",
            border: "none",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
    }
