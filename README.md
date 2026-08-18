# ClutchPro · Landing Page

Landing page premium do **ClutchPro** — inteligência estatística para **NBA** e
**futebol**.

A landing apresenta as duas plataformas do produto e direciona o visitante para
cada uma delas:

| Plataforma          | URL                                  |
| ------------------- | ------------------------------------ |
| ClutchPro NBA       | https://nba.clutchprosports.com/     |
| ClutchPro Football  | https://football.clutchprosports.com/ |

> Os links ficam em **um único lugar**: `lib/content.ts > platforms`. Navbar,
> Hero, seção de plataformas e rodapé leem todos de lá.

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
| Links dos bots           | `lib/content.ts > platforms` (campo `href`)           |
| Dados do dashboard demo  | `lib/content.ts > dashboardPreview.players`           |
| Preview do futebol       | `lib/content.ts > footballPreview`                    |
| Números de transparência | `lib/content.ts > proof` ⚠️ estáticos — ver abaixo    |
| Cores da marca           | `tailwind.config.ts > theme.extend.colors.brand`      |
| Gradientes / glow        | `tailwind.config.ts > backgroundImage / boxShadow`    |
| Fontes                   | `app/layout.tsx`                                      |
| Logo                     | `public/logo-mark.png` + `app/icon.png` (favicon)     |
| Ordem das seções         | `app/page.tsx`                                        |
| Estilos globais          | `app/globals.css`                                     |

### ⚠️ Números da seção "Transparência"

`lib/content.ts > proof` traz um recorte **estático** do painel de desempenho da
plataforma de futebol (leituras liquidadas, acerto por mercado e calibração).
Eles **não se atualizam sozinhos**. Revise periodicamente — se a landing ficar
muito tempo sem atualização, prefira remover a seção de `app/page.tsx` a exibir
número velho.

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

## Deploy (Cloudflare Workers)

O deploy roda em **Cloudflare Workers**, via *Workers Builds* ligado ao repo:

| Etapa           | Comando           |
| --------------- | ----------------- |
| Build           | `npm run build`   |
| Deploy          | `npx wrangler deploy` |
| Output          | `.next`           |
| Worker          | `clutchpro-page`  |

Cadastre as variáveis de ambiente (acima) no painel do Worker, em
**Settings → Variables and Secrets**. `SUPABASE_SERVICE_ROLE_KEY` deve entrar
como **Secret**, nunca como variável de texto puro.

Depois é só dar `git push` — a Cloudflare refaz o build e o deploy sozinha.

### ⚠️ Versão mínima do Next.js

O `wrangler` só configura o projeto automaticamente a partir do
**Next.js 14.2.35**. Em versões anteriores o build passa, mas o deploy morre com:

```
✘ [ERROR] The version of Next.js used in the project ("14.2.18") cannot be
  automatically configured. Please update the Next.js version to at least "14.2.35"
```

Por isso a versão em `package.json` fica **fixada sem `^`**. Se for atualizar,
não desça de `14.2.35`.

## Estrutura

```
app/
  layout.tsx          # fontes + metadata
  page.tsx            # ordem das seções
  globals.css         # estilos globais + utilitários
components/
  Logo.tsx            # escudo (PNG) + wordmark tipográfico
  Navbar.tsx          # marca + menu "Entrar" com as duas plataformas
  Hero.tsx
  Platforms.tsx       # 🔑 os dois produtos + links de acesso
  Problem.tsx
  Solution.tsx
  Features.tsx
  HowItWorks.tsx
  Differentiators.tsx
  DashboardPreview.tsx
  Proof.tsx           # transparência: acerto por mercado + calibração
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
- `brand.ember` `#FF7A1A` / `brand.emberBright` `#FF9A45` — **cor protagonista**
  (vem da logo) e identidade da plataforma de **NBA**
- `brand.amber` `#FFB800` / `brand.amberLight` `#FFD15C` — highlights dourados
- `brand.pitch` `#12B76A` / `brand.pitchBright` `#3DDC97` — identidade da
  plataforma de **Futebol** (verde gramado)
- `brand.blue` `#3D7BFF` / `brand.blueBright` `#4EA0FF` — secundário tech
- `brand.violet` `#7C4DFF` — terciário (bloco REB do Terminal)
- `brand.green` `#22C55E` / `brand.red` `#FF4D5E` — status

Para mudar a vibe da marca, ajuste só esses tokens.

### Nota sobre camadas (`-z-10`)

Os brilhos decorativos usam `-z-10`. Para que fiquem **visíveis**, a seção que os
contém precisa criar um stacking context — por isso todas usam `relative isolate`.
Sem o `isolate`, o glow cai atrás do fundo do `body` e some. Se criar uma seção
nova com glow, lembre do `isolate`.
