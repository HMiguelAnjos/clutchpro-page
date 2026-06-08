"use client";

import { motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Eye,
  Flame,
  HelpCircle,
  Info,
  UserRound,
} from "lucide-react";
import {
  dashboardPreview,
  type PlayerEntry,
  type StatBlock,
} from "@/lib/content";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Preview do Terminal — fiel ao produto real do ClutchPro.
 *
 * Estrutura de cada card de jogador:
 *  - Header: status (APOSTAR / OBSERVAR) + NOTA composta
 *  - Linha do jogador: avatar + nome + time/camisa/min + ícone banco
 *  - 3 blocos coloridos: PTS (ember) / AST (blue) / REB (violet)
 *      cada bloco mostra:
 *        • código (PTS/AST/REB) + delta colorido (+/-)
 *        • valor atual (grande)
 *        • linha X.X
 *        • proj X.X (colorida e em negrito)
 *  - Footer: "DETALHES POR QUARTER" com chevron
 *
 * Para editar jogadores, vá em `lib/content.ts > dashboardPreview.players`.
 */
export function DashboardPreview() {
  const altoValor = dashboardPreview.players.filter((p) => p.bucket === "alto-valor");
  const neutro = dashboardPreview.players.filter((p) => p.bucket === "neutro");

  return (
    <section id="dashboard" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 opacity-60"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255,122,26,0.28), rgba(255,184,0,0.12) 40%, transparent 70%)",
        }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow={dashboardPreview.eyebrow}
          title={dashboardPreview.title}
          titleHighlight="Terminal"
          description={dashboardPreview.description}
        />

        <Reveal delay={0.05}>
          <div className="mt-14">
            <div className="gradient-border">
              <div className="rounded-2xl p-4 sm:p-6">
                <TerminalHeader />

                {/* Tabs */}
                <div className="mt-5 flex items-center gap-1.5">
                  <Tab label="Geral" active />
                  <Tab label="Pontos" />
                  <Tab label="Rebotes" />
                  <Tab label="Assistências" />
                </div>

                {/* Grupo: Alto valor */}
                <GroupHeader
                  icon={<Flame size={14} className="text-brand-emberBright" />}
                  label="Alto valor"
                  tone="ember"
                />
                <div className="mt-3 grid gap-3 lg:grid-cols-3">
                  {altoValor.map((p, i) => (
                    <PlayerCardView key={p.id} player={p} index={i} highlighted />
                  ))}
                </div>

                {/* Grupo: Neutro */}
                <GroupHeader label="Neutro" tone="mute" />
                <div className="mt-3 grid gap-3 lg:grid-cols-3">
                  {neutro.map((p, i) => (
                    <PlayerCardView key={p.id} player={p} index={i} />
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/35">
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  {dashboardPreview.disclaimer}
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Header e tabs do terminal                                           */
/* ------------------------------------------------------------------ */

function TerminalHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-base">🔥</span>
          <h3 className="font-display text-lg font-semibold text-white">
            Terminal de Apostas
          </h3>
          <span className="grid h-5 w-5 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[10px] text-white/55">
            <HelpCircle size={11} />
          </span>
        </div>
        <p className="mt-1 text-xs text-white/50">
          Visão geral — desempenho composto de cada jogador{" "}
          <span className="inline-flex items-center gap-1 text-brand-amberLight">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-amber" />
            atualizado há 2s
          </span>
        </p>
      </div>
    </div>
  );
}

function Tab({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-white/15 bg-white/[0.06] text-white"
          : "border-transparent bg-transparent text-white/55 hover:text-white/80"
      )}
    >
      {label}
    </span>
  );
}

function GroupHeader({
  icon,
  label,
  tone,
}: {
  icon?: React.ReactNode;
  label: string;
  tone: "ember" | "mute";
}) {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div
        className={cn(
          "inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]",
          tone === "ember" ? "text-brand-emberBright" : "text-white/40"
        )}
      >
        {icon}
        {label}
      </div>
      <div
        className="h-px flex-1"
        style={{
          background:
            tone === "ember"
              ? "linear-gradient(90deg, rgba(255,122,26,0.4), transparent)"
              : "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card de jogador (fiel ao produto)                                   */
/* ------------------------------------------------------------------ */

function PlayerCardView({
  player,
  index,
  highlighted,
}: {
  player: PlayerEntry;
  index: number;
  highlighted?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={cn(
        "relative rounded-2xl border bg-[#0B0E1C]/80 p-4 transition-colors",
        highlighted
          ? "border-emerald-400/30 shadow-[0_0_0_1px_rgba(34,197,94,0.15),0_20px_60px_-20px_rgba(34,197,94,0.25)]"
          : "border-white/[0.06] hover:border-white/[0.12]"
      )}
    >
      {/* Faixa lateral verde quando é APOSTAR */}
      {highlighted && (
        <span
          aria-hidden
          className="absolute inset-y-3 left-0 w-0.5 rounded-r bg-gradient-to-b from-emerald-400 to-emerald-500/40"
        />
      )}

      {/* Header: status + NOTA */}
      <div className="flex items-center justify-between">
        <StatusBadge status={player.status} />
        <NotaBadge value={player.nota} />
      </div>

      {/* Linha do jogador */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <Avatar team={player.team} />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {player.player}
            </p>
            <p className="truncate text-[11px] text-white/50">
              {player.team} · #{player.number} · {player.minutes.toFixed(1)} min
            </p>
          </div>
        </div>
        {player.benched && (
          <span
            title="No banco agora"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-white/55"
          >
            <UserRound size={13} />
          </span>
        )}
      </div>

      {/* 3 stat blocks */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        <StatTile code="PTS" tone="ember" data={player.pts} />
        <StatTile code="AST" tone="blue" data={player.ast} />
        <StatTile code="REB" tone="violet" data={player.reb} />
      </div>

      {/* Footer expansível */}
      <button
        type="button"
        className="mt-3 flex w-full items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white/70"
      >
        Detalhes por quarter
        <ChevronDown size={13} />
      </button>
    </motion.div>
  );
}

function StatusBadge({ status }: { status: PlayerEntry["status"] }) {
  if (status === "APOSTAR") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
        <span className="grid h-3 w-3 place-items-center rounded-sm bg-emerald-400 text-emerald-950">
          <Check size={9} strokeWidth={3.5} />
        </span>
        Apostar
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
      <Eye size={11} className="text-white/55" />
      Observar
    </span>
  );
}

function NotaBadge({ value }: { value: number }) {
  // Faixa de cor por NOTA (igual ao produto): alta = teal, média = âmbar, baixa = coral
  const tone =
    value >= 7
      ? "text-cyan-300 bg-cyan-400/10 border-cyan-400/25"
      : value >= 5.5
      ? "text-brand-amberLight bg-brand-amber/10 border-brand-amber/25"
      : value >= 4.5
      ? "text-orange-300 bg-orange-400/10 border-orange-400/25"
      : "text-rose-300 bg-rose-400/10 border-rose-400/25";

  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1 rounded-md border px-2 py-0.5 font-display text-sm font-bold",
        tone
      )}
    >
      {value.toFixed(1)}
      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] opacity-75">
        nota
      </span>
    </span>
  );
}

function Avatar({ team }: { team: string }) {
  // Avatar circular com gradiente sutil e a sigla do time
  return (
    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-violet/30 ring-1 ring-white/10">
      <span className="font-display text-[10px] font-bold tracking-wider text-white/85">
        {team}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* StatTile — bloco PTS / AST / REB com cor própria                    */
/* ------------------------------------------------------------------ */

type StatTone = "ember" | "blue" | "violet";

const toneClass: Record<
  StatTone,
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

function StatTile({
  code,
  tone,
  data,
}: {
  code: "PTS" | "AST" | "REB";
  tone: StatTone;
  data: StatBlock;
}) {
  const c = toneClass[tone];
  const deltaPositive = data.delta >= 0;
  return (
    <div className={cn("relative rounded-xl border p-2.5", c.wrap)}>
      {/* Check verde no canto quando o bloco é "bom" */}
      {data.good && (
        <span className="absolute -top-1.5 -left-1.5 grid h-4 w-4 place-items-center rounded-sm border border-emerald-400/40 bg-emerald-500 text-emerald-950 shadow-[0_0_10px_rgba(34,197,94,0.35)]">
          <Check size={10} strokeWidth={3} />
        </span>
      )}

      {/* Topo: código + delta */}
      <div className="flex items-center justify-between">
        <span className={cn("text-[10px] font-bold uppercase tracking-[0.22em]", c.code)}>
          {code}
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold tabular-nums",
            deltaPositive ? "text-emerald-400" : "text-rose-400"
          )}
        >
          {deltaPositive ? "+" : ""}
          {data.delta.toFixed(1)}
        </span>
      </div>

      {/* Valor atual grande */}
      <p className="mt-1 font-display text-2xl font-bold leading-none text-white">
        {data.value}
      </p>

      {/* Linha e projeção */}
      <div className="mt-2 space-y-0.5 text-[10px] leading-tight text-white/55">
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
  // Mostra inteiros sem casa e fracionários com 1 casa
  return Number.isInteger(n) ? n.toString() : n.toFixed(1);
}
