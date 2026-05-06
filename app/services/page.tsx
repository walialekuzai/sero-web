"use client";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";

const services = [
  {
    num: "01", name: "Hjemmesider", color: "#EEF3FF", accent: "#1A6BFF",
    headline: "En hjemmeside der sælger for dig.",
    desc: "Vi bygger professionelle hjemmesider med animationer, hurtig loading og design der konverterer besøgende til betalende kunder. Ikke bare et digitalt visitkort — et salgsværktøj.",
    features: ["Mobilvenligt design", "Smooth animationer", "SEO optimering", "Kontaktformular", "Hurtigt leveringstid"],
    price: "Fra 3.999 kr",
  },
  {
    num: "02", name: "AI Chatbots", color: "#F0FFF4", accent: "#34C759",
    headline: "Aldrig gå glip af en kunde igen.",
    desc: "En AI der kender din virksomhed, besvarer spørgsmål, tager imod bookings og hjælper kunder — 24 timer i døgnet. Mens du sover, arbejder den.",
    features: ["Besvarer på sekunder", "Kender dit produktkatalog", "Tager imod bookings", "Fungerer på alle sider", "Ingen ekstra personale"],
    price: "Fra 500 kr/md",
  },
  {
    num: "03", name: "Automation", color: "#FFF7EE", accent: "#FF9500",
    headline: "Lad teknologien tage det kedelige.",
    desc: "Vi automatiserer de opgaver der stjæler din tid. Fakturaer, booking-bekræftelser, opfølgnings-emails, sociale medier — alt kører automatisk.",
    features: ["Automatisk fakturering", "Booking-flows", "Email opfølgning", "Social media posting", "Dataindsamling"],
    price: "Fra 300 kr/md",
  },
  {
    num: "04", name: "Lead Systemer", color: "#FFF0F0", accent: "#FF3B30",
    headline: "Nye kunder. Uden du løfter en finger.",
    desc: "Et system der automatisk finder virksomheder i din branche, kvalificerer dem og kontakter dem på dine vegne. Skalerbar kundeakvision.",
    features: ["Finder relevante leads", "Automatisk outreach", "Kvalificering og filtrering", "Daglige rapporter", "Skalerbar"],
    price: "Fra 1.500 kr/md",
  },
  {
    num: "05", name: "Content", color: "#F5F0FF", accent: "#AF52DE",
    headline: "Altid friskt indhold. Altid.",
    desc: "AI genererer indhold til dine sociale medier tilpasset din tone-of-voice og branche. Aldrig løb tør for opslag igen.",
    features: ["Facebook og Instagram opslag", "Tilpasset din branche", "Din tone-of-voice", "Planlagt og postet automatisk", "Månedlig indholdsstrategi"],
    price: "Fra 1.000 kr/md",
  },
  {
    num: "06", name: "Custom", color: "#F0F9FF", accent: "#1A6BFF",
    headline: "Har du en idé? Vi bygger den.",
    desc: "Intet er for komplekst eller for simpelt. Hvis du har en idé til et system, en app eller et produkt — lad os snakke om det.",
    features: ["Fuld brugerdefineret løsning", "Teknisk rådgivning", "Prototype inden for dage", "Skalérbar arkitektur", "Løbende support"],
    price: "Pris efter aftale",
  },
];

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section style={{ padding: "100px 0 60px", background: "#F7F7F5", textAlign: "center" }}>
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", color: "#1A6BFF", textTransform: "uppercase", marginBottom: 20 }}>Services</motion.p>
          <AnimatedText text="Alt hvad du behøver." tag="h1"
            style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.04, marginBottom: 8 }} />
          <AnimatedText text="Ét sted." tag="h1" delay={0.1}
            style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.04, color: "#1A6BFF", marginBottom: 24 }} />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 18, color: "#6B6B6B", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
            Fra hjemmesider til fuldt automatiserede systemer — vi bygger det hele og sørger for at det virker.
          </motion.p>
        </div>
      </section>

      {services.map((svc, i) => (
        <section key={svc.num} style={{ padding: "100px 0", background: i % 2 === 0 ? "#fff" : "#F7F7F5" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: 80, alignItems: "center", direction: i % 2 !== 0 ? "rtl" : "ltr" }}>
              <div style={{ direction: "ltr" }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", color: "#B0B0B0", display: "block", marginBottom: 16 }}>{svc.num}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", color: svc.accent, textTransform: "uppercase", display: "block", marginBottom: 20 }}>{svc.name}</span>
                </motion.div>
                <AnimatedText text={svc.headline} tag="h2"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }} />
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  style={{ fontSize: 17, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 32 }}>{svc.desc}</motion.p>
                <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
                  {svc.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "#6B6B6B" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="9" fill="rgba(26,107,255,0.08)"/>
                        <path d="M5.5 9L7.5 11L12.5 6.5" stroke="#1A6BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </motion.ul>
                <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <MagneticButton href="/kontakt" style={{ background: "#0D0D0D", color: "#fff", padding: "14px 32px", borderRadius: 100, fontSize: 15, fontWeight: 700 }}>
                    Kom i gang →
                  </MagneticButton>
                  <span style={{ fontSize: 14, fontWeight: 700, color: svc.accent }}>{svc.price}</span>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ direction: "ltr", background: svc.color, borderRadius: 28, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,0.04)" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 72, fontWeight: 900, color: svc.accent, opacity: 0.15, letterSpacing: "-0.04em" }}>{svc.num}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#0D0D0D", marginTop: -8 }}>{svc.name}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: "120px 48px", background: "#0D0D0D", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,107,255,0.1) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <AnimatedText text="Klar til at komme i gang?" tag="h2"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.04, color: "#fff", maxWidth: 600, margin: "0 auto 20px" }} />
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            style={{ fontSize: 17, color: "rgba(255,255,255,0.35)", maxWidth: 400, margin: "0 auto 48px", lineHeight: 1.65 }}>
            Book en gratis samtale eller se vores priser.
          </motion.p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <MagneticButton href="/kontakt" style={{ background: "#fff", color: "#0D0D0D", padding: "18px 44px", borderRadius: 100, fontSize: 16, fontWeight: 800 }}>
              Book gratis samtale
            </MagneticButton>
            <MagneticButton href="/priser" style={{ background: "transparent", color: "rgba(255,255,255,0.6)", padding: "18px 44px", borderRadius: 100, fontSize: 16, fontWeight: 600, border: "1px solid rgba(255,255,255,0.15)" }}>
              Se priser →
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
