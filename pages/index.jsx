import React from "react";

export default function Home() {
  const styles = {
    container: { fontFamily: "Arial, sans-serif", background: "#f7f7fb", color: "#111", minHeight: "100vh" },
    wrapper: { maxWidth: 980, margin: "0 auto", padding: "24px 12px" },
    header: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18 },
    logoBox: { display: "flex", alignItems: "center", gap: 12 },
    logoSquare: { width: 48, height: 48, borderRadius: 8, background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 },
    nav: { display: "flex", gap: 14, alignItems: "center" },
    hero: { margin: "24px 0", display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, alignItems: "center" },
    cardArea: { background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 6px 18px rgba(20,20,50,0.06)" },
    features: { marginTop: 24 },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 },
    card: { background: "#fff", padding: 14, borderRadius: 8, border: "1px solid #eee" },
    footer: { marginTop: 40, padding: "24px 0", color: "#666", fontSize: 14, textAlign: "center" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <header style={styles.header}>
          <div style={styles.logoBox}>
            <div style={styles.logoSquare}>S</div>
            <div>
              <h1 style={{ margin: 0 }}>SMUCK</h1>
              <div style={{ color: "#666", fontSize: 14 }}>Inteligência artificial que entende seus clientes.</div>
            </div>
          </div>

          <nav style={styles.nav}>
            <a href="/pricing" style={{ color: "#333", textDecoration: "none" }}>Preços</a>
            <a href="/contact" style={{ color: "#333", textDecoration: "none" }}>Contato</a>
          </nav>
        </header>

        <main>
          <section style={styles.hero}>
            <div style={styles.cardArea}>
              <h2>Suporte ao cliente com IA que nunca dorme</h2>
              <p style={{ color: "#444" }}>
                SMUCK é um chatbot de IA pronto para pequenas empresas. Responde 24/7, integra com site, WhatsApp e aprende com seus documentos.
              </p>
              <ul>
                <li>Respostas rápidas e profissionais</li>
                <li>Integra com site, WhatsApp e e-mail</li>
                <li>Treinado com seus PDFs & FAQs</li>
              </ul>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: "100%", height: 220, background: "#efefef", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#9a9a9a" }}>
                Demonstração do chat em breve
              </div>
            </div>
          </section>

          <section id="features" style={styles.features}>
            <h3>Quem usa SMUCK</h3>
            <div style={styles.grid}>
              <div style={styles.card}><strong>PMEs</strong><p>Atendimento 24/7 sem equipe extra.</p></div>
              <div style={styles.card}><strong>Loja online</strong><p>Suporte a pedidos e rastreamento.</p></div>
              <div style={styles.card}><strong>Serviços</strong><p>Agendamento e respostas técnicas.</p></div>
            </div>
          </section>
        </main>

        <footer style={styles.footer}>
          © SMUCK — AI Customer Support
        </footer>
      </div>
    </div>
  );
              }
