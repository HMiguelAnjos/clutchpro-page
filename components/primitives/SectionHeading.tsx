import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Cabeçalho padrão das seções: eyebrow + título + descrição.
 * Use em qualquer seção para manter consistência visual.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleHighlight,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  /** Trecho do título que receberá gradiente. */
  titleHighlight?: string;
}) {
  const renderTitle = () => {
    if (!titleHighlight) return title;
    const idx = title.toLowerCase().indexOf(titleHighlight.toLowerCase());
    if (idx === -1) return title;
    const before = title.slice(0, idx);
    const match = title.slice(idx, idx + titleHighlight.length);
    const after = title.slice(idx + titleHighlight.length);
    return (
      <>
        {before}
        <span className="text-gradient">{match}</span>
        {after}
      </>
    );
  };

  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && <div className="mb-5 flex justify-center"><span className="eyebrow">{eyebrow}</span></div>}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
