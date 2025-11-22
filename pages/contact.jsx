export default function Contact() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
      <header style={{ maxWidth: 900, margin: "0 auto 40px auto" }}>
        <h1 style={{ marginBottom: 8 }}>Contato</h1>
        <p style={{ color: "#444" }}>
          Fale com nossa equipe e tire suas dúvidas sobre a SMUCK.
        </p>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
            marginBottom: 20,
          }}
        >
          <h2>WhatsApp</h2>
          <p style={{ color: "#444" }}>Fale diretamente conosco:</p>
          <a
            href="https://wa.me/5599999999999"
            style={{
              color: "#0066ff",
              textDecoration: "underline",
              fontSize: 18,
            }}
          >
            Abrir WhatsApp
          </a>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
            marginBottom: 20,
          }}
        >
          <h2>Email</h2>
          <p style={{ color: "#444" }}>Envie uma mensagem:</p>
          <a
            href="mailto:contato@smuckai.com"
            style={{
              color: "#0066ff",
              textDecoration: "underline",
              fontSize: 18,
            }}
          >
            contato@smuckai.com
          </a>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2>Instagram</h2>
          <p style={{ color: "#444" }}>Nos acompanhe por lá:</p>
          <a
            href="https://instagram.com/smuck.ai"
            style={{
              color: "#0066ff",
              textDecoration: "underline",
              fontSize: 18,
            }}
          >
            @smuck.ai
          </a>
        </div>
      </main>
    </div>
  );
                }
