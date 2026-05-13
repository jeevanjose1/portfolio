"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

const palettes = [
  { id: "neutral",  name: "Neutral",  color: "#202124" },
  { id: "midnight", name: "Midnight", color: "#1E3A8A" },
  { id: "forest",   name: "Forest",   color: "#065F46" },
  { id: "rose",     name: "Rose",     color: "#9F1239" },
];

export default function PaletteSelector() {
  const [currentPalette, setCurrentPalette] = useState("neutral");
  const [isOpen,         setIsOpen]         = useState(false);
  const [mounted,        setMounted]        = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-palette") || "neutral";
    setCurrentPalette(saved);
    document.documentElement.setAttribute("data-palette", saved);
  }, []);

  const handleChange = (id: string) => {
    setCurrentPalette(id);
    document.documentElement.setAttribute("data-palette", id);
    localStorage.setItem("portfolio-palette", id);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-xl bg-surface-2 border border-[var(--color-border)] flex items-center justify-center text-foreground transition-all duration-200 hover:bg-surface-3 active:scale-95"
        aria-label="Change color palette"
      >
        <Palette size={16} className="text-accent" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1,    y: 0 }}
              exit={{   opacity: 0, scale: 0.92, y: 8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-[50px] right-0 bg-[color-mix(in_srgb,var(--color-background)_95%,transparent)] backdrop-blur-xl border border-[var(--color-card-border)] rounded-2xl shadow-xl p-2.5 z-50 min-w-[160px]"
            >
              <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground px-2 pb-2 pt-0.5">
                Color Theme
              </p>
              <div className="flex flex-col gap-0.5">
                {palettes.map((palette) => (
                  <button
                    key={palette.id}
                    onClick={() => handleChange(palette.id)}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group text-left
                      ${currentPalette === palette.id
                        ? "bg-accent text-background"
                        : "hover:bg-surface-2 text-foreground"
                      }
                    `}
                  >
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: palette.color }}
                    />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {palette.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
