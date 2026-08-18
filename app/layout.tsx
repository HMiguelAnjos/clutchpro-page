import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

/**
 * Tipografia
 * ----------
 *  - Inter  → texto corrido (leitura longa, ótima legibilidade em UI densa).
 *  - Sora   → títulos, números e o wordmark da marca. Geométrica, com peso
 *             extrabold marcante — dá o tom "premium tech" da ClutchPro.
 *
 * Para trocar fontes, ajuste aqui e em tailwind.config.ts > fontFamily.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clutchprosports.com";

/**
 * SEO base — a marca cobre DOIS produtos (NBA e Futebol); o título e a
 * descrição refletem isso. Ajuste a URL canônica via NEXT_PUBLIC_SITE_URL.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ClutchPro — Inteligência estatística para NBA e Futebol",
    template: "%s · ClutchPro",
  },
  description:
    "Duas plataformas, um mesmo motor estatístico. O ClutchPro cruza dados históricos, ritmo de jogo, forma e contexto para transformar estatística em decisão — na NBA e no futebol.",
  applicationName: "ClutchPro",
  keywords: [
    "ClutchPro",
    "análise estatística esportiva",
    "NBA analytics",
    "estatísticas de futebol",
    "projeções NBA",
    "props NBA",
    "modelo estatístico futebol",
    "inteligência esportiva",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ClutchPro",
    locale: "pt_BR",
    title: "ClutchPro — Análise. Edge. Decisão.",
    description:
      "Projeções, leitura ao vivo e edge estatístico para NBA e futebol. Um motor, duas plataformas.",
    images: [{ url: "/logo-mark.png", width: 512, height: 512, alt: "ClutchPro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClutchPro — Análise. Edge. Decisão.",
    description:
      "Inteligência estatística para NBA e futebol. Um motor, duas plataformas.",
    images: ["/logo-mark.png"],
  },
  robots: { index: true, follow: true },
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
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-brand-ink font-sans text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
