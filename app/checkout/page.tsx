"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const serviceLabels: Record<string, string> = {
  hjemmesider: "Hjemmeside",
  "ai-chatbot": "AI Chatbot",
  automation: "Automation",
  "lead-systemer": "Lead System",
};

const tierLabels: Record<string, string> = {
  basic: "Basic", starter: "Starter",
  pro: "Pro",
  premium: "Premium", enterprise: "Enterprise",
};

const tierPrices: Record<string, Record<string, string>> = {
  hjemmesider:    { basic:"3.999 kr", pro:"7.999 kr", premium:"14.999 kr" },
  "ai-chatbot":   { starter:"500 kr/md", pro:"1.500 kr/md", enterprise:"3.500 kr/md" },
  automation:     { starter:"300 kr/md", pro:"900 kr/md", enterprise:"2.500 kr/md" },
  "lead-systemer":{ starter:"1.500 kr/md", pro:"3.500 kr/md", enterprise:"7.500 kr/md" },
};

type Step = { title: string; questions: Question[] };
type Question = {
  id: string;
  label: string;
  type: "text"|"textarea"|"select"|"radio";
  options?: string[];
  placeholder?: string;
  required?: boolean;
};

const universalSteps: Step[] = [
  {
    title: "Om dig",
    questions: [
      { id:"name",    label:"Dit fulde navn",        type:"text",     placeholder:"Morten Hansen",     required:true },
      { id:"email",   label:"Email",                 type:"text",     placeholder:"din@email.dk",      required:true },
      { id:"phone",   label:"Telefon",               type:"text",     placeholder:"+45 12 34 56 78",   required:true },
      { id:"company", label:"Virksomhedsnavn",       type:"text",     placeholder:"Din Virksomhed ApS",required:true },
      { id:"cvr",     label:"CVR-nummer (valgfrit)", type:"text",     placeholder:"12345678" },
    ],
  },
  {
    title: "Din virksomhed",
    questions: [
      { id:"industry",    label:"Hvilken branche er du i?", type:"select",
        options:["Detailhandel","Restaurant/Café","Bygge & anlæg","Sundhed & velvære","Ejendomsmægler","IT & Tech","Konsulent","Andet"] },
      { id:"employees",   label:"Antal ansatte", type:"radio",
        options:["1 (solo)","2-5","6-20","21-50","50+"] },
      { id:"website_now", label:"Har du allerede en hjemmeside?", type:"radio",
        options:["Nej, ingen hjemmeside","Ja, men den er forældet","Ja, men den virker ikke godt","Ja, jeg er tilfreds"] },
      { id:"goal",        label:"Hvad er dit primære mål?", type:"textarea",
        placeholder:"F.eks: Vil have flere kunder, spare tid på administration, have en professionel tilstedeværelse online...",
        required:true },
    ],
  },
  {
    title: "Dine ønsker",
    questions: [
      { id:"budget_extra",   label:"Er du åben for tillægsydelser til den valgte pakke?", type:"radio",
        options:["Nej, kun den valgte pakke","Ja, hvis det giver mening","Ja, kontakt mig med forslag"] },
      { id:"deadline",       label:"Hvornår skal det helst være klar?", type:"radio",
        options:["Hurtigst muligt (48t)","Inden for 1 uge","Inden for 1 måned","Ingen hastende deadline"] },
      { id:"competitors",    label:"Nævn 1-2 konkurrenter eller hjemmesider du synes ser godt ud", type:"textarea",
        placeholder:"F.eks. 'Kan godt lide stilen på company.dk og simpliciteten fra brand.dk'" },
      { id:"anything_else",  label:"Er der noget andet vi skal vide?", type:"textarea",
        placeholder:"Specielle ønsker, spørgsmål, budget-begrænsninger osv..." },
    ],
  },
];

function inputStyle(focused: boolean): React.CSSProperties {
  return {
    width:"100%", padding:"14px 18px", borderRadius:12,
    border: focused ? "1.5px solid #1A6BFF" : "1.5px solid rgba(0,0,0,.1)",
    fontSize:15, fontFamily:"inherit", outline:"none", background:"#fff",
    transition:"border-color .2s", color:"#0A0A0A",
    boxShadow: focused ? "0 0 0 3px rgba(26,107,255,.08)" : "none",
  };
}

function CheckoutForm() {
  const params = useSearchParams();
  const service = params.get("service") || "hjemmesider";
  const tier    = params.get("tier")    || "pro";

  const [step, setStep]         = useState(0);
  const [values, setValues]     = useState<Record<string,string>>({});
  const [focused, setFocused]   = useState<string|null>(null);
  const [loading, setLoading]   = useState(false);
  const [errors, setErrors]     = useState<Record<string,string>>({});

  const totalSteps = universalSteps.length;
  const current    = universalSteps[step];
  const price      = tierPrices[service]?.[tier] ?? "Pris efter aftale";

  function validate() {
    const e: Record<string,string> = {};
    current.questions.forEach(q => {
      if (q.required && !values[q.id]?.trim()) e[q.id] = "Dette felt er påkrævet";
      if (q.id === "email" && values[q.id] && !values[q.id].includes("@")) e[q.id] = "Ugyldig email";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (!validate()) return;
    if (step < totalSteps - 1) { setStep(s => s + 1); window.scrollTo({top:0,behavior:"smooth"}); }
    else submit();
  }

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ service, tier, ...values }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Noget gik galt. Prøv igen eller skriv til os på serostudio.dk@gmail.com");
    } catch {
      alert("Kunne ikke forbinde til betalingsserveren. Prøv igen.");
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight:"100vh", background:"#FAFAFA", paddingTop:100 }}>
      <div style={{ maxWidth:600, margin:"0 auto", padding:"40px 24px 80px" }}>

        {/* Order summary */}
        <motion.div
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          style={{ background:"#0A0A0A", borderRadius:20, padding:"20px 24px", marginBottom:32, display:"flex", justifyContent:"space-between", alignItems:"center" }}
        >
          <div>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:".15em", color:"rgba(255,255,255,.3)", textTransform:"uppercase", marginBottom:4 }}>Din ordre</div>
            <div style={{ fontSize:18, fontWeight:800, color:"#fff" }}>
              {serviceLabels[service]} — {tierLabels[tier]}
            </div>
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:22, fontWeight:900, color:"#1A6BFF" }}>{price}</div>
          </div>
        </motion.div>

        {/* Progress */}
        <div style={{ display:"flex", gap:8, marginBottom:40 }}>
          {universalSteps.map((s, i) => (
            <div key={i} style={{ flex:1 }}>
              <div style={{ height:3, borderRadius:2, background: i <= step ? "#1A6BFF" : "rgba(0,0,0,.1)", transition:"background .3s" }} />
              <div style={{ fontSize:11, color: i === step ? "#0A0A0A" : "#bbb", fontWeight: i === step ? 700 : 400, marginTop:6 }}>{s.title}</div>
            </div>
          ))}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div key={step}
            initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-24 }}
            transition={{ duration:.3, ease:[.16,1,.3,1] }}
          >
            <h2 style={{ fontSize:28, fontWeight:900, letterSpacing:"-0.03em", marginBottom:8 }}>{current.title}</h2>
            <p style={{ fontSize:14, color:"#999", marginBottom:32 }}>Trin {step+1} af {totalSteps}</p>

            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
              {current.questions.map(q => (
                <div key={q.id}>
                  <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#555", marginBottom:8 }}>
                    {q.label}{q.required && <span style={{ color:"#1A6BFF" }}> *</span>}
                  </label>

                  {q.type === "text" && (
                    <input
                      type="text"
                      value={values[q.id] || ""}
                      placeholder={q.placeholder}
                      onChange={e => setValues(v => ({...v,[q.id]:e.target.value}))}
                      onFocus={() => setFocused(q.id)}
                      onBlur={() => setFocused(null)}
                      style={inputStyle(focused===q.id)}
                    />
                  )}

                  {q.type === "textarea" && (
                    <textarea
                      rows={4}
                      value={values[q.id] || ""}
                      placeholder={q.placeholder}
                      onChange={e => setValues(v => ({...v,[q.id]:e.target.value}))}
                      onFocus={() => setFocused(q.id)}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle(focused===q.id), resize:"vertical" as const, minHeight:100 }}
                    />
                  )}

                  {q.type === "select" && (
                    <select
                      value={values[q.id] || ""}
                      onChange={e => setValues(v => ({...v,[q.id]:e.target.value}))}
                      onFocus={() => setFocused(q.id)}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle(focused===q.id), cursor:"pointer" }}
                    >
                      <option value="">Vælg...</option>
                      {q.options?.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )}

                  {q.type === "radio" && (
                    <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                      {q.options?.map(o => (
                        <label key={o} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px", borderRadius:12, border:`1.5px solid ${values[q.id]===o ? "#1A6BFF" : "rgba(0,0,0,.1)"}`, background: values[q.id]===o ? "rgba(26,107,255,.04)" : "#fff", cursor:"pointer", transition:"all .15s" }}>
                          <div style={{ width:18, height:18, borderRadius:"50%", border:`2px solid ${values[q.id]===o ? "#1A6BFF" : "#ddd"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                            {values[q.id]===o && <div style={{ width:8, height:8, borderRadius:"50%", background:"#1A6BFF" }} />}
                          </div>
                          <input type="radio" name={q.id} value={o} checked={values[q.id]===o} onChange={() => setValues(v => ({...v,[q.id]:o}))} style={{ display:"none" }} />
                          <span style={{ fontSize:14, color: values[q.id]===o ? "#0A0A0A" : "#666" }}>{o}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {errors[q.id] && <p style={{ fontSize:12, color:"#FF3B30", marginTop:6 }}>{errors[q.id]}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div style={{ display:"flex", gap:12, marginTop:40, justifyContent:"space-between" }}>
          {step > 0 ? (
            <button onClick={() => setStep(s => s-1)}
              style={{ background:"transparent", border:"1.5px solid rgba(0,0,0,.12)", padding:"14px 28px", borderRadius:100, fontSize:14, fontWeight:600, color:"#777", cursor:"pointer" }}>
              ← Tilbage
            </button>
          ) : <div />}

          <button onClick={next} disabled={loading}
            style={{ background: loading ? "#aaa" : "#1A6BFF", color:"#fff", padding:"14px 40px", borderRadius:100, fontSize:15, fontWeight:700, cursor: loading ? "not-allowed" : "pointer", border:"none", minWidth:160 }}>
            {loading ? "Sender..." : step === totalSteps-1 ? "Gå til betaling →" : "Næste →"}
          </button>
        </div>

        <p style={{ textAlign:"center", fontSize:12, color:"#ccc", marginTop:24 }}>
          🔒 Sikker betaling via Stripe · Ingen forpligtelse før betaling
        </p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center" }}>Indlæser...</div>}>
      <CheckoutForm />
    </Suspense>
  );
}
