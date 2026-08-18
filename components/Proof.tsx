"use client";

import { motion } from "framer-motion";
import { Info, ScanLine, Scale } from "lucide-react";
import { proof } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Seção "Transparência" — a prova.
 *
 * Exibe o placar aberto do modelo: amostra liquidada, acerto por mercado e
 * calibração (confiança prometida × acerto real, incluindo os desvios
 * negativos). É o diferencial mais forte da marca: quase ninguém no mercado
 * publica onde o próprio modelo se superestima.
 *
 * ⚠️ Os números são ESTÁTICOS. Ver o aviso em `lib/content.ts > proof`.
 */
export function Proof() {
  return (
    <section id="transparencia" className="relative isolate py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 opacity-50"
        style={{
          background:
            "radial-gradient(45% 100% at 50% 0%, rgba(18,183,106,0.22), rgba(255,122,26,0.08) 45%, transparent 72%)",
        }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow={proof.eyebrow}
          title={proof.title}
          titleHighlight="inclusive onde ele erra"
          description={proof.description}
        />

        {/* Números de topo */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proof.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="glass-card h-full p-5">
                <p className="stat-number text-3xl sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm font-semibold text-white/85">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/40">{s.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Painéis: mercados + calibração */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <Panel
              icon={<ScanLine size={16} />}
              title={proof.marketsTitle}
              hint={proof.marketsHint}
            >
              <div className="space-y-4">
                {proof.markets.map((m, i) => (
                  <MarketBar key={m.label} {...m} index={i} />
                ))}
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.14}>
            <Panel
              icon={<Scale size={16} />}
              title={proof.calibrationTitle}
              hint={proof.calibrationHint}
              tone="pitch"
            >
              <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  <span>Confiança prometida</span>
                  <span className="text-right">Acerto real</span>
                  <span className="w-12 text-right">Desvio</span>
                </div>
                {proof.calibration.map((c) => (
                  <div
                    key={c.band}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-white/[0.04] px-4 py-3 last:border-b-0"
                  >
                    <span className="text-sm text-white/70">{c.band}</span>
                    <span className="stat-number text-sm">{c.real}%</span>
                    <span
                      className={cn(
                        "w-12 text-right text-sm font-semibold tabular-nums",
                        c.drift < -5 ? "text-rose-400" : "text-white/50"
                      )}
                    >
                      {c.drift > 0 ? "+" : ""}
                      {c.drift}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <p className="mt-6 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-white/35">
            <Info size={13} className="mt-0.5 shrink-0" />
            {proof.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Panel({
  icon,
  title,
  hint,
  tone = "ember",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  hint: string;
  tone?: "ember" | "pitch";
  children: React.ReactNode;
}) {
  return (
    <div className="glass-card h-full p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "grid h-8 w-8 place-items-center rounded-lg border",
            tone === "ember"
              ? "border-brand-ember/25 bg-brand-ember/10 text-brand-emberBright"
              : "border-brand-pitch/25 bg-brand-pitch/10 text-brand-pitchBright"
          )}
        >
          {icon}
        </span>
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-white/45">{hint}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function MarketBar({
  label,
  rate,
  sample,
  index,
}: {
  label: string;
  rate: number;
  sample: string;
  index: number;
}) {
  // Acima de 60% pinta como gramado (bom); abaixo, tom neutro — sem maquiagem.
  const strong = rate >= 60;

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="truncate text-sm text-white/75">{label}</span>
        <span className="flex shrink-0 items-baseline gap-2">
          <span className="text-[10px] tabular-nums text-white/30">{sample}</span>
          <span
            className={cn(
              "stat-number text-sm",
              strong ? "!text-brand-pitchBright" : "!text-white/60"
            )}
          >
            {rate}%
          </span>
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${rate}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r",
            strong
              ? "from-brand-pitch to-brand-pitchBright"
              : "from-white/25 to-white/40"
          )}
        />
      </div>
    </div>
  );
}
