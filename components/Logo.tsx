import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo ClutchPro
 * ==============
 * A marca é composta por duas partes:
 *
 *  1. MARK      → o escudo (imagem em `public/logo-mark.png`)
 *  2. WORDMARK  → o texto "ClutchPro" desenhado em tipografia (fonte display),
 *                 com "Clutch" em branco e "Pro" em gradiente brasa→dourado.
 *
 * Por que o wordmark é texto e não imagem?
 *  - Fica nítido em qualquer densidade de tela (sem blur em retina).
 *  - Escala e alinha perfeitamente com o resto da tipografia da página.
 *  - Pesa ~0 KB.
 *
 * Como trocar a arte do escudo:
 *  → substitua `public/logo-mark.png` (PNG quadrado, fundo transparente).
 *  → para o favicon, substitua também `app/icon.png`.
 */

const LOGO_MARK_SRC = "/logo-mark.png";

type Size = "sm" | "md" | "lg";

/** Dimensões do escudo por tamanho. */
const markSize: Record<Size, { box: string; px: number }> = {
  sm: { box: "h-9 w-9", px: 36 },
  md: { box: "h-11 w-11", px: 44 },
  lg: { box: "h-16 w-16 sm:h-20 sm:w-20", px: 80 },
};

/** Escala tipográfica do wordmark por tamanho. */
const wordSize: Record<Size, string> = {
  sm: "text-[19px]",
  md: "text-[23px]",
  lg: "text-[34px] sm:text-[42px]",
};

/**
 * Só o escudo — para favicon, avatar, mobile compacto ou selos.
 */
export function LogoMark({
  className,
  size = "md",
  glow = true,
}: {
  className?: string;
  size?: Size;
  glow?: boolean;
}) {
  const s = markSize[size];
  return (
    <span className={cn("relative isolate inline-block shrink-0", s.box, className)}>
      {glow && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full opacity-70 blur-lg"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255,122,26,0.55), transparent 70%)",
          }}
        />
      )}
      <Image
        src={LOGO_MARK_SRC}
        alt=""
        aria-hidden
        fill
        sizes={`${s.px}px`}
        className="select-none object-contain"
        priority
      />
    </span>
  );
}

/**
 * Marca completa: escudo + wordmark tipográfico.
 * Usada na Navbar (sm), no Footer (md) e em destaques (lg).
 */
export function LogoFull({
  className,
  size = "md",
  withTagline = false,
}: {
  className?: string;
  size?: Size;
  /** Exibe a micro-tagline "SPORTS INTELLIGENCE" sob o wordmark. */
  withTagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />

      {/* Wordmark — acessível como texto real para leitores de tela e SEO */}
      <span className="inline-flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display font-extrabold leading-none tracking-[-0.03em]",
            wordSize[size]
          )}
        >
          <span className="text-white">Clutch</span>
          <span className="text-gradient-ember">Pro</span>
        </span>

        {withTagline && (
          <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/35">
            Sports Intelligence
          </span>
        )}
      </span>
    </span>
  );
}
