"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type CatMood = "idle" | "curious" | "happy" | "booped";

export default function HangingCat() {
  const [mood, setMood] = useState<CatMood>("idle");
  const [blink, setBlink] = useState(false);
  const [message, setMessage] = useState("");
  const catRef = useRef<HTMLButtonElement>(null);
  const messageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 18, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 18, mass: 0.35 });
  const rotate = useTransform(smoothX, [-6, 6], [-4, 4]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!catRef.current) return;

      const rect = catRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = Math.max(-1, Math.min(1, (event.clientX - centerX) / 190));
      const y = Math.max(-1, Math.min(1, (event.clientY - centerY) / 180));

      pointerX.set(x * 6);
      pointerY.set(y * 4);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  useEffect(() => {
    if (reduceMotion) return;

    const blinkLoop = window.setInterval(() => {
      setBlink(true);
      window.setTimeout(() => setBlink(false), 140);
    }, 3600);

    return () => window.clearInterval(blinkLoop);
  }, [reduceMotion]);

  const showMessage = (text: string, timeout = 1600) => {
    setMessage(text);
    if (messageTimer.current) clearTimeout(messageTimer.current);
    messageTimer.current = setTimeout(() => setMessage(""), timeout);
  };

  const handleBoop = () => {
    setMood("booped");
    setBlink(true);
    showMessage("meow");

    window.setTimeout(() => {
      setBlink(false);
      setMood("happy");
    }, 260);

    window.setTimeout(() => setMood("curious"), 1200);
  };

  const colors = {
    fur: "var(--color-primary)",
    furSoft: "var(--color-text-muted)",
    accent: "var(--color-accent)",
    muzzle: "var(--color-background)",
    line: "var(--color-border)",
    eye: "var(--color-accent)",
    pupil: "var(--color-background)",
    white: "#ffffff",
  };

  const isHappy = mood === "happy";
  const isBooped = mood === "booped";

  return (
    <div
      className="absolute top-[78%] right-24 -z-[10] pointer-events-none"
      style={{ width: 86, height: 124 }}
    >
      <motion.button
        ref={catRef}
        type="button"
        aria-label="Interactive hanging cat"
        onPointerEnter={() => {
          setMood("curious");
          showMessage("hello", 1200);
        }}
        onPointerLeave={() => setMood("idle")}
        onPointerDown={handleBoop}
        className="relative h-full w-full cursor-pointer bg-transparent p-0 pointer-events-auto outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        initial={{ y: -46, opacity: 0 }}
        animate={{
          y: isBooped ? 7 : 0,
          opacity: 1,
          rotate: isBooped ? [0, -5, 4, 0] : 0,
        }}
        whileHover={reduceMotion ? undefined : { y: -3 }}
        transition={{
          y: { type: "spring", stiffness: 90, damping: 13 },
          opacity: { duration: 0.2 },
          rotate: { duration: 0.34, ease: "easeOut" },
        }}
        style={{ rotate }}
      >
        <svg
          viewBox="0 0 120 170"
          className="h-full w-full overflow-visible drop-shadow-[0_18px_18px_rgba(0,0,0,0.16)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: isHappy ? [0, 1.5, -1.5, 0] : [0, 0.8, -0.8, 0],
                    y: isHappy ? [0, -1, 0] : [0, 1, 0],
                  }
            }
            transition={{ repeat: Infinity, duration: isHappy ? 1.8 : 4.2, ease: "easeInOut" }}
            style={{ transformOrigin: "60px 64px" }}
          >
            <motion.path
              d="M59 90 C83 112 76 144 50 157"
              stroke={colors.fur}
              strokeWidth="12"
              strokeLinecap="round"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      d:
                        mood === "curious"
                          ? [
                              "M59 90 C83 112 76 144 50 157",
                              "M59 90 C36 113 44 144 70 157",
                              "M59 90 C83 112 76 144 50 157",
                            ]
                          : [
                              "M59 90 C78 114 74 143 52 157",
                              "M59 90 C46 116 46 142 68 157",
                              "M59 90 C78 114 74 143 52 157",
                            ],
                    }
              }
              transition={{ repeat: Infinity, duration: mood === "curious" ? 2.2 : 4.8, ease: "easeInOut" }}
            />

            <path d="M25 50 L14 12 L47 31 Z" fill={colors.fur} stroke={colors.fur} strokeWidth="2" strokeLinejoin="round" />
            <path d="M95 50 L106 12 L73 31 Z" fill={colors.fur} stroke={colors.fur} strokeWidth="2" strokeLinejoin="round" />
            <motion.path
              d="M28 42 L20 20 L43 31 Z"
              fill={colors.accent}
              opacity="0.32"
              animate={reduceMotion ? undefined : { scale: mood === "curious" ? [1, 1.08, 1] : 1 }}
              transition={{ repeat: mood === "curious" ? Infinity : 0, duration: 1.1 }}
              style={{ transformOrigin: "31px 30px" }}
            />
            <motion.path
              d="M92 42 L100 20 L77 31 Z"
              fill={colors.accent}
              opacity="0.32"
              animate={reduceMotion ? undefined : { scale: mood === "curious" ? [1, 1.08, 1] : 1 }}
              transition={{ repeat: mood === "curious" ? Infinity : 0, duration: 1.1, delay: 0.16 }}
              style={{ transformOrigin: "89px 30px" }}
            />

            <ellipse cx="60" cy="64" rx="43" ry="34" fill={colors.fur} />
            <path d="M45 31 L51 44 M60 28 L60 43 M75 31 L69 44" stroke={colors.accent} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M20 58 L34 62 M19 70 L35 70 M100 58 L86 62 M101 70 L85 70" stroke={colors.accent} strokeWidth="3" strokeLinecap="round" opacity="0.42" />

            <motion.g
              animate={reduceMotion ? undefined : { y: isBooped ? -3 : 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 12 }}
            >
              <ellipse cx="60" cy="78" rx="18" ry="13" fill={colors.muzzle} />
              <polygon points="55,73 65,73 60,78" fill={colors.accent} />
              <motion.path
                d={isHappy ? "M60 80 Q54 88 48 82 M60 80 Q66 88 72 82" : "M60 78 L60 83 M60 83 Q56 88 51 84 M60 83 Q64 88 69 84"}
                stroke={colors.pupil}
                strokeWidth="1.7"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M40 76 L18 73 M40 82 L18 86 M80 76 L102 73 M80 82 L102 86" stroke={colors.pupil} strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
            </motion.g>

            <circle cx="42" cy="61" r="10.5" fill={colors.white} />
            <circle cx="78" cy="61" r="10.5" fill={colors.white} />

            <motion.g style={{ x: smoothX, y: smoothY }}>
              <circle cx="42" cy="61" r="7.8" fill={colors.eye} />
              <circle cx="78" cy="61" r="7.8" fill={colors.eye} />
              <motion.g animate={blink || isBooped ? { scaleY: 0.08, y: 4 } : { scaleY: 1, y: 0 }} transition={{ duration: 0.12 }}>
                <ellipse cx="42" cy="61" rx="3.4" ry="5" fill={colors.pupil} />
                <ellipse cx="78" cy="61" rx="3.4" ry="5" fill={colors.pupil} />
              </motion.g>
              <circle cx="44" cy="56.5" r="1.5" fill={colors.white} />
              <circle cx="80" cy="56.5" r="1.5" fill={colors.white} />
            </motion.g>

            <motion.g animate={isBooped ? { y: -2 } : { y: 0 }} transition={{ type: "spring", stiffness: 260, damping: 13 }}>
              <path d="M40 38 L32 2 L44 2 L52 30 Z" fill={colors.fur} />
              <path d="M80 38 L88 2 L76 2 L68 30 Z" fill={colors.fur} />
              <rect x="29" y="-2" width="18" height="23" rx="8" fill={colors.muzzle} stroke={colors.line} strokeWidth="1" />
              <rect x="73" y="-2" width="18" height="23" rx="8" fill={colors.muzzle} stroke={colors.line} strokeWidth="1" />
              <path d="M35 3 L35 11 M41 3 L41 11 M79 3 L79 11 M85 3 L85 11" stroke={colors.accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            </motion.g>
          </motion.g>
        </svg>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 10, y: 12 }}
              animate={{ opacity: 1, scale: 1, x: 18, y: 20 }}
              exit={{ opacity: 0, scale: 0.85, y: 8 }}
              className="absolute -top-3 -right-12 rounded-full rounded-tl-none border border-border bg-accent px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-background shadow-2xl"
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
