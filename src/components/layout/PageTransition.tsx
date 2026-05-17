"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div key={pathname} className="h-full">
        <FrozenRouter>
          {/* Slide IN overlay */}
          <motion.div
            className="fixed left-0 w-full h-screen z-[9999] pointer-events-none bg-contrast-bg"
            initial={{ top: "100%" }}
            animate={{ top: "100%" }}
            exit={{ top: "0%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Slide OUT overlay */}
          <motion.div
            className="fixed left-0 w-full h-screen z-[9999] pointer-events-none bg-contrast-bg"
            initial={{ top: "0%" }}
            animate={{ top: "-100%" }}
            exit={{ top: "-100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Page Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
