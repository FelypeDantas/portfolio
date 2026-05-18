"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "web-dev",
    num: "01",
    title: "Web Development",
    description:
      "Desenvolvedor web cria e mantém sites, garantindo que sejam funcionais, responsivos e esteticamente agradáveis.",
    href: "/work",
  },
  {
    id: "ui-ux",
    num: "02",
    title: "UI/UX Design",
    description:
      "Criação de interfaces intuitivas e agradáveis, focando na experiência do usuário e usabilidade.",
    href: "/services/UxDesign",
  },
  {
    id: "data",
    num: "03",
    title: "Data Analyst",
    description:
      "Coleta, organização e análise de dados para gerar insights e apoiar decisões estratégicas.",
    href: "/services/data_analytics",
  },
  {
    id: "backend",
    num: "04",
    title: "Back-End Developer",
    description:
      "Responsável pela lógica do servidor, banco de dados e integração de sistemas.",
    href: "/services/Backend",
  },
];

const ServiceCard = ({ service }) => {
  const { num, title, description, href } = service;

  const Content = (
    <>
      <div className="w-full flex justify-between items-center">
        <span className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition duration-500">
          {num}
        </span>

        {href ? (
          <Link
            href={href}
            aria-label={`Ver serviço ${title}`}
            className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition duration-500 flex items-center justify-center hover:-rotate-45"
          >
            <BsArrowDownRight className="text-primary text-3xl" />
          </Link>
        ) : (
          <div className="w-[70px] h-[70px] rounded-full bg-white/10 flex items-center justify-center cursor-not-allowed">
            <BsArrowDownRight className="text-white/30 text-3xl" />
          </div>
        )}
      </div>

      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition duration-500">
        {title}
      </h2>

      <p className="text-white/60">{description}</p>

      <div className="border-b border-white/20 w-full" />
    </>
  );

  return (
    <div className="flex flex-col justify-center gap-6 group">
      {Content}
    </div>
  );
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.5, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
