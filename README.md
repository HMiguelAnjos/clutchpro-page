# ClutchPro · Landing Page

Landing page premium do **ClutchPro** — plataforma de análise estatística da NBA.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** com tokens de design dedicados (`tailwind.config.ts`)
- **Framer Motion** para animações sutis
- **Lucide React** para ícones

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Como editar conteúdo

Todo o texto, dados fictícios e CTAs estão centralizados em **`lib/content.ts`**.
Na grande maioria dos casos, basta editar esse arquivo.

### Onde mexer em cada coisa

| O que mudar              | Onde                                                  |
| ------------------------ | ----------------------------------------------------- |
| Textos da landing        | `lib/content.ts`                                      |
| CTAs (label + href)      | `lib/content.ts` (campo `cta` em cada seção)          |
| Dados do dashboard demo  | `lib/content.ts > dashboardPreview.players`           |
| Cores da marca           | `tailwind.config.ts > theme.extend.colors.brand`      |
| Gradientes / glow        | `tailwind.config.ts > backgroundImage / boxShadow`    |
| Fontes                   | `app/layout.tsx`                                      |
| Logo                     | `components/Logo.tsx` (SVG inline — trocar à vontade) |
| Ordem das seções         | `app/page.tsx`                                        |
| Estilos globais          | `app/globals.css`                                     |

### Captura de email (CTA final)

O formulário em `components/FinalCTA.tsx` envia o email para `POST /api/lead`
([app/api/lead/route.ts](app/api/lead/route.ts)), que grava na tabela `leads`
do Supabase. Já está funcional — basta configurar o Supabase (abaixo).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável                    | Para que serve                                  |
| --------------------------- | ----------------------------------------------- |
| `SUPABASE_URL`              | URL do projeto Supabase (Settings → API)        |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave secreta `service_role` (Settings → API)   |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email de contato exibido no rodapé (opcional)   |

> A `service_role key` é **secreta** e só roda no servidor. Nunca use prefixo
> `NEXT_PUBLIC_` nela. Enquanto o Supabase não estiver configurado, o formulário
> responde com uma mensagem amigável e registra o lead no log do servidor.

## Setup do Supabase (captura de leads)

1. Crie um projeto grátis em [supabase.com](https://supabase.com).
2. No painel: **SQL Editor → New query**, cole o conteúdo de
   [`supabase-schema.sql`](supabase-schema.sql) e clique em **Run**.
3. Em **Project Settings → API**, copie a *Project URL* e a chave *service_role*
   para o `.env.local` (e depois para a plataforma de deploy).
4. Seus leads aparecem em **Table Editor → leads**.

## Deploy (Vercel — recomendado)

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), **Add New → Project** e importe o repo
   (a Vercel detecta Next.js automaticamente, sem configuração).
3. Em **Settings → Environment Variables**, cadastre as três variáveis acima.
4. **Deploy**. A página fica no ar em `https://<projeto>.vercel.app` (HTTPS grátis).

Para republicar depois de qualquer mudança, basta dar `git push` — a Vercel
faz o redeploy sozinha.

## Estrutura

```
app/
  layout.tsx          # fontes + metadata
  page.tsx            # ordem das seções
  globals.css         # estilos globais + utilitários
components/
  Logo.tsx
  Navbar.tsx
  Hero.tsx
  Problem.tsx
  Solution.tsx
  Features.tsx
  HowItWorks.tsx
  Differentiators.tsx
  DashboardPreview.tsx
  Disclaimer.tsx
  FinalCTA.tsx
  Footer.tsx
  primitives/
    Reveal.tsx        # entrada animada
    SectionHeading.tsx
lib/
  content.ts          # 🔑 toda a copy aqui
  utils.ts
```

## Design tokens

Paleta principal (em `tailwind.config.ts`):

- `brand.ink` `#05060B` — fundo escuro principal
- `brand.deep` `#0A0C18` — fundo de painéis
- `brand.blue` `#3D7BFF` / `brand.blueBright` `#4EA0FF` — primário NBA tech
- `brand.violet` `#7C4DFF` — secundário premium
- `brand.ember` `#FF6B2C` — destaque (laranja NBA)
- `brand.amber` `#FFB547` — accent
- `brand.green` `#22D39A` / `brand.red` `#FF5468` — status

Para mudar a vibe da marca, ajuste só esses tokens.
