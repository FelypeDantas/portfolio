"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import {
  CiMenuFries,
} from "react-icons/ci";

import {
  HiOutlineSparkles,
} from "react-icons/hi2";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// --------------------------------------------------
// NAV LINKS
// --------------------------------------------------

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Serviços",
    path: "/services",
  },
  {
    name: "Resumo",
    path: "/resume",
  },
  {
    name: "Projetos",
    path: "/work",
  },
];

// --------------------------------------------------
// ANIMATION
// --------------------------------------------------

const menuVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },

  visible: (i) => ({
    opacity: 1,
    x: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.35,
    },
  }),
};

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <Sheet>
      {/* TRIGGER */}
      <SheetTrigger
        aria-label="Abrir menu"
        className="
          relative
          flex
          items-center
          justify-center

          w-12
          h-12

          rounded-full

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-xl

          transition-all
          duration-300

          hover:border-accent/40
          hover:bg-accent/10
        "
      >
        {/* glow */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-accent/10
            blur-xl
            opacity-0
            transition-opacity
            duration-300
            hover:opacity-100
          "
        />

        <CiMenuFries
          className="
            relative
            z-10
            text-[28px]
            text-accent
          "
        />
      </SheetTrigger>

      {/* CONTENT */}
      <SheetContent
        side="right"
        className="
          border-l
          border-white/10

          bg-[#0f0f14]/95

          backdrop-blur-3xl

          flex
          flex-col
          items-center
          justify-between

          px-8
          py-10
        "
      >
        {/* background */}
        <div
          className="
            absolute
            inset-0
            -z-10

            bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.08),transparent_40%)]
          "
        />

        {/* TOP */}
        <div
          className="
            w-full
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            className="
              relative
              group
            "
          >
            <div
              className="
                absolute
                -inset-4
                rounded-full
                bg-accent/10
                blur-2xl
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative">
              <h1
                className="
                  text-3xl
                  font-black
                  tracking-tight
                "
              >
                Felype
                <span className="text-accent">.</span>
              </h1>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-white/30
                "
              >
                Developer • Creator
              </span>
            </div>
          </Link>
        </div>

        {/* NAV */}
        <nav
          className="
            flex
            flex-col
            items-center
            gap-5
            w-full
          "
        >
          {links.map((link, index) => {
            const active = isActive(link.path);

            return (
              <motion.div
                key={link.path}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                className="w-full"
              >
                <SheetClose asChild>
                  <Link
                    href={link.path}
                    className={`
                      relative
                      flex
                      items-center
                      justify-center

                      w-full

                      rounded-2xl

                      px-6
                      py-4

                      text-lg
                      font-medium

                      transition-all
                      duration-300

                      border

                      ${
                        active
                          ? `
                            border-accent/30
                            bg-accent/10
                            text-accent
                            shadow-[0_0_30px_rgba(0,255,170,0.12)]
                          `
                          : `
                            border-white/5
                            bg-white/[0.02]
                            text-white/70

                            hover:border-accent/20
                            hover:bg-accent/5
                            hover:text-accent
                          `
                      }
                    `}
                  >
                    {/* active glow */}
                    {active && (
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-2xl
                          bg-accent/10
                          blur-xl
                          -z-10
                        "
                      />
                    )}

                    {link.name}
                  </Link>
                </SheetClose>
              </motion.div>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div
          className="
            flex
            items-center
            gap-2

            text-sm
            text-white/40
          "
        >
          <HiOutlineSparkles className="text-accent" />

          <span>
            Building futuristic experiences
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
