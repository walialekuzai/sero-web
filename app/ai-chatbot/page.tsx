"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const reveal = {
  initial:{ opacity:0, y:36 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true } as const,
  transition:{ duration:.75, ease:[.16,1,.3,1] as [number,number,number,number] }
};

const messages = [
  { from:"user", text:"Hvornår har I åbent?" },
  { from:"bot",  text:"Vi har åbent man-fre 9-17 og lørdag 10-14 🕐" },
  { from:"user", text:"Hvad koster levering?" },
  { from:"bot",  text:"Gratis levering ved køb over 499 kr! Under det koster det 49 kr 🚚" },
  { from:"user", text:"Kan jeg returnere varer?" },
  { from:"bot",  text:"Ja, 30 dages returret på alle varer. Helt problemfrit ✅" },
];

function ChatDemo({ delay=0 }: { delay?: number }) {
  return (
    <div style={{ background:"#1a1a1a", borderRadius:14, overflow:"hidden", boxShadow:"0 32px 72px rgba(0,0,0,.25)" }}>
      <div style={{ background:"#2a2a2a", padding:"10px 16px", display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ display:"flex", gap:6 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c=>(
            <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />
          ))}
        </div>
        <div style={{ flex:1, background:"#3a3a3a", borderRadius:6, height:22, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,.3)" }}>din-hjemmeside.dk</span>
        </div>
      </div>

      <div style={{ background:"#F8F9FA", height:280, position:"relative" }}>
        {/* Fake website bg */}
        <div style={{ padding:"16px 16px 0" }}>
          <div style={{ height:8, background:"rgba(0,0,0,.08)", borderRadius:4, marginBottom:6, width:"70%" }} />
          <div style={{ height:6, background:"rgba(0,0,0,.05)", borderRadius:4, marginBottom:4, width:"50%" }} />
          <div style={{ height:6, background:"rgba(0,0,0,.05)", borderRadius:4, width:"60%" }} />
        </div>

        {/* Chat widget */}
        <div style={{ position:"absolute", bottom:12, right:12, width:220 }}>
          {/* Chat bubble toggle */}
          <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:8 }}>
            <div style={{ width:44, height:44, borderRadius:"50%", background:"#1A6BFF", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(26,107,255,.4)" }}>
              <span style={{ fontSize:20 }}>💬</span>
            </div>
          </div>

          {/* Chat window */}
          <div style={{ background:"#fff", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,.15)", overflow:"hidden" }}>
            <div style={{ background:"#1A6BFF", padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:28, height:28, borderRadius:"50%", background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>🤖</div>
              <div>
                <div style={{ fontSize:11, fontWeight:700, color:"#fff" }}>SERO Bot</div>
                <div style={{ fontSize:9, color:"rgba(255,255,255,.6)" }}>● Online nu</div>
              </div>
            </div>

            <div style={{ padding:"10px", height:160, overflow:"hidden" }}>
              {messages.map((msg, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, y:8 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration:.4, delay: delay + i * 1.2 + .5, ease:[.16,1,.3,1] as [number,number,number,number] }}
                  style={{ display:"flex", justifyContent: msg.from==="user" ? "flex-end" : "flex-start", marginBottom:6 }}
                >
                  <div style={{
                    background: msg.from==="user" ? "#1A6BFF" : "#F0F0F0",
                    color: msg.from==="user" ? "#fff" : "#0A0A0A",
                    borderRadius: msg.from==="user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    padding:"6px 10px",
                    fontSize:10,
                    maxWidth:"85%",
                    lineHeight:1.4,
                  }}>{msg.text}</div>
                </motion.div>
              ))}

              <motion.div
                animate={{ opacity:[1,0,1] }}
                transition={{ duration:1, repeat:Infinity, repeatDelay:.5 }}
                style={{ display:"flex", gap:3, padding:"6px 10px", background:"#F0F0F0", borderRadius:"12px 12px 12px 2px", width:"fit-content", marginBottom:6 }}
              >
                {[0,1,2].map(i=><div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"#aaa" }} />)}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tiers = [
  {
    id:"starter",
    name:"Starter",
    price:"500 kr/md",
    setup:"+ 1.999 kr setup",
    tagline:"Besvarer de vigtigste spørgsmål",
    features:["Op til 50 svar i vidensbasen","Dansk sprog","Åbningstider & priser","Email-notifikation ved spørgsmål","Basic branding"],
    notIncluded:["CRM integration","Automatisk booking","Lead capture"],
  },
  {
    id:"pro",
    name:"Pro",
    price:"1.500 kr/md",
    setup:"+ 3.999 kr setup",
    tagline:"Mest populær — sælger 24/7",
    popular:true,
    features:["Ubegrænset vidensbase","Automatisk booking","Lead capture & CRM","Produktanbefalinger","Brugerdefineret persona","Analytics dashboard"],
    notIncluded:["Voice support"],
  },
  {
    id:"enterprise",
    name:"Enterprise",
    price:"3.500 kr/md",
    setup:"+ 7.999 kr setup",
    tagline:"Fuld automatisering",
    features:["Alt i Pro","Voice-support","Multi-sprog","Shopify/WooCommerce integration","Dedikeret support","Månedlig optimering"],
    notIncluded:[],
  },
];

export default function AIChatbotPage() {
  return (
    <>
      <section style={{ minHeight:"70vh", background:"#FAFAFA", display:"flex", alignItems:"center", padding:"140px 56px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-10%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.08) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
        <div style={{ maxWidth:800, position:"relative", zIndex:1 }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:24 }}>🤖 AI Chatbots</motion.p>
          <motion.h1 {...reveal} style={{ fontSize:"clamp(44px,7vw,88px)", fontWeight:900, letterSpacing:"-0.045em", lineHeight:.97, marginBottom:24 }}>
            Besvarer kunder<br />
            <span style={{ color:"#1A6BFF" }}>mens du sover.</span>
          </motion.h1>
          <motion.p {...reveal} style={{ fontSize:20, color:"#777", lineHeight:1.7, maxWidth:520, marginBottom:40 }}>
            En AI chatbot der kender din virksomhed ud og ind — besvarer spørgsmål, tager bookinger og fanger leads 24 timer i døgnet.
          </motion.p>
          <motion.div {...reveal} style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <a href="#pakker" style={{ background:"#0A0A0A", color:"#fff", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:700 }}>Se pakker</a>
            <Link href="/kontakt" style={{ background:"transparent", color:"#1A6BFF", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:600, border:"1.5px solid rgba(26,107,255,.3)" }}>Gratis demo →</Link>
          </motion.div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="pakker" style={{ padding:"120px 56px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:16 }}>Live demo</motion.p>
          <motion.h2 {...reveal} style={{ fontSize:"clamp(32px,4.5vw,56px)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:72 }}>Se den i aktion.</motion.h2>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28 }}>
            {tiers.map((tier, i) => (
              <motion.div key={tier.id}
                initial={{ opacity:0, y:48 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.75, delay:i*.1, ease:[.16,1,.3,1] as [number,number,number,number] }}
                style={{ position:"relative" }}
              >
                {tier.popular && (
                  <div style={{ position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)", background:"#1A6BFF", color:"#fff", fontSize:11, fontWeight:700, letterSpacing:".1em", padding:"5px 18px", borderRadius:100, zIndex:2, whiteSpace:"nowrap" }}>MEST POPULÆR</div>
                )}
                <div style={{ background:"#FAFAFA", borderRadius:24, overflow:"hidden", border: tier.popular ? "2px solid #1A6BFF" : "1px solid rgba(0,0,0,.08)", boxShadow: tier.popular ? "0 0 0 4px rgba(26,107,255,.08)" : "none" }}>
                  <div style={{ padding:16, background: tier.popular ? "#F0F5FF" : "#F5F5F5" }}>
                    <ChatDemo delay={i * 1.5} />
                  </div>

                  <div style={{ padding:"28px 28px 32px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                      <div>
                        <div style={{ fontSize:12, fontWeight:700, letterSpacing:".1em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:4 }}>{tier.name}</div>
                        <div style={{ fontSize:13, color:"#aaa" }}>{tier.tagline}</div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontSize:22, fontWeight:900, color:"#0A0A0A", letterSpacing:"-0.03em" }}>{tier.price}</div>
                        <div style={{ fontSize:11, color:"#bbb" }}>{tier.setup}</div>
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

                    <Link href={`/checkout?service=ai-chatbot&tier=${tier.id}`}
                      style={{ display:"block", textAlign:"center", background: tier.popular ? "#1A6BFF" : "#0A0A0A", color:"#fff", padding:"14px", borderRadius:100, fontSize:14, fontWeight:700 }}
                      onMouseEnter={e=>{e.currentTarget.style.opacity=".85";}}
                      onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}>
                      Kom i gang — {tier.price}
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
          <motion.h2 {...reveal} style={{ fontSize:"clamp(36px,5vw,64px)", fontWeight:900, letterSpacing:"-0.04em", color:"#fff", marginBottom:16 }}>Aldrig syg. Aldrig træt.</motion.h2>
          <motion.p {...reveal} style={{ fontSize:17, color:"rgba(255,255,255,.35)", marginBottom:48, maxWidth:400, margin:"0 auto 48px" }}>Din chatbot arbejder 24/7/365. Gratis konsultation inkluderet.</motion.p>
          <motion.div {...reveal}>
            <Link href="/kontakt" style={{ background:"#fff", color:"#0A0A0A", padding:"18px 48px", borderRadius:100, fontSize:16, fontWeight:800 }}>Book gratis demo</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
