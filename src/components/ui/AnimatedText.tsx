"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
  lines: [string, string];
  className?: string;
};

export function AnimatedText({ lines, className }: AnimatedTextProps) {
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={line} className="overflow-hidden">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
