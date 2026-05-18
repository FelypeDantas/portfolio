"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    id: "01",
    name: "pycp_pro",
    type: "CLI • Python",
    description:
      "Ferramenta avançada de cópia e sincronização de arquivos com multithreading, hash verification e barra de progresso em tempo real.",

    github:
      "https://github.com/FelypeDantas/sistema-de-analise-de-dados",

    features: [
      "ThreadPoolExecutor",
      "SHA-256 verification",
      "Directory sync",
      "Resume support",
      "Progress bar",
    ],

    code: `def sync_directories(src,dst,threads,progress):

    src = Path(src)
    dst = Path(dst)

    dst.mkdir(parents=True,exist_ok=True)

    tasks=[]

    for path in src.rglob("*"):

        if path.is_file():

            rel = path.relative_to(src)
            target = dst / rel

            if needs_update(path,target):

                target.parent.mkdir(parents=True,exist_ok=True)

                tasks.append((path,target))`,
  },

  {
    id: "02",
    name: "Sabor Express",
    type: "Terminal System",
    description:
      "Sistema de gerenciamento de restaurantes com cadastro, listagem e alteração dinâmica de estados.",

    github:
      "https://github.com/FelypeDantas/cronometro_python",

    features: [
      "CRUD",
      "Menu interativo",
      "Fluxo procedural",
      "Manipulação de listas",
    ],

    code: `def alterar_estado_restaurante():

    nome_restaurante = input(
        'Digite o restaurante: '
    )

    for restaurante in restaurantes:

        if nome_restaurante == restaurante['nome']:

            restaurante['ativo'] = not restaurante['ativo']`,
  },

  {
    id: "03",
    name: "Bloco de Notas",
    type: "File Manager",
    description:
      "Editor de arquivos em terminal com leitura, escrita e persistência local.",

    github:
      "https://github.com/FelypeDantas/sistema_financeiro",

    features: [
      "Leitura de arquivos",
      "Persistência local",
      "Multiline input",
      "Modo append",
    ],

    code: `def escrever_arquivo(nome_arquivo, conteudo):

    with open(
        caminho(nome_arquivo),
        "w",
        encoding="utf-8"
    ) as arquivo:

        arquivo.write(conteudo)`,
  },
];

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        relative overflow-hidden
        rounded-3xl border border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-8
        group
      "
    >
      {/* glow */}
      <div
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-[radial-gradient(circle_at_top_right,rgba(0,255,140,0.12),transparent_40%)]
        "
      />

      <div className="relative z-10 flex flex-col gap-8">
        {/* top */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="text-accent text-sm tracking-[0.3em] uppercase">
              {project.type}
            </span>

            <h2 className="text-4xl font-bold mt-3">
              {project.name}
            </h2>
          </div>

          <span className="text-6xl font-black text-white/10">
            {project.id}
          </span>
        </div>

        {/* desc */}
        <p className="text-white/60 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* features */}
        <div className="flex flex-wrap gap-3">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="
                px-4 py-2 rounded-full
                bg-white/5 border border-white/10
                text-sm text-white/70
              "
            >
              {feature}
            </span>
          ))}
        </div>

        {/* code */}
        <div
          className="
            rounded-2xl overflow-hidden
            border border-white/10
            bg-[#0d0d0d]
          "
        >
          <div
            className="
              flex items-center gap-2
              px-4 py-3 border-b border-white/10
              bg-white/[0.02]
            "
          >
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <pre className="p-6 overflow-x-auto text-sm text-green-400">
            <code>{project.code}</code>
          </pre>
        </div>

        {/* actions */}
        <div className="flex items-center gap-4">
          <Link
            href={project.github}
            target="_blank"
            className="
              h-14 px-6 rounded-xl
              bg-accent text-primary
              flex items-center gap-3
              font-medium
              hover:scale-[1.03]
              transition
            "
          >
            <BsGithub className="text-xl" />
            Ver código
          </Link>

          <button
            className="
              h-14 w-14 rounded-xl
              border border-white/10
              flex items-center justify-center
              hover:border-accent
              hover:text-accent
              transition
            "
          >
            <BsArrowUpRight />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function BackendPage() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        {/* header */}
        <div className="max-w-3xl mb-20">
          <span className="text-accent tracking-[0.4em] uppercase text-sm">
            Backend Engineering
          </span>

          <h1 className="text-6xl font-bold leading-tight mt-4">
            Sistemas,
            automações
            e ferramentas
            construídas
            em Python.
          </h1>

          <p className="text-white/60 mt-6 leading-relaxed">
            Mais do que projetos visuais, aqui estão
            aplicações reais focadas em lógica,
            automação, terminal e manipulação de dados.
          </p>
        </div>

        {/* projects */}
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
