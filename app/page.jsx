"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FiDownload } from "react-icons/fi";
import {
  BsArrowRight,
  BsStars,
} from "react-icons/bs";

import { Button } from "@/components/ui/button";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

// --------------------------------------------------
// ANIMATION
// --------------------------------------------------

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function Home() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        py-24
        xl:py-0
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          -z-20

          bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.10),transparent_35%)]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.03]

          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]

          bg-[size:42px_42px]
        "
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1fr_520px]

            gap-16
            xl:gap-10

            items-center
          "
        >
          {/* LEFT */}
          <div
            className="
              order-2
              xl:order-1

              text-center
              xl:text-left
            "
          >
            {/* BADGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="
                inline-flex
                items-center
                gap-2

                px-4
                py-2

                rounded-full

                border
                border-accent/20

                bg-accent/5
                backdrop-blur-xl

                text-accent
                text-sm
                tracking-wide

                mb-6
              "
            >
              <BsStars className="text-sm" />

              <span>
                Developer • Data • Design • Creative Tech
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              <h1
                className="
                  text-[42px]
                  sm:text-[58px]
                  lg:text-[72px]
                  xl:text-[92px]

                  font-bold
                  leading-[0.95]
                  tracking-tight
                "
              >
                Construindo
                <br />

                <span className="text-accent">
                  experiências digitais
                </span>

                <br />

                com código e criatividade.
              </h1>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="
                mt-8

                max-w-[680px]

                mx-auto
                xl:mx-0

                text-base
                sm:text-lg

                text-white/65
                leading-relaxed
              "
            >
              Sou Felype Dantas, desenvolvedor focado em
              experiências modernas, interfaces imersivas,
              automações inteligentes e projetos que unem
              tecnologia, design e estratégia.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="
                mt-10

                flex
                flex-col
                sm:flex-row

                items-center
                justify-center
                xl:justify-start

                gap-4
                sm:gap-5
              "
            >
              {/* DOWNLOAD */}
              <Link
                href="/assets/Curriculo_Felype.pdf"
                download
              >
                <Button
                  size="lg"
                  className="
                    group

                    h-[58px]

                    px-7

                    rounded-full

                    bg-accent
                    text-primary

                    hover:scale-[1.03]

                    transition-all
                    duration-300
                  "
                >
                  <span className="uppercase tracking-wide">
                    Download CV
                  </span>

                  <FiDownload
                    className="
                      ml-2
                      text-lg
                      transition-transform
                      duration-300
                      group-hover:translate-y-[2px]
                    "
                  />
                </Button>
              </Link>

              {/* PROJECTS */}
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="
                    group

                    h-[58px]

                    px-7

                    rounded-full

                    border-white/10
                    bg-white/[0.03]

                    hover:bg-white/10
                  "
                >
                  <span className="uppercase tracking-wide">
                    Ver projetos
                  </span>

                  <BsArrowRight
                    className="
                      ml-2
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Button>
              </Link>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              className="
                mt-10

                flex
                justify-center
                xl:justify-start
              "
            >
              <Social
                containerStyles="flex gap-4"
                iconStyles="
                  w-11
                  h-11

                  flex
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-accent/20

                  bg-white/[0.03]
                  backdrop-blur-md

                  text-accent

                  transition-all
                  duration-300

                  hover:bg-accent
                  hover:text-primary
                  hover:-translate-y-1
                "
              />
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="
              order-1
              xl:order-2

              relative

              flex
              items-center
              justify-center
            "
          >
            {/* BIG GLOW */}
            <div
              className="
                absolute

                w-[280px]
                h-[280px]

                sm:w-[420px]
                sm:h-[420px]

                bg-accent/20
                blur-[120px]

                rounded-full
              "
            />

            {/* PHOTO */}
            <div className="relative z-10">
              <Photo />
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="
            mt-20
            xl:mt-24
          "
        >
          <Stats />
        </motion.div>
      </div>
    </section>
  );
}
