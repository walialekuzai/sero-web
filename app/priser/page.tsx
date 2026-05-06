"use client";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";

const packages = [
  {
    name: "BASIC",
    price: "3.999",
    period: "kr · engangsbeløb",
    features: ["Op til 5 sider", "Mobilvenligt design", "Kontaktformular", "Hurtig loading", "Leveret på 5 dage"],
    featured: false,
  },
  {
    name: "PRO",
    price: "7.999",
    period: "kr · engangsbeløb",
    badge: "Mest populær",
    features: ["Op til 10 sider", "Premium animationer", "AI Chatbot inkluderet", "SEO optimering", "Leveret på 7 dage", "1 måneds gratis support"],
    featured: true,
  },
  {
    name: "PREMIUM",
    price: "14.999",
    period: "kr · engangsbeløb",
    features: ["Ubegrænsede sider", "Fuld custom design", "AI Chatbot + Automation", "Lead system", "Leveret på 14 dage", "3 måneders gratis support"],
    featured: false,
  },
];

const recurring = [
  { name: "AI Chatbot", setup: "3.000–5.000", monthly: "500–1.500", desc: "En AI der besvarer dine kunder 24/7." },
  { name: "Automation", setup: "2.000–8.000", monthly: "300–800", desc: "Automatiser bogføring, booking og opfølgning." },
  { name: "Lead System", setup: "—", monthly: "1.500–3.000", desc: "Finder og kontakter nye kunder automatisk." },
  { name: "Content", setup: "—", monthly: "1.000–2.500", desc: "AI-genererede opslag til Facebook og Instagram." },
];

export default function PriserPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section style={{ padding: "100px 0 80px", background: "#F7F7F5", textAlign: "center" }}>
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", color: "#1A6BFF", textTransform: "uppercase", marginBottom: 20 }}>Priser</motion.p>
          <AnimatedText text="Gennemsigtige priser." tag="h1"
            style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.04, marginBottom: 8 }} />
          <AnimatedText text="Ingen overraskelser." tag="h1" delay={0.1}
            style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.04, color: "#1A6BFF", marginBottom: 24 }} />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 18, color: "#6B6B6B", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
            Betal sikkert online med kort. Du modtager kvittering med det samme.
          </motion.p>
        </div>
      </section>

      {/* Hjemmeside pakker */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", color: "#6B6B6B", textTransform: "uppercase", marginBottom: 16 }}>Hjemmesider</motion.p>
          <AnimatedText text="Vælg din pakke." tag="h2"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 60 }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                style={{ position: "relative", background: pkg.featured ? "#0D0D0D" : "#F7F7F5", borderRadius: 24, padding: "44px 36px", border: pkg.featured ? "none" : "1px solid rgba(0,0,0,0.06)" }}>
                {pkg.badge && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#1A6BFF", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "5px 18px", borderRadius: 100, whiteSpace: "nowrap" }}>{pkg.badge}</div>
                )}
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: pkg.featured ? "rgba(255,255,255,0.4)" : "#B0B0B0", marginBottom: 20 }}>{pkg.name}</div>
                <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: "-0.03em", color: pkg.featured ? "#fff" : "#0D0D0D", lineHeight: 1, marginBottom: 4 }}>{pkg.price}</div>
                <div style={{ fontSize: 14, color: pkg.featured ? "rgba(255,255,255,0.3)" : "#B0B0B0", marginBottom: 36 }}>{pkg.period}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
                  {pkg.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: pkg.featured ? "rgba(255,255,255,0.7)" : "#6B6B6B" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="9" fill={pkg.featured ? "rgba(255,255,255,0.1)" : "rgba(26,107,255,0.1)"}/>
                        <path d="M5.5 9L7.5 11L12.5 6.5" stroke={pkg.featured ? "#fff" : "#1A6BFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <MagneticButton href="/kontakt" style={{ display: "block", textAlign: "center", padding: "16px", borderRadius: 14, fontSize: 15, fontWeight: 700, background: pkg.featured ? "#fff" : "#0D0D0D", color: pkg.featured ? "#0D0D0D" : "#fff" }}>
                  Køb nu →
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Månedlige services */}
      <section style={{ padding: "100px 0", background: "#F7F7F5" }}>
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", color: "#6B6B6B", textTransform: "uppercase", marginBottom: 16 }}>Månedlige services</motion.p>
          <AnimatedText text="Passiv indkomst for dig. Vækst for dem." tag="h2"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 16 }} />
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ fontSize: 17, color: "#6B6B6B", maxWidth: 480, lineHeight: 1.65, marginBottom: 56 }}>
            Setup-betaling én gang. Derefter trækkes det månedlige beløb automatisk via Stripe.
          </motion.p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {recurring.map((r, i) => (
              <motion.div key={r.name}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 4 }}
                style={{ background: "#fff", borderRadius: 18, padding: "28px 32px", display: "grid", gridTemplateColumns: "1fr 140px 140px 160px", alignItems: "center", gap: 20, border: "1px solid rgba(0,0,0,0.06)" }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#0D0D0D", marginBottom: 4 }}>{r.name}</div>
                  <div style={{ fontSize: 14, color: "#B0B0B0" }}>{r.desc}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#B0B0B0", textTransform: "uppercase", marginBottom: 4 }}>Setup</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#0D0D0D" }}>{r.setup !== "—" ? `${r.setup} kr` : "—"}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#B0B0B0", textTransform: "uppercase", marginBottom: 4 }}>Månedligt</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1A6BFF" }}>{r.monthly} kr</div>
                </div>
                <MagneticButton href="/kontakt" style={{ background: "#0D0D0D", color: "#fff", padding: "12px 24px", borderRadius: 12, fontSize: 14, fontWeight: 600, textAlign: "center" }}>
                  Kom i gang →
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 48px", background: "#0D0D0D", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,107,255,0.1) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <AnimatedText text="Usikker på hvad du har brug for?" tag="h2"
            style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.04, color: "#fff", maxWidth: 600, margin: "0 auto 20px" }} />
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            style={{ fontSize: 17, color: "rgba(255,255,255,0.35)", maxWidth: 400, margin: "0 auto 48px", lineHeight: 1.65 }}>
            Book en gratis samtale. Vi finder ud af det sammen på 20 minutter.
          </motion.p>
          <MagneticButton href="/kontakt" style={{ background: "#fff", color: "#0D0D0D", padding: "18px 48px", borderRadius: 100, fontSize: 16, fontWeight: 800 }}>
            Book gratis samtale
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}
