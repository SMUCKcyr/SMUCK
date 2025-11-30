export default function Pricing() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Planos SMUCK</h1>
        <p style={styles.subtitle}>
          Escolha o plano ideal para o tamanho da sua empresa.
        </p>
      </header>

      <main style={styles.grid}>
        {/* Plano Start */}
        <section style={styles.card}>
          <h2>Start</h2>
          <p style={styles.price}>R$ 49/mês</p>
          <p style={styles.tagline}>Perfeito para microempresas</p>
          <ul style={styles.list}>
            <li>1 canal (WhatsApp OU Instagram)</li>
            <li>Até 300 respostas por mês</li>
            <li>IA pronta para dúvidas simples</li>
            <li>Treinamento básico de respostas</li>
            <li>Relatório mensal simples</li>
          </ul>
        </section>

        {/* Plano Pro */}
        <section style={{ ...styles.card, ...styles.cardHighlight }}>
          <h2>Pro</h2>
          <p style={styles.price}>R$ 129/mês</p>
          <p style={styles.tagline}>Ideal para pequenas e médias empresas</p>
          <ul style={styles.list}>
            <li>Até 3 canais (WhatsApp, Instagram e Site)</li>
            <li>2.000 respostas por mês</li>
            <li>IA avançada, entende contexto</li>
            <li>Captura de leads automática</li>
            <li>Relatórios completos de atendimento</li>
            <li>Treinamento personalizado da IA</li>
          </ul>
        </section>

        {/* Plano Enterprise */}
        <section style={styles.card}>
          <h2>Enterprise</h2>
          <p style={styles.price}>R$ 399/mês</p>
          <p style={styles.tagline}>Para empresas que recebem muitos contatos</p>
          <ul style={styles.list}>
            <li>Respostas ilimitadas</li>
            <li>Todos os canais incluídos</li>
            <li>IA treinada na sua marca</li>
            <li>Integração com CRM e sistemas</li>
            <li>Suporte prioritário</li>
            <li>Onboarding com acompanhamento</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>
          Quer testar ou negociar um plano anual?{" "}
          <a href="/contact" style={styles.link}>
            Fale com o time SMUCK
          </a>
        </p>
      </footer>
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
  grid: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#fff",
  },
  cardHighlight: {
    borderColor: "#000",
    boxShadow: "0 0 0 1px #000",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    margin: "8px 0",
  },
  tagline: {
    color: "#555",
    marginBottom: 12,
  },
  list: {
    paddingLeft: 18,
    lineHeight: 1.5,
    color: "#333",
  },
  footer: {
    marginTop: 32,
    textAlign: "center",
    color: "#444",
  },
  link: {
    color: "#000",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};
