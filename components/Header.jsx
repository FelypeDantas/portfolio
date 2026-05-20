"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

import {
  HiOutlineSparkles,
} from "react-icons/hi2";

// --------------------------------------------------
// ANIMATION
// --------------------------------------------------

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

export default function Header() {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="
        sticky
        top-0
        z-50
        w-full

        border-b
        border-white/[0.05]

        bg-[#0f0f14]/70
        backdrop-blur-2xl

        supports-[backdrop-filter]:bg-[#0f0f14]/50
      "
    >
      {/* ambient glow */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-accent/50
          to-transparent
        "
      />

      <div
        className="
          container
          mx-auto

          flex
          items-center
          justify-between

          px-4
          py-5
          xl:py-7
        "
      >
        {/* LEFT */}
        <Link
          href="/"
          aria-label="Ir para Home"
          className="
            group
            relative
            flex
            items-center
            gap-3
          "
        >
          {/* glow */}
          <div
            className="
              absolute
              left-0
              top-1/2
              -z-10
              h-12
              w-12
              -translate-y-1/2
              rounded-full
              bg-accent/20
              blur-2xl
              transition-all
              duration-500
              group-hover:bg-accent/30
            "
          />

          {/* logo */}
          <div className="flex flex-col leading-none">
            <span
              className="
                text-2xl
                sm:text-3xl
                xl:text-4xl

                font-black
                tracking-tight
              "
            >
              Felype
              <span className="text-accent">.</span>
            </span>

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/35
                mt-1
              "
            >
              Developer • Creator
            </span>
          </div>
        </Link>

        {/* DESKTOP */}
        <div
          className="
            hidden
            xl:flex
            items-center
            gap-10
          "
        >
          <Nav />

          <Button
            asChild
            size="lg"
            className="
              group
              relative
              overflow-hidden

              rounded-full

              border
              border-accent/20

              bg-accent
              px-7

              text-primary
              font-semibold

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:shadow-[0_0_35px_rgba(0,255,170,0.35)]
            "
          >
            <Link
              href="/contact"
              className="
                flex
                items-center
                gap-2
              "
            >
              <HiOutlineSparkles
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />

              Contrate-me
            </Link>
          </Button>
        </div>

        {/* MOBILE */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
