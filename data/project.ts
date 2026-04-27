export type Project = {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    num: "01",
    category: "Front-End",
    title: "Relógio Digital",
    description:
      "Relógio digital interativo com personalização de cores e persistência local.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "https://felypedantas.github.io/Relogio_JS/",
    github: "https://github.com/FelypeDantas/Relogio_JS",
  },
  {
    num: "02",
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
    num: "03",
    category: "Front-End",
    title: "Serenatto Café",
    description:
      "Site responsivo com Bootstrap para apresentação de cardápio e ambiente.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://felypedantas.github.io/Serenatto_Cafe/",
    github: "https://github.com/FelypeDantas/Serenatto_Cafe",
  },
  {
    num: "04",
    category: "Front-End",
    title: "Spa Calmaria",
    description:
      "Layout minimalista com foco em tipografia e estética relaxante.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "SASS" }],
    image: "/assets/work/thumb4.png",
    live: "https://felypedantas.github.io/Spa-Calmaria/",
    github: "https://github.com/FelypeDantas/Spa-Calmaria",
  },
  {
    num: "05",
    category: "Front-End",
    title: "Spider-Man Multiverse",
    description:
      "Plataforma com trailers e infos dos filmes do Homem-Aranha.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb5.png",
    live: "https://spider-man-multiverse-ten.vercel.app/",
    github: "https://github.com/FelypeDantas/Spider-Man_Multiverse",
  },
  {
    num: "06",
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
    num: "07",
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
    num: "08",
    category: "Front-End",
    title: "Cuidados de Verão",
    description:
      "Site com SVG e design visual focado em dicas sazonais.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb8.png",
    live: "https://felypedantas.github.io/Site_Verao/",
    github: "https://github.com/FelypeDantas/Site_Verao",
  },
  {
    num: "09",
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
    num: "10",
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
    num: "11",
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
    num: "12",
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
    num: "13",
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
    num: "14",
    category: "Front-End",
    title: "Cadastro de Clientes",
    description:
      "Sistema com POO para cadastro e persistência local.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb14.png",
    live: "https://felypedantas.github.io/cadastro_clientes/",
    github: "https://github.com/FelypeDantas/cadastro_clientes",
  },
  {
    num: "15",
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
    num: "16",
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
    num: "17",
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
    num: "18",
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
    num: "19",
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