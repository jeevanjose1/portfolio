"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const socialPills = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Upwork", href: "https://upwork.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand — larger column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="text-xl font-heading font-black tracking-tighter">
              JEEVAN<span className="opacity-70">JOSE</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern, scalable web applications
              with clean code and thoughtful design.
            </p>
            {/* Contact info — inspired by Figma tech template footer */}
            <div className="flex items-center gap-2 text-sm text-background/60 mt-4">
              <Mail size={14} />
              <a href="mailto:hello@jeevanjose.com" className="hover:text-background transition-colors">
                hello@jeevanjose.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-background/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:opacity-70 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social — Pill-shaped buttons (Figma portfolio style) */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-background/40 mb-6">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialPills.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="px-5 py-2.5 rounded-lg bg-background/5 border border-background/10 text-sm text-background/80 hover:bg-background/10 hover:text-background transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40 font-medium">
            © {currentYear} Jeevan Jose. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-background/40 hover:text-background transition-colors flex items-center gap-1 font-black uppercase tracking-widest"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
