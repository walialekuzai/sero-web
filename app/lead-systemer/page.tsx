"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const reveal = {
  initial:{ opacity:0, y:36 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true } as const,
  transition:{ duration:.75, ease:[.16,1,.3,1] }
};

const leads = [
  { name:"Morten H.", company:"Byg & Bo A/S", score:94, status:"Kontaktet", hot:true },
  { name:"Sarah K.", company:"Klinik Centrum",  score:87, status:"Svaret", hot:true },
  { name:"Jonas P.", company:"Digital Pulse",   score:72, status:"Ny", hot:false },
  { name:"Anne M.", company:"Cafe Strand",      score:68, status:"Ny", hot:false },
];

function LeadDemo({ delay=0 }: { delay?: number }) {
  return (
    <div style={{ background:"#1a1a1a", borderRadius:14, overflow:"hidden", boxShadow:"0 32px 72px rgba(0,0,0,.25)" }}>
      <div style={{ background:"#2a2a2a", padding:"10px 16px", display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ display:"flex", gap:6 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c=>(
            <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />
          ))}
        </div>
        <div style={{ flex:1, background:"#3a3a3a", borderRadius:6, height:22, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,.3)" }}>leads.sero.dk/dashboard</span>
        </div>
      </div>

      <div style={{ background:"#fff", padding:16, height:260, overflow:"hidden" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
          <span style={{ fontSize:11, fontWeight:700, color:"#aaa", letterSpacing:".1em" }}>AI LEADS — I DAG</span>
          <motion.div
            animate={{ opacity:[1,.4,1] }}
            transition={{ duration:1.5, repeat:Infinity }}
            style={{ display:"flex", alignItems:"center", gap:4, fontSize:10, color:"#34C759", fontWeight:700 }}
          >
            <div style={{ width:6, height:6, borderRadius:"50%", background:"#34C759" }} />
            LIVE
          </motion.div>
        </div>

        {leads.map((lead, i) => (
          <motion.div key={i}
            initial={{ opacity:0, x:-16 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay: delay + i * .5 + .3, duration:.4, ease:[.16,1,.3,1] }}
            style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 10px", borderRadius:10, marginBottom:6, background: lead.hot ? "rgba(26,107,255,.04)" : "transparent", border:`1px solid ${lead.hot ? "rgba(26,107,255,.1)" : "rgba(0,0,0,.05)"}` }}
          >
            <div style={{ width:28, height:28, borderRadius:"50%", background: lead.hot ? "#1A6BFF" : "#e0e0e0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, color:lead.hot?"#fff":"#aaa", fontWeight:700, flexShrink:0 }}>
              {lead.name[0]}
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:11, fontWeight:700, color:"#0A0A0A", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{lead.name}</div>
              <div style={{ fontSize:10, color:"#aaa", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{lead.company}</div>
            </div>
            <div style={{ textAlign:"right", flexShrink:0 }}>
              <div style={{ fontSize:13, fontWeight:800, color: lead.score > 80 ? "#1A6BFF" : "#888" }}>{lead.score}</div>
              <div style={{ fontSize:9, color:"#bbb" }}>score</div>
            </div>
            <div style={{ background: lead.status==="Kontaktet" ? "rgba(52,199,89,.12)" : lead.status==="Svaret" ? "rgba(26,107,255,.1)" : "rgba(0,0,0,.06)", color: lead.status==="Kontaktet" ? "#34C759" : lead.status==="Svaret" ? "#1A6BFF" : "#aaa", fontSize:9, fontWeight:700, padding:"3px 8px", borderRadius:100 }}>
              {lead.status}
            </div>
          </motion.div>
        ))}

        <motion.div
          animate={{ opacity:[0,.6,0] }}
          transition={{ duration:2, delay: delay + 2.5, repeat:Infinity }}
          style={{ textAlign:"center", fontSize:10, color:"#1A6BFF", fontWeight:600, marginTop:8 }}
        >
          AI søger efter nye leads...
        </motion.div>
      </div>
    </div>
  );
}

const tiers = [
  {
    id:"starter",
    name:"Starter",
    price:"1.500 kr/md",
    tagline:"50 kvalificerede leads/md",
    features:["50 leads om måneden","LinkedIn + Google søgning","Automatisk email-opsøgning","Lead score (0-100)","Ugentlig rapport"],
    notIncluded:["CRM integration","Personaliserede emails","Telefon-opsøgning"],
  },
  {
    id:"pro",
    name:"Pro",
    price:"3.500 kr/md",
    tagline:"Mest populær — 200 leads/md",
    popular:true,
    features:["200 leads om måneden","LinkedIn, Google, Instagram","Personaliserede AI-emails","CRM integration","A/B test af beskeder","Månedlig strategi-call"],
    notIncluded:["Telefon-opsøgning"],
  },
  {
    id:"enterprise",
    name:"Enterprise",
    price:"7.500 kr/md",
    tagline:"Ubegrænset vækst",
    features:["Ubegrænsede leads","Alle kanaler inkl. telefon","Fuldt outsourcet salg","Dedicated account manager","Daglige rapporter","Custom ICP-opbygning"],
    notIncluded:[],
  },
];

export default function LeadSystemerPage() {
  return (
    <>
      <section style={{ minHeight:"70vh", background:"#FAFAFA", display:"flex", alignItems:"center", padding:"140px 56px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-10%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.07) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
        <div style={{ maxWidth:800, position:"relative", zIndex:1 }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:24 }}>🎯 Lead Systemer</motion.p>
          <motion.h1 {...reveal} style={{ fontSize:"clamp(44px,7vw,88px)", fontWeight:900, letterSpacing:"-0.045em", lineHeight:.97, marginBottom:24 }}>
            Nye kunder<br />
            <span style={{ color:"#1A6BFF" }}>hver dag.</span>
          </motion.h1>
          <motion.p {...reveal} style={{ fontSize:20, color:"#777", lineHeight:1.7, maxWidth:520, marginBottom:40 }}>
            AI finder og kontakter potentielle kunder automatisk — du modtager kun de varme leads klar til at købe.
          </motion.p>
          <motion.div {...reveal} style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <a href="#pakker" style={{ background:"#0A0A0A", color:"#fff", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:700 }}>Se pakker</a>
            <Link href="/kontakt" style={{ background:"transparent", color:"#1A6BFF", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:600, border:"1.5px solid rgba(26,107,255,.3)" }}>Gratis demo →</Link>
          </motion.div>
        </div>
      </section>

      <section id="pakker" style={{ padding:"120px 56px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:16 }}>Live dashboard</motion.p>
          <motion.h2 {...reveal} style={{ fontSize:"clamp(32px,4.5vw,56px)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:72 }}>Se leads komme ind.</motion.h2>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28 }}>
            {tiers.map((tier, i) => (
              <motion.div key={tier.id}
                initial={{ opacity:0, y:48 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.75, delay:i*.1, ease:[.16,1,.3,1] }}
                style={{ position:"relative" }}
              >
                {tier.popular && (
                  <div style={{ position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)", background:"#1A6BFF", color:"#fff", fontSize:11, fontWeight:700, letterSpacing:".1em", padding:"5px 18px", borderRadius:100, zIndex:2, whiteSpace:"nowrap" }}>MEST POPULÆR</div>
                )}
                <div style={{ background:"#FAFAFA", borderRadius:24, overflow:"hidden", border: tier.popular ? "2px solid #1A6BFF" : "1px solid rgba(0,0,0,.08)", boxShadow: tier.popular ? "0 0 0 4px rgba(26,107,255,.08)" : "none" }}>
                  <div style={{ padding:16, background: tier.popular ? "#F0F5FF" : "#F5F5F5" }}>
                    <LeadDemo delay={i * 1.2} />
                  </div>

                  <div style={{ padding:"28px 28px 32px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                      <div>
                        <div style={{ fontSize:12, fontWeight:700, letterSpacing:".1em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:4 }}>{tier.name}</div>
                        <div style={{ fontSize:13, color:"#aaa" }}>{tier.tagline}</div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontSize:22, fontWeight:900, color:"#0A0A0A", letterSpacing:"-0.03em" }}>{tier.price}</div>
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

                    <Link href={`/checkout?service=lead-systemer&tier=${tier.id}`}
                      style={{ display:"block", textAlign:"center", background: tier.popular ? "#1A6BFF" : "#0A0A0A", color:"#fff", padding:"14px", borderRadius:100, fontSize:14, fontWeight:700 }}
                      onMouseEnter={e=>{e.currentTarget.style.opacity=".85";}}
                      onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}>
                      Start nu
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"120px 56px", background:"#0A0A0A", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.12) 0%, transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1 }}>
          <motion.h2 {...reveal} style={{ fontSize:"clamp(36px,5vw,64px)", fontWeight:900, letterSpacing:"-0.04em", color:"#fff", marginBottom:16 }}>Din salgspipeline<br />fylder sig selv.</motion.h2>
          <motion.p {...reveal} style={{ fontSize:17, color:"rgba(255,255,255,.35)", marginBottom:48, maxWidth:400, margin:"0 auto 48px" }}>Gratis analyse af din nuværende leadgenerering.</motion.p>
          <motion.div {...reveal}>
            <Link href="/kontakt" style={{ background:"#1A6BFF", color:"#fff", padding:"18px 48px", borderRadius:100, fontSize:16, fontWeight:800 }}>Book gratis analyse</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
