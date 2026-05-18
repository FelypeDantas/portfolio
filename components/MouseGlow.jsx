"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const speed = 0.08;

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      glow.style.transform = `
        translate3d(
          ${currentX - 200}px,
          ${currentY - 200}px,
          0
        )
      `;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    animate();

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
        left-0
        top-0
        z-[1]
        h-[400px]
        w-[400px]
        rounded-full
        bg-accent/20
        blur-[120px]
        mix-blend-screen
        will-change-transform
      "
    />
  );
}
