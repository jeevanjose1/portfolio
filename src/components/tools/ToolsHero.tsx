"use client";

import { Reveal } from "@/components/animations/Reveal";

export default function ToolsHero() {
  return (
    <div className="relative mb-16 md:mb-20">
      <Reveal delay={0.1} y={20}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-10 border border-accent-15 text-accent font-bold text-[10px] uppercase tracking-[0.16em] mb-8">
          Utility Ecosystem
        </div>
      </Reveal>

      <Reveal delay={0.2} y={60} duration={1} blur>
        <h1 className="text-4xl md:text-7xl font-heading font-extrabold tracking-tighter leading-[0.85] mb-8">
          Crafted <br />
          <span className="text-muted-foreground">Solutions.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.4} y={30}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
          I build custom tools to solve real problems. Each utility is designed
          with precision to streamline complex tasks and enhance digital experiences.
        </p>
      </Reveal>


    </div>
  );
}
