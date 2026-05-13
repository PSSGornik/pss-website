import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";

export const metadata: Metadata = {
  title: "Prometheus Strategic Solutions | AI Systems. Built to Last.",
  description:
    "AI Automation, Agentic Systems & Intelligent Infrastructure for organizations that can't afford to get it wrong. Phoenix, AZ.",
  keywords: ["AI automation", "agentic systems", "AI agents", "infrastructure", "federal", "Phoenix AZ"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Prometheus Strategic Solutions",
    description: "AI Systems. Built to Last.",
    url: "https://prometheusss.com",
    siteName: "Prometheus Strategic Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased bg-pss-black text-pss-white min-h-screen">
        <ParticleCanvas />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
