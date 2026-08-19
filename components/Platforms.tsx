"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Flame } from "lucide-react";
import { dashboardPreview, platforms, type Platform } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Seção "A plataforma" — o ponto de acesso ao produto.
 *
 * Hoje a ClutchPro apresenta UM produto (NBA), então o card ocupa a largura
 * inteira em duas colunas. O componente continua iterando sobre `platforms`:
 * se um segundo produto for adicionado em `lib/content.ts`, os cards passam
 * sozinhos para o formato lado a lado, mais compacto.
 *
 * Para editar nome, textos, métricas e URL: `lib/content.ts > platforms`.
 */
export function Platforms() {
  // Um produto → card largo em 2 colunas. Dois ou mais → grade lado a lado.
  const solo = platforms.length === 1;

  return (
    <section id="plataforma" className="relative isolate py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-[26rem] w-[26rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,122,26,0.5), transparent 62%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-64 -z-10 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,184,0,0.45), transparent 62%)" }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="A plataforma"
          title="Um produto. Um esporte. Uma obsessão."
          titleHighlight="Uma obsessão."
          description="Nada de painel genérico multiesporte. Cada tela, cada métrica e cada alerta do ClutchPro foi desenhado para o ritmo da NBA — e só para ele."
        />

        <div className={cn("mt-14 grid gap-5", !solo && "lg:grid-cols-2")}>
          {platforms.map((p, i) => (
            <PlatformCard key={p.id} platform={p} index={i} wide={solo} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Card de plataforma                                                  */
/* ------------------------------------------------------------------ */

/**
 * Tokens visuais de cada identidade.
 * `pitch` (verde gramado) está reservado para quando a plataforma de Futebol
 * voltar à landing — ver o comentário em `lib/content.ts > platforms`.
 */
const accentTokens = {
  ember: {
    border: "gradient-border",
    glow: "hover:shadow-glowEmber",
    iconWrap: "border-brand-ember/30 bg-brand-ember/10 text-brand-emberBright",
    eyebrow: "text-brand-emberBright",
    check: "text-brand-emberBright",
    button: "btn-primary",
    statusDot: "bg-brand-emberBright",
    statusWrap: "border-brand-ember/25 bg-brand-ember/[0.08] text-brand-amberLight",
    halo: "rgba(255,122,26,0.28)",
  },
  pitch: {
    border: "gradient-border gradient-border-pitch",
    glow: "hover:shadow-glowPitch",
    iconWrap: "border-brand-pitch/30 bg-brand-pitch/10 text-brand-pitchBright",
    eyebrow: "text-brand-pitchBright",
    check: "text-brand-pitchBright",
    button: "btn-pitch",
    statusDot: "bg-brand-pitchBright",
    statusWrap: "border-brand-pitch/25 bg-brand-pitch/[0.08] text-brand-pitchBright",
    halo: "rgba(18,183,106,0.24)",
  },
} as const;

function PlatformCard({
  platform,
  index,
  wide,
}: {
  platform: Platform;
  index: number;
  /** Card único ocupando a largura toda — divide o conteúdo em 2 colunas. */
  wide?: boolean;
}) {
  const t = accentTokens[platform.accent];
  const Icon = platform.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate h-full"
    >
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-3xl"
        style={{
          background: `radial-gradient(60% 55% at 50% 20%, ${t.halo}, transparent 72%)`,
        }}
      />

      <div className={cn(t.border, "h-full transition-shadow duration-500", t.glow)}>
        <div className="flex h-full flex-col rounded-2xl p-6 sm:p-8">
          {/* Cabeçalho */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "grid shrink-0 place-items-center rounded-xl border",
                  wide ? "h-12 w-12" : "h-11 w-11",
                  t.iconWrap
                )}
              >
                <Icon size={wide ? 24 : 21} />
              </span>
              <div>
                <p
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.22em]",
                    t.eyebrow
                  )}
                >
                  {platform.sport}
                </p>
                <h3
                  className={cn(
                    "mt-1 font-display font-bold leading-none text-white",
                    wide ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  )}
                >
                  {platform.name}
                </h3>
              </div>
            </div>

            <span
              className={cn(
                "hidden shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:inline-flex",
                t.statusWrap
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full", t.statusDot)} />
              Ao vivo
            </span>
          </div>

          {/* Corpo — 2 colunas quando é o único card */}
          <div
            className={cn(
              "mt-7 gap-7",
              wide ? "grid lg:grid-cols-[1.05fr_1fr] lg:gap-10" : "flex flex-col"
            )}
          >
            <div>
              <p className="font-display text-lg font-semibold leading-snug text-white/90 sm:text-xl">
                {platform.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {platform.description}
              </p>

              <ul className={cn("space-y-3.5", wide ? "mt-7" : "mt-6")}>
                {platform.highlights.map((h) => (
                  <li key={h.title} className="flex gap-3">
                    <span className={cn("mt-0.5 shrink-0", t.check)}>
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-snug text-white/70">
                      <span className="font-semibold text-white/90">{h.title}</span>
                      {" — "}
                      {h.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(!wide && "contents")}>
              {/* Métricas */}
              <div className={cn("grid grid-cols-3 gap-2", wide && "mt-0")}>
                {platform.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-center"
                  >
                    <p className="stat-number truncate text-[13px] sm:text-sm">{m.value}</p>
                    <p className="mt-1 truncate text-[9px] uppercase tracking-[0.14em] text-white/35">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Amostra do produto */}
              <div className="mt-4">
                <NbaSignature />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-8">
            <a
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                t.button,
                "group !justify-center",
                wide ? "!mx-auto !flex !w-full !max-w-sm !py-3.5" : "!w-full"
              )}
            >
              {platform.cta}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <p className="mt-3 text-center text-[11px] text-white/30">
              {platform.status} · abre em nova aba
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Amostra do Terminal — uma linha real do produto                     */
/* ------------------------------------------------------------------ */

function NbaSignature() {
  const p = dashboardPreview.players[0];

  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#080A14]/80 p-3">
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-emberBright">
          <Flame size={10} />
          Terminal de Apostas
        </span>
        <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-emerald-300/80">
          <span className="live-dot !h-1.5 !w-1.5" /> ao vivo
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-ember/40 to-brand-amber/25 ring-1 ring-white/10">
            <span className="font-display text-[9px] font-bold tracking-wider text-white/90">
              {p.team}
            </span>
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold leading-tight text-white">
              {p.player}
            </p>
            <p className="truncate text-[10px] text-white/45">
              #{p.number} · {p.minutes.toFixed(1)} min
            </p>
          </div>
        </div>
        <span className="inline-flex items-baseline gap-1 rounded-md border border-cyan-400/25 bg-cyan-400/10 px-2 py-0.5 font-display text-xs font-bold text-cyan-300">
          {p.nota.toFixed(1)}
          <span className="text-[8px] uppercase tracking-[0.18em] opacity-75">nota</span>
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        <MiniTile code="PTS" tone="ember" line={p.pts.line} proj={p.pts.projection} delta={p.pts.delta} />
        <MiniTile code="AST" tone="blue" line={p.ast.line} proj={p.ast.projection} delta={p.ast.delta} />
        <MiniTile code="REB" tone="violet" line={p.reb.line} proj={p.reb.projection} delta={p.reb.delta} />
      </div>

      <p className="mt-3 text-center text-[8px] uppercase tracking-[0.2em] text-white/20">
        amostra ilustrativa
      </p>
    </div>
  );
}

const miniTone = {
  ember: "border-brand-ember/25 text-brand-emberBright",
  blue: "border-brand-blue/25 text-brand-blueBright",
  violet: "border-brand-violet/25 text-[#B79BFF]",
} as const;

function MiniTile({
  code,
  tone,
  line,
  proj,
  delta,
}: {
  code: string;
  tone: keyof typeof miniTone;
  line: number;
  proj: number;
  delta: number;
}) {
  const positive = delta >= 0;
  return (
    <div className={cn("rounded-lg border bg-white/[0.02] p-2", miniTone[tone])}>
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{code}</span>
        <span
          className={cn(
            "text-[9px] font-semibold tabular-nums",
            positive ? "text-emerald-400" : "text-rose-400"
          )}
        >
          {positive ? "+" : ""}
          {delta.toFixed(1)}
        </span>
      </div>
      <p className="mt-1 space-x-1 text-[9px] leading-tight text-white/45">
        <span>linha</span>
        <span className="font-bold tabular-nums text-white/70">{fmt(line)}</span>
      </p>
      <p className="space-x-1 text-[9px] leading-tight text-white/45">
        <span>proj</span>
        <span className="font-bold tabular-nums">{fmt(proj)}</span>
      </p>
    </div>
  );
}

function fmt(n: number) {
  return Number.isInteger(n) ? n.toString() : n.toFixed(1);
}
