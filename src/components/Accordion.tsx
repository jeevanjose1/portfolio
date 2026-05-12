"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-lg bg-background border mb-4 last:mb-0 transition-all duration-500 overflow-hidden ${isOpen ? 'border-accent shadow-2xl shadow-black/5' : 'border-border hover:border-accent/20'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
      >
        <h3 className={`text-xl font-heading font-black tracking-tight transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-foreground'}`}>
          {question}
        </h3>
        <div
          className={`flex-shrink-0 ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent text-background rotate-180' : 'bg-section-alt text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent'}`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", scale: 1 },
              collapsed: { opacity: 0, height: 0, scale: 0.98 },
            }}
            transition={{
              height: { type: "spring", damping: 20, stiffness: 100 },
              opacity: { duration: 0.2 },
              scale: { type: "spring", damping: 20, stiffness: 100 }
            }}
          >
            <div className="px-8 pb-8 text-muted-foreground font-body leading-relaxed border-t border-border pt-6 mx-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
