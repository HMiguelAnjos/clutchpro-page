import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentiators } from "@/components/Differentiators";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Disclaimer } from "@/components/Disclaimer";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

/**
 * Landing page — ClutchPro
 * Ordem das seções (edite a ordem aqui se desejar reorganizar):
 *
 * 1. Navbar          → navegação fixa
 * 2. Hero            → impacto inicial + mockup
 * 3. Problem         → dores do mercado
 * 4. Solution        → como o ClutchPro resolve
 * 5. Features        → 6 cards de features principais
 * 6. HowItWorks      → 3 passos do funcionamento
 * 7. Differentiators → o que torna o ClutchPro diferente
 * 8. DashboardPreview→ amostra visual do produto
 * 9. Disclaimer      → aviso responsável
 * 10. FinalCTA       → captura de email
 * 11. Footer         → links institucionais
 */
export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Differentiators />
      <DashboardPreview />
      <Disclaimer />
      <FinalCTA />
      <Footer />
    </main>
  );
}
