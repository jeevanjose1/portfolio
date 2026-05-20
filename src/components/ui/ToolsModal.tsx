"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Calculator, Search, Palette, Layers } from "lucide-react";
import Link from "next/link";
import { customToolsData } from "@/lib/data";

interface ToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, any> = {
  Calculator,
  Search,
  Palette,
  Layers,
};

export default function ToolsModal({ isOpen, onClose }: ToolsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1001] flex items-start justify-center pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[1000] cursor-auto pointer-events-auto"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl mt-24 md:mt-32 px-4 z-[1001]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="w-full bg-surface-1 border border-card-border rounded-xl shadow-xl overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between bg-surface-2/50">
                <div>
                  <h2 className="text-xl font-heading font-extrabold tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Custom Tools
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">
                    Handcrafted utilities for better projects
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-3 hover:bg-accent hover:text-background transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {customToolsData.slice(0, 4).map((tool) => {
                  const Icon = iconMap[tool.icon] || Layers;
                  return (
                    <Link scroll={false}
                      key={tool.id}
                      href={tool.href}
                      onClick={onClose}
                      className="group relative p-4 rounded-xl bg-surface-2 border border-transparent hover:border-accent/20 hover:bg-surface-3 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-500">
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-sm group-hover:text-accent transition-colors">
                            {tool.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform">
                        <ArrowRight size={14} className="text-accent" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-6 bg-surface-2/30 border-t border-border flex justify-center">
                <Link scroll={false}
                  href="/tools"
                  onClick={onClose}
                  className="group flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-accent hover:text-accent-hover transition-colors"
                >
                  View all tools
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
