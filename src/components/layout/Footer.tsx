"use client";

import Link from "next/link";
import {  ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { SanitySiteSettings } from "@/sanity/types";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Footer({ siteSettings }: { siteSettings?: SanitySiteSettings }) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  const email = siteSettings?.email || siteConfig.email;
  const description = siteSettings?.description || siteConfig.description;
  const socialLinks = siteSettings?.socialLinks?.map((link) => ({
    label: link.label,
    href: link.href,
  })) || [
      { label: "GitHub", href: siteConfig.socials.github },
      { label: "LinkedIn", href: siteConfig.socials.linkedin },
    ];

  if (isStudio) return null;

  return (
    <footer className="bg-section-alt py-20 border-t border-border transition-colors duration-300">
      <div className="section-container !py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5">
            <Link href="/" className="text-2xl font-heading font-extrabold tracking-tighter hover:opacity-80 transition-opacity inline-block mb-6">
              JEEVAN<span className="opacity-40">JOSE</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8 font-body">
              {description || "Full-stack developer and mobile engineer specializing in building exceptional digital experiences."}
            </p>
            <a href={`mailto:${email}`} className="group flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-accent hover:text-foreground transition-colors">
              Get in touch
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-foreground/40 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-foreground/40 mb-8">
              Socials
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-accent hover:bg-surface-2 transition-all group"
                >
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground group-hover:text-foreground">
                    {link.label}
                  </span>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            © {currentYear} — Vadodara, India
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
          >
            Back to top <ArrowUpRight size={14} className="-rotate-45" />
          </button>
        </div>
      </div>
    </footer>
  );
}
