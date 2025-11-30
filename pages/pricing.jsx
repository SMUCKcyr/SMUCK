export default function Pricing() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 40 }}>
      <h1>Planos SMUCK</h1>

      <p>Escolha o plano ideal para o seu negócio.</p>

      <div style={{ display: "flex", gap: 20, marginTop: 30, flexWrap: "wrap" }}>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 20,
            minWidth: 220,
          }}
        >
          <h2>Básico</h2>
          <p>Perfeito para começar a testar IA no atendimento.</p>
          <p>
            <strong>R$ 149/mês</strong>
          </p>
        </div>

        <div
          style={{
            border: "2px solid #000",
            borderRadius: 12,
            padding: 20,
            minWidth: 220,
            background: "#f5f5f5",
          }}
        >
          <h2>Profissional</h2>
          <p>Para empresas que querem IA todos os dias, 24/7.</p>
          <p>
            <strong>R$ 349/mês</strong>
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 20,
            minWidth: 220,
          }}
        >
          <h2>Enterprise</h2>
          <p>Atendimento sob medida, integrações e suporte dedicado.</p>
          <p>
            <strong>Fale com a gente</strong>
          </p>
        </div>
      </div>
    </div>
  );
          }
