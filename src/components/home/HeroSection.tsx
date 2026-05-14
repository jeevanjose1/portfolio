"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SocialLink } from "@/lib/data";
import { SanityPageHome } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

const fallbackHeroData = {
  badge: "✦ Available for freelance work",
  heading: "Full-Stack Developer &\nMobile Engineer",
  subheadline: "I build scalable web apps, mobile apps, and cloud solutions that help startups and businesses grow.",
  ctaPrimary: { label: "View My Work", href: "/works" },
  welcome: 'Hey, I am'
};







export default function HeroSection({ data, socialLinks }: { data?: SanityPageHome, stats?: { value: string; label: string }[], socialLinks?: SocialLink[] }) {
  const badge = data?.heroBadge || fallbackHeroData.badge;
  const heading = data?.heroHeading || fallbackHeroData.heading;
  const welcome = data?.welcome || fallbackHeroData.welcome;

  const subheadline = data?.heroSubheadline || fallbackHeroData.subheadline;
  const ctaPrimary = data?.ctaPrimary || fallbackHeroData.ctaPrimary;
  const displaySocials = socialLinks || [];

  return (
    <section id="home" className="min-h-[100svh] flex items-center  transition-colors duration-300">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">

          {/* ── Main Text & CTA Card ── */}
          <Reveal
            width="100%"
            className="lg:col-span-8 order-2 lg:order-1"
            y={40}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-xl p-10 sm:p-14 lg:p-20 flex flex-col justify-between h-full min-h-[560px] border border-[var(--color-card-border)] relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[color-mix(in_srgb,var(--color-accent)_3%,transparent)] rounded-full blur-[100px] -mr-32 -mt-32" />

              <div className="relative z-10">
                <Reveal delay={0.2}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-[var(--color-border)] text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    {badge}
                  </div>
                </Reveal>

                <Reveal delay={0.3} y={30} blur>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-foreground leading-[1.05] tracking-tight mb-8">
                    {welcome.split(' ').map((word, i) => (
                      <span key={i} className={i === welcome.split(' ').length - 1 ? "text-accent" : ""}>{word} </span>
                    ))}
                    <br />
                    <span className="italic font-serif font-light text-[color-mix(in_srgb,var(--color-text)_80%,transparent)]">
                      {heading.split('\n')[0]}
                    </span>
                    <br />
                    {heading.split('\n')[1] || ""}
                  </h1>
                </Reveal>

                <Reveal delay={0.4} y={20}>
                  <p className="text-muted-foreground text-lg sm:text-xl max-w-xl leading-relaxed font-body">
                    {subheadline}
                  </p>
                </Reveal>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                <Reveal delay={0.5} y={20}>
                  <Link href={ctaPrimary.href} className="btn-primary gap-3 px-10 py-5 text-sm">
                    {ctaPrimary.label}
                    <ArrowRight size={18} />
                  </Link>
                </Reveal>


              </div>
            </div>
          </Reveal>

          {/* ── Portrait & Highlights ── */}
          <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-6 order-1 lg:order-2">
            {/* Portrait Card */}
            <Reveal
              width="100%"
              delay={0.3}
              duration={1.2}
              className="h-full"
            >
              <div
                className="bg-section-alt rounded-xl overflow-hidden relative group h-full min-h-[400px] border border-[var(--color-card-border)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <ParallaxImage offset={20} className="w-full h-full">
                  <div className="absolute inset-0 grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000">
                    <Image
                      src="/images/headshot.png"
                      alt="Portrait"
                      fill
                      priority
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>
                </ParallaxImage>


              </div>
            </Reveal>

          </div>

          {/* ── Tech Marquee ── */}

        </div>
        <Reveal
          width="100%"
          delay={0.4}
          y={20}
          className="lg:col-span-12  mt-6"
        >
          <div className="bg-section-alt rounded-xl border border-[var(--color-card-border)] overflow-hidden py-4">
            <div className="flex marquee-track gap-12 items-center whitespace-nowrap px-6">
              {[
                "React.js", "Next.js", "TypeScript", "Node.js", "Flutter",
                "GraphQL", "PostgreSQL", "AWS Cloud", "Docker", "TailwindCSS",
                "Sanity CMS", "Framer Motion", "MongoDB", "Express"
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/70">
                    {tech}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "React.js", "Next.js", "TypeScript", "Node.js", "Flutter",
                "GraphQL", "PostgreSQL", "AWS Cloud", "Docker", "TailwindCSS",
                "Sanity CMS", "Framer Motion", "MongoDB", "Express"
              ].map((tech) => (
                <div key={tech + "-loop"} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/70">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
