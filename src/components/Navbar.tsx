"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import PaletteSelector from "./PaletteSelector";
import CatHead from "./CatHead";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-0 right-0 z-[999] px-4 flex justify-center pointer-events-none transition-all duration-300">
      <div className="w-full  max-w-6xl bg-background/80 backdrop-blur-xl border border-border rounded-full flex items-center justify-between h-16 shadow-xl shadow-black/5 pointer-events-auto px-6 relative">

        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-black text-foreground tracking-tighter">
          J<span className="opacity-70">J</span>
        </Link>

        {/* Left Side: Logo + Nav */}
        <div className="flex items-center gap-10">

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 ${isActive
                    ? "text-background bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-section-alt"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side: CTA + Toggle + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <PaletteSelector />
            <ThemeToggle />
          </div>

          <Link href="/contact" className="hidden md:inline-flex btn-primary py-2.5 px-6 rounded-full ml-1">
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-section-alt text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[76px] left-0 right-0 bg-background border border-border rounded-3xl shadow-2xl overflow-hidden pointer-events-auto md:hidden p-2"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3 px-4 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all duration-300 ${isActive
                          ? "bg-accent text-background"
                          : "text-muted-foreground hover:text-foreground hover:bg-section-alt"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
