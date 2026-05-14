"use client";

import ProcessStep from "@/components/ProcessStep";
import { processData as fallbackProcessData } from "@/lib/data";
import type { ProcessStepItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function Process({ steps }: { steps?: ProcessStepItem[] }) {
  const displaySteps = steps || fallbackProcessData;
  return (
    <section className="bg-section-alt transition-colors duration-300">
      <div className="section-container">
        <div className="mb-24">
          <Reveal delay={0.1}>
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
              {"//"} Strategy
            </p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
              Execution Flow.
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row relative max-w-6xl mx-auto items-start">
          {displaySteps.map((step, i) => (
            <Reveal
              key={step.title}
              width="100%"
              delay={i * 0.2}
              y={30}
              blur
              className="flex-1"
            >
              <ProcessStep
                number={step.number}
                iconName={step.iconName}
                title={step.title}
                description={step.description}
                isLast={i === displaySteps.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
