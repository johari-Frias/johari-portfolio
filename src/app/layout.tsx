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
  title: "Portfolio — AI Systems Architect & Data Engineer",
  description:
    "Top 3% AWS Global Finalist specializing in serverless GenAI applications, event-driven Agentic AI systems, and scalable Python ETL pipelines.",
  openGraph: {
    title: "Portfolio — AI Systems Architect & Data Engineer",
    description:
      "I build serverless GenAI applications, event-driven Agentic AI systems, and Python ETL pipelines that scale from the edge to the database.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

