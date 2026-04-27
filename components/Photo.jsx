"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
  },
};

const imageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
  },
};

const circleAnimation = {
  initial: { strokeDasharray: "24 10 0 0" },
  animate: {
    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
    rotate: [120, 360],
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse",
  },
};

const Photo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
      >
        {/* Foto */}
        <motion.div
          variants={imageAnimation}
          className="absolute translate-x-16 w-[200px] h-[300px] xl:w-[358px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/Eu.png"
            alt="Minha foto"
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </motion.div>

        {/* Círculo animado */}
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          viewBox="0 0 506 506"
          fill="transparent"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={circleAnimation}
            initial="initial"
            animate="animate"
            transition={circleAnimation.transition}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
