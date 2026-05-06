"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);

  return (
    <main style={{ paddingTop: 64 }}>
      <section style={{ padding: "100px 0 140px", background: "#F7F7F5", minHeight: "100vh" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
            <div>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", color: "#1A6BFF", textTransform: "uppercase", marginBottom: 20 }}>Kontakt</motion.p>
              <AnimatedText text="Lad os snakke." tag="h1"
                style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.04, marginBottom: 24 }} />
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ fontSize: 17, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 64, maxWidth: 400 }}>
                Udfyld formularen, så vender vi tilbage inden for 24 timer. Eller find os på Instagram.
              </motion.p>
              <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                {[
                  { label: "Email", value: "serostudio.dk@gmail.com" },
                  { label: "Instagram", value: "@serostudio.dk" },
                  { label: "Svar inden for", value: "24 timer" },
                  { label: "Lokation", value: "Danmark & internationalt" },
                ].map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: "#B0B0B0", textTransform: "uppercase", marginBottom: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#0D0D0D" }}>{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              {!sent ? (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  style={{ background: "#fff", borderRadius: 28, padding: "48px 44px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 20px 60px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[["Dit navn *", "text", true], ["Firmanavn", "text", false]].map(([ph, type, req]) => (
                      <input key={ph as string} type={type as string} placeholder={ph as string} required={req as boolean}
                        style={{ padding: "16px 20px", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 14, fontSize: 15, color: "#0D0D0D", outline: "none", fontFamily: "inherit", background: "#F7F7F5", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "#1A6BFF"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                    ))}
                  </div>
                  <input type="email" placeholder="Din email *" required
                    style={{ padding: "16px 20px", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 14, fontSize: 15, color: "#0D0D0D", outline: "none", fontFamily: "inherit", background: "#F7F7F5", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "#1A6BFF"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                  <select defaultValue="" style={{ padding: "16px 20px", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 14, fontSize: 15, color: "#6B6B6B", outline: "none", fontFamily: "inherit", background: "#F7F7F5", cursor: "pointer", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "#1A6BFF"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"}>
                    <option value="" disabled>Hvad er du interesseret i?</option>
                    {["Hjemmeside", "AI Chatbot", "Automation", "Lead System", "Content", "Custom løsning"].map(o => <option key={o}>{o}</option>)}
                  </select>
                  <textarea placeholder="Fortæl lidt om din virksomhed og hvad du mangler..." required rows={5}
                    style={{ padding: "16px 20px", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 14, fontSize: 15, color: "#0D0D0D", outline: "none", fontFamily: "inherit", background: "#F7F7F5", resize: "vertical", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "#1A6BFF"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                  <MagneticButton style={{ background: "#0D0D0D", color: "#fff", padding: "18px 36px", borderRadius: 14, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "center" }}>
                    <button type="submit" style={{ background: "none", border: "none", color: "inherit", font: "inherit", cursor: "pointer", width: "100%" }}>
                      Send besked →
                    </button>
                  </MagneticButton>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ background: "#fff", borderRadius: 28, padding: "80px 44px", textAlign: "center", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(52,199,89,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#0D0D0D", marginBottom: 12 }}>Besked sendt!</div>
                  <div style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.65 }}>Vi vender tilbage inden for 24 timer.</div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
