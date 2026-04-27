"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const uxDesigners = [
  {
    id: "canva",
    num: "01",
    title: "Canva",
    href: "https://portfolio-umber-seven-61.vercel.app/services/UxDesign/canva",
  },
  {
    id: "figma",
    num: "02",
    title: "Figma",
    href: "",
  },
  {
    id: "photoshop",
    num: "03",
    title: "Adobe Photoshop",
    href: "",
  },
];

const ServiceCard = ({ service }) => {
  const isActive = Boolean(service.href);

  return (
    <article className="flex flex-col justify-center gap-6 group">
      <header className="flex justify-between items-center">
        <span className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
          {service.num}
        </span>

        <Link
          href={isActive ? service.href : "#"}
          aria-disabled={!isActive}
          aria-label={
            isActive
              ? `Abrir ${service.title}`
              : `${service.title} indisponível`
          }
          className={`w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white transition-all duration-500 
          group-hover:bg-accent hover:-rotate-45
          ${!isActive ? "pointer-events-none opacity-50" : ""}`}
        >
          <BsArrowDownRight className="text-primary text-3xl" />
        </Link>
      </header>

      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
        {service.title}
      </h2>

      <div className="border-b border-white/20 w-full" />
    </article>
  );
};

const UXDesign = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {uxDesigners.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UXDesign;
