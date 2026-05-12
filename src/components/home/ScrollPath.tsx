"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollPath() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0.02, 0.92], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 4200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-accent"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="scroll-path-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="
            M 612 20
            C 1030 350, 150 650, 585 990
            C 1035 1340, 170 1640, 620 1990
            C 1050 2325, 180 2670, 600 3020
            C 1010 3360, 300 3650, 660 4140
          "
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="10 18"
          strokeOpacity="0.18"
          vectorEffect="non-scaling-stroke"
        />

        <motion.path
          d="
            M 612 20
            C 1030 350, 150 650, 585 990
            C 1035 1340, 170 1640, 620 1990
            C 1050 2325, 180 2670, 600 3020
            C 1010 3360, 300 3650, 660 4140
          "
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.28"
          style={{ pathLength }}
          vectorEffect="non-scaling-stroke"
          filter="url(#scroll-path-glow)"
        />

        <motion.path
          d="
            M 612 20
            C 1030 350, 150 650, 585 990
            C 1035 1340, 170 1640, 620 1990
            C 1050 2325, 180 2670, 600 3020
            C 1010 3360, 300 3650, 660 4140
          "
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
          vectorEffect="non-scaling-stroke"
        />

      </svg>
    </div>
  );
}
