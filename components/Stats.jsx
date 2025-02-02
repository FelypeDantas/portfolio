"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

// Dados dos stats, agora o número de repositórios é configurado dinamicamente
const stats = [
    {
        num: 1,
        text: "Ano de experiência"
    },
    {
        num: 12,
        text: "Projetos Completos"
    },
    {
        num: 14,
        text: "Tecnologias"
    },
    {
        num: 0,  // Inicialmente, será 0 até carregar a quantidade real
        text: "Repositorios GitHub"
    }
];

const Stats = () => {
    // Estado para armazenar o número de repositórios GitHub
    const [reposCount, setReposCount] = useState(0);

    useEffect(() => {
        // Função para buscar a quantidade de repositórios do GitHub
        const fetchReposCount = async () => {
            const githubUsername = "FelypeDantas"; // Substitua pelo seu nome de usuário no GitHub
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
                if (response.ok) {
                    const data = await response.json();
                    setReposCount(data.length); // Contabiliza o número de repositórios
                } else {
                    console.error("Erro ao buscar dados do GitHub");
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
            }
        };

        fetchReposCount();
    }, []); // A requisição ocorre apenas uma vez, quando o componente for montado

    // Atualiza o valor de repositórios no stats dinamicamente
    stats[3].num = reposCount;

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snup text-white/80`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

