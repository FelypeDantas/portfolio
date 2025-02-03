"use client";

import { FaHtml5, FaCss3, FaJs, FaJava, FaFigma, FaNodeJs, FaPython, FaBootstrap, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiCsharp, SiTypescript } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
    title: "Sobre mim",
    description: "Sou um profissional apaixonado por tecnologia e design, especializado em desenvolvimento web e UI/UX. Com uma abordagem centrada no usuário, busco criar experiências digitais intuitivas e impactantes. Meu trabalho combina criatividade e técnica, sempre focando em soluções que atendam às necessidades dos clientes. Acredito no poder do design para transformar ideias em realidades, e estou sempre em busca de novos desafios e aprendizado.",
    info: [
        {
            fieldName: "Nome",
            fieldValue: "Felype Dantas"
        },
        {
            fieldName: "Celular",
            fieldValue: "+55 11 94640-0631"
        },
        {
            fieldName: "Experiencia",
            fieldValue: "1+ Ano"
        },
        {
            fieldName: "Nacionalidade",
            fieldValue: "Brasileiro"
        },
        {
            fieldName: "Email",
            fieldValue: "felyped03@gmail.com"
        },
        {
            fieldName: "Linguas",
            fieldValue: "Ingles, Espanhol"
        },
    ]
}

const experience = {
    icon: "assets/resume/badge.svg",
    title: "Minha Experiencia",
    description: "Sou desenvolvedor web com experiência em um projeto de estágio de três meses, onde contribuí para o desenvolvimento de soluções digitais. Ao longo de três anos de faculdade, me dediquei a projetos próprios, aprimorando minhas habilidades em programação e design. Estou sempre em busca de novos desafios para expandir meu conhecimento e aplicar minha criatividade em soluções inovadoras.",
    items: [
        {
            company: "Fatec Zona Leste",
            position: "Estagiario de TI",
            duration: "2024 - 2024"
        },
        {
            company: "Fatec Zona Leste",
            position: "Monitor de Algoritmos",
            duration: "2023 - 2023"
        },
        {
            company: "Leandro Vendas",
            position: "Assistente de vendas",
            duration: "2018 - 2020"
        },
    ]
}

const education = {
    icon: "assets/resume/cap.svg",
    title: "Minha Educação",
    description: "Sou desenvolvedor web com experiência em um projeto de estágio de três meses, onde contribuí para o desenvolvimento de soluções digitais. Ao longo de três anos de faculdade, me dediquei a projetos próprios, aprimorando minhas habilidades em programação e design. Estou sempre em busca de novos desafios para expandir meu conhecimento e aplicar minha criatividade em soluções inovadoras.",
    items: [
        {
            institution: "Fatec Zona Leste",
            degree: "ADS",
            duration: "2022 - present"
        },
        {
            institution: "DIO",
            degree: "Front-End do Zero com a Ri Happy",
            duration: "2024"
        },
        {
            institution: "Alura",
            degree: "Formação JavaScript",
            duration: "2024"
        },
        {
            institution: "Alura",
            degree: "Formação JavaSE",
            duration: "2024"
        },
        {
            institution: "Alura",
            degree: "Formação HTML e CSS",
            duration: "2024"
        },
        {
            institution: "ETEC de Guaianases",
            degree: "Administração",
            duration: "2020 - 2022"
        },
    ]
};

const skills = {
    title: "My Skills",
    description: "Sou desenvolvedor web com experiência em um projeto de estágio de três meses, onde contribuí para o desenvolvimento de soluções digitais. Ao longo de três anos de faculdade, me dediquei a projetos próprios, aprimorando minhas habilidades em programação e design. Estou sempre em busca de novos desafios para expandir meu conhecimento e aplicar minha criatividade em soluções inovadoras.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS3"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaJava />,
            name: "Java"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js"
        },
        {
            icon: <FaPython />,
            name: "Python"
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap"
        },
        {
            icon: <FaSass />,
            name: "SASS"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        {
            icon: <SiCsharp />,
            name: "C#"
        },
        {
            icon: <SiTypescript />,
            name: "Typescript"
        },
    ]
}

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }, 
    }} className='min-h-[80vh] flex items-center justify-center py-12 xl:px-0'>
        <div className="container mx-auto">
            <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                    <TabsTrigger value="experience">Experiências</TabsTrigger>
                    <TabsTrigger value="education">Educação</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">Sobre mim</TabsTrigger>
                </TabsList>

                <div className='min-h-[70vh] w-full'>
                    <TabsContent value="experience" className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{experience.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {experience.items.map((item, index) => {
                                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.company}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="education" className="w-full">
                         <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{education.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {education.items.map((item, index) => {
                                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.institution}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.title}</h3>
                                <p>{skills.description}</p>
                            </div>
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                {skills.skillList.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className='capitalize '>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{about.description}</p>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                {about.info.map((item, index) => {
                                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                        <span className='text-white/60'>{item.fieldName}</span>
                                        <span className='text-xl'>{item.fieldValue}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    )
}

export default Resume;
