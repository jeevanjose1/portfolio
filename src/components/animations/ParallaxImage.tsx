"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxImageProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxImage = ({
  children,
  offset = 50,
  className = "",
}: ParallaxImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, height: `calc(100% + ${offset * 2}px)`, marginTop: -offset, marginBottom: -offset }}>
        {children}
      </motion.div>
    </div>
  );
};
