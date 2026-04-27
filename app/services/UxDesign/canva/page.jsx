"use client";

import { motion } from "framer-motion";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
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

const projects = [
  {
    id: "01",
    title: "Projeto 1",
    description:
      "Um post de Instagram criado no Canva, com foco em criar uma identidade visual marcante e atraente.",
    image: "/assets/canva/VivaLeve.png",
    live: "https://www.instagram.com/p/DLfYwJVAWkeN57mAMIUF-dp6KGVtEpOD1-bEUg0/",
  },
  {
    id: "02",
    title: "Projeto 2",
    description:
      "Um post de Linkedin criado no Canva, com foco em relembrar a importância do profissional PCD.",
    image: "/assets/canva/pcd_camp.png",
    live: "https://www.linkedin.com/posts/felype-dantas-dos-santos_inclusaetopcd-diversidadenotrabalho-profissionaispcd-activity-7341103054944948224-bHom",
  },
  {
    id: "03",
    title: "Projeto 3",
    description: "Um mapa conceitual criado nos estudos básicos de DevOps.",
    image: "/assets/canva/devops.png",
    live: "https://www.linkedin.com/posts/felype-dantas-dos-santos_devops-containers-buildautomaertico-activity-7354837346921394176-w9aR",
  },
];

const CanvaProjects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSlideChange = useCallback((swiper) => {
    setSelectedProject(projects[swiper.activeIndex]);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          
          {/* LEFT SIDE */}
          <div className="w-full xl:w-1/2 flex flex-col justify-between">
            <div className="space-y-6">
              
              <span className="text-8xl font-extrabold text-transparent text-outline">
                {selectedProject.id}
              </span>

              <p className="text-white/60 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="border-t border-white/20" />

              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${selectedProject.title}`}
                      className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group transition"
                    >
                      <BsArrowUpRight className="text-3xl text-white group-hover:text-accent transition" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ver projeto</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px]"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="relative h-[460px] flex items-center justify-center bg-pink-50/20 group">
                    
                    <div className="absolute inset-0 bg-black/10 z-10" />

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default CanvaProjects;
