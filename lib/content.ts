/**
 * ClutchPro :: conteúdo da landing page
 * =====================================
 * Toda a copy, dados ilustrativos, CTAs e ícones ficam aqui.
 * Para editar a landing, mexa SOMENTE neste arquivo na maioria dos casos.
 *
 * Como editar:
 *  - Textos:         altere as strings dentro de cada seção.
 *  - CTAs:           mude `label` e `href` em `cta` / `ctaSecondary`.
 *  - Plataformas:    `platforms` controla os dois produtos (NBA e Futebol).
 *  - Cards/ícones:   os ícones são nomes do pacote `lucide-react`.
 *  - Números de prova: `proof` — ver o aviso de atualização na própria seção.
 */

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  Crosshair,
  Flame,
  Gauge,
  Goal,
  Layers,
  LineChart,
  Radar,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Plataformas — os dois produtos da ClutchPro                         */
/* ------------------------------------------------------------------ */
/* ⚠️ É AQUI que ficam os links dos bots. Trocou de domínio? Mude só    */
/*    o `href` abaixo — Navbar, Hero, seção de plataformas e Footer     */
/*    leem todos deste mesmo lugar.                                     */

export type PlatformId = "nba" | "football";

export type Platform = {
  id: PlatformId;
  /** Rótulo curto usado em menus (ex.: "NBA") */
  short: string;
  /** Nome completo do produto */
  name: string;
  /** Esporte / contexto */
  sport: string;
  /** Frase de uma linha — o que a plataforma é */
  tagline: string;
  /** Parágrafo de apresentação */
  description: string;
  /** URL do produto (abre em nova aba) */
  href: string;
  /** Identidade visual do card: brasa (NBA) ou gramado (Futebol) */
  accent: "ember" | "pitch";
  icon: LucideIcon;
  /** Selo de status exibido no card */
  status: string;
  /** O que a plataforma entrega (4 itens) */
  highlights: { icon: LucideIcon; title: string; text: string }[];
  /** Métricas de topo do card */
  metrics: { value: string; label: string }[];
  cta: string;
};

export const platforms: Platform[] = [
  {
    id: "nba",
    short: "NBA",
    name: "ClutchPro NBA",
    sport: "Basquete · NBA",
    tagline: "O Terminal, jogador a jogador, ao vivo.",
    description:
      "Acompanhe pontos, assistências e rebotes de cada atleta com linha, projeção e delta se atualizando durante a partida. A NOTA composta resume, em um número, onde o modelo enxerga mais vantagem.",
    href: "https://nba.clutchprosports.com/",
    accent: "ember",
    icon: Trophy,
    status: "Ao vivo durante os jogos",
    highlights: [
      {
        icon: Crosshair,
        title: "Projeção contra a linha",
        text: "O delta entre o que o modelo projeta e a linha disponível, em tempo real.",
      },
      {
        icon: Gauge,
        title: "NOTA composta 0–10",
        text: "Um único número que resume PTS, AST, REB, minutos e contexto do jogo.",
      },
      {
        icon: Flame,
        title: "Jogador quente",
        text: "Atletas acima do padrão esperado destacados enquanto a partida acontece.",
      },
      {
        icon: Layers,
        title: "Detalhe por quarter",
        text: "Abra cada jogador e veja a produção quarto a quarto, não só o acumulado.",
      },
    ],
    metrics: [
      { value: "PTS · AST · REB", label: "Mercados" },
      { value: "Ao vivo", label: "Atualização" },
      { value: "0–10", label: "Escala da NOTA" },
    ],
    cta: "Acessar ClutchPro NBA",
  },
  {
    id: "football",
    short: "Futebol",
    name: "ClutchPro Football",
    sport: "Futebol · Ligas do mundo todo",
    tagline: "Sua central de decisão, orientada a confiança.",
    description:
      "As oportunidades do dia com a probabilidade real de cada evento acontecer — e o motivo escrito em português claro. Por trás, um painel de calibração que compara a confiança prometida com o acerto que realmente aconteceu.",
    href: "https://football.clutchprosports.com/",
    accent: "pitch",
    icon: Goal,
    status: "Oportunidades atualizadas todo dia",
    highlights: [
      {
        icon: ScanLine,
        title: "Nove mercados acompanhados",
        text: "Dupla chance, gols, cartões, escanteios, desarmes, finalizações e mais.",
      },
      {
        icon: Brain,
        title: "Probabilidade explicada",
        text: "Cada oportunidade vem com a chance estimada e a justificativa em texto.",
      },
      {
        icon: Activity,
        title: "Calibração aberta",
        text: "Confiança prometida × acerto real, faixa a faixa. Inclusive onde erramos.",
      },
      {
        icon: Radar,
        title: "Agenda e análise por jogo",
        text: "Champions, Libertadores, La Liga, Série B — próximos jogos com leitura pronta.",
      },
    ],
    metrics: [
      { value: "595", label: "Picks liquidadas" },
      { value: "61%", label: "Taxa de acerto" },
      { value: "9", label: "Mercados" },
    ],
    cta: "Acessar ClutchPro Football",
  },
];

/** Atalho para buscar uma plataforma pelo id. */
export const platformById = (id: PlatformId) =>
  platforms.find((p) => p.id === id)!;

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

export const nav = {
  brand: "ClutchPro",
  links: [
    { label: "Plataformas", href: "#plataformas" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Transparência", href: "#transparencia" },
    { label: "Diferenciais", href: "#diferenciais" },
  ],
  /** Menu "Entrar" — leva direto para cada bot */
  loginLabel: "Entrar",
  cta: { label: "Acesso antecipado", href: "#cta-final" },
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Análise · Edge · Decisão",
  titleLines: ["Onde a estatística", "vira decisão"],
  // a expressão abaixo recebe destaque em gradiente
  highlight: "vira decisão",
  subtitle:
    "Um motor estatístico, duas plataformas. O ClutchPro cruza histórico, ritmo, forma e contexto de jogo para mostrar onde existe vantagem real — na NBA e no futebol. Sem achismo e sem promessa de resultado.",
  cta: { label: "Entrar na lista de acesso", href: "#cta-final" },
  ctaSecondary: { label: "Ver as plataformas", href: "#plataformas" },
  trustChips: [
    { icon: BarChart3, label: "Projeções estatísticas" },
    { icon: Activity, label: "Leitura ao vivo" },
    { icon: Target, label: "Edge vs. linha" },
    { icon: ShieldCheck, label: "Calibração aberta" },
  ],
};

/* ------------------------------------------------------------------ */
/* Problema                                                            */
/* ------------------------------------------------------------------ */

export const problem = {
  eyebrow: "O problema",
  title: "Decidir sem dados é depender de achismo",
  description:
    "Quem analisa esporte hoje precisa cruzar dezenas de fontes em segundos. As linhas mudam, a escalação muda, o ritmo muda — e a leitura humana sozinha não acompanha.",
  pains: [
    {
      icon: Radar,
      title: "Estatísticas espalhadas",
      text: "Box scores, splits, forma recente, cartões e escanteios em sites diferentes. Nada conversa entre si.",
    },
    {
      icon: Timer,
      title: "O jogo é rápido demais",
      text: "Quartos e tempos viram, o ritmo muda e janelas de decisão somem em poucos minutos.",
    },
    {
      icon: LineChart,
      title: "Linhas se ajustam o tempo todo",
      text: "Sem comparar projeção e linha em tempo real, oportunidade real vira ruído.",
    },
    {
      icon: AlertTriangle,
      title: "Ninguém mostra onde errou",
      text: "Palpite acertado vira print; palpite errado some. Sem histórico auditável não há confiança.",
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
    "Análise de performance jogador a jogador",
    "Projeções baseadas em histórico, forma e ritmo",
    "Leitura de momento em tempo real",
    "Comparação entre linha atual e projeção",
    "Probabilidade com justificativa escrita",
    "Histórico de acerto aberto e calibrado",
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
    text: "Estimativas construídas sobre histórico, ritmo, minutos e produção atual — não sobre média simples.",
    accent: "blue",
  },
  {
    icon: Flame,
    title: "Leitura de momento",
    text: "Atletas e equipes acima ou abaixo do padrão esperado, identificados enquanto o jogo acontece.",
    accent: "ember",
  },
  {
    icon: Activity,
    title: "Acompanhamento ao vivo",
    text: "Produção, ritmo e contexto atualizados durante a partida, sem você trocar de aba.",
    accent: "green",
  },
  {
    icon: Crosshair,
    title: "Comparação com linhas",
    text: "Veja de imediato quando a projeção está acima ou abaixo da linha disponível.",
    accent: "violet",
  },
  {
    icon: Gauge,
    title: "Confiança calibrada",
    text: "Cada leitura carrega um nível de confiança que é auditado contra o resultado real.",
    accent: "blue",
  },
  {
    icon: BarChart3,
    title: "Painéis que decidem rápido",
    text: "Informação hierarquizada para agir em segundos — não para estudar planilha.",
    accent: "violet",
  },
];

/* ------------------------------------------------------------------ */
/* Como funciona — 4 passos                                            */
/* ------------------------------------------------------------------ */

export const howItWorks = {
  eyebrow: "Como funciona",
  title: "Dos dados brutos ao insight acionável",
  steps: [
    {
      icon: Radar,
      step: "01",
      title: "Coleta contínua",
      text: "O sistema acompanha histórico, estatísticas ao vivo, escalações e contexto de cada jogo.",
    },
    {
      icon: Brain,
      step: "02",
      title: "Processamento estatístico",
      text: "Os modelos cruzam performance, ritmo, forma recente, adversário e momento.",
    },
    {
      icon: Sparkles,
      step: "03",
      title: "Insight acionável",
      text: "Você recebe uma leitura clara: o número, a confiança e o porquê em texto.",
    },
    {
      icon: Gauge,
      step: "04",
      title: "Auditoria do modelo",
      text: "Cada leitura é liquidada e comparada ao resultado real para recalibrar o sistema.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Prova / transparência — números da operação                         */
/* ------------------------------------------------------------------ */
/* ⚠️ ATUALIZE PERIODICAMENTE.                                          */
/*    Estes números são um recorte histórico da plataforma de Futebol   */
/*    (painel "Desempenho por mercado"). Eles NÃO se atualizam sozinhos: */
/*    são estáticos até alguém editar este arquivo. Se a landing ficar   */
/*    muito tempo sem atualização, prefira remover a seção a exibir      */
/*    número velho.                                                      */

export const proof = {
  eyebrow: "Transparência",
  title: "Mostramos o placar do modelo — inclusive onde ele erra",
  description:
    "A maior parte do mercado só publica o print do acerto. Nós abrimos a amostra inteira: quantas leituras foram liquidadas, quanto cada mercado acertou e o quanto a confiança prometida bateu com a realidade.",
  stats: [
    { value: "595", label: "Leituras liquidadas", hint: "363 certas · 232 erradas" },
    { value: "61%", label: "Taxa de acerto", hint: "Amostra completa, sem recorte" },
    { value: "9", label: "Mercados auditados", hint: "Do melhor ao pior, tudo à vista" },
    { value: "2", label: "Esportes cobertos", hint: "NBA e futebol, plataformas separadas" },
  ],
  marketsTitle: "Acerto por mercado",
  marketsHint: "Percentual de acerto sobre a amostra liquidada de cada mercado.",
  markets: [
    { label: "Dupla chance", rate: 73, sample: "145/200" },
    { label: "Over/Under gols", rate: 64, sample: "14/22" },
    { label: "Cartões", rate: 63, sample: "87/138" },
    { label: "Escanteios", rate: 57, sample: "59/104" },
    { label: "Ambas marcam", rate: 52, sample: "12/23" },
  ],
  calibrationTitle: "Calibração",
  calibrationHint:
    "Confiança prometida × acerto real. Desvio negativo significa modelo superconfiante naquela faixa — e a gente publica isso.",
  calibration: [
    { band: "80–89%", real: 84, drift: -1 },
    { band: "90–100%", real: 71, drift: -24 },
    { band: "70–79%", real: 63, drift: -11 },
    { band: "60–69%", real: 51, drift: -14 },
  ],
  note: "Recorte histórico da plataforma de Futebol. Desempenho passado não garante resultado futuro.",
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
      title: "Vai além da média",
      text: "Pesos diferentes para jogos recentes, contexto, adversário e mando de campo.",
    },
    {
      icon: Flame,
      title: "Considera o momento",
      text: "Detecta atletas e equipes quentes ou abaixo do ritmo esperado em tempo real.",
    },
    {
      icon: Zap,
      title: "Lê o ritmo do jogo",
      text: "Possessões, pace ajustado, pressão e janelas de produção dentro da partida.",
    },
    {
      icon: Users,
      title: "Minutos, rotação e escalação",
      text: "Acompanha quem entra, quanto joga e o impacto disso na projeção.",
    },
    {
      icon: Gauge,
      title: "Confiança auditada",
      text: "Toda leitura é liquidada contra o resultado real e realimenta a calibração.",
    },
    {
      icon: ShieldCheck,
      title: "Reduz o achismo",
      text: "O insight final é uma leitura clara, não uma promessa de resultado.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Dashboard preview — Terminal NBA (dados ilustrativos)               */
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
  eyebrow: "Preview do produto",
  title: "O Terminal — leitura rápida e visual",
  description:
    "Uma amostra ilustrativa do Terminal de Apostas da plataforma de NBA: linha, projeção, delta e nota composta de cada jogador, agrupados por valor encontrado.",
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
      id: "chet-holmgren",
      player: "Chet Holmgren",
      team: "OKC",
      number: 7,
      minutes: 24.3,
      status: "APOSTAR",
      nota: 8.2,
      bucket: "alto-valor",
      pts: { value: 17, line: 16.5, projection: 22.4, delta: 5.9, good: true },
      ast: { value: 2, line: 1.5, projection: 2.6, delta: 1.1, good: true },
      reb: { value: 8, line: 8.5, projection: 11.2, delta: 2.7, good: true },
    },
    {
      id: "austin-reaves",
      player: "Austin Reaves",
      team: "LAL",
      number: 15,
      minutes: 21.8,
      status: "APOSTAR",
      nota: 7.1,
      bucket: "alto-valor",
      pts: { value: 14, line: 21.5, projection: 24.8, delta: 3.3, good: true },
      ast: { value: 5, line: 5.5, projection: 6.9, delta: 1.4, good: true },
      reb: { value: 2, line: 4.5, projection: 3.9, delta: -0.6, good: false },
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
/* Preview do produto de Futebol (dados ilustrativos)                  */
/* ------------------------------------------------------------------ */
/* Espelha a "Central de decisão": KPIs, oportunidade do dia com        */
/* probabilidade + justificativa, e próximos jogos.                     */

export type FootballOpportunity = {
  competition: string;
  home: string;
  away: string;
  /** Ex.: "Cartão (jogador)" */
  market: string;
  /** Ex.: "André Luiz — Levar cartão" */
  pick: string;
  /** Chance estimada de acontecer (0..100) */
  chance: number;
  /** Nível de risco exibido pelo produto */
  risk: "BAIXA" | "MÉDIA" | "ALTA";
  /** Justificativa em linguagem natural */
  reason: string;
  age: string;
};

export const footballPreview = {
  kpis: [
    { value: "595", label: "Picks" },
    { value: "61%", label: "Taxa de acerto" },
    { value: "50", label: "Oportunidades hoje" },
  ],
  opportunity: {
    competition: "Série B",
    home: "Londrina",
    away: "Atlético Goianiense",
    market: "Cartão (jogador)",
    pick: "André Luiz — Levar cartão",
    chance: 15,
    risk: "BAIXA",
    reason:
      "Está com 2 amarelos no campeonato (a 1 da suspensão) e o próximo jogo é fora de casa — momento de menor custo pra cumprir o gancho. Leva 0.12 amarelo/jogo.",
    age: "há 3h",
  } as FootballOpportunity,
  fixtures: [
    { competition: "UEFA Champions League", home: "Fenerbahçe", away: "Lyon", time: "16:00" },
    { competition: "CONMEBOL Libertadores", home: "Ind. Rivadavia", away: "Fluminense", time: "19:00" },
    { competition: "La Liga", home: "Atlético Madrid", away: "Málaga", time: "16:00" },
  ],
  disclaimer: "Dados ilustrativos para demonstração visual.",
};

/* ------------------------------------------------------------------ */
/* Aviso responsável                                                   */
/* ------------------------------------------------------------------ */

export const disclaimer = {
  title: "Análise estatística, não promessa de resultado",
  text: "O ClutchPro não garante resultados. A plataforma oferece análises estatísticas para apoiar decisões. Conteúdo destinado a maiores de 18 anos — use com responsabilidade.",
};

/* ------------------------------------------------------------------ */
/* CTA final                                                           */
/* ------------------------------------------------------------------ */

export const finalCta = {
  eyebrow: "Acesso antecipado",
  title: "Pronto para decidir com estatística no lugar de palpite?",
  highlight: "estatística no lugar de palpite?",
  text: "Entre na lista de acesso e acompanhe a evolução das duas plataformas — NBA e futebol.",
  cta: { label: "Quero acesso ao ClutchPro", href: "#cta-final" },
  placeholder: "seu@email.com",
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
  /** Quando true, o Footer preenche a coluna a partir de `platforms`. */
  fromPlatforms?: boolean;
};

export const footer = {
  brand: "ClutchPro",
  tagline:
    "Inteligência estatística para NBA e futebol. Um motor, duas plataformas — análise, edge e decisão.",
  columns: [
    {
      title: "Plataformas",
      // Preenchido a partir de `platforms` no componente Footer.
      links: [],
      fromPlatforms: true,
    },
    {
      title: "Produto",
      links: [
        { label: "Como funciona", href: "#como-funciona" },
        { label: "Transparência", href: "#transparencia" },
        { label: "Diferenciais", href: "#diferenciais" },
        { label: "Preview do Terminal", href: "#dashboard" },
      ],
    },
    {
      title: "Empresa",
      links: [
        // "#contato" é um marcador: o Footer troca por um link mailto quando
        // NEXT_PUBLIC_CONTACT_EMAIL estiver configurado (senão, oculta).
        { label: "Contato", href: "#contato" },
        { label: "Acesso antecipado", href: "#cta-final" },
        { label: "Uso responsável", href: "#aviso" },
      ],
    },
  ] as FooterColumn[],
  copyright: `© ${new Date().getFullYear()} ClutchPro. Todos os direitos reservados.`,
  legal: "Conteúdo para maiores de 18 anos · Sem promessa de ganho.",
};
