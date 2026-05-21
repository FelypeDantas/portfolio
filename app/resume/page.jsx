"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaSass,
} from "react-icons/fa";

import {
  SiCsharp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import {
  Briefcase,
  GraduationCap,
  User2,
  Code2,
} from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const experiences = [
  {
    id: "sendas",
    title: "Jovem Aprendiz • Central do Fornecedor",
    subtitle: "Sendas Distribuidora",
    duration: "2025 — 2026",
  },

  {
    id: "fatec-estagio",
    title: "Estagiário de TI",
    subtitle: "Fatec Zona Leste",
    duration: "2024",
  },

  {
    id: "fatec-monitor",
    title: "Monitor de Algoritmos",
    subtitle: "Fatec Zona Leste",
    duration: "2023",
  },

  {
    id: "leandro",
    title: "Assistente de Vendas",
    subtitle: "Leandro Vendas",
    duration: "2018 — 2020",
  },
];

const education = [
  {
    id: "fatec",
    title: "Análise e Desenvolvimento de Sistemas",
    subtitle: "Fatec Zona Leste",
    duration: "2022 — 2026",
  },

  {
    id: "dio",
    title: "Front-End com Ri Happy",
    subtitle: "DIO",
    duration: "2024",
  },

  {
    id: "alura-js",
    title: "Formação JavaScript",
    subtitle: "Alura",
    duration: "2024",
  },

  {
    id: "alura-java",
    title: "Formação Java",
    subtitle: "Alura",
    duration: "2024",
  },
];

const skills = [
  {
    id: "html",
    name: "HTML5",
    icon: <FaHtml5 />,
  },

  {
    id: "css",
    name: "CSS3",
    icon: <FaCss3Alt />,
  },

  {
    id: "js",
    name: "JavaScript",
    icon: <FaJs />,
  },

  {
    id: "ts",
    name: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    id: "tailwind",
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },

  {
    id: "node",
    name: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    id: "python",
    name: "Python",
    icon: <FaPython />,
  },

  {
    id: "java",
    name: "Java",
    icon: <FaJava />,
  },

  {
    id: "csharp",
    name: "C#",
    icon: <SiCsharp />,
  },

  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },

  {
    id: "sass",
    name: "SASS",
    icon: <FaSass />,
  },

  {
    id: "figma",
    name: "Figma",
    icon: <FaFigma />,
  },
];

const about = [
  {
    id: "name",
    label: "Nome",
    value: "Felype Dantas",
  },

  {
    id: "phone",
    label: "Telefone",
    value: "+55 11 94640-0631",
  },

  {
    id: "experience",
    label: "Experiência",
    value: "2+ anos",
  },

  {
    id: "email",
    label: "Email",
    value: "felyped03@gmail.com",
  },

  {
    id: "language",
    label: "Idiomas",
    value: "Português, Inglês, Espanhol",
  },
];

const tabs = [
  {
    value: "experience",
    label: "Experiência",
    icon: Briefcase,
  },

  {
    value: "education",
    label: "Educação",
    icon: GraduationCap,
  },

  {
    value: "skills",
    label: "Skills",
    icon: Code2,
  },

  {
    value: "about",
    label: "Sobre",
    icon: User2,
  },
];

// --------------------------------------------------
// STYLES
// --------------------------------------------------

const PANEL =
  `
    relative
    overflow-hidden
    rounded-[30px]
    border
    border-white/10
    bg-[#18181f]/70
    backdrop-blur-xl
  `;

const CARD =
  `
    relative
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-md
    transition-all
    duration-300
  `;

// --------------------------------------------------
// HEADER
// --------------------------------------------------

function SectionHeader({
  title,
  description,
}) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <div className="w-14 h-[2px] bg-accent" />

        <span
          className="
            uppercase
            tracking-[0.35em]
            text-xs
            text-accent
          "
        >
          Resume
        </span>
      </div>

      <h2
        className="
          text-4xl
          md:text-5xl
          xl:text-6xl
          font-bold
          leading-[0.95]
          tracking-tight
        "
      >
        {title}
      </h2>

      <p
        className="
          max-w-[700px]
          text-white/60
          leading-relaxed
          text-base
          md:text-lg
        "
      >
        {description}
      </p>
    </div>
  );
}

// --------------------------------------------------
// TIMELINE
// --------------------------------------------------

function Timeline({
  items,
}) {
  return (
    <ScrollArea className="h-[460px] pr-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.04,
            }}
            whileHover={{
              y: -5,
            }}
            className={`
              ${CARD}

              p-6
              group
            `}
          >
            {/* glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                bg-[radial-gradient(circle_at_top_right,rgba(0,255,170,0.12),transparent_60%)]
              "
            />

            <div className="relative z-10 space-y-5">
              <span
                className="
                  inline-flex
                  px-3
                  py-1
                  rounded-full
                  bg-accent/10
                  text-accent
                  text-sm
                  font-medium
                "
              >
                {item.duration}
              </span>

              <div className="space-y-2">
                <h3
                  className="
                    text-xl
                    font-semibold
                    leading-snug
                  "
                >
                  {item.title}
                </h3>

                <div className="flex items-center gap-3 text-white/50">
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-accent
                    "
                  />

                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </ScrollArea>
  );
}

// --------------------------------------------------
// SKILLS
// --------------------------------------------------

function SkillsGrid() {
  return (
    <TooltipProvider delayDuration={100}>
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          xl:grid-cols-4
          gap-4
        "
      >
        {skills.map((skill, index) => (
          <Tooltip key={skill.id}>
            <TooltipTrigger asChild>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.03,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className={`
                  ${CARD}

                  h-[150px]
                  group
                  cursor-pointer

                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                `}
              >
                <div
                  className="
                    text-5xl
                    text-white/70
                    group-hover:text-accent
                    transition-colors
                    duration-300
                  "
                >
                  {skill.icon}
                </div>

                <span
                  className="
                    text-sm
                    text-white/70
                    group-hover:text-white
                    transition-colors
                  "
                >
                  {skill.name}
                </span>
              </motion.div>
            </TooltipTrigger>

            <TooltipContent>
              {skill.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

// --------------------------------------------------
// ABOUT
// --------------------------------------------------

function AboutGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      "
    >
      {about.map((item) => (
        <div
          key={item.id}
          className={`
            ${CARD}

            p-6
          `}
        >
          <div className="space-y-2">
            <span
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-white/40
              "
            >
              {item.label}
            </span>

            <h3
              className="
                text-lg
                md:text-xl
                font-medium
                break-all
              "
            >
              {item.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

// --------------------------------------------------
// CONTENT
// --------------------------------------------------

function TabContent({
  currentTab,
}) {
  const content = useMemo(
    () => ({
      experience: {
        title: "Minha experiência",
        description:
          "Minha trajetória mistura desenvolvimento web, projetos autorais, análise de dados e evolução contínua em tecnologia.",

        component: (
          <Timeline items={experiences} />
        ),
      },

      education: {
        title: "Educação & formação",
        description:
          "Combinação entre formação acadêmica e aprendizado contínuo através de plataformas, projetos e prática constante.",

        component: (
          <Timeline items={education} />
        ),
      },

      skills: {
        title: "Tecnologias & ferramentas",
        description:
          "Stack que utilizo para construir aplicações modernas, experiências digitais e soluções escaláveis.",

        component: <SkillsGrid />,
      },

      about: {
        title: "Sobre mim",
        description:
          "Desenvolvedor focado em construir produtos digitais funcionais, modernos e pensados para resolver problemas reais.",

        component: <AboutGrid />,
      },
    }),
    []
  );

  const current = content[currentTab];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTab}
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -12,
        }}
        transition={{
          duration: 0.28,
        }}
        className="
          flex
          flex-col
          gap-10
        "
      >
        <SectionHeader
          title={current.title}
          description={current.description}
        />

        {current.component}
      </motion.div>
    </AnimatePresence>
  );
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function Resume() {
  const [currentTab, setCurrentTab] =
    useState("experience");

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        relative
        py-20
        xl:py-28
        overflow-hidden
      "
    >
      {/* background glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.08),transparent_35%)]
        "
      />

      <div className="container mx-auto px-4">
        <div
          className="
            grid
            xl:grid-cols-[300px_minmax(0,1fr)]
            gap-10
            xl:gap-16
          "
        >
          {/* LEFT */}
          <div className="space-y-4">
            <div className={PANEL}>
              <Tabs
                value={currentTab}
                onValueChange={setCurrentTab}
                className="w-full"
              >
                <TabsList
                  className="
                    w-full
                    h-auto
                    flex
                    flex-col
                    gap-3
                    bg-transparent
                    p-5
                  "
                >
                  {tabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="
                          w-full
                          h-[60px]
                          rounded-2xl
                          border
                          border-white/5
                          bg-white/[0.02]

                          flex
                          items-center
                          justify-start
                          gap-4

                          px-5

                          transition-all
                          duration-300

                          data-[state=active]:bg-accent
                          data-[state=active]:text-primary
                        "
                      >
                        <Icon className="text-lg" />

                        <span className="text-base">
                          {tab.label}
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`
              ${PANEL}

              p-6
              md:p-8
              xl:p-10
            `}
          >
            {/* grid texture */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.03]
                bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                bg-[size:42px_42px]
                pointer-events-none
              "
            />

            <div className="relative z-10">
              <TabContent currentTab={currentTab} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
