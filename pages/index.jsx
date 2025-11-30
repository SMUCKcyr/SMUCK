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
    marginBottom: 40,
  },
  link: {
    marginLeft: 20,
    textDecoration: "none",
    color: "#333",
  },
  hero: {
    marginTop: 40,
  },
};
