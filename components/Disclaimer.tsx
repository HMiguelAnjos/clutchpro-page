"use client";

import { ShieldCheck } from "lucide-react";
import { disclaimer } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";

/**
 * Aviso responsável — discreto, mas presente.
 * Edite em `lib/content.ts > disclaimer`.
 */
export function Disclaimer() {
  return (
    <section id="aviso" className="py-10 sm:py-14">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-brand-ember/15 to-transparent text-brand-emberBright">
              <ShieldCheck size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{disclaimer.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/55">{disclaimer.text}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
