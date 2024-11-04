"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Celular",
        description: "+55 (11) 94640-0631"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "felyped03@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Endereço",
        description: "Rua Pacajas, 212, Vila Cosmopolita"
    },
];

const Contact = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `
            Olá, meu nome é ${firstname} ${lastname}.
            Meu e-mail é: ${email}.
            Meu telefone é: ${phone}.
            Estou interessado no serviço: ${service}.
            Minha mensagem: ${message}
        `.trim();

        const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Redireciona para a URL do WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.section initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, ease: 'easeIn' } }}
            className="py-6 ">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl " onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent ">Vamos trabalhar juntos!</h3>
                            <p className="text-white/60">Estou animado para podermos trabalhar juntos, entre em contato!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Primeiro Nome" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                <Input type="text" placeholder="Último nome" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" placeholder="Número de telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <Select onValueChange={(value) => setService(value)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione um serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione um serviço</SelectLabel>
                                        <SelectItem value="Desenvolvedor Web">Desenvolvedor Web</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                                        <SelectItem value="Desenvolvedor Back-End">Desenvolvedor Back-End</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Digite a sua mensagem aqui" value={message} onChange={(e) => setMessage(e.target.value)} />
                            <Button size="md" className="max-w-40">Enviar</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6 ">
                                        <div className="w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1 ">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;

        </motion.section>
    )
}

export default Contact;
