"use client";

import { motion } from "framer-motion";

const TOTAL_STEPS = 6;

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const getDelay = (index) => (TOTAL_STEPS - index - 1) * 0.1;

const Stair = () => {
  return (
    <>
      {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
        <motion.div
          key={`stair-${index}`}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: getDelay(index),
          }}
          className="absolute top-0 left-0 w-full h-full bg-white"
        />
      ))}
    </>
  );
};

export default Stair;
