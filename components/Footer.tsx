import { ArrowUpRight, Mail } from "lucide-react";
import { LogoFull } from "./Logo";
import { footer, platforms } from "@/lib/content";
import { contactEmail, hasContactEmail } from "@/lib/config";

/**
 * Footer simples e elegante.
 * Edite colunas/links em `lib/content.ts > footer`.
 *
 * A coluna marcada com `fromPlatforms: true` é preenchida automaticamente a
 * partir de `lib/content.ts > platforms` — assim os links dos bots ficam em
 * um lugar só no projeto inteiro.
 *
 * Canal de contato: o email vem de NEXT_PUBLIC_CONTACT_EMAIL (ver lib/config).
 * Enquanto não estiver definido, o contato simplesmente não é exibido.
 */
export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/[0.06] bg-brand-ink/60">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,_1fr)]">
          <div>
            <LogoFull size="md" withTagline />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {footer.tagline}
            </p>

            {hasContactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail size={15} className="text-brand-ember" />
                {contactEmail}
              </a>
            )}
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                {col.title}
              </p>

              <ul className="mt-4 space-y-2.5">
                {/* Coluna das plataformas: links externos para os bots */}
                {col.fromPlatforms
                  ? platforms.map((p) => (
                      <li key={p.id}>
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {p.name}
                          <ArrowUpRight
                            size={13}
                            className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60"
                          />
                        </a>
                      </li>
                    ))
                  : col.links
                      // Oculta o link "Contato" enquanto não houver email definido.
                      .filter((l) => l.href !== "#contato" || hasContactEmail)
                      .map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href === "#contato" ? `mailto:${contactEmail}` : l.href}
                            className="text-sm text-white/70 transition-colors hover:text-white"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <p className="text-xs text-white/40">{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
