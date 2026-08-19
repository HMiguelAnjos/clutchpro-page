import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Platforms } from "@/components/Platforms";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Differentiators } from "@/components/Differentiators";
import { Disclaimer } from "@/components/Disclaimer";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

/**
 * Landing page — ClutchPro
 *
 * Narrativa (edite a ordem aqui se quiser reorganizar):
 *
 *  1. Navbar          → navegação fixa + acesso ao bot
 *  2. Hero            → posicionamento + mockup do Terminal
 *  3. Platforms       → o produto (ClutchPro NBA) com link de acesso
 *  4. Problem         → a dor do mercado
 *  5. Solution        → como o ClutchPro resolve
 *  6. Features        → capacidades do motor
 *  7. HowItWorks      → o pipeline em 4 passos
 *  8. DashboardPreview→ o Terminal em detalhe
 *  9. Differentiators → por que é diferente
 * 10. Disclaimer      → aviso responsável
 * 11. FinalCTA        → captura de email
 * 12. Footer          → links institucionais
 */
export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Platforms />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Differentiators />
      <Disclaimer />
      <FinalCTA />
      <Footer />
    </main>
  );
}
