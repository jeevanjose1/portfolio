"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  staggerChildren?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  className = "",
  delay = 0,
  duration = 0.8,
  y = 40,
  x = 0,
  scale = 1,
  blur = false,
  staggerChildren = 0,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y,
            x,
            scale,
            filter: blur ? "blur(10px)" : "none",
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration,
              delay: delay,
              ease: [0.25, 0.1, 0.25, 1], // Premium easing
              staggerChildren,
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealStagger = ({
  children,
  stagger = 0.1,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
