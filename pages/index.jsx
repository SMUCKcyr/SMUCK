import React from "react";

export default function Home() {
  const styles = {
    container: { fontFamily: "Arial, sans-serif", padding: "24px" },
    header: { maxWidth: 980, margin: "0 auto 24px auto", display: "flex", justifyContent: "space-between", alignItems: "center" },
    logoBox: { display: "flex", gap: 12, alignItems: "center" },
    nav: { display: "flex", gap: 18, alignItems: "center" },
    hero: { maxWidth: 980, margin: "24px auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 },
    card: { border: "1px solid #eee", borderRadius: 12, padding: 18, background: "#fff" },
    features: { maxWidth: 980, margin: "24px auto", paddingTop: 8 },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoBox}>
          <div style={{ width: 48, height: 48, borderRadius: 8, background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>
            S
          </div>
          <div>
            <h1 style={{ margin: 0 }}>SMUCK</h1>
            <div style={{ color: "#666", fontSize: 14 }}>Inteligência artificial que entende seus clientes</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a href="/" style={{ color: "#000", textDecoration: "none" }}>Home</a>
          <a href="/features" style={{ color: "#000", textDecoration: "none" }}>Características</a>
          <a href="/pricing" style={{ color: "#000", textDecoration: "none" }}>Preços</a>
          <a href="/contact" style={{ color: "#000", textDecoration: "none" }}>Contato</a>
        </nav>
      </header>

      <main>
        <section id="hero" style={styles.hero}>
          <div>
            <h2 style={{ fontSize: 34, marginTop: 0 }}>Suporte ao cliente com IA que nunca dorme</h2>
            <p style={{ color: "#444" }}>
              SMUCK é um chatbot de IA pronto para uso para pequenas e médias empresas. Responde 24/7, integra com site, WhatsApp e aprende com seus documentos.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <a href="/pricing" style={{ padding: "12px 18px", background: "#000", color: "#fff", borderRadius: 8, textDecoration: "none" }}>Ver planos</a>
              <a href="/contact" style={{ padding: "12px 18px", background: "#fff", color: "#000", borderRadius: 8, border: "1px solid #ddd", textDecoration: "none" }}>Fale com a gente</a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={{ height: 260, borderRadius: 8, background: "#f2f2f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
              Demonstração do chat em breve
            </div>
          </div>
        </section>

        <section id="features" style={styles.features}>
          <h3>Quem usa SMUCK</h3>

          <div style={styles.grid}>
            <div style={styles.card}>
              <strong>PMEs</strong>
              <p>Atendimento 24/7 sem equipe extra.</p>
            </div>

            <div style={styles.card}>
              <strong>E-commerces</strong>
              <p>Respostas rápidas a perguntas comuns e pós-venda.</p>
            </div>

            <div style={styles.card}>
              <strong>Serviços</strong>
              <p>Agendamento e suporte automatizado.</p>
            </div>

            <div style={styles.card}>
              <strong>Startups</strong>
              <p>Integra facilmente com seu site e WhatsApp.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
              }
