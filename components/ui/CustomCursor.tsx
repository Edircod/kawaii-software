"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 20, stiffness: 520, mass: 0.18 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 520, mass: 0.18 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };

    const activate = (event: Event) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, input, textarea, select")));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mouseover", activate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseover", activate);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      style={{ x: smoothX, y: smoothY }}
      animate={{
        scale: active ? 1.55 : 1,
        borderColor: active ? "var(--cursor-active-border)" : "var(--cursor-border)",
        backgroundColor: active ? "var(--cursor-active-fill)" : "var(--cursor-fill)",
        boxShadow: active ? "var(--cursor-active-shadow)" : "var(--cursor-shadow)"
      }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    />
  );
}
