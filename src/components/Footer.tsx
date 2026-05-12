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
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand — larger column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="text-xl font-heading font-bold">
              Your Name
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern, scalable web applications
              with clean code and thoughtful design.
            </p>
            {/* Contact info — inspired by Figma tech template footer */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
              <Mail size={14} />
              <a href="mailto:hello@yourname.com" className="hover:text-white transition-colors">
                hello@yourname.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social — Pill-shaped buttons (Figma portfolio style) */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
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
                  className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
