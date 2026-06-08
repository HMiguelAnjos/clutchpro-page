"use client";

import { ArrowRight } from "lucide-react";
import { howItWorks } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";

/**
 * "Como funciona" — 3 passos com conector visual.
 * Edite em `lib/content.ts > howItWorks`.
 */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          titleHighlight="insight acionável"
        />

        <div className="relative mt-14 grid gap-4 md:grid-cols-3">
          {/* Linha conectora horizontal (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[8%] right-[8%] top-12 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,122,26,0.45), rgba(255,184,0,0.45), rgba(78,160,255,0.35), transparent)",
            }}
          />

          {howItWorks.steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="glass-card relative h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-ember/20 to-brand-amber/10 text-brand-emberBright">
                      <Icon size={22} />
                    </div>
                    <span className="font-display text-3xl font-semibold text-white/15">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>

                  {/* Seta entre passos (mobile) */}
                  {i < howItWorks.steps.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-brand-deep text-white/50 md:hidden">
                      <ArrowRight size={12} className="rotate-90" />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
