"use client";

import { features, type Feature } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Grid de Features principais — 6 cards com ícone, título e descrição.
 * Edite cards em `lib/content.ts > features`.
 */
const accentMap: Record<Feature["accent"], { icon: string; ring: string; glow: string }> = {
  ember: {
    icon: "text-brand-emberBright",
    ring: "from-brand-ember/35 to-brand-ember/0",
    glow: "shadow-glowEmber",
  },
  violet: {
    // "violet" virou nosso laranja secundário (amber) para manter a identidade da logo
    icon: "text-brand-amberLight",
    ring: "from-brand-amber/35 to-brand-amber/0",
    glow: "shadow-glowAmber",
  },
  blue: {
    icon: "text-brand-blueBright",
    ring: "from-brand-blue/30 to-brand-blue/0",
    glow: "shadow-glowBlue",
  },
  green: {
    icon: "text-brand-green",
    ring: "from-brand-green/30 to-brand-green/0",
    glow: "shadow-glowEmber",
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 -z-10 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,122,26,0.4), transparent 60%)" }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="Features principais"
          title="Tudo o que você precisa para ler o jogo"
          titleHighlight="ler o jogo"
          description="Cada feature foi pensada para reduzir ruído, ganhar velocidade e devolver clareza na hora certa."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            const accent = accentMap[f.accent];
            return (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]">
                  {/* Glow do hover */}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                      accent.ring
                    )}
                  />
                  <div
                    className={cn(
                      "mb-5 inline-grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04]",
                      accent.icon
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
