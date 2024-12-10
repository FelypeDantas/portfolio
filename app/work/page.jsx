"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {BsArrowUpRight, BsGithub, } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Front-End",
        title: "Projeto 1",
        description: "Este projeto é um relógio digital interativo, desenvolvido com HTML, CSS e JavaScript. Permite ao usuário personalizar a cor da fonte através de uma paleta de cores, com as preferências salvas em host. É uma fusão de dois desafios para iniciantes: a criação de um relógio e a implementação de personalização de cores.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"}
        ],
        image: "/assets/work/thumb1.png",
        live: "https://felypedantas.github.io/Relogio_JS/",
        github: "https://github.com/FelypeDantas/Relogio_JS"
    },
    {
        num: "02",
        category: "Front-End",
        title: "Projeto 2",
        description: "O projeto Fokus é uma aplicação web desenvolvida com HTML, CSS e JavaScript, que tem como objetivo criar uma interface intuitiva e responsiva. Ele permite aos usuários interagir com funcionalidades dinâmicas, utilizando animações e efeitos visuais para melhorar a experiência. A iniciativa busca integrar design moderno e usabilidade, facilitando a navegação e o acesso à informação.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"}
        ],
        image: "/assets/work/thumb2.png",
        live: "https://felypedantas.github.io/Fokus_Complete/",
        github: "https://github.com/FelypeDantas/Fokus_Complete"
    },
    {
        num: "03",
        category: "Front-End",
        title: "Projeto 3",
        description: "O Serenato Café é um projeto web criado com HTML, CSS, JavaScript e Bootstrap, projetado para oferecer uma experiência agradável aos visitantes. A aplicação apresenta um design responsivo e elegante, com menus interativos e informações sobre o cardápio. O uso do Bootstrap facilita a adaptação em diferentes dispositivos.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"},
            {name: "Bootstrap"}
        ],
        image: "/assets/work/thumb3.png",
        live: "https://felypedantas.github.io/Serenatto_Cafe/",
        github: "https://github.com/FelypeDantas/Serenatto_Cafe"
    },
    {
        num: "04",
        category: "Front-End",
        title: "Projeto 4",
        description: "O Spa Calmaria é um projeto web desenvolvido com HTML, SASS e CSS, focado em transmitir uma atmosfera relaxante e acolhedora. Com um design minimalista e sofisticado, a aplicação destaca serviços e ambientes do spa, utilizando tipografia e paletas de cores suaves.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "SASS"}
        ],
        image: "/assets/work/thumb4.png",
        live: "https://felypedantas.github.io/Spa-Calmaria/",
        github: "https://github.com/FelypeDantas/Spa-Calmaria"
    },
    {
        num: "05",
        category: "Front-End",
        title: "Projeto 5",
        description: "O site Multiverse Spider-Man é uma plataforma dedicada aos fãs do Homem-Aranha, apresentando trailers e informações sobre todos os filmes até 2024, estrelados por Tom Holland, Tobey Maguire e Andrew Garfield.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"}
        ],
        image: "/assets/work/thumb5.png",
        live: "https://spider-man-multiverse-ten.vercel.app/",
        github: "https://github.com/FelypeDantas/Spider-Man_Multiverse"
    },
    {
        num: "06",
        category: "Front-End",
        title: "Projeto 6",
        description: "Permite aos usuários selecionar setores do mercado, editar itens e removê-los conforme necessário. Além disso, a funcionalidade de checkbox risca os itens comprados, movendo-os para uma lista separada, proporcionando uma experiência prática e eficiente para o dia a dia.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"}
        ],
        image: "/assets/work/thumb6.png",
        live: "https://felypedantas.github.io/Lista_Compras/",
        github: "https://github.com/FelypeDantas/Lista_Compras"
    },
    {
        num: "07",
        category: "Full-Stack",
        title: "Projeto 7",
        description: "O Svelte-Perfis é um projeto que utiliza o framework Svelte para criar uma aplicação dinâmica e responsiva, focada na apresentação de perfis de usuários.",
        stack: [
            {name: "Svelte"},
            {name: "Node.js"},
        ],
        image: "/assets/work/thumb7.png",
        live: "https://svelte-perfis-two.vercel.app/",
        github: "https://github.com/FelypeDantas/svelte-perfis"
    },
    {
        num: "08",
        category: "Front-End",
        title: "Projeto 8",
        description: "O site sobre Cuidados de Verão é uma plataforma visualmente atraente, desenvolvida inteiramente com SVG, que oferece dicas e informações essenciais para aproveitar a estação com segurança.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"},
        ],
        image: "/assets/work/thumb8.png",
        live: "https://felypedantas.github.io/Site_Verao/",
        github: "https://github.com/FelypeDantas/Site_Verao"
    },
    {
        num: "09",
        category: "Front-End",
        title: "Projeto 9",
        description: "O site da série Stranger Things é uma plataforma envolvente que mergulha os fãs no universo nostálgico e misterioso da série.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"}
        ],
        image: "/assets/work/thumb9.png",
        live: "https://felypedantas.github.io/Mundo-Invertido/",
        github: "https://github.com/FelypeDantas/Mundo-Invertido"
    },
    {
        num: "10",
        category: "Front-End",
        title: "Projeto 10",
        description: "O Mixa-Games é um gerenciador de jogos inovador que facilita a organização e o acompanhamento de sua coleção de jogos.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"},
            {name: "Bootstrap"},
        ],
        image: "/assets/work/thumb10.png",
        live: "https://felypedantas.github.io/Mixa_Games/",
        github: "https://github.com/FelypeDantas/Mixa_Games"
    },
     {
        num: "11",
        category: "Front-End",
        title: "Projeto 11",
        description: "Este projeto consiste em uma calculadora funcional desenvolvida utilizando as tecnologias HTML, CSS e JavaScript. A interface é intuitiva e moderna, projetada para proporcionar uma experiência amigável ao usuário.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"},
        ],
        image: "/assets/work/thumb11.png",
        live: "https://felypedantas.github.io/Calculadora_Simples/",
        github: "https://github.com/FelypeDantas/Calculadora_Simples"
    },
    {
        num: "12",
        category: "Front-End",
        title: "Projeto 12",
        description: "Este projeto consiste em uma calculadora de IMC funcional desenvolvida utilizando as tecnologias HTML, CSS e JavaScript. A interface é intuitiva e moderna, projetada para proporcionar uma experiência amigável ao usuário.",
        stack: [
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "Javascript"},
            {name: "Char.js"},
        ],
        image: "/assets/work/thumb12.png",
        live: "https://felypedantas.github.io/Calculadora_IMC/",
        github: "https://github.com/FelypeDantas/Calculadora_IMC"
    },
];

const Work = () => {
    const [project, setProjects] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProjects(projects[currentIndex])
    }
    return(
        <motion.section initial={{opacity: 0}} animate={{opacity:1, transition: {delay: 2.4 , duration: 0.4, ease: 'easeIn'}, }} className="min-h-[80vh] flex flex-col justify-center py-12 px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">Projeto {project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent ">
                                        {item.name}
                                        {index !== project.stack.length -1 && ","}
                                    </li>
                                })}
                            </ul>
                            <div className="border border-white/20 "></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Projeto ao vivo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Repositório do GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (<SwiperSlide key={index} className="w-full ">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt="Projeto"/>
                                        </div>
                                    </div>
                                </SwiperSlide>);
                            })}
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

export default Work;
