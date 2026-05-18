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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";

import { projects } from "@/data/project";

// --------------------------------------------------
// STYLES
// --------------------------------------------------

const BUTTON_CLASS = `
w-[58px]
h-[58px]
rounded-full
border
border-white/10
bg-white/[0.04]
hover:bg-accent
hover:text-primary
transition-all
duration-300
flex
items-center
justify-center
backdrop-blur-xl
group
`;

const PANEL_CLASS = `
relative
overflow-hidden
rounded-[34px]
border
border-white/10
bg-[#16161d]/80
backdrop-blur-xl
`;

// --------------------------------------------------
// LINKS
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
                aria-label={`Abrir ${title}`}
                className={BUTTON_CLASS}
              >
                <BsArrowUpRight
                  className="
                    text-2xl
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              Projeto ao vivo
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
                aria-label={`Github ${title}`}
                className={BUTTON_CLASS}
              >
                <BsGithub className="text-2xl" />
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              Ver código
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}

// --------------------------------------------------
// STACK
// --------------------------------------------------

function StackList({ stack = [] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {stack.map((item, index) => (
        <li
          key={`${item.name}-${index}`}
          className="
            px-4
            py-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            text-sm
            text-accent
            backdrop-blur-md
            shadow-lg
          "
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// --------------------------------------------------
// INFO
// --------------------------------------------------

function ProjectInfo({ project }) {
  return (
    <motion.div
      key={project.num}
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        flex
        flex-col
        justify-between
        h-full
        gap-10
      "
    >
      <div className="space-y-8">

        {/* NUMBER */}
        <div className="flex items-center gap-5">
          <span
            className="
              text-[90px]
              xl:text-[140px]
              leading-none
              font-extrabold
              text-transparent
              text-outline
              opacity-40
            "
          >
            {project.num}
          </span>

          <div
            className="
              h-[2px]
              flex-1
              bg-gradient-to-r
              from-accent
              to-transparent
            "
          />
        </div>

        {/* CATEGORY */}
        <span
          className="
            uppercase
            tracking-[0.4em]
            text-sm
            text-accent
          "
        >
          {project.category}
        </span>

        {/* TITLE */}
        <h1
          className="
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-bold
            leading-[0.92]
            tracking-tight
          "
        >
          {project.title}
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            max-w-[520px]
            text-lg
            text-white/60
            leading-relaxed
          "
        >
          {project.description}
        </p>

        {/* STACK */}
        <StackList stack={project.stack} />
      </div>

      {/* FOOTER */}
      <div className="space-y-6">
        <div className="h-px w-full bg-white/10" />

        <ProjectLinks
          live={project.live}
          github={project.github}
          title={project.title}
        />
      </div>
    </motion.div>
  );
}

// --------------------------------------------------
// SLIDE
// --------------------------------------------------

function ProjectSlide({ project }) {
  return (
    <div
      className={`
        ${PANEL_CLASS}

        h-[340px]
        md:h-[520px]
        xl:h-[700px]

        flex
        items-center
        justify-center

        p-6
        xl:p-10
      `}
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,_rgba(0,255,170,0.16),transparent_65%)]
          pointer-events-none
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-soft-light
          bg-[url('/assets/noise.png')]
        "
      />

      {/* Image */}
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          relative
          z-20
          w-full
          h-full
          flex
          items-center
          justify-center
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="
            object-contain
            drop-shadow-[0_0_60px_rgba(0,255,170,0.18)]
          "
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/30
          via-transparent
          to-transparent
          pointer-events-none
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
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        py-20
      "
    >
      {/* BACKGROUND AMBIENT */}
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
            xl:grid-cols-[420px_minmax(0,1fr)]
            gap-16
            items-center
          "
        >
          {/* LEFT */}
          <div className="order-2 xl:order-1">
            <ProjectInfo project={currentProject} />
          </div>

          {/* RIGHT */}
          <div className="order-1 xl:order-2 relative">

            {/* BIG GLOW */}
            <div
              className="
                absolute
                inset-0
                -z-10
                bg-accent/10
                blur-[140px]
                rounded-full
              "
            />

            <Swiper
              spaceBetween={40}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="w-full max-w-[1200px]"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num}>
                  <ProjectSlide project={project} />
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="
                  absolute
                  bottom-6
                  right-6
                  z-30
                  flex
                  gap-3
                "
                btnStyles="
                  w-[56px]
                  h-[56px]
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-xl
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
