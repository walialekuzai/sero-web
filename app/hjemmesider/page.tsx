"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const reveal = {
  initial:{ opacity:0, y:36 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true } as const,
  transition:{ duration:.75, ease:[.16,1,.3,1] as [number,number,number,number] }
};

function BrowserMock({ tier, delay=0 }: { tier: "basic"|"pro"|"premium"; delay?: number }) {
  const themes = {
    basic:   { bg:"#f8f8f8", accent:"#4A90D9", nav:"#fff" },
    pro:     { bg:"#FAFAFA", accent:"#1A6BFF", nav:"#fff" },
    premium: { bg:"#0A0A0A", accent:"#60A5FA", nav:"#111" },
  };
  const t = themes[tier];
  const dark = tier === "premium";

  return (
    <div style={{ background:"#1a1a1a", borderRadius:14, overflow:"hidden", boxShadow:"0 32px 72px rgba(0,0,0,.25)" }}>
      {/* Browser chrome */}
      <div style={{ background:"#2a2a2a", padding:"10px 16px", display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ display:"flex", gap:6 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c=>(
            <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />
          ))}
        </div>
        <div style={{ flex:1, background:"#3a3a3a", borderRadius:6, height:22, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,.3)", letterSpacing:".04em" }}>din-virksomhed.dk</span>
        </div>
      </div>

      {/* Scrolling website content */}
      <div style={{ height:220, overflow:"hidden", position:"relative", background:t.bg }}>
        <motion.div
          animate={{ y:["0%","-55%","0%"] }}
          transition={{ duration:8, delay, ease:"easeInOut", repeat:Infinity, times:[0,.5,1] }}
          style={{ paddingBottom:40 }}
        >
          {/* Nav */}
          <div style={{ background:t.nav, padding:"10px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:`1px solid ${dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.06)"}` }}>
            <div style={{ width:40, height:8, background:t.accent, borderRadius:4 }} />
            <div style={{ display:"flex", gap:10 }}>
              {[0,1,2].map(i=><div key={i} style={{ width:24, height:6, background:dark?"rgba(255,255,255,.15)":"rgba(0,0,0,.1)", borderRadius:3 }} />)}
              <div style={{ width:40, height:20, background:t.accent, borderRadius:10 }} />
            </div>
          </div>
          {/* Hero */}
          <div style={{ background:dark ? "linear-gradient(135deg,#111,#0A0A0A)" : `linear-gradient(135deg,${t.accent}10,${t.bg})`, padding:"28px 16px 24px" }}>
            <div style={{ width:"65%", height:12, background:dark?"rgba(255,255,255,.8)":"rgba(0,0,0,.8)", borderRadius:6, marginBottom:10 }} />
            <div style={{ width:"45%", height:8, background:dark?"rgba(255,255,255,.3)":"rgba(0,0,0,.3)", borderRadius:4, marginBottom:18 }} />
            <div style={{ display:"flex", gap:8 }}>
              <div style={{ width:70, height:26, background:t.accent, borderRadius:13 }} />
              <div style={{ width:70, height:26, background:"transparent", border:`1.5px solid ${t.accent}`, borderRadius:13 }} />
            </div>
          </div>
          {/* Features row */}
          <div style={{ display:"flex", gap:8, padding:"16px", background:dark?"#111":"#fff" }}>
            {[0,1,2].map(i=>(
              <div key={i} style={{ flex:1, background:dark?"rgba(255,255,255,.04)":"#FAFAFA", borderRadius:8, padding:10 }}>
                <div style={{ width:18, height:18, background:t.accent, borderRadius:5, marginBottom:8, opacity:.8 }} />
                <div style={{ width:"80%", height:7, background:dark?"rgba(255,255,255,.5)":"rgba(0,0,0,.5)", borderRadius:3, marginBottom:5 }} />
                <div style={{ width:"60%", height:5, background:dark?"rgba(255,255,255,.2)":"rgba(0,0,0,.2)", borderRadius:3 }} />
              </div>
            ))}
          </div>
          {/* CTA band */}
          <div style={{ background:t.accent, padding:"16px", textAlign:"center" }}>
            <div style={{ width:120, height:8, background:"rgba(255,255,255,.8)", borderRadius:4, margin:"0 auto 8px" }} />
            <div style={{ width:80, height:22, background:"#fff", borderRadius:11, margin:"0 auto" }} />
          </div>
          {/* Testimonials */}
          <div style={{ padding:"16px", background:dark?"#0A0A0A":"#FAFAFA", display:"flex", gap:8 }}>
            {[0,1].map(i=>(
              <div key={i} style={{ flex:1, background:dark?"rgba(255,255,255,.04)":"#fff", borderRadius:8, padding:10 }}>
                <div style={{ display:"flex", gap:6, marginBottom:8 }}>
                  {[0,1,2,3,4].map(s=><div key={s} style={{ width:8, height:8, background:"#FFD700", borderRadius:2 }} />)}
                </div>
                <div style={{ width:"90%", height:5, background:dark?"rgba(255,255,255,.2)":"rgba(0,0,0,.15)", borderRadius:3, marginBottom:4 }} />
                <div style={{ width:"70%", height:5, background:dark?"rgba(255,255,255,.1)":"rgba(0,0,0,.08)", borderRadius:3 }} />
              </div>
            ))}
          </div>
          {/* Footer bar */}
          <div style={{ background:dark?"#060606":"#0A0A0A", padding:"12px 16px", display:"flex", justifyContent:"space-between" }}>
            <div style={{ width:30, height:6, background:"rgba(255,255,255,.3)", borderRadius:3 }} />
            <div style={{ display:"flex", gap:8 }}>
              {[0,1,2].map(i=><div key={i} style={{ width:20, height:6, background:"rgba(255,255,255,.15)", borderRadius:3 }} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const tiers = [
  {
    id:"basic",
    name:"Basic",
    price:"3.999 kr",
    tagline:"Perfekt til opstart",
    features:["Op til 5 sider","Mobilvenligt design","Kontaktformular","Hurtig levering (48t)","1 måneds support"],
    notIncluded:["Custom animationer","Chatbot integration","SEO-optimering","Blog/CMS"],
  },
  {
    id:"pro",
    name:"Pro",
    price:"7.999 kr",
    tagline:"Mest populær",
    popular:true,
    features:["Op til 10 sider","Framer Motion animationer","SEO-optimering","Blog/CMS system","3 måneders support","Google Analytics"],
    notIncluded:["AI chatbot","Lead automation"],
  },
  {
    id:"premium",
    name:"Premium",
    price:"14.999 kr",
    tagline:"Alt inkluderet",
    features:["Ubegrænsede sider","Custom animations + parallax","AI chatbot integreret","Lead capture system","12 måneders support","SEO + Google Ads setup","Stripe betalingsintegration"],
    notIncluded:[],
  },
];

export default function HjemmesiderPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight:"70vh", background:"#FAFAFA", display:"flex", alignItems:"center", padding:"140px 56px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-20%", right:"-10%", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.07) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
        <div style={{ maxWidth:800, position:"relative", zIndex:1 }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:24 }}>🌐 Hjemmesider</motion.p>
          <motion.h1 {...reveal} style={{ fontSize:"clamp(44px,7vw,88px)", fontWeight:900, letterSpacing:"-0.045em", lineHeight:.97, marginBottom:24 }}>
            En hjemmeside<br />
            <span style={{ color:"#1A6BFF" }}>der sælger.</span>
          </motion.h1>
          <motion.p {...reveal} style={{ fontSize:20, color:"#777", lineHeight:1.7, maxWidth:520, marginBottom:40 }}>
            Vi bygger professionelle hjemmesider med animationer og design der matcher de største bureauer — til en brøkdel af prisen.
          </motion.p>
          <motion.div {...reveal} style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <a href="#pakker" style={{ background:"#0A0A0A", color:"#fff", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:700 }}>Se pakker</a>
            <Link href="/kontakt" style={{ background:"transparent", color:"#1A6BFF", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:600, border:"1.5px solid rgba(26,107,255,.3)" }}>Gratis samtale →</Link>
          </motion.div>
        </div>
      </section>

      {/* LIVE DEMOS */}
      <section id="pakker" style={{ padding:"120px 56px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:16 }}>Live eksempler</motion.p>
          <motion.h2 {...reveal} style={{ fontSize:"clamp(32px,4.5vw,56px)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:16 }}>Se hvad du får.</motion.h2>
          <motion.p {...reveal} style={{ fontSize:17, color:"#777", maxWidth:480, lineHeight:1.7, marginBottom:72 }}>Hver pakke har en kørende animation der viser præcis hvilken type hjemmeside du får. Ingen overraskelser.</motion.p>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28 }}>
            {tiers.map((tier, i) => (
              <motion.div key={tier.id}
                initial={{ opacity:0, y:48 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.75, delay:i*.1, ease:[.16,1,.3,1] as [number,number,number,number] }}
                style={{ position:"relative" }}
              >
                {tier.popular && (
                  <div style={{ position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)", background:"#1A6BFF", color:"#fff", fontSize:11, fontWeight:700, letterSpacing:".1em", padding:"5px 18px", borderRadius:100, zIndex:2, whiteSpace:"nowrap" }}>
                    MEST POPULÆR
                  </div>
                )}
                <div style={{ background:"#FAFAFA", borderRadius:24, overflow:"hidden", border: tier.popular ? "2px solid #1A6BFF" : "1px solid rgba(0,0,0,.08)", boxShadow: tier.popular ? "0 0 0 4px rgba(26,107,255,.08)" : "none" }}>
                  {/* Browser demo */}
                  <div style={{ padding:16, background:tier.popular ? "#F0F5FF" : "#F5F5F5" }}>
                    <BrowserMock tier={tier.id as "basic"|"pro"|"premium"} delay={i * 2.5} />
                  </div>

                  {/* Tier info */}
                  <div style={{ padding:"28px 28px 32px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                      <div>
                        <div style={{ fontSize:12, fontWeight:700, letterSpacing:".1em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:4 }}>{tier.name}</div>
                        <div style={{ fontSize:13, color:"#aaa" }}>{tier.tagline}</div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontSize:26, fontWeight:900, color:"#0A0A0A", letterSpacing:"-0.03em" }}>{tier.price}</div>
                        <div style={{ fontSize:11, color:"#bbb" }}>engangsbetaling</div>
                      </div>
                    </div>

                    <div style={{ borderTop:"1px solid rgba(0,0,0,.07)", paddingTop:20, marginTop:16, marginBottom:24 }}>
                      {tier.features.map(f => (
                        <div key={f} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                          <div style={{ width:18, height:18, borderRadius:9, background:"rgba(26,107,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2 2 4-4" stroke="#1A6BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{ fontSize:13, color:"#444" }}>{f}</span>
                        </div>
                      ))}
                      {tier.notIncluded.map(f => (
                        <div key={f} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, opacity:.35 }}>
                          <div style={{ width:18, height:18, borderRadius:9, background:"rgba(0,0,0,.06)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </div>
                          <span style={{ fontSize:13, color:"#888" }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/checkout?service=hjemmesider&tier=${tier.id}`}
                      style={{ display:"block", textAlign:"center", background: tier.popular ? "#1A6BFF" : "#0A0A0A", color:"#fff", padding:"14px", borderRadius:100, fontSize:14, fontWeight:700, transition:"transform .2s, background .2s" }}
                      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.background=tier.popular?"#1557cc":"#333";}}
                      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.background=tier.popular?"#1A6BFF":"#0A0A0A";}}>
                      Køb nu — {tier.price}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding:"120px 56px", background:"#FAFAFA" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <motion.h2 {...reveal} style={{ fontSize:"clamp(32px,4vw,52px)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:64, textAlign:"center" }}>Hvorfor SERO?</motion.h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {[
              { icon:"⚡", title:"48 timers levering", desc:"De fleste bureauer tager 4-8 uger. Vi leverer på 48 timer." },
              { icon:"📱", title:"Mobilvenlig altid", desc:"100% responsivt design der ser perfekt ud på alle skærme." },
              { icon:"🚀", title:"Animationer inkluderet", desc:"Framer Motion animationer der giver en premium følelse uden premium pris." },
              { icon:"🔒", title:"SEO fra dag ét", desc:"Bygget til at rangere på Google fra første linje kode." },
              { icon:"💬", title:"Direkte kommunikation", desc:"Ingen mellemled. Du taler direkte med den der bygger din side." },
              { icon:"♾️", title:"Ubegrænset revisioner", desc:"Vi retter til du er 100% tilfreds. Ingen ekstra regning." },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.7, delay:i*.07, ease:[.16,1,.3,1] as [number,number,number,number] }}
                style={{ background:"#fff", borderRadius:20, padding:"28px 24px", border:"1px solid rgba(0,0,0,.07)" }}
              >
                <div style={{ fontSize:28, marginBottom:14 }}>{item.icon}</div>
                <div style={{ fontSize:16, fontWeight:700, color:"#0A0A0A", marginBottom:8 }}>{item.title}</div>
                <div style={{ fontSize:14, color:"#888", lineHeight:1.65 }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"120px 56px", background:"#0A0A0A", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.15) 0%, transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1 }}>
          <motion.h2 {...reveal} style={{ fontSize:"clamp(36px,5vw,64px)", fontWeight:900, letterSpacing:"-0.04em", color:"#fff", marginBottom:16 }}>Klar til at starte?</motion.h2>
          <motion.p {...reveal} style={{ fontSize:17, color:"rgba(255,255,255,.35)", marginBottom:48 }}>Gratis konsultation. Ingen forpligtelse.</motion.p>
          <motion.div {...reveal} style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#pakker" style={{ background:"#1A6BFF", color:"#fff", padding:"18px 48px", borderRadius:100, fontSize:16, fontWeight:700 }}>Vælg pakke</a>
            <Link href="/kontakt" style={{ background:"transparent", color:"rgba(255,255,255,.6)", padding:"18px 48px", borderRadius:100, fontSize:16, fontWeight:600, border:"1.5px solid rgba(255,255,255,.15)" }}>Snak med os →</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
