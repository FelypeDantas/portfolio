"use client";

import { motion } from "framer-motion";
import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects } from "@/data/projects";

// 🔹 Componente reutilizável de botão com tooltip
const IconButton = ({ href, icon: Icon, label }) => (
  <Link href={href} target="_blank">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <Icon className="text-white text-3xl group-hover:text-accent transition" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
);

// 🔹 Info do projeto
const ProjectInfo = ({ project }) => (
  <div className="flex flex-col gap-[30px] h-full">
    <div className="text-8xl font-extrabold text-transparent text-outline">
      {project.num}
    </div>

    <h2 className="text-[42px] font-bold text-white capitalize">
      Projeto {project.category}
    </h2>

    <p className="text-white/60">{project.description}</p>

    <ul className="flex flex-wrap gap-2">
      {project.stack.map((item, i) => (
        <li key={i} className="text-accent text-lg">
          {item.name}
          {i !== project.stack.length - 1 && ","}
        </li>
      ))}
    </ul>

    <div className="border border-white/20" />

    <div className="flex items-center gap-4">
      <IconButton
        href={project.live}
        icon={BsArrowUpRight}
        label="Projeto ao vivo"
      />
      <IconButton
        href={project.github}
        icon={BsGithub}
        label="Repositório do GitHub"
      />
    </div>
  </div>
);

// 🔹 Slide individual
const ProjectSlide = ({ project }) => (
  <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
    <div className="absolute inset-0 bg-black/10 z-10" />
    <Image
      src={project.image}
      fill
      className="object-cover"
      alt={project.title}
    />
  </div>
);

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = useCallback((swiper) => {
    setProject(projects[swiper.activeIndex]);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          
          {/* 🔹 Info */}
          <div className="w-full xl:w-1/2 flex flex-col justify-between order-2 xl:order-none">
            <ProjectInfo project={project} />
          </div>

          {/* 🔹 Slider */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((item) => (
                <SwiperSlide key={item.num}>
                  <ProjectSlide project={item} />
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;
