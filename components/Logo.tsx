import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo ClutchPro
 * ---------------
 * Usa a imagem em /public/logo.png (a logo completa com símbolo + wordmark).
 *
 * Como trocar a logo:
 *  1. Substitua o arquivo `public/logo.png`
 *  2. (Opcional) Ajuste `width`/`height` em <Image /> abaixo
 *
 * Como gerar variações (Mark / Full):
 *  - `LogoMark`: usa só a parte gráfica — ideal para favicon, mobile compacto.
 *    Por enquanto reaproveita a imagem completa com object-fit; quando você
 *    tiver a versão só-símbolo, salve em `/public/logo-mark.png` e troque o src.
 *  - `LogoFull`: imagem completa (símbolo + wordmark) — usada na Navbar e Footer.
 */

/* 🔧 TROQUE AQUI quando salvar sua logo real:
 *    Salve a logo em public/logo.png e mude para "/logo.png".
 *    O .svg atual é só um placeholder provisório (estilo aproximado da sua logo).
 */
const LOGO_FULL_SRC = "/logo.svg";
const LOGO_MARK_SRC = "/logo.svg";

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-9 w-9 overflow-hidden", className)}>
      {/* Recorte para mostrar apenas a parte do escudo da logo composta */}
      <Image
        src={LOGO_MARK_SRC}
        alt="ClutchPro"
        fill
        sizes="36px"
        className="object-contain object-left"
        priority
      />
    </div>
  );
}

export function LogoFull({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const heightClass =
    size === "lg" ? "h-14 sm:h-16" : size === "sm" ? "h-8" : "h-10 sm:h-11";
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <Image
        src={LOGO_FULL_SRC}
        alt="ClutchPro"
        width={360}
        height={96}
        priority
        className={cn("w-auto select-none", heightClass)}
      />
    </div>
  );
}
