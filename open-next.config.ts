/**
 * OpenNext :: adapter da Cloudflare Workers
 * =========================================
 * Este arquivo é OBRIGATÓRIO para o deploy. Sem ele o build morre com:
 *
 *   Error: No `open-next.config.ts` file was found in the project root.
 *
 * Antes de existir, o wrangler gerava uma versão temporária a cada build —
 * config efêmera, fora do repo, impossível de reproduzir localmente. Por isso
 * cada erro só aparecia em produção. Agora dá para rodar `npm run build` aqui
 * e ver exatamente o que a Cloudflare veria.
 *
 * Cache: o adapter sugere um incremental cache no R2. A landing é praticamente
 * toda estática (só `/api/lead` é dinâmica), então não configuramos — se um dia
 * houver conteúdo revalidado, ver https://opennext.js.org/cloudflare/caching
 */
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),

  /**
   * Por que este `buildCommand` existe
   * ----------------------------------
   * O adapter executa o script `build` do package.json internamente
   * (`buildNextjsApp` → `execSync("npm run build")`).
   *
   * Nosso `build` aponta para o próprio adapter, de propósito: assim o comando
   * de build configurado no painel da Cloudflare (`npm run build`) já produz o
   * `.open-next/worker.js` que o `wrangler deploy` espera, sem ninguém precisar
   * mexer em configuração de painel.
   *
   * O efeito colateral é que, sem sobrescrever aqui, o adapter chamaria o script
   * que o invoca — recursão infinita. Apontando direto para o `next build`, a
   * cadeia fica: painel → `npm run build` → adapter → `next build`.
   */
  buildCommand: "next build",
};
