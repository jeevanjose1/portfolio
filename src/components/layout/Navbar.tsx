"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PaletteSelector from "@/components/ui/PaletteSelector";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works",    href: "/works" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
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
          w-full max-w-7xl flex items-center justify-between h-[60px] pointer-events-auto px-5 relative
          rounded-2xl border transition-all duration-500
          ${scrolled
            ? "bg-[color-mix(in_srgb,var(--color-background)_85%,transparent)] backdrop-blur-2xl border-[var(--color-card-border)] shadow-lg shadow-black/[0.06]"
            : "bg-[color-mix(in_srgb,var(--color-background)_70%,transparent)] backdrop-blur-xl border-[var(--color-border)] shadow-sm"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-heading font-black text-foreground tracking-tighter select-none shrink-0 hover:opacity-80 transition-opacity"
        >
          J<span className="opacity-50">J</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  relative text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all duration-200
                  ${isActive
                    ? "text-background bg-accent"
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

          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary py-2 px-5 text-[10px] rounded-xl ml-1"
          >
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-surface-2 border border-[var(--color-border)] text-foreground flex items-center justify-center transition-colors hover:bg-surface-3"
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
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{    opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-[68px] left-0 right-0 bg-[color-mix(in_srgb,var(--color-background)_95%,transparent)] backdrop-blur-2xl border border-[var(--color-card-border)] rounded-2xl shadow-xl overflow-hidden pointer-events-auto p-2"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          block py-3 px-4 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all duration-200
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
                <li className="mt-1 pt-1 border-t border-[var(--color-border)]">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 px-4 text-[11px] font-black uppercase tracking-widest rounded-xl bg-accent text-background text-center"
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
