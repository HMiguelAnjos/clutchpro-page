/**
 * POST /api/lead
 * ==============
 * Recebe o email do formulário de acesso antecipado (FinalCTA) e grava na
 * tabela `leads` do Supabase.
 *
 * Roda no servidor — a `service_role key` nunca chega ao browser.
 *
 * Respostas:
 *  - 200 { ok: true }            → email salvo (ou já existente na lista)
 *  - 400 { error }               → email inválido
 *  - 503 { error }               → Supabase ainda não configurado
 *  - 500 { error }               → falha inesperada ao gravar
 *
 * Setup do banco: rode `supabase-schema.sql` no SQL Editor do Supabase.
 */
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

// Garante execução no runtime Node (o client do Supabase não roda no Edge).
export const runtime = "nodejs";

// Validação simples e suficiente de formato de email.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Banco ainda não conectado — não perdemos o lead silenciosamente:
    // registramos no log do servidor para não ficar invisível.
    console.error("[lead] Supabase não configurado. Lead não salvo:", normalized);
    return NextResponse.json(
      { error: "Cadastro temporariamente indisponível. Tente novamente em breve." },
      { status: 503 }
    );
  }

  const { error } = await supabase
    .from("leads")
    .insert({ email: normalized, source: "landing-final-cta" });

  if (error) {
    // 23505 = unique_violation → email já está na lista. Tratamos como sucesso.
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, alreadyRegistered: true });
    }
    console.error("[lead] Erro ao inserir no Supabase:", error);
    return NextResponse.json(
      { error: "Não foi possível concluir agora. Tente novamente." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
