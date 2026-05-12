"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    <header className="fixed top-4 left-0 right-0 z-[999] px-4 flex justify-center pointer-events-none">
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full flex items-center justify-between h-16 shadow-xl shadow-black/5 pointer-events-auto px-6 relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-heading font-black text-primary tracking-tighter">
          J<span className="text-accent">J</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 ${isActive
                    ? "text-accent bg-blue-50/50"
                    : "text-gray-500 hover:text-primary hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn-primary text-[10px] font-black uppercase tracking-widest py-2.5 px-6 shadow-md rounded-full">
            Let's Talk
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-gray-50 text-primary hover:bg-gray-100 transition-colors"
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
              className="absolute top-[76px] left-0 right-0 bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto md:hidden p-2"
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
                            ? "bg-blue-50 text-accent"
                            : "text-gray-500 hover:text-primary hover:bg-gray-50"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2 mt-2 border-t border-gray-50">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center bg-primary text-white text-[11px] font-black uppercase tracking-widest py-4 rounded-2xl shadow-md"
                  >
                    Contact Me
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
