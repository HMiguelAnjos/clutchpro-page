/**
 * Cliente Supabase — SERVER ONLY.
 * =================================
 * Usa a `service_role key`, que tem acesso total ao banco e NUNCA pode ir
 * para o browser. Por isso este módulo só deve ser importado em código de
 * servidor (ex: `app/api/.../route.ts`).
 *
 * As variáveis ficam em `.env.local` (local) e nas Environment Variables da
 * plataforma de deploy (Vercel/Netlify). Veja `.env.example`.
 *
 * A inicialização é "lazy": se as variáveis não estiverem configuradas,
 * `getSupabaseAdmin()` retorna `null` em vez de quebrar o build. Assim a
 * landing continua no ar mesmo antes de o Supabase estar conectado.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    // Ainda não configurado — quem chamar deve tratar o `null`.
    return null;
  }

  cached = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return cached;
}
