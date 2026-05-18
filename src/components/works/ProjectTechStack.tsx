"use client";

import type { NormalizedProject } from "./types";
import { Reveal } from "@/components/animations/Reveal";

const layerLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "Infrastructure",
};

export default function ProjectTechStack({ project }: { project: NormalizedProject }) {
  if (!project.techStack) return null;

  const layers = Object.entries(project.techStack).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_key, techs]) => Array.isArray(techs) && techs.length > 0
  );

  if (layers.length === 0) return null;

  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="section-container">

        {/* Header */}
        <Reveal delay={0.1} blur>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-12">
            Technology Stack.
          </h2>
        </Reveal>

        {/* Layer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map(([layer, techs], i) => (
            <Reveal key={layer} width="100%" delay={i * 0.1} y={24} blur>
              <div className="bg-section-alt p-6 sm:p-8 rounded-lg border border-border h-full">

                {/* Layer label */}
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent mb-6">
                  {layerLabels[layer] ?? layer}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {(techs as string[]).map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-bold text-foreground/80 hover:border-accent/40 hover:text-accent transition-colors duration-200"
                    >
                      {tech}
                    </span>
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
