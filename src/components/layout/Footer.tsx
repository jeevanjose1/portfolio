"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works",    href: "/works" },
  { label: "Contact",  href: "/contact" },
];

const socialPills = [
  { label: "GitHub",   href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "Upwork",   href: siteConfig.socials.upwork },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) return null;

  return (
    <footer
      className="text-white transition-colors duration-300"
      style={{ backgroundColor: "var(--color-contrast-bg)" }}
    >
      {/* Top accent line */}
      <div className="h-px w-full opacity-10 bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10">

          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="text-2xl font-heading font-black tracking-tighter hover:opacity-80 transition-opacity inline-block">
              JEEVAN<span className="opacity-40">JOSE</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern, scalable web applications
              with clean code and thoughtful design.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
            >
              <Mail size={14} className="group-hover:text-accent transition-colors" />
              {siteConfig.email}
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-7">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 group inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-7">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialPills.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200 group"
                >
                  {s.label}
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-medium">
            © {currentYear} Jeevan Jose. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] text-white/30 hover:text-white/70 transition-colors flex items-center gap-1.5 font-black uppercase tracking-widest"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
