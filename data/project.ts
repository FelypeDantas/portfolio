export type StackItem = {
  name: string;
};

export type Project = {
  num: string;
  category: "Front-End" | "Full-Stack";
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
};

const projects: Omit<Project, "num">[] = [
  {
    category: "Front-End",
    title: "Fokus",
    description:
      "Interface moderna com animações e interações dinâmicas focadas em UX.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb2.png",
    live: "https://felypedantas.github.io/Fokus_Complete/",
    github: "https://github.com/FelypeDantas/Fokus_Complete",
  },
  {
    category: "Front-End",
    title: "Lista de Compras",
    description:
      "Gerenciador de compras com checklist e organização dinâmica.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb6.png",
    live: "https://felypedantas.github.io/Lista_Compras/",
    github: "https://github.com/FelypeDantas/Lista_Compras",
  },
  {
    category: "Full-Stack",
    title: "Svelte Perfis",
    description:
      "App com Svelte para exibição dinâmica de perfis de usuários.",
    stack: [{ name: "Svelte" }, { name: "Node.js" }],
    image: "/assets/work/thumb7.png",
    live: "https://svelte-perfis-two.vercel.app/",
    github: "https://github.com/FelypeDantas/svelte-perfis",
  },
  {
    category: "Front-End",
    title: "Stranger Things",
    description:
      "Experiência imersiva baseada no universo da série.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb9.png",
    live: "https://felypedantas.github.io/Mundo-Invertido/",
    github: "https://github.com/FelypeDantas/Mundo-Invertido",
  },
  {
    category: "Front-End",
    title: "Mixa Games",
    description:
      "Gerenciador de coleção de jogos com interface amigável.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/thumb10.png",
    live: "https://felypedantas.github.io/Mixa_Games/",
    github: "https://github.com/FelypeDantas/Mixa_Games",
  },
  {
    category: "Front-End",
    title: "Calculadora",
    description:
      "Calculadora simples com interface moderna.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb11.png",
    live: "https://felypedantas.github.io/Calculadora_Simples/",
    github: "https://github.com/FelypeDantas/Calculadora_Simples",
  },
  {
    category: "Front-End",
    title: "Calculadora IMC",
    description:
      "Calculadora de IMC com gráficos e visualização.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Chart.js" },
    ],
    image: "/assets/work/thumb12.png",
    live: "https://felypedantas.github.io/Calculadora_IMC/",
    github: "https://github.com/FelypeDantas/Calculadora_IMC",
  },
  {
    category: "Front-End",
    title: "Gallery Draw",
    description:
      "Galeria de desenhos criada com JavaScript.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb13.png",
    live: "https://felypedantas.github.io/Gallery_draw/",
    github: "https://github.com/FelypeDantas/Gallery_draw",
  },
  {
    category: "Front-End",
    title: "Cartão de Visitas",
    description:
      "Página pessoal com contatos e design moderno.",
    stack: [
      { name: "HTML5" },
      { name: "Bootstrap5" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thumb15.png",
    live: "https://felypedantas.github.io/Cartao_visitas/",
    github: "https://github.com/FelypeDantas/Cartao_visitas",
  },
  {
    category: "Front-End",
    title: "Globalização",
    description:
      "Projeto educacional com HTML e CSS puro.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }],
    image: "/assets/work/thumb16.png",
    live: "https://felypedantas.github.io/Globalizacao_projeto_educacional/",
    github: "https://github.com/FelypeDantas/Globalizacao_projeto_educacional",
  },
  {
    category: "Full-Stack",
    title: "Cronômetro",
    description:
      "Cronômetro online com Python e Flask.",
    stack: [{ name: "Python" }, { name: "Flask" }],
    image: "/assets/work/thumb17.png",
    live: "https://cronometro-bzjg.onrender.com/",
    github: "https://github.com/FelypeDantas/cronometro_python",
  },
  {
    category: "Full-Stack",
    title: "Sistema Financeiro",
    description:
      "Sistema de cálculo de impostos com Flask.",
    stack: [{ name: "Python" }, { name: "Flask" }],
    image: "/assets/work/thumb18.png",
    live: "https://sistema-financeiro-9arh.onrender.com/",
    github: "https://github.com/FelypeDantas/sistema_financeiro",
  },
  {
    category: "Full-Stack",
    title: "Análise de Dados",
    description:
      "Sistema para análise de frequência e dados.",
    stack: [{ name: "Python" }, { name: "Flask" }],
    image: "/assets/work/thumb19.png",
    live: "https://sistema-de-analise-de-dados.onrender.com/",
    github: "https://github.com/FelypeDantas/sistema-de-analise-de-dados",
  },
];
