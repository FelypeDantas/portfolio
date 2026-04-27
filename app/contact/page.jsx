"use client";

import { useState } from "react";
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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Celular",
    description: "+55 (11) 94640-0631",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "felyped03@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Endereço",
    description: "SP, São Paulo, Guaianases",
  },
];

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, phone, service, message } = form;

    const whatsappMessage = `
Olá, meu nome é ${firstname} ${lastname}.
Meu e-mail é: ${email}.
Meu telefone é: ${phone}.
Estou interessado no serviço: ${service}.
Mensagem: ${message}
    `.trim();

    const whatsappUrl = `https://wa.me/5511946400631?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          
          {/* FORM */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <div>
                <h3 className="text-4xl text-accent">
                  Vamos trabalhar juntos!
                </h3>
                <p className="text-white/60">
                  Estou animado para colaborarmos. Me mande uma mensagem!
                </p>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="Primeiro Nome"
                  value={form.firstname}
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
                <Input
                  placeholder="Último Nome"
                  value={form.lastname}
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <Input
                  placeholder="Telefone"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              {/* Select */}
              <Select
                onValueChange={(value) => handleChange("service", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Serviços</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">
                      UI/UX Design
                    </SelectItem>
                    <SelectItem value="Logo Design">
                      Logo Design
                    </SelectItem>
                    <SelectItem value="Back-End">
                      Back-End
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                className="h-[180px]"
                placeholder="Digite sua mensagem..."
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />

              <Button className="max-w-40">Enviar</Button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {contactInfo.map(({ icon: Icon, title, description }, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <Icon className="text-[26px]" />
                  </div>
                  <div>
                    <p className="text-white/60">{title}</p>
                    <h3 className="text-lg">{description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
