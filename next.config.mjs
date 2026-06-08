/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permite override do diretório de build via env (usado em CI/locks)
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
