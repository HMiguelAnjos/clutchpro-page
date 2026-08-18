"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Eye, Flame } from "lucide-react";
import {
  dashboardPreview,
  footballPreview,
  platforms,
  type Platform,
} from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Seção "Plataformas" — o coração da landing.
 *
 * Apresenta os DOIS produtos lado a lado, cada um com identidade visual
 * própria (brasa para NBA, gramado para Futebol), uma amostra do produto
 * real e o link direto para acessar.
 *
 * Para editar nomes, textos, métricas e URLs: `lib/content.ts > platforms`.
 */
export function Platforms() {
  return (
    <section id="plataformas" className="relative isolate py-20 sm:py-28">
      {/* Dois halos: brasa à esquerda, gramado à direita — antecipa as cores */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 -z-10 h-[26rem] w-[26rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,122,26,0.5), transparent 62%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-56 -z-10 h-[26rem] w-[26rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(18,183,106,0.5), transparent 62%)" }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="As plataformas"
          title="Um motor. Dois esportes."
          titleHighlight="Dois esportes."
          description="Cada esporte tem métricas, ritmo e linguagem próprios — por isso cada um tem a sua plataforma. Por baixo, o mesmo núcleo estatístico."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {platforms.map((p, i) => (
            <PlatformCard key={p.id} platform={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-white/40">
            Já é cliente? Entre direto pela plataforma do seu esporte — os acessos
            são independentes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Card de plataforma                                                  */
/* ------------------------------------------------------------------ */

/** Tokens visuais de cada identidade. */
const accentTokens = {
  ember: {
    border: "gradient-border",
    glow: "hover:shadow-glowEmber",
    iconWrap: "border-brand-ember/30 bg-brand-ember/10 text-brand-emberBright",
    eyebrow: "text-brand-emberBright",
    title: "text-gradient-ember",
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
    title: "text-gradient-pitch",
    check: "text-brand-pitchBright",
    button: "btn-pitch",
    statusDot: "bg-brand-pitchBright",
    statusWrap: "border-brand-pitch/25 bg-brand-pitch/[0.08] text-brand-pitchBright",
    halo: "rgba(18,183,106,0.24)",
  },
} as const;

function PlatformCard({ platform, index }: { platform: Platform; index: number }) {
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
        <div className="flex h-full flex-col rounded-2xl p-6 sm:p-7">
          {/* Cabeçalho */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "grid h-11 w-11 shrink-0 place-items-center rounded-xl border",
                  t.iconWrap
                )}
              >
                <Icon size={21} />
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
                <h3 className="mt-1 font-display text-xl font-bold leading-none text-white sm:text-2xl">
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
              {platform.id === "nba" ? "Ao vivo" : "Diário"}
            </span>
          </div>

          <p className="mt-5 font-display text-lg font-semibold leading-snug text-white/90">
            {platform.tagline}
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-white/55">
            {platform.description}
          </p>

          {/* Métricas */}
          <div className="mt-6 grid grid-cols-3 gap-2">
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
          <div className="mt-5">
            {platform.id === "nba" ? <NbaSignature /> : <FootballSignature />}
          </div>

          {/* O que entrega */}
          <ul className="mt-6 space-y-3">
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

          {/* CTA — empurrado para o rodapé do card para alinhar os dois */}
          <div className="mt-auto pt-7">
            <a
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(t.button, "group !w-full !justify-center")}
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
/* Amostra NBA — uma linha do Terminal                                 */
/* ------------------------------------------------------------------ */

function NbaSignature() {
  const p = dashboardPreview.players[0];

  return (
    <SignatureFrame label="Terminal de Apostas" live>
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
    </SignatureFrame>
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

/* ------------------------------------------------------------------ */
/* Amostra Futebol — uma oportunidade do dia                           */
/* ------------------------------------------------------------------ */

function FootballSignature() {
  const o = footballPreview.opportunity;

  return (
    <SignatureFrame label="Oportunidades do dia" accent="pitch">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-tight text-white">
            {o.home} <span className="text-white/35">×</span> {o.away}
          </p>
          <p className="mt-0.5 truncate text-[10px] text-white/45">
            {o.competition} · {o.age}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">
          <Eye size={9} /> {o.risk}
        </span>
      </div>

      <div className="mt-3 rounded-lg border border-brand-pitch/25 bg-[linear-gradient(180deg,rgba(18,183,106,0.10),rgba(18,183,106,0.02))] p-2.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[12px] font-semibold text-white">{o.pick}</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-brand-pitchBright/80">
              {o.market}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="stat-number text-lg leading-none">{o.chance}%</p>
            <p className="mt-0.5 text-[8px] uppercase tracking-[0.14em] text-white/35">
              chance
            </p>
          </div>
        </div>

        {/* Barra de probabilidade */}
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-pitch to-brand-pitchBright"
            style={{ width: `${o.chance}%` }}
          />
        </div>
      </div>

      <p className="mt-2.5 line-clamp-2 text-[10px] leading-relaxed text-white/45">
        {o.reason}
      </p>
    </SignatureFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Moldura comum das amostras                                          */
/* ------------------------------------------------------------------ */

function SignatureFrame({
  label,
  accent = "ember",
  live,
  children,
}: {
  label: string;
  accent?: "ember" | "pitch";
  live?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#080A14]/80 p-3">
      <div className="mb-3 flex items-center justify-between">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em]",
            accent === "ember" ? "text-brand-emberBright" : "text-brand-pitchBright"
          )}
        >
          <Flame size={10} />
          {label}
        </span>
        {live && (
          <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-emerald-300/80">
            <span className="live-dot !h-1.5 !w-1.5" /> ao vivo
          </span>
        )}
      </div>
      {children}
      <p className="mt-3 text-center text-[8px] uppercase tracking-[0.2em] text-white/20">
        amostra ilustrativa
      </p>
    </div>
  );
}

function fmt(n: number) {
  return Number.isInteger(n) ? n.toString() : n.toFixed(1);
}
