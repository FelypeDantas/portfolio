"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  BsArrowUpRight,
  BsGithub,
} from "react-icons/bs";

import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { projects } from "@/data/project";

// --------------------------------------------------
// STYLES
// --------------------------------------------------

const SECTION_CLASS =
  "min-h-[100vh] flex items-center py-16 xl:py-0 overflow-hidden";

const CARD_CLASS =
  "relative overflow-hidden rounded-3xl border border-white/10 bg-[#1c1c22]/70 backdrop-blur-sm";

const BUTTON_CLASS =
  "w-[62px] h-[62px] rounded-full border border-white/10 bg-white/5 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center group";

// --------------------------------------------------
// COMPONENTS
// --------------------------------------------------

function ProjectLinks({
  live,
  github,
  title,
}) {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex items-center gap-4">
        {live && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${title}`}
                className={BUTTON_CLASS}
              >
                <BsArrowUpRight className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <p>Projeto ao vivo</p>
            </TooltipContent>
          </Tooltip>
        )}

        {github && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir repositório ${title}`}
                className={BUTTON_CLASS}
              >
                <BsGithub className="text-2xl" />
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <p>Ver código</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}

function StackList({ stack = [] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {stack.map((tech, index) => (
        <li
          key={`${tech.name}-${index}`}
          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-accent"
        >
          {tech.name}
        </li>
      ))}
    </ul>
  );
}

function ProjectInfo({ project }) {
  return (
    <motion.div
      key={project.num}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="flex flex-col justify-between gap-8 h-full"
    >
      <div className="space-y-6">
        {/* NUMBER */}
        <div className="flex items-center gap-4">
          <span className="text-[90px] xl:text-[130px] leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </span>

          <div className="h-[2px] w-full bg-gradient-to-r from-accent/60 to-transparent" />
        </div>

        {/* TITLE */}
        <div className="space-y-3">
          <span className="text-accent uppercase tracking-[0.3em] text-sm">
            {project.category}
          </span>

          <h2 className="text-4xl xl:text-6xl font-bold leading-tight">
            {project.title}
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-white/60 text-lg leading-relaxed max-w-[620px]">
          {project.description}
        </p>

        {/* STACK */}
        <StackList stack={project.stack} />
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col gap-6">
        <div className="w-full h-px bg-white/10" />

        <ProjectLinks
          live={project.live}
          github={project.github}
          title={project.title}
        />
      </div>
    </motion.div>
  );
}

function ProjectSlide({ project }) {
  return (
    <div
      className={`
        ${CARD_CLASS}
        h-[320px]
        sm:h-[420px]
        xl:h-[520px]
      `}
    >
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent z-10 pointer-events-none" />

      {/* overlay */}
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
  );
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function Work() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const currentProject = useMemo(
    () => projects[currentIndex],
    [currentIndex]
  );

  const handleSlideChange = useCallback(
    (swiper) => {
      setCurrentIndex(swiper.activeIndex);
    },
    []
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className={SECTION_CLASS}
    >
      <div className="container mx-auto px-4">
        <div className="grid xl:grid-cols-[1fr_1.1fr] gap-14 items-center">
          
          {/* LEFT */}
          <div className="order-2 xl:order-1 min-h-[520px] flex">
            <ProjectInfo project={currentProject} />
          </div>

          {/* RIGHT */}
          <div className="order-1 xl:order-2">
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="w-full"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num}>
                  <ProjectSlide project={project} />
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="
                  flex
                  gap-3
                  absolute
                  z-20
                  bottom-5
                  right-5
                "
                btnStyles="
                  w-[52px]
                  h-[52px]
                  rounded-full
                  bg-black/50
                  backdrop-blur-md
                  border
                  border-white/10
                  hover:bg-accent
                  hover:text-primary
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                "
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
