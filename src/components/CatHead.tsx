"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CatHead() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blink, setBlink] = useState(false);

  // Eye movement values
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  // Smooth springs for eye movement
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 20, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 20, mass: 0.5 });

  // Map movement range
  const eyeX = useTransform(smoothX, [-1, 1], [-3.5, 3.5]);
  const eyeY = useTransform(smoothY, [-1, 1], [-2.5, 2.5]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      // Calculate normalized position (-1 to 1) with more sensitivity
      const x = Math.max(-1, Math.min(1, deltaX / 250));
      const y = Math.max(-1, Math.min(1, deltaY / 250));

      pointerX.set(x);
      pointerY.set(y);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  // Blink logic
  useEffect(() => {
    const blinkLoop = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 4000 + Math.random() * 2000);
    return () => clearInterval(blinkLoop);
  }, []);

  const colors = {
    fur: "var(--color-primary)",
    accent: "var(--color-accent)",
    muzzle: "var(--color-background)",
    eye: "var(--color-accent)",
    pupil: "var(--color-background)",
    white: "#ffffff",
  };

  return (
    <motion.div 
      ref={containerRef}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center w-14 h-12 overflow-visible group transition-colors cursor-help"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ears - Made smaller */}
        <path d="M30 46 L24 28 L42 40 Z" fill={colors.fur} stroke={colors.fur} strokeWidth="1" strokeLinejoin="round" />
        <path d="M70 46 L76 28 L58 40 Z" fill={colors.fur} stroke={colors.fur} strokeWidth="1" strokeLinejoin="round" />
        <path d="M32 44 L28 34 L40 40 Z" fill={colors.accent} opacity="0.25" />
        <path d="M68 44 L72 34 L60 40 Z" fill={colors.accent} opacity="0.25" />

        {/* Head Shape - Scaled up */}
        <circle cx="50" cy="62" r="38" fill={colors.fur} />
        
        {/* Whiskers */}
        <path d="M20 66 L6 64 M20 72 L6 76 M80 66 L94 64 M80 72 L94 76" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" opacity="0.3" />

        {/* Muzzle Area */}
        <motion.g animate={{ y: blink ? 0.5 : 0 }}>
          <ellipse cx="50" cy="76" rx="16" ry="11" fill={colors.muzzle} />
          <path d="M46 72 L54 72 L50 77 Z" fill={colors.accent} />
          <path 
            d="M50 77 L50 80 M50 80 Q46 84 42 81 M50 80 Q54 84 58 81" 
            stroke={colors.pupil} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.8"
          />
        </motion.g>

        {/* Eyes - Large expressive circles */}
        <circle cx="34" cy="58" r="10" fill={colors.white} />
        <circle cx="66" cy="58" r="10" fill={colors.white} />

        {/* Eye Contents (Tracking) */}
        <motion.g style={{ x: eyeX, y: eyeY }}>
          <circle cx="34" cy="58" r="7.5" fill={colors.eye} />
          <circle cx="66" cy="58" r="7.5" fill={colors.eye} />
          
          <motion.g 
            animate={blink ? { scaleY: 0.1, y: 3 } : { scaleY: 1, y: 0 }} 
            transition={{ duration: 0.12 }}
            style={{ transformOrigin: "34px 58px" }}
          >
            <ellipse cx="34" cy="58" rx="3" ry="5" fill={colors.pupil} />
          </motion.g>
          
          <motion.g 
            animate={blink ? { scaleY: 0.1, y: 3 } : { scaleY: 1, y: 0 }} 
            transition={{ duration: 0.12 }}
            style={{ transformOrigin: "66px 58px" }}
          >
            <ellipse cx="66" cy="58" rx="3" ry="5" fill={colors.pupil} />
          </motion.g>
          
          {/* Reflections for depth */}
          <circle cx="36" cy="55" r="1.5" fill={colors.white} opacity="0.9" />
          <circle cx="68" cy="55" r="1.5" fill={colors.white} opacity="0.9" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
