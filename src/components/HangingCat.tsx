"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function HangingCat() {
  const [isMeowing, setIsMeowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for eye movement
  const eyeX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const eyeY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (e.clientX - centerX) / 200;
        const y = (e.clientY - centerY) / 200;

        // Clamp values so pupils don't leave the eyes
        mouseX.set(Math.max(-1, Math.min(1, x)) * 5);
        mouseY.set(Math.max(-1, Math.min(1, y)) * 3);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleMeow = () => {
    if (isMeowing) return;
    setIsMeowing(true);
    setTimeout(() => setIsMeowing(false), 2000);
  };

  // Theme-aware Cat Colors
  const colors = {
    base: "var(--color-primary)",
    stripes: "var(--color-accent)",
    snout: "var(--color-background)",
    eye: "var(--color-accent)",
    pupil: "var(--color-primary)",
    nose: "var(--color-accent)",
    ledge: "transparent"
  };

  return (
    <div
      ref={containerRef}
      // Positioned to hang exactly off the bottom of its parent container
      className="absolute top-[90%] right-24 -z-[10] pointer-events-none"
      style={{ width: "70px", height: "100px" }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="relative w-full h-full pointer-events-auto cursor-pointer group"
        onClick={handleMeow}
      >
        <svg
          viewBox="0 0 100 140"
          className="w-full h-full  overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* --- DANGLING TAIL (Behind the body) --- */}
          <motion.path
            d="M 50 85 Q 70 110 40 130"
            stroke={colors.base}
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            className={'-translate-y-2'}
            animate={{
              d: [
                "M 50 85 Q 70 110 40 130",
                "M 50 85 Q 30 110 60 130",
                "M 50 85 Q 70 110 40 130"
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* --- THE LEDGE IT HANGS FROM --- */}
          <rect x="10" y="0" width="80" height="10" rx="2" fill={colors.ledge} />

          {/* --- HEAD AND EARS --- */}
          {/* Left Ear */}
          <path d="M 22 45 L 12 12 L 40 28 Z" fill={colors.base} stroke={colors.base} strokeWidth="2" strokeLinejoin="round" />
          <path d="M 24 40 L 16 18 L 36 28 Z" fill={colors.nose} opacity="0.5" />

          {/* Right Ear */}
          <path d="M 78 45 L 88 12 L 60 28 Z" fill={colors.base} stroke={colors.base} strokeWidth="2" strokeLinejoin="round" />
          <path d="M 76 40 L 84 18 L 64 28 Z" fill={colors.nose} opacity="0.5" />

          {/* Main Head Shape (Wide oval) */}
          <ellipse cx="50" cy="52" rx="38" ry="30" fill={colors.base} />

          {/* Top Head Stripes */}
          <path d="M 40 25 L 45 35 M 50 22 L 50 35 M 60 25 L 55 35" stroke={colors.stripes} strokeWidth="3" strokeLinecap="round" opacity="0.6" />

          {/* Cheek Stripes */}
          <path d="M 12 45 L 22 50 M 12 55 L 25 58 M 88 45 L 78 50 M 88 55 L 75 58" stroke={colors.stripes} strokeWidth="3" strokeLinecap="round" opacity="0.6" />

          {/* Snout / Muzzle Area */}
          <ellipse cx="50" cy="65" rx="16" ry="12" fill={colors.snout} />

          {/* --- GRIPPING PAWS (In front of the ledge and head) --- */}
          {/* Left Paw extending from behind the head to over the ledge */}
          <path d="M 35 30 L 28 0 L 38 0 L 45 20 Z" fill={colors.base} />
          <rect x="26" y="-2" width="14" height="18" rx="6" fill={colors.snout} />
          {/* Claw lines */}
          <line x1="30" y1="1" x2="30" y2="8" stroke={colors.stripes} strokeWidth="1" strokeLinecap="round" />
          <line x1="34" y1="1" x2="34" y2="8" stroke={colors.stripes} strokeWidth="1" strokeLinecap="round" />

          {/* Right Paw extending from behind the head to over the ledge */}
          <path d="M 65 30 L 72 0 L 62 0 L 55 20 Z" fill={colors.base} />
          <rect x="60" y="-2" width="14" height="18" rx="6" fill={colors.snout} />
          {/* Claw lines */}
          <line x1="66" y1="1" x2="66" y2="8" stroke={colors.stripes} strokeWidth="1" strokeLinecap="round" />
          <line x1="70" y1="1" x2="70" y2="8" stroke={colors.stripes} strokeWidth="1" strokeLinecap="round" />

          {/* --- DYNAMIC FACE (Only Eyes follow mouse) --- */}
          {/* White part of eyes (Fixed) */}
          <circle cx="34" cy="50" r="10" fill="white" />
          <circle cx="66" cy="50" r="10" fill="white" />

          {/* --- DYNAMIC EYE BALLS (Only Iris/Pupils follow mouse) --- */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            {/* Iris */}
            <circle cx="34" cy="50" r="8" fill={colors.eye} />
            <circle cx="66" cy="50" r="8" fill={colors.eye} />

            {/* Pupils & Glint (Animate on meow) */}
            <motion.g animate={isMeowing ? { scaleY: 0.1, y: 3 } : { scaleY: 1, y: 0 }}>
              <ellipse cx="34" cy="50" rx="3" ry="6" fill={colors.pupil} />
              <ellipse cx="66" cy="50" rx="3" ry="6" fill={colors.pupil} />
            </motion.g>

            {/* White Glints */}
            <circle cx="36" cy="46" r="2.5" fill="white" />
            <circle cx="68" cy="46" r="2.5" fill="white" />
          </motion.g>

          {/* Stable Face Elements (Nose, Mouth, Whiskers) */}
          <g>
            {/* Nose */}
            <polygon points="46,62 54,62 50,66" fill={colors.nose} />

            {/* Mouth (Inverted Y) - Fixed, no animation */}
            <path
              d="M 50 66 L 50 69 M 50 69 Q 47 73 44 70 M 50 69 Q 53 73 56 70"
              stroke={colors.pupil}
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Whiskers */}
            <path d="M 32 64 L 15 62 M 32 68 L 15 70 M 68 64 L 85 62 M 68 68 L 85 70" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          </g>
        </svg>

        {/* Meow Tooltip/Bubble (Closer to cat) */}
        <AnimatePresence>
          {isMeowing && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20, y: 50 }}
              animate={{ opacity: 1, scale: 1, x: 25, y: 60 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute -top-5 -right-10 bg-accent text-background text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full rounded-tl-none border border-border shadow-2xl z-50 whitespace-nowrap"
            >
              Meow!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}