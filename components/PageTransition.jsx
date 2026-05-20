"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// --------------------------------------------------
// ANIMATIONS
// --------------------------------------------------

const overlayVariants = {
  initial: {
    scaleY: 1,
    originY: 0,
  },

  animate: {
    scaleY: 0,
    originY: 0,
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    scaleY: 1,
    originY: 1,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 18,
    filter: "blur(8px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.45,
      duration: 0.55,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(6px)",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function PageTransition({
  children,
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      <motion.div
        key={pathname}
        className="relative min-h-screen"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* PAGE OVERLAY */}
        <motion.div
          variants={overlayVariants}
          className="
            fixed
            inset-0
            z-[999]
            bg-primary
            pointer-events-none
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.14),transparent_60%)]
            "
          />

          {/* Grid texture */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
              bg-[size:44px_44px]
            "
          />

          {/* Noise */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              mix-blend-soft-light
              bg-[url('/assets/noise.png')]
            "
          />
        </motion.div>

        {/* PAGE CONTENT */}
        <motion.div
          variants={contentVariants}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
