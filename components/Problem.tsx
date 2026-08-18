"use client";

import { problem } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";

/**
 * Seção "Problema" — pinta a dor sem dramatizar.
 * Para editar, vá em `lib/content.ts > problem`.
 */
export function Problem() {
  return (
    <section id="problema" className="relative isolate py-20 sm:py-28">
      {/* Glow lateral discreto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,107,44,0.35), transparent 60%)" }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.title}
          titleHighlight="achismo"
          description={problem.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problem.pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="glass-card group h-full p-5 transition-colors hover:border-white/[0.12]">
                  <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-ember">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
