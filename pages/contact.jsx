export default function Contact() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Fale com o time SMUCK</h1>
        <p style={styles.subtitle}>
          Vamos entender seu negócio e ver qual plano faz mais sentido para você.
        </p>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2>WhatsApp</h2>
          <p style={styles.text}>
            Atendimento rápido, direto comigo. Tirar dúvidas, negociar plano ou pedir um teste.
          </p>
          <a
            href="https://wa.me/5535992362570"
            style={styles.whatsButton}
            target="_blank"
          >
            Chamar no WhatsApp
          </a>
          <p style={styles.hint}>Troca esse número depois pro seu real 😉</p>
        </section>

        <section style={styles.card}>
          <h2>Email</h2>
          <p style={styles.text}>
            Prefere algo mais formal? Manda um email contando sobre sua empresa.
          </p>
          <a href="mailto:smuckatendimento@gmail.com" style={styles.link}>
  ia.smuck@gmail.com
</a>
        </section>

        <section style={styles.card}>
          <h2>Como funciona depois do contato?</h2>
          <ul style={styles.list}>
            <li>Você conta como é hoje o atendimento da sua empresa;</li>
            <li>Nós sugerimos um plano e um fluxo de atendimento;</li>
            <li>Configuramos a SMUCK para seu negócio;</li>
            <li>Você testa e só então decide se continua.</li>
          </ul>
        </section>
      </main>
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
    textAlign: "center",
    marginBottom: 30,
  },
  subtitle: {
    color: "#555",
    marginTop: 8,
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    color: "#444",
    marginBottom: 12,
  },
  whatsButton: {
    display: "inline-block",
    padding: "10px 16px",
    borderRadius: 999,
    backgroundColor: "#25D366",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  hint: {
    marginTop: 8,
    fontSize: 12,
    color: "#777",
  },
  link: {
    color: "#000",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  list: {
    paddingLeft: 18,
    color: "#444",
    lineHeight: 1.5,
  },
};
