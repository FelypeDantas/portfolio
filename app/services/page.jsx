"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Desenvolvedor web cria e mantém sites, garantindo que sejam funcionais, responsivos e esteticamente agradáveis. Trabalha com linguagens de programação, design e experiência do usuário para otimizar a presença online.',
        href: 'https://portfolio-umber-seven-61.vercel.app/work'
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'UI/UX Design envolve a criação de interfaces intuitivas e agradáveis para usuários, focando na usabilidade e na experiência do cliente. O objetivo é tornar produtos digitais mais acessíveis e envolventes, melhorando a interação entre usuários e sistemas.',
        href: 'https://portfolio-umber-seven-61.vercel.app/services/UxDesign'
    },
    {
        num: '03',
        title: 'Logo Design',
        description: 'O design de logotipos envolve a criação de identidades visuais únicas e memoráveis para marcas. Um bom logotipo transmite os valores da empresa e estabelece uma conexão emocional com o público.',
        href: ''
    },
    {
        num: '04',
        title: 'Back-End Developer',
        description: 'Um desenvolvedor back-end é responsável pela lógica do servidor, bancos de dados e integração de sistemas, garantindo que as funcionalidades de um site ou aplicativo funcionem corretamente. Ele lida com a parte "invisível" da tecnologia, otimizando desempenho e segurança.',
        href: 'https://portfolio-umber-seven-61.vercel.app/services/Backend'
    }
]

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div
                 initial={{opacity: 0}} 
                 animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
            }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                       return <div className='flex-1 flex flex-col justify-center gap-6 group' key={index}>
                        <div className='w-full flex justify-between items-center'>
                            <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                            <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                <BsArrowDownRight className='text-primary text-3xl'/>
                            </Link>
                        </div>
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                        <p className='text-white/60'>{service.description}</p>
                        <div className='border-b border-white/20 w-full'></div>
                       </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;
