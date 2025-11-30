export default function Pricing() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>SMUCK</h1>
        <nav>
          <a href="/" style={styles.link}>Início</a>
          <a href="/pricing" style={styles.linkActive}>Planos</a>
          <a href="/contact" style={styles.link}>Contato</a>
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          <h2>Planos para todo tipo de empresa</h2>
          <p>
            Comece simples e evolua conforme seu atendimento cresce. Todos os planos
            usam a mesma inteligência da SMUCK, mudando apenas limites e recursos.
          </p>
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.planName}>Básico</h3>
            <p style={styles.price}>R$ 79/mês</p>
            <p style={styles.subtitle}>Para quem está começando no atendimento digital.</p>
            <ul style={styles.list}>
              <li>Até 1.000 mensagens por mês</li>
              <li>Atendimento 24h automático</li>
              <li>Resumo de conversas por e-mail</li>
            </ul>
            <a href="/contact" style={styles.button}>Começar no Básico</a>
          </div>

          <div style={{ ...styles.card, ...styles.cardHighlight }}>
            <div style={styles.badge}>Mais escolhido</div>
            <h3 style={styles.planName}>Pro</h3>
            <p style={styles.price}>R$ 199/mês</p>
            <p style={styles.subtitle}>Para pequenas e médias empresas com volume diário.</p>
            <ul style={styles.list}>
              <li>Até 10.000 mensagens por mês</li>
              <li>Integração com WhatsApp*</li>
              <li>Personalização de tom de voz</li>
              <li>Suporte prioritário por WhatsApp</li>
            </ul>
            <a href="/contact" style={styles.buttonPrimary}>Quero o plano Pro</a>
          </div>

          <div style={styles.card}>
            <h3 style={styles.planName}>Enterprise</h3>
            <p style={styles.price}>Sob consulta</p>
            <p style={styles.subtitle}>Para operações maiores ou times de atendimento.</p>
            <ul style={styles.list}>
              <li>Mensagens ilimitadas (uso justo)</li>
              <li>Treinamento com base de dados da empresa</li>
              <li>Múltiplos usuários e departamentos</li>
              <li>Onboarding dedicado</li>
            </ul>
            <a href="/contact" style={styles.button}>Falar com vendas</a>
          </div>
        </section>

        <p style={styles.obs}>
          *Integração com WhatsApp pode exigir ferramentas terceiras (por exemplo: API oficial
          ou provedores parceiros).
        </p>
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  link: {
    marginLeft: 20,
    textDecoration: "none",
    color: "#444",
    fontSize: 14,
  },
  linkActive: {
    marginLeft: 20,
    textDecoration: "none",
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
  hero: {
    marginBottom: 30,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
    marginTop: 10,
  },
  card: {
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 20,
    backgroundColor: "#fff",
    position: "relative",
  },
  cardHighlight: {
    borderColor: "#000",
    boxShadow: "0 0 0 1px #000",
  },
  badge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 10,
    padding: "4px 8px",
    borderRadius: 999,
    textTransform: "uppercase",
  },
  planName: {
    margin: "0 0 8px 0",
    fontSize: 18,
  },
  price: {
    margin: "0 0 8px 0",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    margin: "0 0 12px 0",
    fontSize: 13,
    color: "#555",
  },
  list: {
    paddingLeft: 18,
    marginBottom: 16,
    fontSize: 13,
    color: "#444",
  },
  button: {
    display: "inline-block",
    textDecoration: "none",
    border: "1px solid #000",
    padding: "8px 14px",
    borderRadius: 999,
    fontSize: 13,
    color: "#000",
  },
  buttonPrimary: {
    display: "inline-block",
    textDecoration: "none",
    borderRadius: 999,
    padding: "8px 14px",
    fontSize: 13,
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #000",
  },
  obs: {
    marginTop: 24,
    fontSize: 11,
    color: "#777",
  },
};
