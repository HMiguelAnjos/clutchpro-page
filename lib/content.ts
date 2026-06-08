/**
 * ClutchPro :: conteúdo da landing page
 * =====================================
 * Toda a copy, dados fictícios, CTAs e ícones ficam aqui.
 * Para editar a landing, mexa SOMENTE neste arquivo na maioria dos casos.
 *
 * Como editar:
 *  - Textos:         altere as strings dentro de cada seção.
 *  - CTAs:           mude `label` e `href` em `cta` / `ctaSecondary`.
 *  - Cards/ícones:   os ícones são nomes do pacote `lucide-react`.
 *  - Dashboard demo: ajuste `dashboardPreview.players` para mudar os mocks.
 */

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  Crosshair,
  Flame,
  LineChart,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

export const nav = {
  brand: "ClutchPro",
  links: [
    { label: "Produto", href: "#solucao" },
    { label: "Features", href: "#features" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Dashboard", href: "#dashboard" },
  ],
  cta: { label: "Entrar na lista", href: "#cta-final" },
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Analytics avançado · NBA",
  titleLines: [
    "Transforme estatísticas da NBA em",
    "decisões inteligentes",
  ],
  // a última palavra recebe destaque em gradiente
  highlight: "decisões inteligentes",
  subtitle:
    "O ClutchPro analisa dados, projeções, ritmo de jogo e performance dos jogadores para encontrar oportunidades com base em estatística — sem achismo.",
  cta: { label: "Entrar na lista de acesso", href: "#cta-final" },
  ctaSecondary: { label: "Ver como funciona", href: "#como-funciona" },
  trustChips: [
    { icon: BarChart3, label: "Projeções estatísticas" },
    { icon: Activity, label: "Leitura ao vivo" },
    { icon: Target, label: "Edge vs. linha" },
  ],
};

/* ------------------------------------------------------------------ */
/* Problema                                                            */
/* ------------------------------------------------------------------ */

export const problem = {
  eyebrow: "O problema",
  title: "Decidir sem dados é depender de achismo",
  description:
    "Quem analisa NBA hoje precisa cruzar dezenas de fontes em segundos. As linhas mudam, a rotação muda, o ritmo muda — e a leitura humana sozinha não acompanha.",
  pains: [
    {
      icon: Radar,
      title: "Estatísticas espalhadas",
      text: "Box scores, splits, on/off, pace e usage em sites diferentes. Nada conversa entre si.",
    },
    {
      icon: Timer,
      title: "Jogo ao vivo é rápido demais",
      text: "Quartos viram, ritmo muda e janelas de decisão somem em poucos minutos.",
    },
    {
      icon: LineChart,
      title: "Linhas se ajustam o tempo todo",
      text: "Sem comparar projeção e linha em tempo real, oportunidade real vira ruído.",
    },
    {
      icon: Flame,
      title: "Sem leitura de momento",
      text: "Jogador quente, minutos esperados e contexto de blowout passam despercebidos.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Solução                                                             */
/* ------------------------------------------------------------------ */

export const solution = {
  eyebrow: "A solução",
  title: "Uma única plataforma para ler o jogo com inteligência",
  description:
    "O ClutchPro centraliza dados, cruza variáveis e devolve leituras claras — para você agir com informação no lugar de palpite.",
  bullets: [
    "Análise de performance dos jogadores",
    "Projeções baseadas em dados históricos e ritmo",
    "Leitura de jogador quente em tempo real",
    "Comparação entre linha atual e projeção",
    "Dados ao vivo durante o jogo",
    "Histórico, tendência e contexto de rotação",
  ],
};

/* ------------------------------------------------------------------ */
/* Features principais                                                 */
/* ------------------------------------------------------------------ */

export type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: "blue" | "violet" | "ember" | "green";
};

export const features: Feature[] = [
  {
    icon: Brain,
    title: "Projeções inteligentes",
    text: "Estimativas baseadas em histórico, ritmo, minutos e produção atual.",
    accent: "blue",
  },
  {
    icon: Flame,
    title: "Jogador quente",
    text: "Identificação de atletas acima do padrão esperado durante o jogo.",
    accent: "ember",
  },
  {
    icon: Activity,
    title: "Análise ao vivo",
    text: "Acompanhe pontos, rebotes, assistências e ritmo em tempo real.",
    accent: "green",
  },
  {
    icon: Crosshair,
    title: "Comparação com linhas",
    text: "Veja quando a projeção está acima ou abaixo da linha disponível.",
    accent: "violet",
  },
  {
    icon: Users,
    title: "Contexto de rotação",
    text: "Entenda minutos esperados, risco de blowout e presença em quadra.",
    accent: "blue",
  },
  {
    icon: BarChart3,
    title: "Dashboard claro",
    text: "Informações organizadas para agir rápido e com mais confiança.",
    accent: "violet",
  },
];

/* ------------------------------------------------------------------ */
/* Como funciona — 3 passos                                            */
/* ------------------------------------------------------------------ */

export const howItWorks = {
  eyebrow: "Como funciona",
  title: "Dos dados brutos ao insight acionável",
  steps: [
    {
      icon: Radar,
      step: "01",
      title: "Coleta de dados",
      text: "O sistema acompanha dados históricos, estatísticas ao vivo e contexto do jogo.",
    },
    {
      icon: Brain,
      step: "02",
      title: "Processamento estatístico",
      text: "Os algoritmos cruzam performance, ritmo, média, momento do jogador e projeções.",
    },
    {
      icon: Sparkles,
      step: "03",
      title: "Insight acionável",
      text: "O usuário recebe uma leitura clara para apoiar sua decisão.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

export const differentiators = {
  eyebrow: "Por que ClutchPro",
  title: "Mais do que números. Leitura de jogo com inteligência.",
  description:
    "Não acreditamos em média de temporada como resposta única. O jogo é dinâmico — sua análise também precisa ser.",
  items: [
    {
      icon: TrendingUp,
      title: "Vai além da média da temporada",
      text: "Pesos diferentes para jogos recentes, contexto e adversário.",
    },
    {
      icon: Flame,
      title: "Considera o momento do jogador",
      text: "Detecta atletas quentes ou abaixo do ritmo esperado em tempo real.",
    },
    {
      icon: Zap,
      title: "Lê o ritmo de jogo",
      text: "Possessões por quarto, pace ajustado e janelas de produção.",
    },
    {
      icon: Users,
      title: "Minutos e rotação",
      text: "Acompanha distribuição de minutos esperados versus jogados.",
    },
    {
      icon: AlertTriangle,
      title: "Contexto de blowout",
      text: "Avalia risco de jogo decidido cedo e impacto na rotação.",
    },
    {
      icon: ShieldCheck,
      title: "Reduz o achismo",
      text: "Insight final é uma leitura clara, não uma promessa de resultado.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Dashboard preview — Terminal de Apostas (dados fictícios)            */
/* ------------------------------------------------------------------ */
/* ⚠️ Esses dados são apenas ilustrativos. Edite livremente.            */
/* Modelo fiel ao produto real: cada jogador tem 3 blocos              */
/* (PTS / AST / REB), uma NOTA composta e status APOSTAR/OBSERVAR.     */

/** Bloco de estatística (atual + linha + projeção). */
export type StatBlock = {
  /** valor acumulado no jogo até agora */
  value: number;
  /** linha do book */
  line: number;
  /** projeção final do modelo */
  projection: number;
  /** projeção - linha (delta — positivo é favorável ao over) */
  delta: number;
  /** se a projeção bate a linha com folga, marca como "bom" (check verde) */
  good: boolean;
};

export type PlayerEntry = {
  id: string;
  player: string;
  team: string;       // ex: "OKC"
  number: number;     // camisa
  minutes: number;    // minutos jogados
  benched?: boolean;  // jogador no banco
  status: "APOSTAR" | "OBSERVAR";
  /** Nota composta 0..10 (quanto maior, mais valor) */
  nota: number;
  pts: StatBlock;
  ast: StatBlock;
  reb: StatBlock;
  /** Agrupamento na home do terminal */
  bucket: "alto-valor" | "neutro";
};

export const dashboardPreview = {
  eyebrow: "Preview do dashboard",
  title: "O Terminal — leitura rápida e visual",
  description:
    "Uma amostra ilustrativa do Terminal de Apostas: linha, projeção, delta e nota composta de cada jogador, agrupados por valor encontrado.",
  disclaimer: "Dados ilustrativos para demonstração visual.",
  groups: {
    altoValor: {
      label: "Alto valor",
      hint: "Jogadores com NOTA alta — onde o modelo enxerga mais edge.",
    },
    neutro: {
      label: "Neutro",
      hint: "Para observar — sem edge expressivo agora.",
    },
  },
  players: [
    {
      id: "ajay-mitchell",
      player: "Ajay Mitchell",
      team: "OKC",
      number: 25,
      minutes: 11.1,
      benched: true,
      status: "APOSTAR",
      nota: 7.5,
      bucket: "alto-valor",
      pts: { value: 8, line: 18.8, projection: 18.7, delta: -0.1, good: false },
      ast: { value: 3, line: 6, projection: 7.2, delta: 1.2, good: true },
      reb: { value: 3, line: 5, projection: 7, delta: 2.0, good: true },
    },
    {
      id: "jaxson-hayes",
      player: "Jaxson Hayes",
      team: "LAL",
      number: 11,
      minutes: 5.3,
      benched: true,
      status: "OBSERVAR",
      nota: 4.8,
      bucket: "neutro",
      pts: { value: 4, line: 5.5, projection: 10.9, delta: 5.4, good: true },
      ast: { value: 0, line: 0.5, projection: 0.6, delta: 0.1, good: false },
      reb: { value: 1, line: 2.5, projection: 4.2, delta: 1.7, good: true },
    },
    {
      id: "luguentz-dort",
      player: "Luguentz Dort",
      team: "OKC",
      number: 5,
      minutes: 9.7,
      status: "OBSERVAR",
      nota: 5.7,
      bucket: "neutro",
      pts: { value: 6, line: 9.5, projection: 14.7, delta: 5.2, good: true },
      ast: { value: 0, line: 0.5, projection: 0.2, delta: -0.3, good: false },
      reb: { value: 0, line: 1.5, projection: 0.5, delta: -1.0, good: false },
    },
    {
      id: "jared-mccain",
      player: "Jared McCain",
      team: "OKC",
      number: 3,
      minutes: 6.7,
      status: "OBSERVAR",
      nota: 6.0,
      bucket: "neutro",
      pts: { value: 5, line: 6.5, projection: 11.1, delta: 4.6, good: true },
      ast: { value: 0, line: 1, projection: 0.1, delta: -0.9, good: false },
      reb: { value: 2, line: 3.5, projection: 3.8, delta: 0.3, good: false },
    },
  ] as PlayerEntry[],
};

/* ------------------------------------------------------------------ */
/* Aviso responsável                                                   */
/* ------------------------------------------------------------------ */

export const disclaimer = {
  title: "Análise estatística, não promessa de resultado",
  text: "O ClutchPro não garante resultados. A plataforma oferece análises estatísticas para apoiar decisões. Use com responsabilidade.",
};

/* ------------------------------------------------------------------ */
/* CTA final                                                           */
/* ------------------------------------------------------------------ */

export const finalCta = {
  eyebrow: "Acesso antecipado",
  title: "Pronto para analisar a NBA com mais inteligência?",
  text: "Entre na lista de acesso e acompanhe a evolução do ClutchPro.",
  cta: { label: "Quero acesso ao ClutchPro", href: "#cta-final" },
  placeholder: "seu@email.com",
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  brand: "ClutchPro",
  tagline: "Inteligência estatística para a NBA.",
  columns: [
    {
      title: "Produto",
      links: [
        { label: "Features", href: "#features" },
        { label: "Como funciona", href: "#como-funciona" },
        { label: "Dashboard", href: "#dashboard" },
      ],
    },
    {
      title: "Empresa",
      links: [
        // "#contato" é um marcador: o Footer troca por um link mailto quando
        // NEXT_PUBLIC_CONTACT_EMAIL estiver configurado (senão, oculta).
        { label: "Contato", href: "#contato" },
        { label: "Acesso antecipado", href: "#cta-final" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos", href: "#" },
        { label: "Privacidade", href: "#" },
        { label: "Uso responsável", href: "#aviso" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} ClutchPro. Todos os direitos reservados.`,
};
