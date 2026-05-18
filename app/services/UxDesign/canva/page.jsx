"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { BsArrowUpRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const categories = [
  {
    id: "all",
    label: "Todos",
  },

  {
    id: "canva",
    label: "Canva",
  },

  {
    id: "figma",
    label: "Figma",
  },

  {
    id: "photoshop",
    label: "Photoshop",
  },
];

const projects = [
  {
    id: "01",

    category: "canva",

    title: "Post Instagram",

    description:
      "Post criado para Instagram com foco em identidade visual moderna e forte presença visual.",

    image: "/assets/canva/VivaLeve.png",

    live:
      "https://www.instagram.com/p/DLfYwJVAWkeN57mAMIUF-dp6KGVtEpOD1-bEUg0/",
  },

  {
    id: "02",

    category: "canva",

    title: "Campanha PCD",

    description:
      "Post para LinkedIn reforçando inclusão e valorização de profissionais PCD.",

    image: "/assets/canva/pcd_camp.png",

    live:
      "https://www.linkedin.com/posts/felype-dantas-dos-santos_inclusaetopcd-diversidadenotrabalho-profissionaispcd-activity-7341103054944948224-bHom",
  },

  {
    id: "03",

    category: "canva",

    title: "Mapa DevOps",

    description:
      "Mapa conceitual visual criado para organizar fundamentos de DevOps.",

    image: "/assets/canva/devops.png",

    live:
      "https://www.linkedin.com/posts/felype-dantas-dos-santos_devops-containers-buildautomaertico-activity-7354837346921394176-w9aR",
  },
];

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

export default function WorkPage() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
      className="min-h-screen py-24"
    >
      <div className="container mx-auto">
        {/* -------------------------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------------------------- */}

        <div className="flex flex-col gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-accent uppercase tracking-[0.3em] text-sm">
              Portfolio
            </span>

            <h1 className="text-5xl xl:text-7xl font-bold leading-tight max-w-[800px]">
              Trabalhos criativos com foco em
              experiência visual.
            </h1>

            <p className="text-white/60 max-w-[700px] leading-relaxed text-lg">
              Projetos desenvolvidos com foco em
              design moderno, identidade visual e
              experiências digitais intuitivas.
            </p>
          </div>

          {/* -------------------------------------------------- */}
          {/* FILTERS */}
          {/* -------------------------------------------------- */}

          <div className="flex flex-wrap gap-4 pt-4">
            {categories.map((category) => {
              const isActive =
                activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  className={`
                    px-6
                    h-[52px]
                    rounded-full
                    border
                    transition-all
                    duration-300
                    text-sm
                    font-medium

                    ${
                      isActive
                        ? "bg-accent text-primary border-accent"
                        : "border-white/10 bg-white/5 hover:border-accent/40 hover:bg-accent/10"
                    }
                  `}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* PROJECTS */}
        {/* -------------------------------------------------- */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
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
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="w-full"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <article
                    className="
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-sm
                    "
                  >
                    <div className="grid xl:grid-cols-2">
                      {/* -------------------------------------------------- */}
                      {/* CONTENT */}
                      {/* -------------------------------------------------- */}

                      <div className="flex flex-col justify-between p-8 xl:p-12">
                        <div className="space-y-8">
                          <span className="text-accent text-sm tracking-[0.25em] uppercase">
                            Projeto {project.id}
                          </span>

                          <div className="space-y-4">
                            <h2 className="text-4xl xl:text-5xl font-bold">
                              {project.title}
                            </h2>

                            <p className="text-white/60 leading-relaxed text-lg">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-10">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="
                                    w-[74px]
                                    h-[74px]
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                    hover:bg-accent
                                    hover:border-accent
                                    hover:-rotate-12
                                    group
                                  "
                                >
                                  <BsArrowUpRight
                                    className="
                                      text-3xl
                                      text-white
                                      transition-colors
                                      duration-300
                                      group-hover:text-primary
                                    "
                                  />
                                </Link>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p>
                                  Abrir projeto
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>

                      {/* -------------------------------------------------- */}
                      {/* IMAGE */}
                      {/* -------------------------------------------------- */}

                      <div className="relative min-h-[420px] xl:min-h-[620px] overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 z-10" />

                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            hover:scale-105
                          "
                        />
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="
                  flex
                  gap-3
                  absolute
                  right-4
                  bottom-4
                  z-30
                "
                btnStyles="
                  w-[52px]
                  h-[52px]
                  rounded-full
                  bg-accent
                  hover:bg-accent-hover
                  text-primary
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                "
              />
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
