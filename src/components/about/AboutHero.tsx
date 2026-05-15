"use client";

import { ArrowRight, Award, Download, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { SanityPageAbout } from "@/sanity/types";

const fallbackAboutHeroData = {
  badge: "About Me",
  heading: "Passionate Developer. Problem Solver. Builder.",
  paragraphs: [
    "With over 4 years of hands-on experience in software development, I specialize in building full-stack web applications, cross-platform mobile apps, and scalable cloud solutions.",
  ],
  stats: [
    { value: "4+", label: "Years" },
    { value: "20+", label: "Projects" },
    { value: "5+", label: "Industries" },
  ],
};

export default function AboutHero({ data }: { data?: SanityPageAbout }) {
  const badge = data?.heroBadge || fallbackAboutHeroData.badge;
  const heading = data?.heroHeading || fallbackAboutHeroData.heading;
  const paragraphs = data?.heroParagraphs || fallbackAboutHeroData.paragraphs;
  const stats = data?.heroStats || fallbackAboutHeroData.stats;

  return (
    <section className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* Text card */}
          <Reveal
            width="100%"
            className="md:col-span-7"
            y={60}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-xl p-10 sm:p-12 min-h-[500px] border border-card-border flex flex-col justify-between h-full"
               
            >
              <div>
                <Reveal delay={0.2}>
                  <span className="hero-badge">
                    <Sparkles size={13} />
                    {badge}
                  </span>
                </Reveal>
                <Reveal delay={0.3} y={30} blur>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-foreground leading-[1.08] mb-5 whitespace-pre-line">
                    {heading}
                  </h1>
                </Reveal>
                <Reveal delay={0.4} y={20}>
                  <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                    {paragraphs[0]}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.5} y={20}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="/resume.pdf" download className="btn-primary gap-2.5">
                    Download Resume <Download size={15} />
                  </a>
                  <Link href="/contact" className="btn-secondary gap-2.5">
                    Start a Conversation <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Portrait card */}
          <Reveal
            width="100%"
            className="md:col-span-5"
            delay={0.3}
            duration={1.2}
            scale={1.05}
          >
            <div
              className="bg-section-alt rounded-xl overflow-hidden relative group min-h-[500px] border border-card-border h-full"
               
            >
              <ParallaxImage offset={30} className="w-full h-full">
                <Image
                  src="/images/headshot.png" alt="Jeevan Jose portrait" fill
                  sizes="(min-width: 768px) 420px, 100vw" priority
                  className="object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700"
                />
              </ParallaxImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute top-6 left-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-white backdrop-blur-md">
                  <MapPin size={13} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Vadodara, India</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <Reveal delay={0.8} y={20}>
                  <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-3">Working Style</p>
                  <p className="text-white text-2xl font-heading font-black leading-tight max-w-xs">
                    Calm execution, clean systems, thoughtful product decisions.
                  </p>
                </Reveal>
              </div>
            </div>
          </Reveal>

          {/* Stats row */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.slice(0, 3).map((stat: { label: string; value: string }, i: number) => (
              <Reveal
                key={stat.label}
                width="100%"
                delay={0.6 + i * 0.1}
                y={30}
                blur
              >
                <div
                  className="bg-section-alt rounded-xl p-6 sm:p-8 border border-card-border flex items-center justify-between gap-4 h-full"
                   
                >
                  <div>
                    <p className="text-3xl sm:text-4xl font-heading font-black text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1.5 font-medium">{stat.label}</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-accent-10 border border-accent-15 flex items-center justify-center text-accent shrink-0">
                    <Award size={20} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
