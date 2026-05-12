"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React from "react";

const ScrollPath = () => {
  const { scrollYProgress } = useScroll();

  // Make the drawing highly interactive and springy
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const pathLength = useTransform(smoothProgress, [0, 0.8], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 4000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-accent"
        preserveAspectRatio="none"
      >
        {/* Background Track (Subtle) */}
        <path
          d="
            M 600 0
            C 1800 600, -600 1200, 600 1800
            C 1800 2400, -600 3000, 600 3600
            C 1800 4200, -600 4800, 600 5400
          "
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="12 12"
          strokeOpacity="0.2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Interactive Foreground Path */}
        <motion.path
          d="
            M 600 0
            C 1800 600, -600 1200, 600 1800
            C 1800 2400, -600 3000, 600 3600
            C 1800 4200, -600 4800, 600 5400
          "
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          style={{ pathLength }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default ScrollPath;