"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { finalCta } from "@/lib/content";
import { Reveal } from "./primitives/Reveal";

type Status = "idle" | "loading" | "success" | "error";

/**
 * CTA final com captura de email.
 * Envia o email para `POST /api/lead`, que grava na tabela `leads` do Supabase.
 * Edite textos em `lib/content.ts > finalCta`.
 */
export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Algo deu errado. Tente novamente.");
        return;
      }

      setStatus("success");
      setMessage(
        data?.alreadyRegistered
          ? "Você já está na lista. Em breve teremos novidades!"
          : "Pronto! Você entrou na lista de acesso."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Sem conexão. Verifique sua internet e tente novamente.");
    }
  }

  return (
    <section id="cta-final" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,122,26,0.22), rgba(255,184,0,0.12) 40%, transparent 70%)",
        }}
      />

      <div className="container-page">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08]">
            {/* Fundo gradiente + sheen */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(120% 120% at 0% 0%, rgba(255,122,26,0.35), transparent 50%), radial-gradient(120% 120% at 100% 100%, rgba(255,184,0,0.28), transparent 55%), linear-gradient(180deg, #14110E 0%, #0A0C18 100%)",
              }}
            />
            <div className="bg-grid-overlay absolute inset-0 -z-10 opacity-40" />

            <div className="px-6 py-14 text-center sm:px-12 sm:py-20">
              <span className="eyebrow">{finalCta.eyebrow}</span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Pronto para analisar a NBA com{" "}
                <span className="text-gradient">mais inteligência?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                {finalCta.text}
              </p>

              {/* Form de email */}
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label className="relative flex-1">
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    placeholder={finalCta.placeholder}
                    className="h-12 w-full rounded-full border border-white/10 bg-white/[0.04] pl-10 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-ember/60 focus:bg-white/[0.06] disabled:opacity-60"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary !h-12 !px-6 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      Enviando
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      {finalCta.cta.label}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              {/* Feedback de envio */}
              <div className="mt-4 min-h-[1.25rem]" aria-live="polite">
                {status === "success" && (
                  <p className="inline-flex items-center gap-1.5 text-sm text-brand-green">
                    <Check size={15} />
                    {message}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-brand-red">{message}</p>
                )}
                {status !== "success" && status !== "error" && (
                  <p className="text-xs text-white/40">
                    Sem spam. Você pode sair da lista a qualquer momento.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
