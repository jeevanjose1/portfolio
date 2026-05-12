"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

const palettes = [
  { id: "neutral", name: "Neutral", color: "#222222" },
  { id: "midnight", name: "Midnight", color: "#1E293B" },
  { id: "forest", name: "Forest", color: "#064E3B" },
  { id: "rose", name: "Rose", color: "#881337" },
];

export default function PaletteSelector() {
  const [currentPalette, setCurrentPalette] = useState("neutral");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPalette = localStorage.getItem("portfolio-palette") || "neutral";
    setCurrentPalette(savedPalette);
    document.documentElement.setAttribute("data-palette", savedPalette);
  }, []);

  const handlePaletteChange = (id: string) => {
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
        className="w-10 h-10 rounded-full bg-section-alt border border-border flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Change color palette"
      >
        <Palette size={18} className="text-accent group-hover:text-accent-hover transition-colors" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="absolute top-12 right-0 bg-background border border-border rounded-2xl shadow-2xl p-3 z-50 min-w-[160px]"
            >
              <div className="grid grid-cols-1 gap-1">
                {palettes.map((palette) => (
                  <button
                    key={palette.id}
                    onClick={() => handlePaletteChange(palette.id)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 group ${
                      currentPalette === palette.id 
                        ? "bg-accent text-background" 
                        : "hover:bg-section-alt text-foreground"
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full border border-white/20" 
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
