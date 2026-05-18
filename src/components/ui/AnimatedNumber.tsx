"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1.2,
}: AnimatedNumberProps) {
  const ref    = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring    = useSpring(motionVal, { duration: duration * 1000, bounce: 0.1 });
  const inView    = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix, prefix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
