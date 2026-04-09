"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
};

export function SectionReveal({
  children,
  className = "",
  direction = "up"
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const x = direction === "left" ? -48 : direction === "right" ? 48 : 0;
  const y = direction === "up" ? 30 : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
