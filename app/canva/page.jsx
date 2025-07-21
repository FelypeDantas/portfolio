"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Tooltip Components (shadcn/ui)
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    title: "Projeto 1",
    description:
      "Um post de Instagram criado no Canva, com foco em criar uma identidade visual marcante e atraente.",
    image: "/assets/canva/VivaLeve.png",
    live: "https://www.instagram.com/p/DLfYwJVAWkeN57mAMIUF-dp6KGVtEpOD1-bEUg0/",
  },
  {
    num: "02",
    title: "Projeto 2",
    description:
      "Um post de Linkedin criado no Canva, com foco em relembrar a importância do profissional PCD.",
    image: "/assets/canva/pcd_camp.png",
    live: "https://www.linkedin.com/posts/felype-dantas-dos-santos_inclusaetopcd-diversidadenotrabalho-profissionaispcd-activity-7341103054944948224-bHom?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2HIoQBgXROSH00fdkGbb3pXYfiAG0LoBI",
  },
];

const CanvaProjects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setSelectedProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Texto e botão */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {selectedProject.num}
              </div>
              <p className="text-white/60">{selectedProject.description}</p>

              <div className="border border-white/20 "></div>

              {/* Botão com Tooltip */}
              <div className="flex items-center gap-4">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        aria-label="Ver projeto no Instagram"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Projeto nas redes</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          {/* Imagem com Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CanvaProjects;
