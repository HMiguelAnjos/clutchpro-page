"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoFull } from "./Logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Navbar fixa, com efeito glass ao rolar.
 * Para editar links e CTA, vá em `lib/content.ts > nav`.
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
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" aria-label="ClutchPro home" className="flex items-center">
          <LogoFull size="sm" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={nav.cta.href} className="btn-primary !px-5 !py-2.5 !text-sm">
            {nav.cta.label}
          </a>
        </div>

        <button
          aria-label="Abrir menu"
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
        className="overflow-hidden border-t border-white/[0.06] bg-brand-ink/90 backdrop-blur-xl md:hidden"
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
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 !w-full !justify-center"
          >
            {nav.cta.label}
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
