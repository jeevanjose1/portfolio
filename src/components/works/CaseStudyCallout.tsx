"use client";

import { Reveal } from "@/components/animations/Reveal";
import { CheckCircle2, Zap, Layout, Terminal } from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimizing every byte for sub-second load times and smooth 60fps interactions."
  },
  {
    icon: Layout,
    title: "Editorial Design",
    desc: "Merging high-end aesthetics with functional UX to create memorable digital experiences."
  },
  {
    icon: Terminal,
    title: "Scalable Logic",
    desc: "Architecting clean, type-safe codebases that grow seamlessly with your business needs."
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    desc: "Rigorous testing and peer-reviewed standards to ensure production-grade reliability."
  }
];

export default function WorksPhilosophy() {
  return (
    <section className="bg-section-alt py-16 border-y border-border transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Sticky Left Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <Reveal delay={0.1}>
              <p className="section-label mb-6">The Methodology</p>
            </Reveal>

            <Reveal delay={0.2} blur>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1] mb-8">
                Building with <br /> precision & purpose.
              </h2>
            </Reveal>

            <Reveal delay={0.3} y={20}>
              <p className="text-muted-foreground text-lg leading-relaxed font-body max-w-md">
                My work is driven by a simple philosophy: software should be as beautiful as it is functional. I combine deep technical expertise with a sharp eye for design.
              </p>
            </Reveal>
          </div>

          {/* Principles Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.title}
                  delay={0.4 + (i * 0.1)}
                  y={20}
                  className="group"
                >
                  <div className="space-y-6 p-8 rounded-xl bg-surface-2 border border-card-border hover:border-accent/30 transition-all duration-500  hover:shadow-accent/5">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                      <Icon size={20} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-heading font-extrabold text-foreground">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-body">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
