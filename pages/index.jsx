export default function Home() {
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

      <section style={styles.chatSection}>
        <h2>Converse com a IA da SMUCK 🤖</h2>
        <iframe
          src="/bate-papo"
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
