import React from 'react';

export default function Home() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: 24, background: '#f7f8fb'}}>
      <header style={{maxWidth: 980, margin: '0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div style={{width:48,height:48, borderRadius:8, background:'#000', color:'#fff', display:'flex',alignItems:'center',justifyContent:'center', fontWeight:700}}>S</div>
          <div>
            <h1 style={{margin:0}}>SMUCK</h1>
            <div style={{color:'#555'}}>AI that understands your customers.</div>
          </div>
        </div>
        <nav style={{display:'flex', gap:12, color:'#555'}}><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></nav>
      </header>

      <main style={{maxWidth:980, margin:'24px auto'}}>
        <section style={{background:'#fff', borderRadius:16, padding:20, boxShadow:'0 6px 18px rgba(0,0,0,0.06)'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, alignItems:'center'}}>
            <div>
              <h2 style={{marginTop:0}}>AI Customer Support that never sleeps</h2>
              <p style={{color:'#444'}}>SMUCK is a ready-to-use AI chatbot for small businesses. 24/7 answers, integrates with your site and WhatsApp, and learns from your documents.</p>
              <ul>
                <li>Respostas rápidas e profissionais</li>
                <li>Integra com site, WhatsApp e e-mail</li>
                <li>Treinado com seus PDFs e FAQs</li>
              </ul>
            </div>

            <div>
              <div style={{border:'1px solid #eee', borderRadius:12, padding:12, height:300}}>
                <div style={{color:'#777'}}>Demo chat — show to clients</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{textAlign:'center', marginTop:28, color:'#666'}}>© SMUCK — AI Customer Support</footer>
    </div>
  );
      }
