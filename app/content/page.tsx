"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const font = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const C = { black:"#0A0A0A", blue:"#1A6BFF", green:"#34C759", purple:"#AF52DE", off:"#FAFAFA" };

const reveal = {
  initial:{ opacity:0, y:28 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true } as const,
  transition:{ duration:.68, ease:[.16,1,.3,1] as [number,number,number,number] },
};

const examples = [
  { platform:"Instagram", type:"Produkt-opslag", text:"Vidste du at 78% af danskere tjekker anmeldelser online inden de køber? Din virksomhed er enten med eller bagud. 🎯" },
  { platform:"Facebook",  type:"Engagements-post", text:"Et spørgsmål til dig: Hvad er den ene ting din virksomhed er bedst til? Skriv det i kommentarerne 👇" },
  { platform:"Instagram", type:"Tilbud-opslag", text:"Denne uge tilbyder vi gratis konsultation til nye kunder. Tryk link i bio for at booke din plads — kun 5 tilbage." },
];

const features = [
  { title:"Tilpasset din tone", desc:"AI'en lærer din virksomheds stemme og skriver indhold der lyder som dig — ikke som en robot." },
  { title:"Planlagt og postet automatisk", desc:"Vi opsætter automatisk publicering så du aldrig behøver at tænke på hvornår og hvad der skal postes." },
  { title:"Branche-optimeret", desc:"Indholdet er skrevet til din specifikke branche — ikke generiske opslag der passer til alle og ingen." },
  { title:"Månedlig strategi", desc:"Hver måned planlægger vi indholdsstrategi så der er rød tråd og progression i din tilstedeværelse." },
];

export default function ContentPage() {
  return (
    <main style={{ paddingTop:68, fontFamily:font }}>

      {/* HERO */}
      <section style={{ padding:"120px 80px 100px", background:C.off }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
            style={{ fontSize:11, fontWeight:700, letterSpacing:".22em", color:C.purple, textTransform:"uppercase" as const, marginBottom:20 }}>
            Content automation
          </motion.p>
          <div style={{ overflow:"hidden", marginBottom:20 }}>
            <motion.h1 initial={{ y:"105%" }} animate={{ y:"0%" }} transition={{ duration:.85, ease:[.16,1,.3,1] as [number,number,number,number] }}
              style={{ fontFamily:font, fontSize:"clamp(52px,7vw,96px)", fontWeight:900, letterSpacing:"-0.045em", lineHeight:.97, color:C.black }}>
              Altid friskt indhold.<br/><span style={{ color:C.purple }}>Altid.</span>
            </motion.h1>
          </div>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:.4 }}
            style={{ fontSize:18, color:"#777", lineHeight:1.72, maxWidth:520, marginBottom:48 }}>
            AI genererer indhold til dine sociale medier tilpasset din tone-of-voice og branche. Aldrig løb tør for opslag igen.
          </motion.p>
          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.55 }}
            style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
            <Link href="/checkout?service=content" style={{ background:C.purple, color:"#fff", padding:"18px 44px", borderRadius:100, fontSize:16, fontWeight:700, transition:"transform .22s, opacity .18s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.04) translateY(-2px)";e.currentTarget.style.opacity=".9";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.opacity="1";}}>
              Kom i gang — Fra 1.000 kr/md
            </Link>
            <Link href="/kontakt" style={{ fontSize:15, color:"#888", fontWeight:500, padding:"18px 24px" }}>
              Stil et spørgsmål →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* EKSEMPLER */}
      <section style={{ padding:"120px 80px", background:"#fff" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".22em", color:C.purple, textTransform:"uppercase" as const, marginBottom:16 }}>Eksempler</motion.p>
          <motion.h2 {...reveal} style={{ fontFamily:font, fontSize:"clamp(32px,4vw,52px)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:56 }}>
            Sådan ser det ud i praksis
          </motion.h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
            {examples.map((ex, i) => (
              <motion.div key={i} initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:.65, delay:i*.08, ease:[.16,1,.3,1] as [number,number,number,number] }}
                style={{ background:"#F7F7F5", borderRadius:20, padding:"32px 28px", border:"1px solid rgba(0,0,0,.07)" }}>
                <div style={{ display:"flex", gap:8, marginBottom:20 }}>
                  <span style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", color:C.purple, background:"rgba(175,82,222,.08)", padding:"4px 12px", borderRadius:100 }}>{ex.platform}</span>
                  <span style={{ fontSize:11, fontWeight:600, color:"#aaa", background:"rgba(0,0,0,.05)", padding:"4px 12px", borderRadius:100 }}>{ex.type}</span>
                </div>
                <p style={{ fontSize:15, color:C.black, lineHeight:1.65, fontStyle:"italic" }}>"{ex.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding:"120px 80px", background:C.off }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <motion.p {...reveal} style={{ fontSize:11, fontWeight:700, letterSpacing:".22em", color:C.purple, textTransform:"uppercase" as const, marginBottom:16 }}>Hvad du får</motion.p>
            <motion.h2 {...reveal} style={{ fontFamily:font, fontSize:"clamp(32px,4vw,52px)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:20 }}>
              Content der faktisk performer.
            </motion.h2>
            <motion.p {...reveal} style={{ fontSize:17, color:"#777", lineHeight:1.7 }}>
              Ikke generiske opslag — indhold der er skræddersyet til din virksomhed og dit publikum.
            </motion.p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                transition={{ duration:.62, delay:i*.07, ease:[.16,1,.3,1] as [number,number,number,number] }}
                style={{ background:"#fff", borderRadius:16, padding:"24px 26px", border:"1px solid rgba(0,0,0,.07)", borderLeft:`3px solid ${C.purple}` }}>
                <div style={{ fontSize:15, fontWeight:700, color:C.black, marginBottom:6 }}>{f.title}</div>
                <div style={{ fontSize:14, color:"#888", lineHeight:1.6 }}>{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"160px 80px", background:C.black, textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, rgba(175,82,222,.12) 0%, transparent 65%)", filter:"blur(70px)", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <motion.h2 {...reveal} style={{ fontFamily:font, fontSize:"clamp(40px,5.5vw,72px)", fontWeight:900, letterSpacing:"-0.04em", color:"#fff", marginBottom:20 }}>
            Fra <span style={{ color:C.purple }}>1.000 kr/md</span>.
          </motion.h2>
          <motion.p {...reveal} style={{ fontSize:17, color:"rgba(255,255,255,.4)", maxWidth:400, margin:"0 auto 44px", lineHeight:1.65 }}>
            Inkl. strategi, produktion og automatisk publicering.
          </motion.p>
          <motion.div {...reveal}>
            <Link href="/checkout?service=content" style={{ background:"#fff", color:C.black, padding:"20px 56px", borderRadius:100, fontSize:17, fontWeight:800, display:"inline-block", transition:"transform .22s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05) translateY(-2px)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";}}>
              Start i dag
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
