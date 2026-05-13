"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Briefcase, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const GithubIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const UpworkIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.6,9.1c-1.8,0-3.1,1.1-3.6,2.9L12,12l-1.5-4H7.8v7.4c0,1.5-1.2,2.7-2.7,2.7S2.4,16.9,2.4,15.4V8H0v7.4c0,2.8,2.3,5.1,5.1,5.1 s5.1-2.3,5.1-5.1v-3.7l1.3,3.7h2.5l1-2.9c0.7,1.8,2.3,3.2,4.6,3.2c3.5,0,5.4-2.5,5.4-6.5C24.9,10.6,22.1,9.1,17.6,9.1z M17.6,13.6 c-1,0-1.8-0.9-1.8-2s0.8-2,1.8-2s1.8,0.9,1.8,2S18.6,13.6,17.6,13.6z" />
  </svg>
);

const LinkedinIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background rounded-2xl p-8 sm:p-10 lg:p-12 border border-[var(--color-card-border)]"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h2 className="text-[10px] font-black uppercase tracking-widest text-accent mb-8">{"//"} Information</h2>

      <div className="space-y-8 mb-16">
        {[
          { icon: Mail, label: "Email", value: "hello@jeevanjose.com", href: "mailto:hello@jeevanjose.com" },
          { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India" },
          { icon: Clock, label: "Response", value: "Within 24 hours" },
          { icon: Briefcase, label: "Availability", value: "Open for projects" }
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] flex items-center justify-center text-accent shrink-0 border border-[color-mix(in_srgb,var(--color-accent)_20%,transparent)]">
              <item.icon size={22} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-lg font-heading font-black text-foreground hover:text-accent transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="text-lg font-heading font-black text-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-border mb-10" />

      <h2 className="text-[10px] font-black uppercase tracking-widest text-accent mb-8">{"//"} Profiles</h2>
      <div className="grid grid-cols-1 gap-3 mb-10">
        {[
          { icon: UpworkIcon, name: "Upwork", href: siteConfig.socials.upwork, color: "text-foreground" },
          { icon: LinkedinIcon, name: "LinkedIn", href: siteConfig.socials.linkedin, color: "text-foreground" },
          { icon: GithubIcon, name: "GitHub", href: siteConfig.socials.github, color: "text-foreground" }
        ].map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-section-alt border border-[var(--color-card-border)] rounded-xl hover:border-accent hover:bg-background transition-all duration-300 group"
          >
            <span className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-foreground">
              <social.icon size={20} className={`${social.color} group-hover:scale-110 transition-transform`} />
              {social.name}
            </span>
            <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        ))}
      </div>

      <div className="bg-primary rounded-2xl p-8 text-background relative overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-lg h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-background">Live Availability</span>
          </div>
          <p className="text-2xl font-heading font-black mb-2">I&apos;m Online.</p>
          <p className="text-xs text-[color-mix(in_srgb,var(--color-background)_60%,transparent)] font-medium tracking-wide">
            Mon–Fri 6PM–10PM IST<br />
            Weekends Available
          </p>
        </div>
      </div>
    </motion.div>
  );
}
