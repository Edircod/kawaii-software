import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      style={{ boxShadow: "var(--card-shadow)" }}
      className={`rounded-[28px] border border-border bg-[color:var(--surface)] p-6 shadow-card backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
