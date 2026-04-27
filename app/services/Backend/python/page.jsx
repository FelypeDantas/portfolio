"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    id: "p1",
    num: "01",
    title: "Projeto 1",
    description:
      "Um croqui de aplicação web criado no Python, demonstrando habilidades em desenvolvimento back-end e lógica de programação.",
    image: "/assets/work/thumb17.png",
    github: "https://github.com/FelypeDantas/cronometro_python",
  },
  {
    id: "p2",
    num: "02",
    title: "Projeto 2",
    description: "Um sistema de cálculo de impostos em Python.",
    image: "/assets/work/thumb18.png",
    github: "https://github.com/FelypeDantas/sistema_financeiro",
  },
  {
    id: "p3",
    num: "03",
    title: "Projeto 3",
    description:
      "Um sistema de análise de dados de planilhas utilizando Python.",
    image: "/assets/work/thumb19.png",
    github: "https://github.com/FelypeDantas/sistema-de-analise-de-dados",
  },
];

// 🎯 Componente isolado (fica mais limpo e reutilizável)
const ProjectInfo = ({ project }) => (
  <div className="flex flex-col gap-6 h-full">
    <div className="text-8xl font-extrabold text-transparent text-outline leading-none">
      {project.num}
    </div>

    <p className="text-white/60">{project.description}</p>

    <div className="border border-white/20" />

    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${project.title} no GitHub`}
            className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition"
          >
            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ver projeto</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

// 🎬 Slide visual separado
const ProjectSlide = ({ project }) => (
  <div className="h-[460px] relative flex items-center justify-center bg-pink-50/20 group">
    <div className="absolute inset-0 bg-black/10 z-10" />

    <Image
      src={project.image}
      fill
      priority
      className="object-cover"
      alt={project.title}
    />
  </div>
);

const BackProjects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedProject = projects[selectedIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          
          {/* 🧠 Info */}
          <div className="w-full xl:w-1/2 flex flex-col justify-between order-2 xl:order-1">
            <ProjectInfo project={selectedProject} />
          </div>

          {/* 🎞️ Slider */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectSlide project={project} />
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BackProjects;
