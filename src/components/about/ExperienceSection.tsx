"use client";

import { experienceData } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        <div className="flex flex-col gap-12">
          <header>
            <p className="text-label font-mono text-muted uppercase tracking-[0.12em] mb-4">
              Experience
            </p>
          </header>

          <div className="flex flex-col">
            {experienceData.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="group py-10 border-b border-subtle flex flex-col md:flex-row gap-8 md:gap-12"
              >
                {/* Date */}
                <div className="md:w-32 flex-shrink-0">
                  <p className="text-label font-mono text-muted uppercase">
                    {exp.dateRange}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-body font-semibold text-primary group-hover:text-accent transition-colors">
                      {exp.role} · {exp.company}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, ai) => (
                      <li
                        key={ai}
                        className="text-small text-secondary leading-relaxed"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {/* Assuming tech tags are available or using a subset */}
                    {["React", "Node.js", "AWS", "TypeScript"].map((tag) => (
                      <span
                        key={tag}
                        className="text-label font-mono bg-accent-dim text-accent rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
