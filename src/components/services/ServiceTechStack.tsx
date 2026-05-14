"use client";

import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function ServiceTechStack({ service }: { service: SanityService | MainServiceItem }) {
  const stack = service.techStack || [];
  return (
    <section className="bg-section-alt py-16 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <Reveal delay={0.1}>
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
              {"//"} The Stack
            </p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground mb-6">
              Technologies I Use.
            </h2>
          </Reveal>
          <Reveal delay={0.3} y={20}>
            <p className="text-muted-foreground font-body max-w-2xl text-lg">
              I choose the right tools for the job. This modern, battle-tested stack ensures your product is fast, secure, and ready to scale.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stack.map((category: { category: string; techs: string[] }, i: number) => (
            <Reveal
              key={category.category}
              width="100%"
              delay={0.1 + i * 0.1}
              y={30}
              blur
              className="h-full"
            >
              <div
                className="bg-background rounded-lg p-8 border border-border h-full"
              >
                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech: string) => (
                    <div
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-section-alt border border-border text-sm font-black text-foreground shadow-sm hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:text-accent transition-colors duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
