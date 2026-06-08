import { Mail } from "lucide-react";
import { LogoFull } from "./Logo";
import { footer } from "@/lib/content";
import { contactEmail, hasContactEmail } from "@/lib/config";

/**
 * Footer simples e elegante.
 * Edite colunas/links em `lib/content.ts > footer`.
 *
 * Canal de contato: o email vem de NEXT_PUBLIC_CONTACT_EMAIL (ver lib/config).
 * Enquanto não estiver definido, o contato simplesmente não é exibido.
 */
export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/[0.06] bg-brand-ink/60">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,_1fr)]">
          <div>
            <LogoFull />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {footer.tagline}
            </p>

            {hasContactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail size={15} className="text-brand-ember" />
                {contactEmail}
              </a>
            )}
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links
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
          <p className="text-xs text-white/40">
            Feito com inteligência estatística · Sem promessa de ganho.
          </p>
        </div>
      </div>
    </footer>
  );
}
