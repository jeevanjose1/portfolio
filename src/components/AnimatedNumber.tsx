"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

export default function AnimatedNumber({ value, suffix = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest) + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} />;
}
