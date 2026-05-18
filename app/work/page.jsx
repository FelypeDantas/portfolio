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

const BUTTON_CLASS = `
w-[58px]
h-[58px]
rounded-full
border
border-white/10
bg-white/5
hover:bg-accent
hover:text-primary
transition-all
duration-300
flex
items-center
justify-center
backdrop-blur-md
group
`;

const CARD_CLASS = `
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-[#1c1c22]
shadow-2xl
`;

// --------------------------------------------------
// BUTTONS
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
                className={BUTTON_CLASS}
              >
                <BsArrowUpRight className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
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
            bg-white/5
            border
            border-white/10
            text-sm
            text-accent
            backdrop-blur-sm
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
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        flex
        flex-col
        justify-between
        gap-10
        h-full
      "
    >
      <div className="space-y-7">

        {/* NUMBER */}
        <div className="flex items-center gap-5">
          <span
            className="
              text-[80px]
              xl:text-[120px]
              font-extrabold
              leading-none
              text-transparent
              text-outline
              opacity-40
            "
          >
            {project.num}
          </span>

          <div className="h-[2px] flex-1 bg-gradient-to-r from-accent to-transparent" />
        </div>

        {/* CATEGORY */}
        <span
          className="
            uppercase
            tracking-[0.35em]
            text-sm
            text-accent
          "
        >
          {project.category}
        </span>

        {/* TITLE */}
        <h2
          className="
            text-5xl
            xl:text-7xl
            font-bold
            leading-[0.95]
            tracking-tight
          "
        >
          {project.title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-white/60
            text-lg
            leading-relaxed
            max-w-[520px]
          "
        >
          {project.description}
        </p>

        {/* STACK */}
        <StackList stack={project.stack} />
      </div>

      {/* FOOTER */}
      <div className="space-y-6">
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

// --------------------------------------------------
// SLIDE
// --------------------------------------------------

function ProjectSlide({ project }) {
  return (
    <div
      className={`
        ${CARD_CLASS}
        h-[320px]
        md:h-[420px]
        xl:h-[620px]
      `}
    >
      {/* glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-tr
          from-accent/20
          via-transparent
          to-transparent
          z-10
          pointer-events-none
        "
      />

      {/* dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/20
          z-10
        "
      />

      {/* image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority
        className="
          object-cover
          object-top
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
      className="
        min-h-screen
        flex
        items-center
        py-20
        overflow-hidden
      "
    >
      <div className="container mx-auto px-4">
        <div
          className="
            grid
            xl:grid-cols-[420px_1fr]
            gap-14
            items-center
          "
        >

          {/* LEFT */}
          <div className="order-2 xl:order-1">
            <ProjectInfo project={currentProject} />
          </div>

          {/* RIGHT */}
          <div className="order-1 xl:order-2 relative">
            <Swiper
              spaceBetween={30}
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
                  absolute
                  z-30
                  bottom-6
                  right-6
                  flex
                  gap-3
                "
                btnStyles="
                  w-[54px]
                  h-[54px]
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-md
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

            {/* ambient glow */}
            <div
              className="
                absolute
                -z-10
                inset-0
                bg-accent/10
                blur-[120px]
                rounded-full
              "
            />
          </div>

        </div>
      </div>
    </motion.section>
  );
}
