"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  BsArrowDownRight,
  BsCodeSlash,
  BsDatabaseGear,
  BsPalette,
  BsServer,
} from "react-icons/bs";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const services = [
  {
    id: "web-dev",
    num: "01",
    title: "Web Development",
    description:
      "Aplicações modernas, rápidas e responsivas com foco em experiência, performance e arquitetura escalável.",
    href: "/work",
    icon: BsCodeSlash,
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "ui-ux",
    num: "02",
    title: "UI/UX Design",
    description:
      "Interfaces elegantes e intuitivas que unem estética, clareza visual e usabilidade real.",
    href: "/services/UxDesign",
    icon: BsPalette,
    tags: ["Figma", "UX", "Design System"],
  },
  {
    id: "data",
    num: "03",
    title: "Data Analytics",
    description:
      "Análise de dados, dashboards e insights estratégicos para transformar informação em decisão.",
    href: "/services/data_analytics",
    icon: BsDatabaseGear,
    tags: ["Python", "Pandas", "Power BI"],
  },
  {
    id: "backend",
    num: "04",
    title: "Back-End Developer",
    description:
      "APIs, automações e estrutura de servidores focadas em segurança, integração e performance.",
    href: "/services/Backend",
    icon: BsServer,
    tags: ["Node.js", "Python", "SQL"],
  },
];

// --------------------------------------------------
// STYLES
// --------------------------------------------------

const CARD_CLASS = `
group
relative
overflow-hidden
rounded-[30px]
border
border-white/10
bg-[#16161d]/80
backdrop-blur-xl
transition-all
duration-500
hover:border-accent/30
hover:-translate-y-1
`;

const BUTTON_CLASS = `
w-[64px]
h-[64px]
rounded-2xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
flex
items-center
justify-center
transition-all
duration-300
group-hover:bg-accent
group-hover:text-primary
group-hover:rotate-[-45deg]
`;

const TAG_CLASS = `
px-3
py-1.5
rounded-full
border
border-white/10
bg-white/[0.03]
text-xs
text-accent
tracking-wide
`;

// --------------------------------------------------
// CARD
// --------------------------------------------------

function ServiceCard({ service, index }) {
  const {
    num,
    title,
    description,
    href,
    icon: Icon,
    tags,
  } = service;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      viewport={{
        once: true,
      }}
      className={CARD_CLASS}
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_right,rgba(0,255,170,0.10),transparent_35%)]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          h-full
          p-7
          md:p-8
        "
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          <div className="space-y-5">
            {/* NUMBER */}
            <span
              className="
                text-[70px]
                md:text-[90px]
                leading-none
                font-extrabold
                text-transparent
                text-outline
                opacity-30
                transition-all
                duration-500
                group-hover:opacity-50
              "
            >
              {num}
            </span>

            {/* ICON */}
            <div
              className="
                w-[64px]
                h-[64px]
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                flex
                items-center
                justify-center
                text-accent
                backdrop-blur-xl
              "
            >
              <Icon className="text-[30px]" />
            </div>
          </div>

          {/* BUTTON */}
          <Link
            href={href}
            aria-label={`Abrir ${title}`}
            className={BUTTON_CLASS}
          >
            <BsArrowDownRight className="text-[28px]" />
          </Link>
        </div>

        {/* CONTENT */}
        <div className="mt-10 flex flex-col flex-1">
          <div className="space-y-5">
            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                leading-tight
                transition-colors
                duration-300
                group-hover:text-accent
              "
            >
              {title}
            </h2>

            <p
              className="
                text-white/60
                leading-relaxed
                text-[15px]
                md:text-base
              "
            >
              {description}
            </p>
          </div>

          {/* TAGS */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className={TAG_CLASS}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* FOOTER */}
          <div
            className="
              mt-10
              pt-6
              border-t
              border-white/10
              flex
              items-center
              justify-between
            "
          >
            <span className="text-sm text-white/40">
              Explore serviço
            </span>

            <span
              className="
                text-sm
                text-accent
                opacity-0
                translate-x-2
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:translate-x-0
              "
            >
              Ver mais →
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function Services() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        xl:py-28
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.08),transparent_35%)]
        "
      />

      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-16
            max-w-[760px]
          "
        >
          <span
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-accent
            "
          >
            Especialidades
          </span>

          <h1
            className="
              mt-4
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              leading-[0.95]
              tracking-tight
            "
          >
            Soluções digitais com
            estética de laboratório futurista ⚡
          </h1>

          <p
            className="
              mt-6
              max-w-[640px]
              text-lg
              text-white/60
              leading-relaxed
            "
          >
            Desenvolvimento, design, análise
            de dados e arquitetura back-end
            unidos em um ecossistema pensado
            para crescer junto com seus projetos.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            xl:gap-8
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
