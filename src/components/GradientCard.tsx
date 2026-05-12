"use client";

import React from "react";
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";

export default function GradientCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-lg ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}

function useMotionTemplate(
  strings: TemplateStringsArray,
  ...values: MotionValue<number>[]
) {
  return useTransform(values, (latestValues) =>
    strings.reduce((acc, str, i) => acc + str + (latestValues[i] || ""), "")
  );
}
