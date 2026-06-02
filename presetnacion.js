import React, { useState } from 'react';

// Datos de las diapositivas basadas en tu trabajo
const diapositivas = [
  {
    titulo: "Introducción al Caso de Ciberseguridad",
    contenido: "Resumen del incidente analizado: Quién fue el atacante, cuál fue la vulnerabilidad explotada y el impacto inicial en la organización."
  },
  {
    titulo: "Marco Normativo Aplicado",
    contenido: "Análisis de las normativas nacionales e internacionales afectadas por el caso real. Cumplimiento de estándares de seguridad básicos."
  },
  {
    titulo: "Infracciones a la Ley 21.459",
    contenido: "Mapeo detallado de las acciones delictivas del caso frente a los artículos de la Ley de Delitos Informáticos de Chile."
  },
  {
    titulo: "Protección de Datos (Ley 19.628)",
    contenido: "Evaluación del tratamiento de datos personales durante y después del incidente, obligaciones legales y vulneración de la privacidad."
  }
];

function App() {
  const [actual, setActual] = useState(0);

  const siguiente = () => {
    if (actual < diapositivas.length - 1) setActual(actual + 1);
  };

  const anterior = () => {
    if (actual > 0) setActual(actual - 1);
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#0f172a', 
      color: '#f8fafc', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>
          Diapositiva {actual + 1} de {diapositivas.length}
        </span>
        
        <h2 style={{ fontSize: '24px', margin: '20px 0', color: '#f1f5f9' }}>
          {diapositivas[actual].titulo}
        </h2>
        
        <p style={{ color: '#94a3b8', lineHeight: '1.6', minHeight: '100px' }}>
          {diapositivas[actual].contenido}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <button 
            onClick={anterior} 
            disabled={actual === 0}
            style={{
              padding: '10px 20px',
              backgroundColor: actual === 0 ? '#475569' : '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: actual === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Anterior
          </button>
          
          <button 
            onClick={siguiente} 
            disabled={actual === diapositivas.length - 1}
            style={{
              padding: '10px 20px',
              backgroundColor: actual === diapositivas.length - 1 ? '#475569' : '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: actual === diapositivas.length - 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
      
      <p style={{ marginTop: '20px', color: '#64748b', fontSize: '12px' }}>
        Desplegado automáticamente vía GitHub y Vercel
      </p>
    </div>
  );
}

export default App;