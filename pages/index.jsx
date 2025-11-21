import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f8f9fb', minHeight: '100vh' }}>
      
      <header style={{ 
        maxWidth: 980, 
        margin: '0 auto', 
        padding: '24px 12px', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img 
            src="/logo.png" 
            alt="SMUCK Logo" 
            style={{ width: 42, height: 42, borderRadius: 8, background: '#000' }} 
          />
          <div>
            <h1 style={{ margin: 0, fontSize: 20 }}>SMUCK</h1>
            <div style={{ color: '#555', fontSize: 13 }}>AI that understands your customers.</div>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: 12 }}>
          <a href="#" style={{ color: '#444' }}>Features</a>
          <a href="#" style={{ color: '#444' }}>Pricing</a>
          <a href="#" style={{ color: '#444' }}>Contact</a>
        </nav>
      </header>

      <main style={{ maxWidth: 980, margin: '24px auto', padding: '0 12px' }}>
        
        <section style={{ background: '#fff', padding: 24, borderRadius: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          
          <div>
            <h2>AI Customer Support that never sleeps</h2>
            <p style={{ color: '#444' }}>
              SMUCK is a ready-to-use AI chatbot for small businesses.  
              24/7 answers, integrates with your site and WhatsApp, and learns from your documents.
            </p>
            <ul>
              <li>Respostas rápidas e profissionais</li>
              <li>Integra com site, WhatsApp e e-mail</li>
              <li>Treinado com seus PDFs e FAQs</li>
            </ul>
          </div>

          <div>
            <div style={{ 
              width: '100%', 
              height: 260, 
              background: '#f0f0f0', 
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#777'
            }}>
              Chat demo coming soon
            </div>
          </div>

        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: 24, color: '#555' }}>
        © SMUCK — AI Customer Support
      </footer>

    </div>
  );
            }
