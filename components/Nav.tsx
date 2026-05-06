"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { label: "Hjemmesider", href: "/hjemmesider", desc: "Fra 3.999 kr" },
  { label: "AI Chatbots", href: "/ai-chatbot", desc: "Fra 500 kr/md" },
  { label: "Automation", href: "/automation", desc: "Fra 300 kr/md" },
  { label: "Lead Systemer", href: "/lead-systemer", desc: "Fra 1.500 kr/md" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const bg = scrolled || menuOpen ? "rgba(250,250,250,0.92)" : "transparent";
  const border = scrolled || menuOpen ? "rgba(0,0,0,.06)" : "transparent";

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .7, ease: [.16,1,.3,1] }}
      style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, height:68,
        padding:"0 56px", display:"flex", alignItems:"center", justifyContent:"space-between",
        background: bg, backdropFilter: scrolled||menuOpen ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled||menuOpen ? "blur(24px)" : "none",
        borderBottom: `1px solid ${border}`, transition:"background .3s, border-color .3s" }}
    >
      <Link href="/" style={{ display:"flex", alignItems:"center", gap:10 }}>
        <svg width="28" height="28" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5.2" stroke="#0A0A0A" strokeWidth="1.4"/>
          <circle cx="7" cy="7" r="1.5" fill="#0A0A0A"/>
        </svg>
        <span style={{ fontSize:17, fontWeight:800, letterSpacing:".14em", color:"#0A0A0A", lineHeight:1 }}>SERO</span>
      </Link>

      <div style={{ display:"flex", alignItems:"center", gap:40 }}>
        <div style={{ position:"relative" }}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button style={{ background:"none", border:"none", fontSize:14, fontWeight:500, color:"#777", padding:"8px 0", display:"flex", alignItems:"center", gap:6 }}
            onMouseEnter={e => (e.currentTarget.style.color="#0A0A0A")}
            onMouseLeave={e => (e.currentTarget.style.color="#777")}
          >
            Services
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:8 }}
                transition={{ duration:.2 }}
                style={{ position:"absolute", top:"calc(100% + 8px)", left:-16, background:"#fff",
                  borderRadius:16, padding:8, boxShadow:"0 16px 48px rgba(0,0,0,.1)", border:"1px solid rgba(0,0,0,.07)", minWidth:200 }}
              >
                {services.map(s => (
                  <Link key={s.href} href={s.href} style={{ display:"block", padding:"10px 16px", borderRadius:10, transition:"background .15s" }}
                    onMouseEnter={e => (e.currentTarget.style.background="#F5F5F3")}
                    onMouseLeave={e => (e.currentTarget.style.background="transparent")}
                  >
                    <div style={{ fontSize:14, fontWeight:600, color:"#0A0A0A" }}>{s.label}</div>
                    <div style={{ fontSize:12, color:"#aaa", marginTop:2 }}>{s.desc}</div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {[["Priser", "/priser"], ["Kontakt", "/kontakt"]].map(([label, href]) => (
          <Link key={label} href={href} style={{ fontSize:14, fontWeight:500, color:"#777", transition:"color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color="#0A0A0A")}
            onMouseLeave={e => (e.currentTarget.style.color="#777")}
          >{label}</Link>
        ))}
        <Link href="/kontakt" style={{ background:"#0A0A0A", color:"#fff", padding:"10px 24px",
          borderRadius:100, fontSize:14, fontWeight:700, transition:"transform .15s, background .2s" }}
          onMouseEnter={e => { e.currentTarget.style.transform="scale(1.04)"; e.currentTarget.style.background="#333"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.background="#0A0A0A"; }}
        >Kom i gang</Link>
      </div>
    </motion.nav>
  );
}
