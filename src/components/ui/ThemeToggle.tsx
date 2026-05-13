"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-surface-2 border border-[var(--color-border)] animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-xl bg-surface-2 border border-[var(--color-border)] flex items-center justify-center text-foreground transition-all duration-200 hover:bg-surface-3 active:scale-95 group"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ y: 8, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{   y: -8, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.18 }}
        >
          {isDark ? (
            <Moon size={16} className="text-accent" />
          ) : (
            <Sun  size={16} className="text-accent" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
