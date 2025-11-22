import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: "Você", text: input }]);
    const messageText = input;
    setInput("");

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });
      const data = await resp.json();
      const reply = data?.reply || "Desculpe, erro. Tente novamente.";
      setMessages((m) => [...m, { from: "SMUCK", text: reply }]);
    } catch (err) {
      setMessages((m) => [...m, { from: "SMUCK", text: "Erro ao conectar. Verifique a chave." }]);
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <img src="/logo.png" alt="SMUCK" style={styles.logo} onError={(e)=>{e.target.src='/logo-placeholder.png'}}/>
          <div>
            <div style={styles.title}>SMUCK</div>
            <div style={styles.subtitle}>AI Customer Support • 24/7</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a style={styles.navLink} href="/caracteristicas">Características</a>
          <a style={styles.navLink} href="/precos">Preços</a>
          <a style={styles.cta} href="/contato">Contato</a>
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.heroLeft}>
            <h1 style={{margin:0}}>Atendimento com IA que entende seu cliente</h1>
            <p style={{color:"#555",lineHeight:1.5}}>
              SMUCK responde 24/7, integra com seu site e WhatsApp e aprende com seus documentos.
            </p>
            <ul>
              <li>Respostas rápidas e profissionais</li>
              <li>Fácil integração com seus canais</li>
              <li>Treinável com FAQs e PDFs</li>
            </ul>
            <div style={{marginTop:14}}>
              <a style={styles.primaryBtn} href="/precos">Ver planos</a>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.chatCard}>
              <div style={styles.chatHeader}>Demo chat — experimente</div>

              <div ref={boxRef} style={styles.chatBox}>
                {messages.length === 0 && (
                  <div style={{color:"#777", padding:12}}>Envie uma mensagem para testar a IA.</div>
                )}
                {messages.map((m, i) => (
                  <div key={i} style={m.from === "Você" ? styles.msgUser : styles.msgBot}>
                    <strong style={{display:"block", marginBottom:6}}>{m.from}</strong>
                    <div>{m.text}</div>
                  </div>
                ))}
              </div>

              <div style={styles.chatControls}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  onKeyDown={(e)=>{ if(e.key==='Enter') sendMessage(); }}
                  style={styles.input}
                />
                <button onClick={sendMessage} style={styles.sendBtn}>Enviar</button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" style={styles.features}>
          <h3>Quem usa SMUCK</h3>
          <div style={styles.grid}>
            <div style={styles.card}><strong>PMEs</strong><p>Atendimento 24/7 sem equipe extra.</p…
