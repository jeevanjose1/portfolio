"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "WORKS", href: "/works" },
  { name: "CONTACT", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Upwork", href: "https://upwork.com", icon: ExternalLink },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-sidebar-w h-screen fixed left-0 top-0 bg-primary border-r border-subtle z-50 py-12 px-10 overflow-y-auto">
      {/* Top Section */}
      <div className="mb-16">
        <div className="w-10 h-10 bg-accent-dim flex items-center justify-center rounded-md mb-6">
          <span className="font-mono font-bold text-accent">JJ</span>
        </div>
        <h1 className="text-h3 font-bold text-primary mb-1">Jeevan Jose</h1>
        <p className="text-small text-secondary mb-3">Full-Stack & Mobile Developer</p>
        <div className="flex items-center gap-2 text-label text-muted font-mono uppercase">
          <span>📍</span>
          <span>Vadodara, India</span>
        </div>
      </div>

      {/* Middle Section (Navigation) */}
      <nav className="flex-1">
        <p className="text-label text-muted font-mono uppercase mb-8">Navigate</p>
        <ul className="space-y-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 py-1"
                >
                  <motion.div
                    className={`h-[1px] ${isActive ? "bg-accent" : "bg-muted"}`}
                    initial={false}
                    animate={{
                      width: isActive ? 64 : 32,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ width: isActive ? 64 : 48 }}
                  />
                  <span
                    className={`text-label font-mono transition-colors duration-300 ${isActive ? "text-primary" : "text-muted group-hover:text-secondary"
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        <div className="h-px bg-subtle mb-6 w-full" />
        <div className="flex items-center gap-4 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-label text-muted font-mono uppercase">Available</span>
        </div>
      </div>
    </aside>
  );
}
