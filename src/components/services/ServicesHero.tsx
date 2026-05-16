"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu } from "lucide-react";
import { servicesHeroData as fallbackServicesHeroData } from "@/lib/data";
import { SanityPageServices, SanityService } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";


export default function ServicesHero({ data }: { data?: SanityPageServices, mainServices: SanityService[] }) {
  const badge = data?.heroBadge || "Product Engineering Services";
  const heading = data?.heroHeading || "From first scope to shipped, stable product.";
  const subtitle = data?.heroSubtitle || fallbackServicesHeroData.subtitle;

  return (
    <section className="min-h-[100svh] flex items-center  transition-colors duration-300">
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
              className="bg-section-alt rounded-xl p-10 sm:p-12 min-h-[500px] border border-card-border shadow-card flex flex-col justify-between h-full"
               
            >
              <div>
                <Reveal delay={0.2}>
                  <span className="hero-badge">
                    <Cpu size={13} />
                    {badge}
                  </span>
                </Reveal>
                <Reveal delay={0.3} y={30} blur>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-foreground leading-[1.08] mb-5 whitespace-pre-line">
                    {heading}
                  </h1>
                </Reveal>
                <Reveal delay={0.4} y={20}>
                  <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                    {subtitle}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.5} y={20}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-primary gap-2.5">
                    Discuss a Project <ArrowRight size={15} />
                  </Link>
                  <Link href="/works" className="btn-secondary gap-2.5">
                    View Proof
                  </Link>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Right column */}
          <div className="md:col-span-5  grid grid-cols-1 gap-5">
            <Reveal
              width="100%"
              delay={0.3}
              y={40}
              duration={1}
              className="h-full"
            >
              <div
                className="bg-section-alt rounded-xl p-8 sm:p-10 min-h-[220px] border border-card-border shadow-card text-foreground relative overflow-hidden h-full"
                 
              >
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px] rounded-xl" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-accent-10 border border-accent-15 flex items-center justify-center mb-8">
                    <CheckCircle2 size={22} className="text-accent" />
                  </div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-3">Delivery Model</p>
                  <h2 className="text-3xl font-heading font-extrabold leading-tight">Strategy, build, deploy, iterate.</h2>
                </div>
              </div>
            </Reveal>


            <Reveal width="100%" delay={0.5} y={20} duration={1}>
              <div
                className="bg-section-alt h-full rounded-xl p-8 border border-card-border"
                 
              >
                <p className="text-lg font-body italic text-muted-foreground leading-relaxed">
                  &ldquo;Good software isn&apos;t just code that works — it&apos;s a system that scales, adapts, and outlasts the sprint it was born in.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Bottom row */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {["Discovery first", "Clean architecture", "Deployment ready"].map((item, i) => (
              <Reveal
                key={item}
                width="100%"
                delay={0.7 + i * 0.1}
                y={20}
                blur
              >
                <div
                  className="bg-section-alt rounded-xl p-6 border border-card-border shadow-card flex items-center gap-3 h-full"
                   
                >
                  <CheckCircle2 size={17} className="text-accent shrink-0" />
                  <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
