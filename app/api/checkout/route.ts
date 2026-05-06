import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion:"2026-04-22.dahlia" });

const serviceNames: Record<string,string> = {
  hjemmesider:    "Hjemmeside",
  "ai-chatbot":   "AI Chatbot",
  automation:     "Automation",
  "lead-systemer":"Lead System",
};

const tierNames: Record<string,string> = {
  basic:"Basic", starter:"Starter", pro:"Pro", premium:"Premium", enterprise:"Enterprise",
};

// Priser i ører (DKK * 100)
const prices: Record<string,Record<string,number>> = {
  hjemmesider:    { basic:399900, pro:799900, premium:1499900 },
  "ai-chatbot":   { starter:50000, pro:150000, enterprise:350000 },
  automation:     { starter:30000, pro:90000,  enterprise:250000 },
  "lead-systemer":{ starter:150000, pro:350000, enterprise:750000 },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service, tier, name, email, company, ...rest } = body;

    const amount = prices[service]?.[tier];
    if (!amount) return NextResponse.json({ error:"Ugyldig service/tier" }, { status:400 });

    // Byg metadata fra spørgeskema
    const metadata: Record<string,string> = { service, tier, company: company||"" };
    Object.entries(rest).forEach(([k,v]) => { if (typeof v === "string") metadata[k] = v.slice(0,500); });

    const session = await stripe.checkout.sessions.create({
      mode: service === "hjemmesider" ? "payment" : "subscription",
      payment_method_types:["card"],
      customer_email: email,
      line_items:[{
        quantity:1,
        price_data:{
          currency:"dkk",
          unit_amount: amount,
          ...(service !== "hjemmesider" && { recurring:{ interval:"month" } }),
          product_data:{
            name:`${serviceNames[service]} — ${tierNames[tier]}`,
            description:`SERO Studio — ${company || name}`,
          },
        },
      }],
      metadata,
      success_url:`${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/checkout/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL  || "http://localhost:3000"}/checkout?service=${service}&tier=${tier}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Ukendt fejl";
    return NextResponse.json({ error: message }, { status:500 });
  }
}
