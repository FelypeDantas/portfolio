"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCsharp,
  SiTypescript,
} from "react-icons/si";

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

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// ----------------------
// 🔹 DATA
// ----------------------

const cardClass =
  "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1";

const experience = {
  title: "Minha Experiência",
  description:
    "Minha jornada envolve estágio, projetos próprios e evolução constante no desenvolvimento web.",
  items: [
    {
      id: "sendas",
      company: "Sendas Distribuidora",
      position: "Jovem Aprendiz - Central do Fornecedor",
      duration: "2025 - 2026",
    },
    {
      id: "fatec-estagio",
      company: "Fatec Zona Leste",
      position: "Estagiário de TI",
      duration: "2024",
    },
    {
      id: "fatec-monitor",
      company: "Fatec Zona Leste",
      position: "Monitor de Algoritmos",
      duration: "2023",
    },
    {
      id: "leandro",
      company: "Leandro Vendas",
      position: "Assistente de Vendas",
      duration: "2018 - 2020",
    },
  ],
};

const education = {
  title: "Educação",
  description:
    "Formação acadêmica combinada com aprendizado contínuo em plataformas digitais.",
  items: [
    {
      id: "fatec",
      institution: "Fatec Zona Leste",
      degree: "ADS",
      duration: "2022 - 2026",
    },
    {
      id: "dio",
      institution: "DIO",
      degree: "Front-End com Ri Happy",
      duration: "2024",
    },
    {
      id: "alura-js",
      institution: "Alura",
      degree: "Formação JavaScript",
      duration: "2024",
    },
    {
      id: "alura-java",
      institution: "Alura",
      degree: "Formação Java",
      duration: "2024",
    },
    {
      id: "alura-html",
      institution: "Alura",
      degree: "HTML & CSS",
      duration: "2024",
    },
    {
      id: "etec",
      institution: "ETEC Guaianases",
      degree: "Administração",
      duration: "2020 - 2022",
    },
  ],
};

const skills = [
  { id: "html", icon: <FaHtml5 />, name: "HTML5" },
  { id: "css", icon: <FaCss3 />, name: "CSS3" },
  { id: "js", icon: <FaJs />, name: "JavaScript" },
  { id: "java", icon: <FaJava />, name: "Java" },
  { id: "figma", icon: <FaFigma />, name: "Figma" },
  { id: "node", icon: <FaNodeJs />, name: "Node.js" },
  { id: "python", icon: <FaPython />, name: "Python" },
  { id: "bootstrap", icon: <FaBootstrap />, name: "Bootstrap" },
  { id: "sass", icon: <FaSass />, name: "SASS" },
  { id: "tailwind", icon: <SiTailwindcss />, name: "Tailwind" },
  { id: "csharp", icon: <SiCsharp />, name: "C#" },
  { id: "ts", icon: <SiTypescript />, name: "TypeScript" },
];

const about = {
  title: "Sobre mim",
  description:
    "Desenvolvedor focado em criar experiências digitais intuitivas, combinando código e design com propósito.",
  info: [
    { id: "nome", label: "Nome", value: "Felype Dantas" },
    { id: "tel", label: "Celular", value: "+55 11 94640-0631" },
    { id: "exp", label: "Experiência", value: "2+ anos" },
    { id: "nac", label: "Nacionalidade", value: "Brasileiro" },
    { id: "email", label: "Email", value: "felyped03@gmail.com" },
    { id: "lang", label: "Línguas", value: "Inglês, Espanhol" },
  ],
};

// ----------------------
// 🔹 COMPONENTES
// ----------------------

const SectionHeader = ({ title, description }) => (
  <div className="flex flex-col gap-4 text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {description}
    </p>
  </div>
);

const TimelineList = ({ items, type }) => (
  <ScrollArea className="h-[400px]">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      {items.map((item) => (
        <li key={item.id} className={cardClass}>
          <span className="text-accent">{item.duration}</span>

          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
            {type === "experience" ? item.position : item.degree}
          </h3>

          <div className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
            <p className="text-white/60">
              {type === "experience"
                ? item.company
                : item.institution}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </ScrollArea>
);

const SkillsGrid = () => (
  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
    {skills.map((skill) => (
      <li key={skill.id}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
              <div className="text-6xl group-hover:text-accent transition">
                {skill.icon}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    ))}
  </ul>
);

// ----------------------
// 🔹 MAIN
// ----------------------

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4 },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>

          {/* 🔥 altura fixa garante alinhamento entre TODAS as abas */}
          <div className="w-full min-h-[500px]">
            <TabsContent value="experience">
              <SectionHeader {...experience} />
              <TimelineList
                items={experience.items}
                type="experience"
              />
            </TabsContent>

            <TabsContent value="education">
              <SectionHeader {...education} />
              <TimelineList
                items={education.items}
                type="education"
              />
            </TabsContent>

            <TabsContent
              value="skills"
              className="flex flex-col gap-6"
            >
              <SectionHeader
                title="Skills"
                description="Tecnologias que uso para transformar ideias em realidade."
              />
              <SkillsGrid />
            </TabsContent>

            <TabsContent value="about" className="flex flex-col gap-[30px] text-center xl:text-left">
              <SectionHeader {...about} />
            
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60 min-w-[120px]">
                        {item.label}
                      </span>
                      <span className="text-xl">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
