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

  // Map movement range - slightly wider for cartoonish effect
  const eyeX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const eyeY = useTransform(smoothY, [-1, 1], [-5, 5]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      const x = Math.max(-1, Math.min(1, deltaX / 120));
      const y = Math.max(-1, Math.min(1, deltaY / 100));

      pointerX.set(x);
      pointerY.set(y);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

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
      whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
      transition={{ rotate: { duration: 0.4, repeat: Infinity } }}
      className="relative flex items-center justify-center w-14 h-12 overflow-visible group transition-colors cursor-help"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ears - Rounded and stubby for cartoon look */}
        <path 
          d="M25 40 Q15 5 40 30 Z" 
          fill={colors.fur} 
          stroke={colors.fur} 
          strokeWidth="3" 
          strokeLinejoin="round" 
        />
        <path 
          d="M75 40 Q85 5 60 30 Z" 
          fill={colors.fur} 
          stroke={colors.fur} 
          strokeWidth="3" 
          strokeLinejoin="round" 
        />
        
        {/* Inner Ears - Soft pink/accent tint */}
        <path d="M28 35 Q22 15 38 28 Z" fill={colors.accent} opacity="0.25" />
        <path d="M72 35 Q78 15 62 28 Z" fill={colors.accent} opacity="0.25" />

        {/* Head - Very round and puffy */}
        <circle cx="50" cy="65" r="35" fill={colors.fur} />
        
        {/* Muzzle Area - Double circles for extra cuteness */}
        <motion.g animate={{ y: blink ? 0.5 : 0 }}>
          <circle cx="43" cy="82" r="9" fill={colors.muzzle} />
          <circle cx="57" cy="82" r="9" fill={colors.muzzle} />
          
          {/* Nose - Rounded heart/triangle */}
          <path d="M47 78 Q50 75 53 78 L50 82 Z" fill={colors.accent} />
          
          {/* Mouth */}
          <path 
            d="M43 82 Q46 86 50 82 Q54 86 57 82" 
            stroke={colors.pupil} 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.8"
          />
        </motion.g>

        {/* Eyes - Extra large and round */}
        <circle cx="34" cy="58" r="13" fill={colors.white} />
        <circle cx="66" cy="58" r="13" fill={colors.white} />

        {/* Eye Contents (Tracking) */}
        <motion.g style={{ x: eyeX, y: eyeY }}>
          <circle cx="34" cy="58" r="9" fill={colors.eye} />
          <circle cx="66" cy="58" r="9" fill={colors.eye} />
          
          {/* Pupils */}
          <motion.g 
            animate={blink ? { scaleY: 0.1, y: 4 } : { scaleY: 1, y: 0 }} 
            transition={{ duration: 0.12 }}
            style={{ transformOrigin: "34px 58px" }}
          >
            <circle cx="34" cy="58" r="4.5" fill={colors.pupil} />
          </motion.g>
          
          <motion.g 
            animate={blink ? { scaleY: 0.1, y: 4 } : { scaleY: 1, y: 0 }} 
            transition={{ duration: 0.12 }}
            style={{ transformOrigin: "66px 58px" }}
          >
            <circle cx="66" cy="58" r="4.5" fill={colors.pupil} />
          </motion.g>
          
          {/* Large cartoonish reflections */}
          <circle cx="37" cy="54" r="2.5" fill={colors.white} opacity="0.9" />
          <circle cx="69" cy="54" r="2.5" fill={colors.white} opacity="0.9" />
          <circle cx="32" cy="61" r="1" fill={colors.white} opacity="0.5" />
          <circle cx="64" cy="61" r="1" fill={colors.white} opacity="0.5" />
        </motion.g>

        {/* Whiskers - Short and bouncy */}
        <path d="M12 70 L2 68 M12 78 L4 80 M88 70 L98 68 M88 78 L96 80" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      </svg>
    </motion.div>
  );
}
