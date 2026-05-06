"use client";
import Link from "next/link";

const SeroLogo = () => (
  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
    <svg width="28" height="28" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.2" stroke="rgba(255,255,255,.7)" strokeWidth="1.4"/>
      <circle cx="7" cy="7" r="1.5" fill="rgba(255,255,255,.7)"/>
    </svg>
    <span style={{ fontSize:17, fontWeight:800, letterSpacing:".14em", color:"rgba(255,255,255,.85)" }}>SERO</span>
  </div>
);

export default function Footer() {
  return (
    <footer style={{ background:"#0A0A0A", padding:"80px 80px 44px", borderTop:"1px solid rgba(255,255,255,.05)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:64, flexWrap:"wrap", gap:48 }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom:14 }}><SeroLogo /></div>
            <p style={{ fontSize:14, color:"rgba(255,255,255,.25)", maxWidth:210, lineHeight:1.65 }}>Vi bygger det du mangler.</p>
            <div style={{ marginTop:20, display:"flex", flexDirection:"column", gap:8 }}>
              <a href="mailto:serostudio.dk@gmail.com" style={{ fontSize:13, color:"rgba(255,255,255,.35)", transition:"color .2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.35)")}>
                serostudio.dk@gmail.com
              </a>
              <a href="https://instagram.com/serostudio.dk" target="_blank" rel="noopener" style={{ fontSize:13, color:"rgba(255,255,255,.35)", transition:"color .2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.35)")}>
                @serostudio.dk
              </a>
            </div>
          </div>

          {/* Links */}
          <div style={{ display:"flex", gap:72, flexWrap:"wrap" }}>
            {[
              { title:"Services", links:[["Hjemmesider","/hjemmesider"],["AI Chatbots","/ai-chatbot"],["Automation","/automation"],["Lead Systemer","/lead-systemer"],["Content","/content"]] },
              { title:"Firma",    links:[["Priser","/priser"],["Kontakt","/kontakt"],["Instagram","https://instagram.com/serostudio.dk"]] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:".16em", color:"rgba(255,255,255,.22)", textTransform:"uppercase" as const, marginBottom:20 }}>{col.title}</div>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ display:"block", fontSize:14, color:"rgba(255,255,255,.42)", marginBottom:11, transition:"color .2s" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                    onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.42)")}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:28, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontSize:12, color:"rgba(255,255,255,.18)" }}>© 2026 SERO Studio. Alle rettigheder forbeholdes.</span>
          <span style={{ fontSize:12, color:"rgba(255,255,255,.18)" }}>Danmark</span>
        </div>
      </div>
    </footer>
  );
}
