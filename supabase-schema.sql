-- ClutchPro · Landing — esquema da tabela de leads
-- =================================================
-- Como usar:
--   1. Crie um projeto em https://supabase.com (plano free serve).
--   2. No painel do projeto, vá em "SQL Editor" → "New query".
--   3. Cole TODO este arquivo e clique em "Run".
--   4. Pegue as credenciais em "Project Settings" → "API" e coloque no
--      .env.local / nas variáveis da Vercel (veja .env.example).

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  source      text default 'landing',
  created_at  timestamptz not null default now()
);

-- Evita email duplicado na lista (case-insensitive).
create unique index if not exists leads_email_unique
  on public.leads (lower(email));

-- Segurança: liga RLS e NÃO cria nenhuma policy pública.
-- Assim, só a `service_role key` (usada pela API no servidor) consegue
-- ler/gravar. O anon key e o browser não têm acesso à tabela.
alter table public.leads enable row level security;

-- Para CONSULTAR seus leads depois:
--   - pelo painel do Supabase: "Table Editor" → leads, ou
--   - SQL: select email, source, created_at from public.leads order by created_at desc;
