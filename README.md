# ClutchPro · Landing Page

Landing page premium do **ClutchPro** — inteligência estatística dedicada à **NBA**.

A landing apresenta o produto e direciona o visitante para a plataforma:

| Plataforma    | URL                              |
| ------------- | -------------------------------- |
| ClutchPro NBA | https://nba.clutchprosports.com/ |

> O link fica em **um único lugar**: `lib/content.ts > platforms`. Navbar, Hero,
> seção da plataforma e rodapé leem todos de lá.

### 🏀 Foco em basquete

A landing já apresentou também a plataforma de **Futebol**
(`football.clutchprosports.com`). Ela foi retirada da página por decisão de
posicionamento — **não** foi descontinuada.

O código foi preparado para o retorno ser barato:

- `platforms` continua sendo uma **lista**; basta acrescentar um segundo objeto
- os componentes já iteram sobre ela e trocam de layout sozinhos
  (card largo em 2 colunas quando há um; grade lado a lado quando há dois)
- o `Navbar` volta a exibir o menu suspenso "Entrar" automaticamente
- os design tokens verdes (`brand.pitch`, `btn-pitch`, `text-gradient-pitch`,
  `gradient-border-pitch`) seguem no projeto

O que **não** volta sozinho: a seção `Proof` (transparência), que era 100%
alimentada por dados do painel de futebol. Foi removida em vez de ter os números
reetiquetados como NBA — publicar histórico de acerto de um esporte como se fosse
de outro seria inventar track record. Está no histórico do git, pronta para
voltar quando houver amostra liquidada de NBA.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
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
| Cores da marca           | `tailwind.config.ts > theme.extend.colors.brand`      |
| Gradientes / glow        | `tailwind.config.ts > backgroundImage / boxShadow`    |
| Fontes                   | `app/layout.tsx`                                      |
| Logo                     | `public/logo-mark.png` + `app/icon.png` (favicon)     |
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

## Deploy (Cloudflare Workers)

O deploy roda em **Cloudflare Workers**, via *Workers Builds* ligado ao repo, usando
o adapter [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

### A cadeia de build

```
painel da Cloudflare  ->  npm run build
                            -> opennextjs-cloudflare build
                                 -> next build            (via `buildCommand`)
                                 -> gera .open-next/worker.js
painel da Cloudflare  ->  npx wrangler deploy
                            -> publica .open-next/worker.js
```

O `build` do `package.json` aponta de propósito para o adapter, e o
`open-next.config.ts` redireciona o passo interno para o `next build`. Isso evita
recursão **e** dispensa qualquer configuração extra no painel.

### Arquivos que NÃO podem sumir

| Arquivo               | Por quê |
| --------------------- | ------- |
| `open-next.config.ts` | Sem ele o build aborta: *No `open-next.config.ts` file was found* |
| `wrangler.jsonc`      | Define o Worker, o entrypoint e os bindings |
| `public/_headers`     | Cache dos estáticos (`/_next/static/*`) |

> ⚠️ O campo `name` do `wrangler.jsonc` **tem que ser `clutchpro-page`** — é o nome
> do Worker que já existe. O `opennextjs-cloudflare migrate` preenche com o nome do
> `package.json` (`clutchpro-landingpage`), o que criaria um Worker novo e deixaria
> o domínio apontando para o antigo. O `WORKER_SELF_REFERENCE` precisa casar com ele.

### Reproduzir o build da Cloudflare localmente

Antes de commitar qualquer coisa que afete o deploy, rode:

```bash
npm run build
```

É **exatamente** o que a Cloudflare executa. Se terminar em `OpenNext build complete.`
e gerar `.open-next/worker.js`, o build lá vai passar. Isso evita descobrir erro em
produção — que foi como este projeto perdeu três deploys seguidos.

Para pré-visualizar o Worker de verdade (não só o `next dev`):

```bash
npm run preview
```

> O `wrangler` exige **Node.js >= 22**. O `npm run build` funciona em versões
> anteriores, mas `preview`/`deploy` não.

### Variáveis de ambiente

Cadastre no painel do Worker, em **Settings → Variables and Secrets**.
`SUPABASE_SERVICE_ROLE_KEY` deve entrar como **Secret**, nunca como texto puro.

Para desenvolvimento local, o arquivo `.dev.vars` cumpre o papel do `.env.local`
no runtime do Worker — e está no `.gitignore`.

### Cache

O adapter sugere um *incremental cache* no R2. Não configuramos: a landing é
praticamente toda estática (só `/api/lead` é dinâmica). Se um dia houver conteúdo
revalidado, ver [a doc de caching](https://opennext.js.org/cloudflare/caching).

### ⚠️ Versão do Next.js — duas restrições

O deploy passa pelo `@opennextjs/cloudflare`, que impõe **duas** regras. As duas
falham *depois* de o build ter passado, então não confie só no `next build`.

**1. Faixa de versão aceita pelo adapter**

```
next: ">=15.5.21 <16 || >=16.2.11"
```

Fora disso, o `wrangler` nem consegue autoconfigurar o projeto.

**2. O major precisa estar dentro do suporte do Next.js**

O adapter recusa majors fora da [política de suporte](https://nextjs.org/support-policy)
do Next (2 anos a partir do lançamento):

```
ERROR Next.js version 14.2.35 is not supported by the Next.js team.
Major versions are supported for 2 years from their release date.
```

Por isso o projeto está no **Next 16**, e não no 15: a linha 15 saiu em out/2024
e perde o suporte em **out/2026** — subir pra ela seria repetir esse mesmo erro
poucos meses depois.

> Existe a flag `--dangerouslyUseUnsupportedNextVersion` para forçar o deploy com
> um major sem suporte. **Não use**: "sem suporte" significa vulnerabilidade sem
> patch em um site público. O nome da flag não é acidente.

## Estrutura

```
app/
  layout.tsx          # fontes + metadata
  page.tsx            # ordem das seções
  globals.css         # estilos globais + utilitários
components/
  Logo.tsx            # escudo (PNG) + wordmark tipográfico
  Navbar.tsx          # marca + botão "Entrar" (vira menu se houver 2 produtos)
  Hero.tsx
  Platforms.tsx       # 🔑 o produto + link de acesso
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
- `brand.ember` `#FF7A1A` / `brand.emberBright` `#FF9A45` — **cor protagonista**
  (vem da logo) e identidade da plataforma de **NBA**
- `brand.amber` `#FFB800` / `brand.amberLight` `#FFD15C` — highlights dourados
- `brand.pitch` `#12B76A` / `brand.pitchBright` `#3DDC97` — verde gramado,
  **reservado** para o eventual retorno da plataforma de Futebol
- `brand.blue` `#3D7BFF` / `brand.blueBright` `#4EA0FF` — secundário tech
- `brand.violet` `#7C4DFF` — terciário (bloco REB do Terminal)
- `brand.green` `#22C55E` / `brand.red` `#FF4D5E` — status

Para mudar a vibe da marca, ajuste só esses tokens.

### Nota sobre camadas (`-z-10`)

Os brilhos decorativos usam `-z-10`. Para que fiquem **visíveis**, a seção que os
contém precisa criar um stacking context — por isso todas usam `relative isolate`.
Sem o `isolate`, o glow cai atrás do fundo do `body` e some. Se criar uma seção
nova com glow, lembre do `isolate`.
