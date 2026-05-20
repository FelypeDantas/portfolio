"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import {
  BsGithub,
  BsStars,
  BsCodeSlash,
  BsBriefcase,
} from "react-icons/bs";

// --------------------------------------------------
// STATIC DATA
// --------------------------------------------------

const BASE_STATS = [
  {
    key: "experience",
    value: 2,
    suffix: "+",
    label: "Anos de experiência",
    icon: BsBriefcase,
  },

  {
    key: "projects",
    value: 19,
    suffix: "+",
    label: "Projetos construídos",
    icon: BsStars,
  },

  {
    key: "tech",
    value: 14,
    suffix: "+",
    label: "Tecnologias dominadas",
    icon: BsCodeSlash,
  },

  {
    key: "repos",
    value: 0,
    suffix: "+",
    label: "Repositórios GitHub",
    icon: BsGithub,
    dynamic: true,
  },
];

// --------------------------------------------------
// CARD
// --------------------------------------------------

function StatCard({
  stat,
  index,
}) {
  const Icon = stat.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.45,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/[0.06]

        bg-white/[0.02]
        backdrop-blur-xl

        p-6

        transition-all
        duration-500

        hover:border-accent/20
        hover:bg-white/[0.04]
      "
    >
      {/* ambient glow */}
      <div
        className="
          absolute
          inset-0

          opacity-0
          group-hover:opacity-100

          transition-opacity
          duration-500

          bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.14),transparent_65%)]

          pointer-events-none
        "
      />

      {/* top */}
      <div
        className="
          relative
          z-10

          flex
          items-start
          justify-between
          gap-4
        "
      >
        {/* number */}
        <div className="space-y-2">
          <div
            className="
              flex
              items-end
              gap-1
            "
          >
            <CountUp
              end={stat.value}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
              className="
                text-4xl
                sm:text-5xl
                xl:text-6xl

                font-black
                tracking-tight
              "
            />

            <span
              className="
                text-2xl
                xl:text-3xl

                font-bold
                text-accent
              "
            >
              {stat.suffix}
            </span>
          </div>

          <p
            className="
              max-w-[180px]

              text-sm
              sm:text-base

              leading-relaxed
              text-white/60
            "
          >
            {stat.label}
          </p>
        </div>

        {/* icon */}
        <div
          className="
            flex
            items-center
            justify-center

            w-14
            h-14

            rounded-2xl

            border
            border-white/10

            bg-white/[0.03]

            text-accent

            backdrop-blur-md

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:border-accent/20
          "
        >
          <Icon className="text-2xl" />
        </div>
      </div>

      {/* bottom line */}
      <div
        className="
          absolute
          bottom-0
          left-0

          h-px
          w-0

          bg-gradient-to-r
          from-accent
          to-transparent

          transition-all
          duration-500

          group-hover:w-full
        "
      />
    </motion.article>
  );
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function Stats() {
  const [reposCount, setReposCount] =
    useState(0);

  // --------------------------------------------------
  // FETCH GITHUB
  // --------------------------------------------------

  useEffect(() => {
    let ignore = false;

    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/FelypeDantas"
        );

        if (!response.ok) {
          throw new Error(
            "Erro ao buscar GitHub"
          );
        }

        const data = await response.json();

        if (!ignore) {
          setReposCount(
            data.public_repos || 0
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchRepos();

    return () => {
      ignore = true;
    };
  }, []);

  // --------------------------------------------------
  // MEMO
  // --------------------------------------------------

  const stats = useMemo(() => {
    return BASE_STATS.map((item) =>
      item.dynamic
        ? {
            ...item,
            value: reposCount,
          }
        : item
    );
  }, [reposCount]);

  // --------------------------------------------------
  // RENDER
  // --------------------------------------------------

  return (
    <section
      className="
        relative
        py-16
        xl:py-24
        overflow-hidden
      "
    >
      {/* ambient background */}
      <div
        className="
          absolute
          inset-0
          -z-10

          bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.06),transparent_45%)]
        "
      />

      <div className="container mx-auto px-4">
        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4

            gap-5
          "
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.key}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
