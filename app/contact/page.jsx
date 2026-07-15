"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import {
  BsArrowUpRight,
} from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const SERVICES = [
  "Desenvolvimento Web",
  "Back-End",
  "Data Analytics",
  "Dashboard & BI",
  "Automação",
];

const CONTACT_INFO = [
  {
    icon: FaPhoneAlt,
    title: "Telefone",
    value: "+55 (11) 99227-8449",
    href: "tel:+5511992278449",
  },
  {
    icon: FaEnvelope,
    title: "E-mail",
    value: "felyped03@gmail.com",
    href: "mailto:felyped03@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Localização",
    value: "São Paulo, Brasil",
    href: "#",
  },
];

// --------------------------------------------------
// STYLES
// --------------------------------------------------

const PANEL_CLASS = `
relative
overflow-hidden
rounded-[32px]
border
border-white/10
bg-[#16161d]/80
backdrop-blur-xl
`;

const INPUT_CLASS = `
h-[58px]
border-white/10
bg-white/[0.03]
focus-visible:ring-accent
placeholder:text-white/35
`;

const ICON_WRAPPER_CLASS = `
w-[58px]
h-[58px]
rounded-2xl
border
border-white/10
bg-white/[0.04]
flex
items-center
justify-center
text-accent
backdrop-blur-xl
`;

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function Contact() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const isDisabled = useMemo(() => {
    return (
      !form.firstname ||
      !form.email ||
      !form.message
    );
  }, [form]);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🚀 Novo contato pelo portfólio

👤 Nome:
${form.firstname} ${form.lastname}

📧 Email:
${form.email}

📱 Telefone:
${form.phone}

🧠 Serviço:
${form.service}

💬 Mensagem:
${form.message}
    `.trim();

    const url = `https://wa.me/5511992278449?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
        overflow-hidden
        py-16
        xl:py-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.08),transparent_40%)]
        "
      />

      <div className="container mx-auto px-4">
        <div
          className="
            grid
            gap-10
            xl:grid-cols-[1fr_420px]
            items-start
          "
        >
          {/* -------------------------------------------------- */}
          {/* FORM */}
          {/* -------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className={PANEL_CLASS}
          >
            {/* Ambient */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(0,255,170,0.08),transparent_35%)]
                pointer-events-none
              "
            />

            {/* Grid */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.03]
                bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                bg-[size:42px_42px]
              "
            />

            <form
              onSubmit={handleSubmit}
              className="
                relative
                z-20
                flex
                flex-col
                gap-8
                p-6
                md:p-10
                xl:p-12
              "
            >
              {/* HEADER */}
              <div className="space-y-4">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-accent/20
                    bg-accent/10
                    px-4
                    py-2
                    text-sm
                    text-accent
                  "
                >
                  <FaWhatsapp />
                  Vamos conversar
                </div>

                <div className="space-y-3">
                  <h2
                    className="
                      text-4xl
                      md:text-5xl
                      font-bold
                      leading-tight
                    "
                  >
                    Transforme sua ideia em algo real.
                  </h2>

                  <p
                    className="
                      max-w-[720px]
                      text-white/60
                      leading-relaxed
                    "
                  >
                    Desenvolvimento web, back-end,
                    automações, dashboards e soluções
                    digitais com foco em performance,
                    design moderno e escalabilidade.
                  </p>
                </div>
              </div>

              {/* INPUTS */}
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                "
              >
                <Input
                  className={INPUT_CLASS}
                  placeholder="Primeiro nome"
                  value={form.firstname}
                  onChange={(e) =>
                    updateField(
                      "firstname",
                      e.target.value
                    )
                  }
                />

                <Input
                  className={INPUT_CLASS}
                  placeholder="Sobrenome"
                  value={form.lastname}
                  onChange={(e) =>
                    updateField(
                      "lastname",
                      e.target.value
                    )
                  }
                />

                <Input
                  type="email"
                  className={INPUT_CLASS}
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={(e) =>
                    updateField(
                      "email",
                      e.target.value
                    )
                  }
                />

                <Input
                  className={INPUT_CLASS}
                  placeholder="Telefone"
                  value={form.phone}
                  onChange={(e) =>
                    updateField(
                      "phone",
                      e.target.value
                    )
                  }
                />
              </div>

              {/* SELECT */}
              <Select
                onValueChange={(value) =>
                  updateField("service", value)
                }
              >
                <SelectTrigger
                  className={`
                    ${INPUT_CLASS}
                    w-full
                  `}
                >
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Serviços
                    </SelectLabel>

                    {SERVICES.map((service) => (
                      <SelectItem
                        key={service}
                        value={service}
                      >
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* MESSAGE */}
              <Textarea
                placeholder="Conte um pouco sobre seu projeto..."
                value={form.message}
                onChange={(e) =>
                  updateField(
                    "message",
                    e.target.value
                  )
                }
                className="
                  min-h-[180px]
                  resize-none
                  border-white/10
                  bg-white/[0.03]
                  focus-visible:ring-accent
                  placeholder:text-white/35
                "
              />

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={isDisabled}
                className="
                  group
                  h-[58px]
                  rounded-2xl
                  bg-accent
                  px-8
                  text-base
                  font-semibold
                  text-primary
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-accent/90
                "
              >
                <span>
                  Enviar mensagem
                </span>

                <BsArrowUpRight
                  className="
                    ml-2
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Button>
            </form>
          </motion.div>

          {/* -------------------------------------------------- */}
          {/* INFO PANEL */}
          {/* -------------------------------------------------- */}

          <motion.aside
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className={`
              ${PANEL_CLASS}

              h-fit
              p-6
              md:p-8
            `}
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,170,0.08),transparent_30%)]
                pointer-events-none
              "
            />

            <div className="relative z-20">
              <div className="mb-10 space-y-3">
                <span
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-xs
                    text-accent
                  "
                >
                  Contato
                </span>

                <h3
                  className="
                    text-3xl
                    font-bold
                    leading-tight
                  "
                >
                  Bora criar algo absurdo 🚀
                </h3>

                <p className="text-white/60 leading-relaxed">
                  Respondo rápido pelo WhatsApp e
                  e-mail. Pode mandar desde uma
                  ideia simples até um projeto grande.
                </p>
              </div>

              <ul className="space-y-6">
                {CONTACT_INFO.map(
                  (
                    {
                      icon: Icon,
                      title,
                      value,
                      href,
                    },
                    index
                  ) => (
                    <li
                      key={index}
                    >
                      <a
                        href={href}
                        className="
                          group
                          flex
                          items-start
                          gap-4
                          rounded-2xl
                          border
                          border-white/5
                          bg-white/[0.02]
                          p-4
                          transition-all
                          duration-300
                          hover:border-accent/20
                          hover:bg-white/[0.04]
                        "
                      >
                        <div
                          className={
                            ICON_WRAPPER_CLASS
                          }
                        >
                          <Icon className="text-xl" />
                        </div>

                        <div className="flex-1">
                          <p
                            className="
                              text-sm
                              text-white/45
                            "
                          >
                            {title}
                          </p>

                          <h4
                            className="
                              mt-1
                              text-base
                              font-medium
                              transition-colors
                              duration-300
                              group-hover:text-accent
                              break-all
                            "
                          >
                            {value}
                          </h4>
                        </div>
                      </a>
                    </li>
                  )
                )}
              </ul>

              {/* STATUS CARD */}
              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-accent/15
                  bg-accent/10
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-accent
                      animate-pulse
                    "
                  />

                  <span className="text-sm text-accent">
                    Disponível para novos projetos
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}
