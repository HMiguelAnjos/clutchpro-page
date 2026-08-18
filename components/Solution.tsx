"use client";

import { Check, Sparkles } from "lucide-react";
import { solution } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";

/**
 * Seção "Solução" — em duas colunas: copy + cartão visual.
 * Edite em `lib/content.ts > solution`.
 */
export function Solution() {
  return (
    <section id="solucao" className="relative py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <Reveal>
          <span className="eyebrow">{solution.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Uma única plataforma para{" "}
            <span className="text-gradient">ler o jogo</span> com inteligência
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            {solution.description}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {solution.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-brand-ember/30 to-brand-amber/20 text-brand-amberLight">
                  <Check size={14} />
                </span>
                <span className="text-sm text-white/80">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Card visual */}
        <Reveal delay={0.1}>
          <SolutionVisual />
        </Reveal>
      </div>
    </section>
  );
}

function SolutionVisual() {
  return (
    <div className="relative isolate">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,122,26,0.32) 0%, rgba(255,184,0,0.16) 50%, transparent 75%)",
        }}
      />
      <div className="gradient-border">
        <div className="rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/50">
              <Sparkles size={14} className="text-brand-amber" /> Leitura do sistema
            </div>
            <span className="text-[10px] text-white/40">v1.0 · preview</span>
          </div>

          <div className="mt-5 space-y-4">
            <Bar label="Performance recente" value={82} accent="from-brand-ember to-brand-amber" />
            <Bar label="Ritmo de jogo (pace)" value={71} accent="from-brand-amber to-brand-amberLight" />
            <Bar label="Minutos esperados" value={64} accent="from-brand-blue to-brand-blueBright" />
            <Bar label="Edge vs. linha" value={58} accent="from-brand-ember to-brand-amber" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat label="Projeção" value="31.5" />
            <Stat label="Linha" value="28.5" muted />
            <Stat label="Edge" value="+3.0" ember />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs text-white/55">
        <span>{label}</span>
        <span className="text-white/80">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${accent}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  muted,
  ember,
}: {
  label: string;
  value: string;
  muted?: boolean;
  ember?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
      <p className="text-[10px] uppercase tracking-wider text-white/40">{label}</p>
      <p
        className={`mt-1 font-display text-xl font-semibold ${
          muted ? "text-white/70" : "text-white"
        } ${ember ? "text-gradient-ember" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}
