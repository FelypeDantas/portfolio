"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const speed = 0.08;

    const moveGlow = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      glow.style.transform = `
        translate(
          ${currentX - 200}px,
          ${currentY - 200}px
        )
      `;

      requestAnimationFrame(moveGlow);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    moveGlow();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-[1]
        h-[400px]
        w-[400px]
        rounded-full
        bg-accent/20
        blur-[120px]
      "
    />
  );
}