export default function Pricing() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
      <header style={{ maxWidth: 900, margin: "0 auto 40px auto" }}>
        <h1 style={{ marginBottom: 8 }}>Planos da SMUCK</h1>
        <p style={{ color: "#444" }}>
          Escolha o plano ideal para sua empresa. Todos incluem suporte 24/7 e IA treinável.
        </p>
      </header>

      <main
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 20,
        }}
      >
        {/* Plano Básico */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2 style={{ margin: 0 }}>Plano Básico</h2>
          <p style={{ color: "#444" }}>Para pequenas empresas iniciando com IA.</p>

          <h3 style={{ marginTop: 16 }}>R$ 49/mês</h3>

          <ul style={{ marginTop: 12, lineHeight: "24px" }}>
            <li>Chatbot 24/7</li>
            <li>Respostas automáticas</li>
            <li>Treinamento via PDFs</li>
            <li>Integração WhatsApp (limitada)</li>
          </ul>

          <button
            style={{
              marginTop: 16,
              padding: "12px 18px",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Assinar agora
          </button>
        </div>

        {/* Plano Profissional */}
        <div
          style={{
            border: "1px solid #000",
            borderRadius: 12,
            padding: 24,
            background: "#f7f7f7",
          }}
        >
          <h2 style={{ margin: 0 }}>Plano Profissional</h2>
          <p style={{ color: "#444" }}>Para empresas que precisam de alto desempenho.</p>

          <h3 style={{ marginTop: 16 }}>R$ 139/mês</h3>

          <ul style={{ marginTop: 12, lineHeight: "24px" }}>
            <li>Inclui tudo do Básico</li>
            <li>Integração WhatsApp ilimitada</li>
            <li>Treinamento avançado com base de dados</li>
            <li>Suporte prioritário</li>
          </ul>

          <button
            style={{
              marginTop: 16,
              padding: "12px 18px",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Assinar agora
          </button>
        </div>
      </main>
    </div>
  );
        }
