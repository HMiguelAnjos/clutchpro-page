import type { ReactElement } from "react";
import { socials, type SocialLink } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Links de redes sociais
 * ======================
 * Os dados (rede, @handle e URL) ficam em `lib/content.ts > socials`.
 *
 * Por que o ícone é SVG inline e não `lucide-react`?
 *   O lucide removeu os ícones de marca na versão 1.x — não existe mais
 *   `Instagram` lá. Um glifo inline evita adicionar uma dependência inteira
 *   (tipo `react-icons`) por causa de um único ícone.
 *
 * Para adicionar outra rede:
 *   1. acrescente o objeto em `lib/content.ts > socials`
 *   2. inclua o `id` na union `SocialLink["id"]`
 *   3. adicione o glifo em `glyphs` abaixo
 */

/** Glifos por rede. Cada um desenha em `currentColor` e herda o tamanho. */
// Nota: os tipos do React 19 removeram o namespace global `JSX` — daí ReactElement.
const glyphs: Record<
  SocialLink["id"],
  (props: { className?: string }) => ReactElement
> = {
  instagram: ({ className }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

/**
 * @param variant  "handle" mostra ícone + @arroba (rodapé);
 *                 "icon" mostra só o ícone em um botão redondo (barras compactas).
 */
export function SocialLinks({
  className,
  variant = "handle",
}: {
  className?: string;
  variant?: "handle" | "icon";
}) {
  if (socials.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {socials.map((s) => {
        const Glyph = glyphs[s.id];
        return (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label}: ${s.handle} (abre em nova aba)`}
              className={cn(
                "group inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-brand-ember/40 hover:bg-brand-ember/[0.08] hover:text-white",
                variant === "handle" ? "gap-2 px-3 py-1.5" : "h-9 w-9 justify-center"
              )}
            >
              <Glyph className="h-4 w-4 shrink-0 transition-colors group-hover:text-brand-emberBright" />
              {variant === "handle" && (
                <span className="text-xs font-semibold">{s.handle}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
