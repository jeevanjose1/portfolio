"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const socialPills = [
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "Upwork", href: siteConfig.socials.upwork },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) return null;

  return (
    <footer 
      className="text-white transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-contrast-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand — larger column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="text-xl font-heading font-black tracking-tighter">
              JEEVAN<span className="opacity-70">JOSE</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern, scalable web applications
              with clean code and thoughtful design.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60 mt-4">
              <Mail size={14} />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:opacity-70 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">
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
                  className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 font-medium">
            © {currentYear} Jeevan Jose. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1 font-black uppercase tracking-widest"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
