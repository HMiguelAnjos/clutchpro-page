import type { Config } from "tailwindcss";

/**
 * ClutchPro design tokens
 * -----------------------
 * Cores principais e efeitos visuais centralizados aqui.
 * Para trocar a identidade visual, ajuste os tokens em `colors.brand` e
 * `boxShadow.glow*`. As classes utilitárias da landing usam esses tokens.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      colors: {
        // Paleta alinhada à logo ClutchPro: laranja brasa + dourado + azul tech.
        // Para ajustar a identidade, mexa aqui — todos os componentes herdam.
        brand: {
          ink: "#05060B",
          deep: "#0A0C18",
          panel: "#10121E",
          line: "#1F2238",
          mute: "#8A92B2",
          text: "#ECEDF5",
          // Laranja é a cor protagonista (vem da logo)
          ember: "#FF7A1A",
          emberBright: "#FF9A45",
          // Dourado/âmbar: highlights e destaques
          amber: "#FFB800",
          amberLight: "#FFD15C",
          // Azul tech como secundário (mantém vibe analytics/SaaS)
          blue: "#3D7BFF",
          blueBright: "#4EA0FF",
          violet: "#7C4DFF",
          // Status
          green: "#22C55E",
          red: "#FF4D5E",
        },
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        // Hero: predominância laranja (logo) com azul tech sutil ao fundo
        "hero-radial":
          "radial-gradient(55% 50% at 50% 0%, rgba(255,122,26,0.32) 0%, rgba(255,122,26,0) 60%), radial-gradient(40% 35% at 80% 25%, rgba(255,184,0,0.22) 0%, rgba(255,184,0,0) 70%), radial-gradient(40% 35% at 15% 30%, rgba(61,123,255,0.18) 0%, rgba(61,123,255,0) 70%)",
        "card-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 70%)",
      },
      boxShadow: {
        glowEmber: "0 0 0 1px rgba(255,122,26,0.28), 0 20px 60px -20px rgba(255,122,26,0.55)",
        glowAmber: "0 0 0 1px rgba(255,184,0,0.28), 0 20px 60px -20px rgba(255,184,0,0.5)",
        glowBlue: "0 0 0 1px rgba(78,160,255,0.22), 0 20px 60px -20px rgba(61,123,255,0.4)",
        glowViolet: "0 0 0 1px rgba(124,77,255,0.22), 0 20px 60px -20px rgba(124,77,255,0.4)",
        panel: "0 30px 80px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.85)" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
