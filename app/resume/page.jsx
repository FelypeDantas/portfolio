"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  FaBootstrap,
  FaCss3,
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
// STYLES
// --------------------------------------------------

const CARD_CLASS =
  "bg-[#232329] rounded-2xl p-6 flex flex-col justify-center gap-3 border border-white/5 hover:border-accent/30 transition-all duration-300";

const SECTION_CLASS =
  "absolute inset-0 flex flex-col gap-8 overflow-y-auto pr-2";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const experiences = [
  {
    id: "sendas",
    title: "Jovem Aprendiz - Central do Fornecedor",
    subtitle: "Sendas Distribuidora",
    duration: "2025 - 2026",
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
    duration: "2018 - 2020",
  },
];

const education = [
  {
    id: "fatec",
    title: "ADS",
    subtitle: "Fatec Zona Leste",
    duration: "2022 - 2026",
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
  { id: "html", name: "HTML5", icon: <FaHtml5 /> },
  { id: "css", name: "CSS3", icon: <FaCss3 /> },
  { id: "js", name: "JavaScript", icon: <FaJs /> },
  { id: "java", name: "Java", icon: <FaJava /> },
  { id: "figma", name: "Figma", icon: <FaFigma /> },
  { id: "node", name: "Node.js", icon: <FaNodeJs /> },
  { id: "python", name: "Python", icon: <FaPython /> },
  { id: "bootstrap", name: "Bootstrap", icon: <FaBootstrap /> },
  { id: "sass", name: "SASS", icon: <FaSass /> },
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss /> },
  { id: "csharp", name: "C#", icon: <SiCsharp /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
];

const about = [
  {
    id: "name",
    label: "Nome",
    value: "Felype Dantas",
  },
  {
    id: "phone",
    label: "Celular",
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
    label: "Línguas",
    value: "Inglês, Espanhol",
  },
];

const tabs = [
  {
    value: "experience",
    label: "Experiência",
  },
  {
    value: "education",
    label: "Educação",
  },
  {
    value: "skills",
    label: "Skills",
  },
  {
    value: "about",
    label: "Sobre",
  },
];

// --------------------------------------------------
// COMPONENTS
// --------------------------------------------------

function SectionHeader({ title, description }) {
  return (
    <header className="flex flex-col gap-4 text-center xl:text-left">
      <h2 className="text-4xl xl:text-5xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="text-white/60 max-w-[620px] leading-relaxed mx-auto xl:mx-0">
        {description}
      </p>
    </header>
  );
}

function Timeline({ items }) {
  return (
    <ScrollArea className="h-[420px] pr-4">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={CARD_CLASS}
          >
            <span className="text-accent text-sm font-medium">
              {item.duration}
            </span>

            <h3 className="text-xl font-semibold min-h-[56px]">
              {item.title}
            </h3>

            <div className="flex items-center gap-3 text-white/60">
              <span className="w-2 h-2 rounded-full bg-accent" />

              <p>{item.subtitle}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </ScrollArea>
  );
}

function SkillsGrid() {
  return (
    <TooltipProvider delayDuration={100}>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="h-[150px] rounded-2xl bg-[#232329] border border-white/5 hover:border-accent/30 transition-all duration-300 flex items-center justify-center cursor-pointer group"
                >
                  <div className="text-6xl text-white/80 group-hover:text-accent transition-colors duration-300">
                    {skill.icon}
                  </div>
                </motion.div>
              </TooltipTrigger>

              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  );
}

function AboutGrid() {
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {about.map((item) => (
        <li
          key={item.id}
          className="flex flex-col gap-1"
        >
          <span className="text-white/40 text-sm uppercase tracking-wider">
            {item.label}
          </span>

          <span className="text-lg font-medium">
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}

// --------------------------------------------------
// CONTENT
// --------------------------------------------------

function TabContent({ currentTab }) {
  const contentMap = {
    experience: {
      title: "Minha Experiência",
      description:
        "Minha jornada envolve estágio, projetos próprios e evolução constante no desenvolvimento web.",
      content: <Timeline items={experiences} />,
    },

    education: {
      title: "Educação",
      description:
        "Formação acadêmica combinada com aprendizado contínuo em plataformas digitais.",
      content: <Timeline items={education} />,
    },

    skills: {
      title: "Skills",
      description:
        "Tecnologias que uso para transformar ideias em realidade.",
      content: <SkillsGrid />,
    },

    about: {
      title: "Sobre mim",
      description:
        "Desenvolvedor focado em criar experiências digitais intuitivas.",
      content: <AboutGrid />,
    },
  };

  const current = contentMap[currentTab];

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
          duration: 0.25,
        }}
        className={SECTION_CLASS}
      >
        <SectionHeader
          title={current.title}
          description={current.description}
        />

        {current.content}
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
      className="min-h-[80vh] py-12 flex items-center"
    >
      <div className="container mx-auto">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="flex flex-col xl:flex-row gap-14"
        >
          <TabsList className="w-full xl:max-w-[320px] flex flex-col gap-4 bg-transparent h-auto p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full h-[56px] rounded-xl text-base transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-primary"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative w-full h-[620px]">
            <TabContent currentTab={currentTab} />
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
