"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SuccesPage() {
  return (
    <div style={{ minHeight:"100vh", background:"#FAFAFA", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 24px" }}>
      <div style={{ textAlign:"center", maxWidth:480 }}>
        <motion.div
          initial={{ scale:0 }} animate={{ scale:1 }}
          transition={{ type:"spring", stiffness:200, damping:16, delay:.1 }}
          style={{ width:80, height:80, borderRadius:"50%", background:"rgba(52,199,89,.12)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 32px", fontSize:36 }}
        >
          ✅
        </motion.div>
        <motion.h1
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.3 }}
          style={{ fontSize:40, fontWeight:900, letterSpacing:"-0.04em", marginBottom:16 }}
        >
          Betaling modtaget!
        </motion.h1>
        <motion.p
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.45 }}
          style={{ fontSize:17, color:"#777", lineHeight:1.7, marginBottom:40 }}
        >
          Tak for din ordre. Vi kontakter dig inden for 2 timer for at komme i gang. Tjek din email for bekræftelse.
        </motion.p>
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.6 }}
          style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}
        >
          <Link href="/" style={{ background:"#0A0A0A", color:"#fff", padding:"14px 32px", borderRadius:100, fontSize:14, fontWeight:700 }}>
            Til forsiden
          </Link>
          <Link href="/kontakt" style={{ background:"transparent", color:"#1A6BFF", padding:"14px 32px", borderRadius:100, fontSize:14, fontWeight:600, border:"1.5px solid rgba(26,107,255,.3)" }}>
            Kontakt os
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
