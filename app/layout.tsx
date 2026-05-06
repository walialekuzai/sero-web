import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "SERO Studio — Vi bygger det du mangler", template: "%s | SERO Studio" },
  description: "Hjemmesider, AI chatbots og automation der sparer din virksomhed tid og giver dig flere kunder.",
  metadataBase: new URL("https://serostudio.dk"),
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "SERO Studio",
    title: "SERO Studio — Vi bygger det du mangler",
    description: "Hjemmesider, AI chatbots og automation der sparer din virksomhed tid og giver dig flere kunder.",
  },
  twitter: { card: "summary_large_image", title: "SERO Studio", description: "Hjemmesider, AI chatbots og automation der sparer din virksomhed tid og giver dig flere kunder." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={inter.variable}>
      <body>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
