import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

/**
 * Tipografia — Inter para texto, Space Grotesk para títulos display.
 * Para trocar fontes, ajuste aqui e em tailwind.config.ts > fontFamily.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

/**
 * SEO base — ajuste título, descrição e URL canônica em produção.
 */
export const metadata: Metadata = {
  title: "ClutchPro — Inteligência estatística para a NBA",
  description:
    "O ClutchPro analisa dados, projeções, ritmo de jogo e performance dos jogadores da NBA para encontrar oportunidades com base em estatística.",
  keywords: [
    "NBA",
    "estatísticas NBA",
    "análise esportiva",
    "projeções NBA",
    "ClutchPro",
    "props NBA",
    "analytics esportivo",
  ],
  openGraph: {
    title: "ClutchPro — Inteligência estatística para a NBA",
    description:
      "Projeções, leitura ao vivo e edge estatístico para decisões mais inteligentes na NBA.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-screen bg-brand-ink font-sans text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
