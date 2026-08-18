/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permite override do diretório de build via env (usado em CI/locks)
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;

/**
 * Disponibiliza as bindings da Cloudflare (env, assets, images) durante o
 * `next dev`, para o ambiente local parecer com o Worker de produção.
 * Só tem efeito em desenvolvimento — no build de produção é inócuo.
 * Adicionado por `opennextjs-cloudflare migrate`; ver open-next.config.ts.
 */
import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
