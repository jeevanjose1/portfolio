"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SocialLink } from "@/lib/data";
import { SanityPageHome } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import type { Image as SanityImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

const fallbackHeroData = {
  badge: "Available for freelance work",
  heading: "Full-Stack Developer &\nMobile Engineer",
  subheadline: "I build scalable web apps, mobile apps, and cloud solutions that help startups and businesses grow.",
  ctaPrimary: { label: "View My Work", href: "/works" },
  welcome: 'Hey, I am'
};

const techStack = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Flutter",
  "GraphQL", "PostgreSQL", "Docker", "MongoDB",
  "Nest.js", "React Native", "Anthropic", "AI & LLMs", "TailwindCSS",
];

export default function HeroSection({ data, profileImage }: { data?: SanityPageHome, stats?: { value: string; label: string }[], socialLinks?: SocialLink[], profileImage?: SanityImage }) {
  const badge = data?.heroBadge || fallbackHeroData.badge;
  const heading = data?.heroHeading || fallbackHeroData.heading;
  const welcome = data?.welcome || fallbackHeroData.welcome;

  const subheadline = data?.heroSubheadline || fallbackHeroData.subheadline;
  const ctaPrimary = data?.ctaPrimary || fallbackHeroData.ctaPrimary;
  const imageUrl = profileImage ? urlForImage(profileImage).url() : "/images/headshot.jpeg";

  return (
    <section id="home" className="min-h-svh flex items-center transition-colors duration-300">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

          {/* ── Main Text & CTA Card ── */}
          <Reveal
            width="100%"
            className="lg:col-span-8 order-2 lg:order-1"
            y={40}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-xl p-6 sm:p-10 lg:p-16 xl:p-20 flex flex-col justify-between h-full md:min-h-[560px] border border-card-border shadow-card relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-20 to-transparent" />

              <div className="relative z-10">
                <Reveal delay={0.2}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-border text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    {badge}
                  </div>
                </Reveal>

                <Reveal delay={0.3} y={30} blur>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-foreground leading-[1.02] mb-8">
                    {welcome}
                    <br />
                    <span className="font-heading font-medium text-foreground-80">
                      {heading.split('\n')[0]}
                    </span>
                    <br />
                    {heading.split('\n')[1] || ""}
                  </h1>
                </Reveal>

                <Reveal delay={0.4} y={20}>
                  <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-8 font-body">
                    {subheadline}
                  </p>
                </Reveal>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                <Reveal width="100%" delay={0.5} y={20}>
                  <Link scroll={false} href={ctaPrimary.href} className="btn-primary gap-3 px-9 w-full md:w-fit py-4 text-[12px]">
                    {ctaPrimary.label}
                    <ArrowRight size={18} />
                  </Link>
                </Reveal>
              </div>
            </div>
          </Reveal>

          {/* ── Portrait & Highlights ── */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5 order-1 lg:order-2">
            {/* Portrait Card */}
            <Reveal
              width="100%"
              delay={0.3}
              duration={1.2}
              className="h-full"
            >
              <div
                className="bg-section-alt rounded-xl overflow-hidden relative group h-full min-h-[400px] border border-card-border shadow-card"
              >
                <ParallaxImage offset={20} className="w-full h-full">
                  <div className="absolute inset-0 grayscale-[0.25] contrast-[1.05] brightness-[0.98] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700">
                    <Image
                      src={imageUrl}
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
        </div>

        {/* ── Tech Marquee ── */}
        <Reveal
          width="100%"
          delay={0.4}
          y={20}
          className="lg:col-span-12 mt-5"
        >
          <div className="bg-section-alt rounded-xl border border-card-border shadow-sm overflow-hidden py-4 marquee-fade">
            <div className="flex marquee-track gap-12 items-center whitespace-nowrap px-6">
              {/* Primary list */}
              {techStack.map((tech) => (
                <div key={tech} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {tech}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {techStack.map((tech) => (
                <div key={tech + "-loop"} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
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
