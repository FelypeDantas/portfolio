"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stair from "./Stair";

const overlayClasses =
  "fixed inset-0 w-screen h-screen pointer-events-none z-40";

const StairEffect = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        
        {/* Camada das escadas */}
        <div className={`${overlayClasses} flex`}>
          <Stair />
        </div>

        {/* Fade overlay */}
        <motion.div
          className={`${overlayClasses} bg-primary`}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        />
        
      </motion.div>
    </AnimatePresence>
  );
};

export default StairEffect;
