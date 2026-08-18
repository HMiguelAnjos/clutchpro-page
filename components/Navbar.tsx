"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { LogoFull } from "./Logo";
import { nav, platforms } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Navbar fixa, com efeito glass ao rolar.
 *
 * Estrutura:
 *  - Esquerda:  marca (escudo + wordmark "ClutchPro")
 *  - Centro:    âncoras das seções
 *  - Direita:   menu "Entrar" (leva a cada bot) + CTA de acesso antecipado
 *
 * Para editar links e CTA, vá em `lib/content.ts > nav`.
 * Para editar os destinos dos bots, vá em `lib/content.ts > platforms`.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-brand-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="ClutchPro — início"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <LogoFull size="sm" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LoginMenu />
          <a href={nav.cta.href} className="btn-primary !px-5 !py-2.5 !text-sm">
            {nav.cta.label}
          </a>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden border-t border-white/[0.06] bg-brand-ink/95 backdrop-blur-xl md:hidden"
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/[0.04]"
            >
              {l.label}
            </a>
          ))}

          <p className="mt-3 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
            {nav.loginLabel}
          </p>
          {platforms.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/[0.04]"
            >
              <span className="flex items-center gap-2.5">
                <PlatformDot accent={p.accent} />
                {p.name}
              </span>
              <ArrowUpRight size={15} className="text-white/40" />
            </a>
          ))}

          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 !w-full !justify-center"
          >
            {nav.cta.label}
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

/* ------------------------------------------------------------------ */
/* Menu "Entrar" — dropdown com as duas plataformas                    */
/* ------------------------------------------------------------------ */

function LoginMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora ou apertar Esc — comportamento esperado de menu.
  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
      >
        {nav.loginLabel}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <motion.div
        initial={false}
        animate={
          open
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -6, pointerEvents: "none" }
        }
        transition={{ duration: 0.18, ease: "easeOut" }}
        role="menu"
        className="absolute right-0 top-full w-[280px] pt-2"
      >
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-brand-deep/95 p-1.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          {platforms.map((p) => (
            <a
              key={p.id}
              role="menuitem"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.05]"
            >
              <PlatformDot accent={p.accent} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-white">
                  {p.name}
                </span>
                <span className="block truncate text-[11px] text-white/45">
                  {p.sport}
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
              />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/** Bolinha de identidade da plataforma (brasa = NBA, gramado = Futebol). */
function PlatformDot({ accent }: { accent: "ember" | "pitch" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid h-8 w-8 shrink-0 place-items-center rounded-lg border",
        accent === "ember"
          ? "border-brand-ember/30 bg-brand-ember/10"
          : "border-brand-pitch/30 bg-brand-pitch/10"
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          accent === "ember" ? "bg-brand-emberBright" : "bg-brand-pitchBright"
        )}
      />
    </span>
  );
}
