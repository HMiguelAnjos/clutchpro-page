"use client";

import { differentiators } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";

/**
 * Diferenciais — 6 cards explicando o que o ClutchPro considera além da média.
 * Edite em `lib/content.ts > differentiators`.
 */
export function Differentiators() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 -z-10 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,184,0,0.4), transparent 60%)" }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow={differentiators.eyebrow}
          title={differentiators.title}
          titleHighlight="inteligência"
          description={differentiators.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="glass-card flex h-full items-start gap-4 p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-brand-ember/15 to-transparent text-brand-emberBright">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
