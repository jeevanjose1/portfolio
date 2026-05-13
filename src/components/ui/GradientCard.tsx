"use client";

import React from "react";
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";

function useMotionTemplate(
  strings: TemplateStringsArray,
  ...values: MotionValue<number>[]
) {
  return useTransform(values, (latestValues) =>
    strings.reduce((acc, str, i) => acc + str + (latestValues[i] ?? ""), "")
  );
}

interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** Show a subtle accent glow ring on hover */
  glow?: boolean;
}

export default function GradientCard({ children, className = "", glow = false, style, ...props }: GradientCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-2xl ${glow ? "hover:shadow-accent" : ""} transition-shadow duration-500 ${className}`}
      style={style}
      {...props}
    >
      {/* Radial spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 rounded-2xl"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              380px circle at ${mouseX}px ${mouseY}px,
              var(--card-spotlight-color),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
