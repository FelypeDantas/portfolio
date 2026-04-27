"use client";

import { useEffect, useState, useMemo } from "react";
import CountUp from "react-countup";

const BASE_STATS = [
  {
    num: 2,
    text: "Ano de experiência",
  },
  {
    num: 19,
    text: "Projetos Completos",
  },
  {
    num: 14,
    text: "Tecnologias",
  },
  {
    key: "repos",
    num: 0,
    text: "Repositórios GitHub",
  },
];

const Stats = () => {
  const [reposCount, setReposCount] = useState(0);

  useEffect(() => {
    const fetchReposCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/FelypeDantas/repos"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do GitHub");
        }

        const data = await response.json();
        setReposCount(data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReposCount();
  }, []);

  // Cria uma versão derivada dos stats (sem mutar o original)
  const stats = useMemo(() => {
    return BASE_STATS.map((item) =>
      item.key === "repos"
        ? { ...item, num: reposCount }
        : item
    );
  }, [reposCount]);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={item.key || index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={3}
                className="text-4xl xl:text-6xl font-extrabold"
              />

              <p
                className={`${
                  item.text.length < 15
                    ? "max-w-[100px]"
                    : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
