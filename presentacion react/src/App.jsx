import React, { useState } from "react";

const VERCEL_URL = "https://tu-deploy-en-vercel.vercel.app"; // Reemplaza con tu URL de Vercel

export default function App() {
  const colors = {
    bgPrimary: "#090d16",
    bgSecondary: "#111827",
    text: "#d1d5db",
    accent: "#38bdf8",
    muted: "#9ca3af",
    card: "#0b1220",
  };

  const containerStyle = {
    minHeight: "100vh",
    background: `linear-gradient(180deg, ${colors.bgPrimary} 0%, ${colors.bgSecondary} 100%)`,
    color: colors.text,
    fontFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: 980,
    borderRadius: 12,
    padding: 28,
    background: colors.card,
    boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 12,
  };

  const titleStyle = {
    color: colors.accent,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  };

  const metaStyle = {
    color: colors.muted,
    fontSize: 13,
  };

  const slideAreaStyle = {
    padding: "20px 10px",
    borderRadius: 10,
    background: `linear-gradient(180deg, rgba(255,255,255,0.02), transparent)`,
    minHeight: 320,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  };

  const bigHeading = {
    color: colors.text,
    fontSize: 28,
    fontWeight: 700,
  };

  const paragraph = {
    color: colors.text,
    fontSize: 15,
    lineHeight: 1.5,
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: 6,
  };

  const navStyle = {
    display: "flex",
    gap: 10,
  };

  const buttonBase = {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.06)",
    color: colors.text,
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "all 160ms ease",
  };

  const primaryButton = {
    ...buttonBase,
    background: `linear-gradient(90deg, rgba(56,189,248,0.08), rgba(56,189,248,0.04))`,
    border: `1px solid rgba(56,189,248,0.18)`,
    color: colors.accent,
    fontWeight: 600,
  };

  const progressWrap = {
    height: 8,
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 999,
    overflow: "hidden",
  };

  const progressBar = (pct) => ({
    height: "100%",
    width: `${pct}%`,
    background: `linear-gradient(90deg, ${colors.accent}, #60a5fa)`,
    boxShadow: "0 4px 16px rgba(56,189,248,0.12)",
    transition: "width 280ms linear",
  });

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 12,
    fontSize: 14,
  };

  const thStyle = {
    textAlign: "left",
    padding: "10px 12px",
    background: "#071122",
    color: colors.accent,
    fontWeight: 700,
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  };

  const tdStyle = {
    padding: "10px 12px",
    borderBottom: "1px dashed rgba(255,255,255,0.03)",
    color: colors.text,
  };

  const slides = [
    {
      id: "portada",
      title: "PORTADA",
      render: (
        <div>
          <h1 style={bigHeading}>Análisis Legal y Tecnológico de Ciberseguridad</h1>
          <p style={{ ...paragraph, marginTop: 10 }}>
            Sebastián Squella — Asignatura: Fundamentos de Seguridad de la Información (TI3034)
          </p>
          <p style={{ ...paragraph, marginTop: 4, color: colors.muted }}>
            Profesor: Rubén Schnettler (INACAP)
          </p>
          <div style={{ marginTop: 18 }}>
            <span style={{ color: colors.muted, fontSize: 13 }}>Fecha:</span>
            <div style={{ color: colors.accent, fontWeight: 600, marginTop: 6 }}>Examen Final</div>
          </div>
        </div>
      ),
    },
    {
      id: "caso",
      title: "CASO DE ESTUDIO",
      render: (
        <div>
          <h2 style={{ ...bigHeading, fontSize: 22 }}>Brecha por exfiltración de bases de datos</h2>
          <p style={{ ...paragraph, marginTop: 10 }}>
            Resumen: Un incidente real donde atacantes exfiltaron información mediante acceso no autorizado a
            bases de datos. Causas principales: controles de acceso deficientes, credenciales expuestas y ausencia
            de cifrado en reposo y en tránsito.
          </p>
          <ul style={{ color: colors.text, marginTop: 10 }}>
            <li>Acceso lateral por credenciales reutilizadas.</li>
            <li>Falta de separación de privilegios y registros incompletos.</li>
            <li>Datos sensibles almacenados sin cifrado ni tokenización.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "marco",
      title: "MARCO NORMATIVO",
      render: (
        <div>
          <h2 style={{ ...bigHeading, fontSize: 22 }}>Normativas clave analizadas</h2>
          <p style={{ ...paragraph, marginTop: 10 }}>
            En este trabajo se comparan y aplican las siguientes cuatro referencias:
          </p>
          <ol style={{ color: colors.text, marginTop: 10 }}>
            <li>
              <strong style={{ color: colors.accent }}>Ley 21.459</strong> — Tipifica delitos informáticos y sus
              sanciones.
            </li>
            <li>
              <strong style={{ color: colors.accent }}>Ley 19.628</strong> — Protección de datos personales.
            </li>
            <li>
              <strong style={{ color: colors.accent }}>ISO/IEC 27001</strong> — Sistema de gestión de seguridad de la
              información.
            </li>
            <li>
              <strong style={{ color: colors.accent }}>NIST</strong> — Frameworks y controles recomendados.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "ley21459",
      title: "LEY 21.459 (Mapeo de Delitos)",
      render: (
        <div>
          <h2 style={{ ...bigHeading, fontSize: 22 }}>Ley 21.459 — Mapeo práctico</h2>
          <p style={{ ...paragraph, marginTop: 10 }}>
            A continuación una tabla que vincula acciones del atacante con artículos relevantes de la ley chilena.
          </p>

          <div style={{ overflowX: "auto", marginTop: 12 }}>
            <table style={tableStyle} role="table" aria-label="Mapeo Ley 21.459">
              <thead>
                <tr>
                  <th style={thStyle}>Acción del atacante</th>
                  <th style={thStyle}>Artículo / Delito</th>
                  <th style={thStyle}>Implicación práctica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Acceso no autorizado a servidor BD</td>
                  <td style={tdStyle}>Art. 1 — Acceso Ilícito</td>
                  <td style={tdStyle}>
                    Intrusión en sistemas protegidos; posible pena de privación según alcance del acceso.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Intercepción de tráfico y exfiltración</td>
                  <td style={tdStyle}>Art. 2 — Interceptación Ilícita</td>
                  <td style={tdStyle}>
                    Captura y traslado de datos sin consentimiento; agravantes si hay datos sensibles.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Modificación o eliminación de registros</td>
                  <td style={tdStyle}>Art. 3 — Ataque a la integridad</td>
                  <td style={tdStyle}>
                    Ataques que comprometen la integridad y fiabilidad de la información.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "ley19628",
      title: "LEY 19.628 (Privacidad)",
      render: (
        <div>
          <h2 style={{ ...bigHeading, fontSize: 22 }}>Ley 19.628 — Protección de Datos Personales</h2>
          <p style={{ ...paragraph, marginTop: 10 }}>
            Responsabilidad corporativa: las organizaciones deben implementar medidas técnicas y organizacionales
            suficientes para proteger datos personales. Filtraciones por falta de custodia técnica implican
            responsabilidad administrativa y civil.
          </p>
          <p style={{ ...paragraph, marginTop: 8, color: colors.muted }}>
            Recomendaciones: cifrado en reposo, gestión de claves, control de accesos basado en roles y auditoría.
          </p>
        </div>
      ),
    },
    {
      id: "entorno",
      title: "ENTORNO TECNOLÓGICO",
      render: (
        <div>
          <h2 style={{ ...bigHeading, fontSize: 22 }}>Herramientas y estructura del proyecto</h2>
          <p style={{ ...paragraph, marginTop: 10 }}>
            Documentación principal en Markdown para trazabilidad. Uso de asistentes de IA (por ejemplo GitHub Copilot)
            para acelerar tareas repetitivas y generación de ejemplos. CI/CD configurado conectando GitHub con Vercel
            para despliegue continuo del proyecto React + Vite.
          </p>
          <ul style={{ color: colors.text, marginTop: 10 }}>
            <li>Repositorio: Estructura clara con `src/`, `public/` y documentación en `README.md`.</li>
            <li>CI/CD: Deploy automático a Vercel por cada push a la rama principal.</li>
            <li>IA: Copilot ayudó con patrones y snippets, validando siempre las salidas.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "conclusion",
      title: "CONCLUSIÓN",
      render: (
        <div>
          <h2 style={{ ...bigHeading, fontSize: 22 }}>Conclusión y preguntas</h2>
          <p style={{ ...paragraph, marginTop: 10 }}>
            Cierre formal: La protección de datos requiere un enfoque combinado: cumplimiento normativo,
            controles técnicos robustos y cultura organizacional. Estoy disponible para preguntas.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={VERCEL_URL}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                textDecoration: "none",
                ...primaryButton,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Ver sitio en producción
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 6 }}>
                <path d="M5 12h14" stroke={colors.accent} strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 5l7 7-7 7" stroke={colors.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <button
              onClick={() => window.print()}
              style={{ ...buttonBase, border: "1px solid rgba(255,255,255,0.04)" }}
              aria-label="Imprimir presentación"
            >
              Imprimir (PDF)
            </button>
          </div>
        </div>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;
  const pct = Math.round(((index + 1) / total) * 100);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(total - 1, i + 1));
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle} role="region" aria-label="Presentación de Ciberseguridad">
        <header style={headerStyle}>
          <div>
            <div style={titleStyle}>Examen — Fundamentos de Seguridad de la Información</div>
            <div style={metaStyle}>Alumno: Sebastián Squella • Profesor: Rubén Schnettler</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ color: colors.muted, fontSize: 13 }}>Diapositiva</div>
            <div style={{ color: colors.accent, fontWeight: 700 }}>{index + 1} / {total}</div>
          </div>
        </header>

        <main style={slideAreaStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: colors.muted, fontSize: 13 }}>{slides[index].title}</div>

            <div style={{ color: colors.muted, fontSize: 13 }}>
              Tema: {slides[index].id.toUpperCase()}
            </div>
          </div>

          <section aria-live="polite" style={{ marginTop: 6 }}>
            {slides[index].render}
          </section>
        </main>

        <footer style={footerStyle}>
          <div style={navStyle}>
            <button
              onClick={prev}
              disabled={index === 0}
              style={{
                ...buttonBase,
                opacity: index === 0 ? 0.45 : 1,
                cursor: index === 0 ? "not-allowed" : "pointer",
              }}
              aria-label="Anterior"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 18l-6-6 6-6" stroke={colors.text} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Anterior
            </button>

            <button
              onClick={next}
              disabled={index === total - 1}
              style={{
                ...primaryButton,
                opacity: index === total - 1 ? 0.6 : 1,
                cursor: index === total - 1 ? "not-allowed" : "pointer",
              }}
              aria-label="Siguiente"
            >
              Siguiente
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 18l6-6-6-6" stroke={colors.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div style={{ flex: 1, marginLeft: 14 }}>
            <div style={progressWrap} aria-hidden>
              <div style={progressBar(pct)} />
            </div>
            <div style={{ marginTop: 8, color: colors.muted, fontSize: 12, textAlign: "right" }}>
              {pct}% completado
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
