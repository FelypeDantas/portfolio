"use client";

import { motion } from "framer-motion";
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
  TabsContent,
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
// TYPES
// --------------------------------------------------

type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
};

type Skill = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

type AboutItem = {
  id: string;
  label: string;
  value: string;
};

// --------------------------------------------------
// STYLES
// --------------------------------------------------

const CARD_CLASS =
  "bg-[#232329] rounded-xl p-6 flex flex-col justify-center gap-3";

const SECTION_CLASS =
  "flex flex-col gap-8";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const experiences: TimelineItem[] = [
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

const education: TimelineItem[] = [
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

const skills: Skill[] = [
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

const about: AboutItem[] = [
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

// --------------------------------------------------
// COMPONENTS
// --------------------------------------------------

type SectionHeaderProps = {
  title: string;
  description: string;
};

function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="flex flex-col gap-4 text-center xl:text-left">
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
        {description}
      </p>
    </header>
  );
}

type TimelineProps = {
  items: TimelineItem[];
};

function Timeline({ items }: TimelineProps) {
  return (
    <ScrollArea className="h-[420px] pr-4">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <li
            key={item.id}
            className={CARD_CLASS}
          >
            <span className="text-accent text-sm">
              {item.duration}
            </span>

            <h3 className="text-xl font-medium min-h-[56px]">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-white/60">
              <span className="w-2 h-2 rounded-full bg-accent" />

              <p>{item.subtitle}</p>
            </div>
          </li>
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
                <div className="h-[150px] rounded-xl bg-[#232329] flex items-center justify-center cursor-pointer group">
                  <div className="text-6xl transition-colors group-hover:text-accent">
                    {skill.icon}
                  </div>
                </div>
              </TooltipTrigger>

              <TooltipContent>
                {skill.name}
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  );
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------

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

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
      }}
      className="min-h-[80vh] py-12 flex items-center"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-14"
        >
          <TabsList className="w-full xl:max-w-[320px] flex flex-col gap-4">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full min-h-[520px]">
            <TabsContent
              value="experience"
              className={SECTION_CLASS}
            >
              <SectionHeader
                title="Minha Experiência"
                description="Minha jornada envolve estágio, projetos próprios e evolução constante no desenvolvimento web."
              />

              <Timeline items={experiences} />
            </TabsContent>

            <TabsContent
              value="education"
              className={SECTION_CLASS}
            >
              <SectionHeader
                title="Educação"
                description="Formação acadêmica combinada com aprendizado contínuo em plataformas digitais."
              />

              <Timeline items={education} />
            </TabsContent>

            <TabsContent
              value="skills"
              className={SECTION_CLASS}
            >
              <SectionHeader
                title="Skills"
                description="Tecnologias que uso para transformar ideias em realidade."
              />

              <SkillsGrid />
            </TabsContent>

            <TabsContent
              value="about"
              className={SECTION_CLASS}
            >
              <SectionHeader
                title="Sobre mim"
                description="Desenvolvedor focado em criar experiências digitais intuitivas."
              />

              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {about.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-white/50 text-sm">
                      {item.label}
                    </span>

                    <span className="text-lg">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
