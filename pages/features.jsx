export default function Features() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
      <header style={{ maxWidth: 900, margin: "0 auto 40px auto" }}>
        <h1 style={{ marginBottom: 8 }}>Recursos da SMUCK</h1>
        <p style={{ color: "#444" }}>
          A plataforma de IA que entende seus clientes e atende 24/7.
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
        {/* Recurso 1 */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2>Atendimento 24/7</h2>
          <p style={{ color: "#444" }}>
            A SMUCK responde automaticamente seus clientes a qualquer hora do dia.
          </p>
        </div>

        {/* Recurso 2 */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2>Treinada com seus PDFs</h2>
          <p style={{ color: "#444" }}>
            Envie documentos e a IA aprende tudo sobre sua empresa.
          </p>
        </div>

        {/* Recurso 3 */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2>Integrada ao WhatsApp</h2>
          <p style={{ color: "#444" }}>
            Conecte sua IA diretamente ao WhatsApp para responder clientes.
          </p>
        </div>

        {/* Recurso 4 */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2>Painel simples e intuitivo</h2>
          <p style={{ color: "#444" }}>
            Veja conversas, treine a IA e acompanhe métricas facilmente.
          </p>
        </div>
      </main>
    </div>
  );
            }
