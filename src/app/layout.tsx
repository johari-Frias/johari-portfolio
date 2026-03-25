import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

/* ─── Fonts ─── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: "Portfolio — AI Engineer & Data Analyst",
  description:
    "Data Analyst and AI Engineer specializing in serverless cloud architectures, interactive data diagnostics, and driving product monetization through analytics.",
  openGraph: {
    title: "Portfolio — AI Engineer & Data Analyst",
    description:
      "Scalable data pipelines, AI-augmented workflows, and full-stack web applications that turn complex telemetry into actionable product strategies.",
    type: "website",
  },
};

/* ─── Root Layout ─── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* Skip link — visible only on focus for keyboard users */}
        <a href="#projects" className="sr-only">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

