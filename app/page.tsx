"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const C = { black:"#0A0A0A", blue:"#1A6BFF", green:"#34C759", off:"#FAFAFA" };
const font = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const reveal = {
  initial:{ opacity:0, y:32 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true } as const,
  transition:{ duration:.72, ease:[.16,1,.3,1] as [number,number,number,number] },
};

const services = [
  { num:"01", name:"Hjemmesider",   desc:"Professionelle sider leveret på 48 timer der faktisk konverterer.", price:"Fra 3.999 kr", href:"/hjemmesider" },
  { num:"02", name:"AI Chatbots",   desc:"Besvarer kunder automatisk, hele døgnet — aldrig syg, aldrig på ferie.", price:"Fra 500 kr/md", href:"/ai-chatbot" },
  { num:"03", name:"Automation",    desc:"Fakturaer, booking og opfølgning kører uden du rører en finger.", price:"Fra 300 kr/md", href:"/automation" },
  { num:"04", name:"Lead Systemer", desc:"Finder og kontakter nye kunder automatisk mens du fokuserer på andet.", price:"Fra 1.500 kr/md", href:"/lead-systemer" },
  { num:"05", name:"Content",       desc:"AI-genererede opslag til Instagram og Facebook der skaber engagement.", price:"Fra 1.000 kr/md", href:"/content" },
  { num:"06", name:"Custom",        desc:"Har du en specifik idé? Vi vurderer og bygger den.", price:"Pris efter aftale", href:"/kontakt" },
];

const stats = [
  { value:"10+", label:"Timer sparet pr. uge", sub:"Gennemsnitligt for vores kunder" },
  { value:"30",  label:"Dage til positiv ROI", sub:"Typisk tilbagebetalingstid" },
  { value:"3x",  label:"Mere output", sub:"Sammenligning: med vs. uden AI" },
  { value:"24/7",label:"Tilgængelighed", sub:"AI der aldrig holder fri" },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const y1   = useTransform(scrollYProgress, [0,1], ["0%","22%"]);
  const fade = useTransform(scrollYProgress, [0,.65], [1,0]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div ref={ref} style={{ minHeight:"100vh", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", background:C.off }}>

        {/* Parallax orbs */}
        <motion.div style={{ y:y1, opacity:fade, position:"absolute", inset:0, pointerEvents:"none" }}>
          <div style={{ position:"absolute", width:720, height:720, top:"-10%", left:"22%", borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.08) 0%, transparent 68%)", filter:"blur(90px)", animation:"orb-a 16s ease-in-out infinite" }}/>
          <div style={{ position:"absolute", width:500, height:500, top:"10%", left:"-6%", borderRadius:"50%", background:"radial-gradient(circle, rgba(100,160,255,.06) 0%, transparent 70%)", filter:"blur(70px)", animation:"orb-b 18s ease-in-out 2s infinite" }}/>
          <div style={{ position:"absolute", inset:0, opacity:.18, backgroundImage:"linear-gradient(rgba(0,0,0,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.028) 1px,transparent 1px)", backgroundSize:"80px 80px", maskImage:"radial-gradient(ellipse 65% 65% at 50% 50%, black 0%, transparent 100%)" as string }}/>
        </motion.div>

        <div style={{ position:"relative", zIndex:1, textAlign:"center", padding:"160px 80px 100px", maxWidth:1000, margin:"0 auto", width:"100%" }}>

          {/* Badge */}
          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:.55, ease:[.16,1,.3,1] as [number,number,number,number] }}
            style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#fff", border:"1px solid rgba(0,0,0,.08)", borderRadius:100, padding:"9px 22px", fontSize:13, fontWeight:500, color:"#666", marginBottom:56, boxShadow:"0 2px 12px rgba(0,0,0,.04)", fontFamily:font }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:C.green, display:"inline-block" }}/>
            Tilgængelig for kunder i Danmark og internationalt
          </motion.div>

          {/* Headline */}
          <div style={{ marginBottom:32 }}>
            {["Spar tid.", "Tjen mere."].map((line, i) => (
              <div key={line} style={{ overflow:"hidden" }}>
                <motion.div initial={{ y:"105%" }} animate={{ y:"0%" }} transition={{ duration:.9, delay:.1+i*.14, ease:[.16,1,.3,1] as [number,number,number,number] }}
                  style={{ fontFamily:font, fontSize:"clamp(72px,10.5vw,128px)", fontWeight:900, letterSpacing:"-0.046em", lineHeight:.93, color: i===0 ? C.black : C.blue }}>
                  {line}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Subheadline */}
          <motion.p initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7, delay:.52, ease:[.16,1,.3,1] as [number,number,number,number] }}
            style={{ fontFamily:font, fontSize:"clamp(16px,1.9vw,19px)", color:"#888", lineHeight:1.72, maxWidth:520, margin:"0 auto 56px", fontWeight:400 }}>
            Vi bygger hjemmesider, AI chatbots og automatiseringer der frigiver din tid og trækker flere kunder ind — uden ekstra arbejde fra din side.
          </motion.p>

          {/* CTA knapper */}
          <motion.div initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7, delay:.68, ease:[.16,1,.3,1] as [number,number,number,number] }}
            style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", marginBottom:96 }}>
            <Link href="/hjemmesider"
              style={{ background:C.black, color:"#fff", padding:"18px 48px", borderRadius:100, fontSize:16, fontWeight:700, fontFamily:font, transition:"transform .22s, background .18s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.04) translateY(-2px)";e.currentTarget.style.background="#222";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.background=C.black;}}>
              Se services →
            </Link>
            <Link href="/kontakt"
              style={{ background:"transparent", color:C.blue, padding:"18px 48px", borderRadius:100, fontSize:16, fontWeight:600, fontFamily:font, border:"1.5px solid rgba(26,107,255,.25)", transition:"transform .22s, border-color .18s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.04) translateY(-2px)";e.currentTarget.style.borderColor="rgba(26,107,255,.6)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.borderColor="rgba(26,107,255,.25)";}}>
              Gratis samtale
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.8, delay:1.0 }}
            style={{ display:"flex", gap:56, justifyContent:"center", paddingTop:48, borderTop:"1px solid rgba(0,0,0,.07)", flexWrap:"wrap" }}>
            {[["48t","leveringstid"],["100%","tilfredse kunder"],["24/7","AI support"]].map(([v,l]) => (
              <div key={v} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:font, fontSize:30, fontWeight:800, color:C.black, letterSpacing:"-0.03em" }}>{v}</div>
                <div style={{ fontFamily:font, fontSize:12, color:"#bbb", marginTop:5, fontWeight:500 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── TICKER ──────────────────────────────────────────────────────────── */}
      <div style={{ background:C.black, padding:"17px 0", overflow:"hidden" }}>
        <div className="ticker-inner">
          {[...Array(2)].map((_,j) => ["Hjemmesider","AI Chatbots","Automation","Lead Systemer","Content","Custom"].map((s,i) => (
            <span key={`${j}-${i}`} style={{ display:"inline-flex", alignItems:"center", gap:20, padding:"0 32px", fontFamily:font, fontSize:11, fontWeight:700, letterSpacing:".22em", color:"rgba(255,255,255,.28)", textTransform:"uppercase" as const }}>
              {s}<span style={{ color:"rgba(255,255,255,.1)" }}>·</span>
            </span>
          )))}
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section style={{ padding:"160px 80px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>

          <motion.p {...reveal} style={{ fontFamily:font, fontSize:11, fontWeight:700, letterSpacing:".22em", color:C.blue, textTransform:"uppercase" as const, marginBottom:20 }}>
            Vores services
          </motion.p>
          <motion.h2 {...reveal} style={{ fontFamily:font, fontSize:"clamp(36px,5vw,64px)", fontWeight:900, letterSpacing:"-0.042em", lineHeight:1.02, marginBottom:16 }}>
            Klik ind. Se hvad vi kan.
          </motion.h2>
          <motion.p {...reveal} style={{ fontFamily:font, fontSize:18, color:"#888", maxWidth:460, lineHeight:1.7, marginBottom:72 }}>
            Hver service har sin egen side med live demoer og komplet prisinformation.
          </motion.p>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
            {services.map((svc, i) => (
              <motion.div key={svc.num}
                initial={{ opacity:0, y:44 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.72, delay:i*.07, ease:[.16,1,.3,1] as [number,number,number,number] }}>
                <Link href={svc.href} style={{ display:"block", background:"#FAFAFA", borderRadius:22, padding:"40px 36px", border:"1px solid rgba(0,0,0,.07)", borderLeft:"3px solid transparent", transition:"transform .3s cubic-bezier(.25,1,.5,1), box-shadow .3s, border-left-color .2s, background .2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="0 28px 60px rgba(0,0,0,.07)";e.currentTarget.style.borderLeftColor=C.blue;e.currentTarget.style.background="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";e.currentTarget.style.borderLeftColor="transparent";e.currentTarget.style.background="#FAFAFA";}}>
                  <div style={{ fontFamily:font, fontSize:10, fontWeight:700, letterSpacing:".24em", color:"#ccc", marginBottom:24 }}>{svc.num}</div>
                  <div style={{ fontFamily:font, fontSize:22, fontWeight:800, color:C.black, letterSpacing:"-0.02em", marginBottom:10 }}>{svc.name}</div>
                  <div style={{ fontFamily:font, fontSize:15, color:"#888", lineHeight:1.65, marginBottom:28 }}>{svc.desc}</div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <span style={{ fontFamily:font, fontSize:12, fontWeight:700, color:C.blue, background:"rgba(26,107,255,.08)", padding:"5px 14px", borderRadius:100 }}>{svc.price}</span>
                    <span style={{ fontFamily:font, fontSize:13, color:"#ccc" }}>Se mere →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI STATS — bred value prop med statistikker ──────────────────── */}
      <section style={{ padding:"160px 80px", background:C.off }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>

          <motion.p {...reveal} style={{ fontFamily:font, fontSize:11, fontWeight:700, letterSpacing:".22em", color:C.blue, textTransform:"uppercase" as const, marginBottom:20 }}>
            Hvad du får ud af det
          </motion.p>
          <motion.h2 {...reveal} style={{ fontFamily:font, fontSize:"clamp(34px,4.5vw,58px)", fontWeight:900, letterSpacing:"-0.04em", lineHeight:1.05, maxWidth:640, marginBottom:72 }}>
            AI er ikke en udgift — det er den investering der betaler sig hurtigst.
          </motion.h2>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
            {stats.map((s, i) => (
              <motion.div key={s.value}
                initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.68, delay:i*.08, ease:[.16,1,.3,1] as [number,number,number,number] }}
                style={{ background:"#fff", borderRadius:20, padding:"40px 32px", border:"1px solid rgba(0,0,0,.07)" }}>
                <div style={{ fontFamily:font, fontSize:52, fontWeight:900, letterSpacing:"-0.04em", color:C.black, lineHeight:1, marginBottom:12 }}>{s.value}</div>
                <div style={{ fontFamily:font, fontSize:16, fontWeight:700, color:C.black, marginBottom:6 }}>{s.label}</div>
                <div style={{ fontFamily:font, fontSize:13, color:"#aaa", lineHeight:1.5 }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding:"180px 80px", background:C.black, textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:650, height:650, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,255,.12) 0%, transparent 65%)", filter:"blur(70px)", pointerEvents:"none" }}/>

        <div style={{ position:"relative", zIndex:1 }}>
          <motion.p {...reveal} style={{ fontFamily:font, fontSize:11, fontWeight:700, letterSpacing:".22em", color:"rgba(255,255,255,.25)", textTransform:"uppercase" as const, marginBottom:28 }}>
            Din næste kundé venter
          </motion.p>
          <motion.h2 {...reveal} style={{ fontFamily:font, fontSize:"clamp(44px,6.5vw,82px)", fontWeight:900, letterSpacing:"-0.045em", lineHeight:1.0, color:"#fff", maxWidth:720, margin:"0 auto 22px" }}>
            Din konkurrent er allerede i gang.
          </motion.h2>
          <motion.p {...reveal} style={{ fontFamily:font, fontSize:18, color:"rgba(255,255,255,.35)", maxWidth:420, margin:"0 auto 56px", lineHeight:1.65 }}>
            Book en gratis samtale. Ingen forpligtelse — se om vi passer til din virksomhed.
          </motion.p>
          <motion.div {...reveal} style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/kontakt"
              style={{ background:"#fff", color:C.black, padding:"20px 58px", borderRadius:100, fontFamily:font, fontSize:17, fontWeight:800, display:"inline-block", transition:"transform .22s, box-shadow .22s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05) translateY(-3px)";e.currentTarget.style.boxShadow="0 24px 48px rgba(255,255,255,.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
              Kom i gang i dag
            </Link>
            <a href="https://instagram.com/serostudio.dk" target="_blank" rel="noopener"
              style={{ background:"transparent", color:"rgba(255,255,255,.6)", padding:"20px 40px", borderRadius:100, fontFamily:font, fontSize:16, fontWeight:500, display:"inline-block", border:"1.5px solid rgba(255,255,255,.15)", transition:"transform .22s, border-color .18s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.04) translateY(-2px)";e.currentTarget.style.borderColor="rgba(255,255,255,.4)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.borderColor="rgba(255,255,255,.15)";}}>
              @serostudio.dk
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
