export default function Home() {
  // 🔹 FUNÇÃO DE TESTE WHATSAPP (NOVA)
  const isTestMode = true;

  const enviarTesteWhatsApp = async () => {
    try {
      const res = await fetch("/api/test-whatsapp", { method: "POST" });
      await res.json();
      alert("✅ Mensagem enviada! Veja seu WhatsApp.");
    } catch (err) {
      alert("❌ Erro ao enviar mensagem");
      console.error(err);
    }
  };
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>SMUCK</h1>
        <nav>
          <a href="/pricing" style={styles.link}>Planos</a>
          <a href="/contact" style={styles.link}>Contato</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2>Atendimento Inteligente para Empresas</h2>
        <p>A SMUCK responde clientes 24 horas, entende contexto e reduz custos.</p>
      </section>
{isTestMode && (
  <section style={{ marginBottom: 40, textAlign: "center" }}>
    <button
      onClick={enviarTesteWhatsApp}
      style={{
        padding: "15px 25px",
        backgroundColor: "#4CAF50",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        border: "none",
        borderRadius: 10,
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
      }}
    >
      Enviar mensagem de teste
    </button>
  </section>
)}
      <section style={styles.chatSection}>
        <h2>Converse com a IA da SMUCK 🤖</h2>
        <iframe
          src="/chat"
          title="Chat SMUCK"
          style={styles.iframe}
        />
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: 20,
    maxWidth: 900,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  link: {
    marginLeft: 20,
    textDecoration: "none",
    color: "#333",
  },
  hero: {
    marginTop: 40,
    marginBottom: 40,
  },
  chatSection: {
    marginTop: 40,
  },
  iframe: {
    width: "100%",
    height: "500px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
};


