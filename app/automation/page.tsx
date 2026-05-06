"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const reveal = {
  initial:{ opacity:0, y:36 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true } as const,
  transition:{ duration:.75, ease:[.16,1,.3,1] }
};

const flowSteps = [
  { icon:"📋", label:"Ny ordre" },
  { icon:"🤖", label:"AI behandler" },
  { icon:"📧", label:"Email sendes" },
  { icon:"📊", label:"CRM opdateret" },
  { icon:"✅", label:"Færdig" },
];

function AutomationDemo({ delay=0 }: { delay?: number }) {
  return (
    <div style={{ background:"#1a1a1a", borderRadius:14, overflow:"hidden", boxShadow:"0 32px 72px rgba(0,0,0,.25)" }}>
      <div style={{ background:"#2a2a2a", padding:"10px 16px", display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ display:"flex", gap:6 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c=>(
            <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />
          ))}
        </div>
        <div style={{ flex:1, background:"#3a3a3a", borderRadius:6, height:22, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,.3)" }}>automation-flow.sero.dk</span>
        </div>
      </div>

      <div style={{ background:"#F8F9FA", height:240, padding:20, position:"relative", overflow:"hidden" }}>
        <div style={{ fontSize:11, fontWeight:700, color:"#aaa", letterSpacing:".1em", marginBottom:16 }}>AUTOMATISERING KØRER...</div>

        {/* Flow viz */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", position:"relative" }}>
          {flowSteps.map((step, i) => (
            <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, position:"relative", zIndex:1 }}>
              <motion.div
                animate={{ scale:[1,1.15,1], background:["rgba(26,107,255,.1)","rgba(26,107,255,.25)","rgba(26,107,255,.1)"] }}
                transition={{ duration:1.2, delay: delay + i * .4, repeat:Infinity, ease:"easeInOut" }}
                style={{ width:40, height:40, borderRadius:"50%", background:"rgba(26,107,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, border:"1.5px solid rgba(26,107,255,.2)" }}
              >
                {step.icon}
              </motion.div>
              <span style={{ fontSize:9, color:"#888", textAlign:"center", fontWeight:600 }}>{step.label}</span>
            </div>
          ))}

          {/* Connecting line */}
          <div style={{ position:"absolute", top:20, left:"10%", right:"10%", height:1, background:"rgba(26,107,255,.15)", zIndex:0 }}>
            <motion.div
              animate={{ width:["0%","100%","0%"] }}
              transition={{ duration:2.5, delay, repeat:Infinity, ease:"linear" }}
              style={{ height:"100%", background:"linear-gradient(90deg, transparent, #1A6BFF, transparent)" }}
            />
          </div>
        </div>

        {/* Live log */}
        <div style={{ marginTop:20, background:"#fff", borderRadius:10, padding:12, border:"1px solid rgba(0,0,0,.06)" }}>
          <div style={{ fontSize:10, fontWeight:700, color:"#aaa", marginBottom:8 }}>AKTIVITET</div>
          {[
            { time:"09:42", text:"Faktura #1247 sendt automatisk", color:"#34C759" },
            { time:"09:41", text:"Booking bekræftet — Lars Jensen", color:"#34C759" },
            { time:"09:38", text:"Lead fanget — ny kontaktformular", color:"#1A6BFF" },
          ].map((log, i) => (
            <motion.div key={i}
              initial={{ opacity:0, x:-10 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay: delay + i * .6 + .5 }}
              style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}
            >
              <div style={{ width:6, height:6, borderRadius:"50%", background:log.color, flexShrink:0 }} />
              <span style={{ fontSize:10, color:"#aaa" }}>{log.time}</span>
              <span style={{ fontSize:10, color:"#555" }}>{log.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tiers = [
  {
    id:"starter",
    name:"Starter",
    price:"300 kr/md",
    setup:"+ 1.499 kr setup",
    tagline:"Spar 5+ timer om ugen",
    features:["Email-automatisering","Fakturaer sendes automatisk","Booking-bekræftelser","2 workflows inkluderet"],
    notIncluded:["CRM integration","Lead automation","Custom workflows"],
  },
  {
    id:"pro",
    name:"Pro",
    price:"900 kr/md",
    setup:"+ 2.999 kr setup",
    tagline:"Mest populær",
    popular:true,
    features:["Op til 10 workflows","CRM integration (HubSpot/Pipedrive)","Lead scoring & routing","Automatiske opfølgninger","Ugentlige rapporter","Zapier/Make integration"],
    notIncluded:["Dedicated consultant"],
  },
  {
    id:"enterprise",
    name:"Enterprise",
    price:"2.500 kr/md",
    setup:"+ 5.999 kr setup",
    tagline:"Fuld virksomhedsautomatisering",
    features:["Ubegrænsede workflows","Custom API integrationer","Dedicated consultant","Månedlig optimering","Prioriteret support","White-label mulighed"],
    notIncluded:[],
  },
];

export default function AutomationPage() {
  return (
    <>
      <section style={{ minHeight:"70vh", background:"#FAFAFA", display:"flex", alignItems:"center", padding:"140px 56px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-10%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.07) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
        <div style={{ maxWidth:800, position:"relative", zIndex:1 }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:24 }}>⚡ Automation</motion.p>
          <motion.h1 {...reveal} style={{ fontSize:"clamp(44px,7vw,88px)", fontWeight:900, letterSpacing:"-0.045em", lineHeight:.97, marginBottom:24 }}>
            Din virksomhed<br />
            <span style={{ color:"#1A6BFF" }}>kører selv.</span>
          </motion.h1>
          <motion.p {...reveal} style={{ fontSize:20, color:"#777", lineHeight:1.7, maxWidth:520, marginBottom:40 }}>
            Fakturaer, booking, opfølgninger og leads — alt kører automatisk mens du fokuserer på det der virkelig betyder noget.
          </motion.p>
          <motion.div {...reveal} style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <a href="#pakker" style={{ background:"#0A0A0A", color:"#fff", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:700 }}>Se pakker</a>
            <Link href="/kontakt" style={{ background:"transparent", color:"#1A6BFF", padding:"16px 40px", borderRadius:100, fontSize:15, fontWeight:600, border:"1.5px solid rgba(26,107,255,.3)" }}>Gratis analyse →</Link>
          </motion.div>
        </div>
      </section>

      <section id="pakker" style={{ padding:"120px 56px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".2em", color:"#1A6BFF", textTransform:"uppercase", marginBottom:16 }}>Live demo</motion.p>
          <motion.h2 {...reveal} style={{ fontSize:"clamp(32px,4.5vw,56px)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:72 }}>Se det i aktion.</motion.h2>

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
                    <AutomationDemo delay={i * 1} />
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

                    <Link href={`/checkout?service=automation&tier=${tier.id}`}
                      style={{ display:"block", textAlign:"center", background: tier.popular ? "#1A6BFF" : "#0A0A0A", color:"#fff", padding:"14px", borderRadius:100, fontSize:14, fontWeight:700 }}
                      onMouseEnter={e=>{e.currentTarget.style.opacity=".85";}}
                      onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}>
                      Start automatisering
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
          <motion.h2 {...reveal} style={{ fontSize:"clamp(36px,5vw,64px)", fontWeight:900, letterSpacing:"-0.04em", color:"#fff", marginBottom:16 }}>Stop med at gøre det manuelt.</motion.h2>
          <motion.p {...reveal} style={{ fontSize:17, color:"rgba(255,255,255,.35)", marginBottom:48, maxWidth:400, margin:"0 auto 48px" }}>Vi analyserer din virksomhed gratis og viser hvad der kan automatiseres.</motion.p>
          <motion.div {...reveal}>
            <Link href="/kontakt" style={{ background:"#1A6BFF", color:"#fff", padding:"18px 48px", borderRadius:100, fontSize:16, fontWeight:800 }}>Book gratis analyse</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
