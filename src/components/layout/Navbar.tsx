"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PaletteSelector from "@/components/ui/PaletteSelector";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  if (isStudio) return null;

  return (
    <header className="fixed top-4 left-0 right-0 z-[999] px-4 flex justify-center pointer-events-none">
      <div
        className={`
          w-full max-w-[75.5rem] flex items-center justify-between h-[58px] pointer-events-auto px-4 sm:px-5 relative
          rounded-lg border transition-all duration-300
          ${scrolled
            ? "bg-background-90 backdrop-blur-2xl border-card-border shadow-lg"
            : "bg-background-80 backdrop-blur-xl border-border shadow-sm"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link scroll={false}
            href="/"
            className="text-lg font-heading font-extrabold text-foreground select-none shrink-0 hover:opacity-80 transition-opacity"
          >
            J<span className="opacity-50">J</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link scroll={false}
                key={link.label}
                href={link.href}
                className={`
                  relative text-[11px] font-bold uppercase tracking-[0.14em] px-4 py-2 rounded-lg transition-all duration-200
                  ${isActive
                    ? "text-background bg-accent shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <PaletteSelector />
          <ThemeToggle />


          <Link scroll={false}
            href="/contact"
            className="hidden md:inline-flex btn-primary py-3 px-5 text-[10px] rounded-lg ml-1"
          >
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-surface-2 border border-border text-foreground flex items-center justify-center transition-colors hover:bg-surface-3"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-[66px] left-0 right-0 bg-background border border-card-border rounded-lg shadow-xl overflow-hidden pointer-events-auto p-2"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.label}>
                      <Link scroll={false}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          block py-3 px-4 text-[11px] font-bold uppercase tracking-[0.14em] rounded-lg transition-all duration-200
                          ${isActive
                            ? "bg-accent text-background"
                            : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
                          }
                        `}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-1 pt-1 border-t border-border">
                  <Link scroll={false}
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 px-4 text-[11px] font-bold uppercase tracking-[0.14em] rounded-lg bg-accent text-background text-center"
                  >
                    Let&apos;s Talk
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
