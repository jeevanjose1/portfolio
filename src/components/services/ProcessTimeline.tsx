"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function ProcessTimeline({ service }: { service: SanityService | MainServiceItem }) {
  const steps = service.process || [];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-background  transition-colors duration-300" ref={containerRef}>
      <div className="section-container">
        <div className="mb-16 text-center">
          <Reveal delay={0.1} className="mx-auto">
            <p className="text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] mb-3">
              {"//"} Step by Step
            </p>
          </Reveal>
          <Reveal delay={0.2} blur className="mx-auto">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground">
              My Working Process.
            </h2>
          </Reveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Line (Background) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-border dark:bg-border/30 -translate-x-1/2 rounded-full" />

          {/* Timeline Vertical Line (Animated Progress) */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-accent -translate-x-1/2 rounded-full origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-16">
            {steps.map((step: { step: string; duration: string; title: string; description: string }, i: number) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-[180px]">

                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-background border-4 border-border dark:border-accent-20 flex items-center justify-center -translate-x-1/2 z-50 font-extrabold text-foreground ">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <Reveal
                    width="100%"
                    delay={0.1}
                    x={isEven ? -40 : 40}
                    className={`w-full pl-24 md:pl-0 ${isEven ? 'md:col-start-1 md:pr-16' : 'md:col-start-2 md:pl-16'}`}
                  >
                    <div className="bg-background rounded-xl p-8 border border-border  hover:ring-[1px] ring-accent  transition-all duration-300">
                      <div className="inline-block px-3 py-1 bg-accent-10 text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] rounded-lg mb-4">
                        {step.duration}
                      </div>
                      <h3 className="text-2xl font-heading font-extrabold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
