"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Eye,
  Flame,
  HelpCircle,
  PlayCircle,
  UserRound,
} from "lucide-react";
import { hero } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Hero — primeira tela com mockup compacto do Terminal real.
 * Mantém a mesma linguagem visual da seção DashboardPreview, em versão enxuta.
 * Para mudar textos/CTAs, edite `lib/content.ts > hero`.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 bg-grid-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-px shine-line opacity-60" />

      <div className="container-page grid items-center gap-12 pb-20 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-32">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <span className="eyebrow">
              <span className="live-dot" /> {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            {hero.titleLines[0]}{" "}
            <span className="text-gradient">{hero.highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a href={hero.cta.href} className="btn-primary group">
              {hero.cta.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={hero.ctaSecondary.href} className="btn-ghost group">
              <PlayCircle size={16} className="opacity-80 group-hover:opacity-100" />
              {hero.ctaSecondary.label}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
          >
            {hero.trustChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur"
                >
                  <Icon size={14} className="text-brand-emberBright" />
                  {chip.label}
                </li>
              );
            })}
          </motion.ul>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mockup do Terminal (versão compacta para o Hero)                    */
/* ------------------------------------------------------------------ */

function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[2.5rem] opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,122,26,0.32) 0%, rgba(255,184,0,0.16) 50%, rgba(61,123,255,0.08) 75%, transparent 100%)",
        }}
      />

      <div className="gradient-border">
        <div className="rounded-2xl p-4 sm:p-5">
          {/* Header do terminal */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span aria-hidden>🔥</span>
              <p className="text-sm font-semibold text-white">Terminal de Apostas</p>
              <span className="grid h-4 w-4 place-items-center rounded-full border border-white/15 text-[8px] text-white/55">
                <HelpCircle size={9} />
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
              <span className="live-dot !h-1.5 !w-1.5" /> Ao vivo
            </span>
          </div>

          {/* Group: Alto valor */}
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-emberBright">
              <Flame size={12} /> Alto valor
            </span>
            <span
              className="h-px flex-1"
              style={{ background: "linear-gradient(90deg, rgba(255,122,26,0.4), transparent)" }}
            />
          </div>

          <div className="mt-3 space-y-3">
            <MockPlayerCard
              highlighted
              status="APOSTAR"
              nota={7.5}
              player="Ajay Mitchell"
              team="OKC"
              meta="#25 · 11.1 min"
              benched
              pts={{ value: 8, line: 18.8, projection: 18.7, delta: -0.1, good: false }}
              ast={{ value: 3, line: 6, projection: 7.2, delta: 1.2, good: true }}
              reb={{ value: 3, line: 5, projection: 7, delta: 2.0, good: true }}
            />

            {/* Grupo neutro (compacto) */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Neutro
              </span>
              <span
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }}
              />
            </div>

            <MockPlayerCard
              status="OBSERVAR"
              nota={5.7}
              player="Luguentz Dort"
              team="OKC"
              meta="#5 · 9.7 min"
              pts={{ value: 6, line: 9.5, projection: 14.7, delta: 5.2, good: true }}
              ast={{ value: 0, line: 0.5, projection: 0.2, delta: -0.3, good: false }}
              reb={{ value: 0, line: 1.5, projection: 0.5, delta: -1.0, good: false }}
            />
          </div>

          <div className="mt-4 h-px w-full shine-line" />
          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.18em] text-white/30">
            Dados ilustrativos — preview visual
          </p>
        </div>
      </div>

      {/* Badges flutuantes (mantém o "wow") */}
      <FloatingBadge
        className="-left-4 top-16 hidden sm:flex"
        icon={<Flame size={14} className="text-brand-emberBright" />}
        title="Alto valor"
        subtitle="NOTA 7.5 · APOSTAR"
      />
      <FloatingBadge
        className="-right-4 bottom-20 hidden sm:flex"
        icon={<Check size={14} className="text-emerald-300" />}
        title="Edge detectado"
        subtitle="REB +2.0 · linha 5"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Card compacto do Hero — mesma linguagem do DashboardPreview         */
/* ------------------------------------------------------------------ */

type MockStat = {
  value: number;
  line: number;
  projection: number;
  delta: number;
  good: boolean;
};

function MockPlayerCard({
  status,
  nota,
  player,
  team,
  meta,
  benched,
  highlighted,
  pts,
  ast,
  reb,
}: {
  status: "APOSTAR" | "OBSERVAR";
  nota: number;
  player: string;
  team: string;
  meta: string;
  benched?: boolean;
  highlighted?: boolean;
  pts: MockStat;
  ast: MockStat;
  reb: MockStat;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl border bg-[#0B0E1C]/80 p-3",
        highlighted
          ? "border-emerald-400/30 shadow-[0_0_0_1px_rgba(34,197,94,0.15),0_18px_50px_-22px_rgba(34,197,94,0.3)]"
          : "border-white/[0.06]"
      )}
    >
      {highlighted && (
        <span
          aria-hidden
          className="absolute inset-y-3 left-0 w-0.5 rounded-r bg-gradient-to-b from-emerald-400 to-emerald-500/40"
        />
      )}

      <div className="flex items-center justify-between">
        {status === "APOSTAR" ? (
          <span className="inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300">
            <span className="grid h-2.5 w-2.5 place-items-center rounded-sm bg-emerald-400 text-emerald-950">
              <Check size={7} strokeWidth={4} />
            </span>
            Apostar
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/65">
            <Eye size={9} className="text-white/55" /> Observar
          </span>
        )}

        <span
          className={cn(
            "inline-flex items-baseline gap-1 rounded-md border px-1.5 py-0.5 font-display text-[11px] font-bold",
            nota >= 7
              ? "text-cyan-300 bg-cyan-400/10 border-cyan-400/25"
              : nota >= 5.5
              ? "text-brand-amberLight bg-brand-amber/10 border-brand-amber/25"
              : "text-orange-300 bg-orange-400/10 border-orange-400/25"
          )}
        >
          {nota.toFixed(1)}
          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] opacity-75">
            nota
          </span>
        </span>
      </div>

      <div className="mt-2.5 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-violet/30 ring-1 ring-white/10">
            <span className="font-display text-[9px] font-bold tracking-wider text-white/85">
              {team}
            </span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-[12px] font-semibold leading-tight text-white">
              {player}
            </p>
            <p className="truncate text-[10px] text-white/50">{team} · {meta}</p>
          </div>
        </div>
        {benched && (
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-white/55">
            <UserRound size={11} />
          </span>
        )}
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        <Tile code="PTS" tone="ember" data={pts} />
        <Tile code="AST" tone="blue" data={ast} />
        <Tile code="REB" tone="violet" data={reb} />
      </div>

      <button
        type="button"
        className="mt-2.5 flex w-full items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/45"
      >
        Detalhes por quarter
        <ChevronDown size={11} />
      </button>
    </div>
  );
}

/* Bloco de stat compacto (PTS/AST/REB) — variante reduzida do StatTile  */
const tileTone: Record<
  "ember" | "blue" | "violet",
  { wrap: string; code: string; line: string; proj: string }
> = {
  ember: {
    wrap: "border-brand-ember/30 bg-[linear-gradient(180deg,rgba(255,122,26,0.10),rgba(255,122,26,0.02))]",
    code: "text-brand-emberBright",
    line: "text-brand-emberBright/80",
    proj: "text-brand-emberBright",
  },
  blue: {
    wrap: "border-brand-blue/30 bg-[linear-gradient(180deg,rgba(78,160,255,0.10),rgba(78,160,255,0.02))]",
    code: "text-brand-blueBright",
    line: "text-brand-blueBright/80",
    proj: "text-brand-blueBright",
  },
  violet: {
    wrap: "border-brand-violet/30 bg-[linear-gradient(180deg,rgba(124,77,255,0.12),rgba(124,77,255,0.02))]",
    code: "text-[#B79BFF]",
    line: "text-[#B79BFF]/80",
    proj: "text-[#B79BFF]",
  },
};

function Tile({
  code,
  tone,
  data,
}: {
  code: "PTS" | "AST" | "REB";
  tone: "ember" | "blue" | "violet";
  data: MockStat;
}) {
  const c = tileTone[tone];
  const deltaPositive = data.delta >= 0;
  return (
    <div className={cn("relative rounded-lg border p-2", c.wrap)}>
      {data.good && (
        <span className="absolute -top-1 -left-1 grid h-3.5 w-3.5 place-items-center rounded-sm border border-emerald-400/40 bg-emerald-500 text-emerald-950">
          <Check size={8} strokeWidth={3} />
        </span>
      )}
      <div className="flex items-center justify-between">
        <span className={cn("text-[9px] font-bold uppercase tracking-[0.22em]", c.code)}>
          {code}
        </span>
        <span
          className={cn(
            "text-[9px] font-semibold tabular-nums",
            deltaPositive ? "text-emerald-400" : "text-rose-400"
          )}
        >
          {deltaPositive ? "+" : ""}
          {data.delta.toFixed(1)}
        </span>
      </div>
      <p className="mt-0.5 font-display text-lg font-bold leading-none text-white">
        {data.value}
      </p>
      <div className="mt-1.5 space-y-0.5 text-[9px] leading-tight text-white/55">
        <p>
          linha <span className={cn("font-bold tabular-nums", c.line)}>{formatNum(data.line)}</span>
        </p>
        <p>
          proj <span className={cn("font-bold tabular-nums", c.proj)}>{formatNum(data.projection)}</span>
        </p>
      </div>
    </div>
  );
}

function formatNum(n: number) {
  return Number.isInteger(n) ? n.toString() : n.toFixed(1);
}

function FloatingBadge({
  className,
  icon,
  title,
  subtitle,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "absolute z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-brand-deep/85 px-3 py-2 backdrop-blur-xl shadow-glowEmber",
        className
      )}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
        {icon}
      </span>
      <div className="pr-1">
        <p className="text-[11px] font-semibold text-white">{title}</p>
        <p className="text-[10px] text-white/55">{subtitle}</p>
      </div>
    </motion.div>
  );
}
