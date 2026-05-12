import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prometheus Strategic Solutions | AI Automation for the Trades",
  description:
    "PSS builds custom AI automation infrastructure for restoration contractors and home service operators — so your business runs itself.",
  keywords: ["AI automation", "restoration contractors", "home services", "workflow automation", "Phoenix AZ"],
  openGraph: {
    title: "Prometheus Strategic Solutions",
    description: "The Operating System for Your Business",
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
      <body className="font-body antialiased bg-bg text-text-primary min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
