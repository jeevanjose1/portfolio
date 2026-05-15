"use client";
import { experienceData } from "@/lib/data";
import { SanityExperience } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";

export default function ExperienceCards({ 
  experiences, 
  workHistory 
}: { 
  experiences: SanityExperience[]; 
  workHistory?: any[];
}) {
  const displayData = (workHistory && workHistory.length > 0)
    ? workHistory.map((wh) => ({
        company: wh.company,
        role: wh.role,
        dateRange: wh.duration,
        achievements: wh.points || [],
      }))
    : experiences.length > 0
      ? experiences.map((exp) => ({
          company: exp.title,
          role: exp.subtitle,
          dateRange: exp.year,
          achievements: exp.description.split("\n").filter((l: string) => l.trim() !== ""),
        }))
      : experienceData;

  return (
    <section className="bg-background transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <Reveal delay={0.1}>
            <p className="section-label mb-4">{"// "} Professional Path</p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
              Work History.
            </h2>
          </Reveal>
        </div>

        <div className="max-w-4xl">
          {displayData.map((exp, i) => (
            // ✅ Plain wrapper owns the timeline chrome — no overflow clipping
            <div key={i} className="relative pl-12 sm:pl-16 group">

              {/* Continuous vertical line — spans full card height */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-accent-30 transition-colors duration-500" />

              {/* Dot — sits outside Reveal so it's never clipped */}
              <div className="absolute left-[-4px] top-3 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background z-10 transition-transform duration-300 group-hover:scale-125" />

              {/* Reveal wraps only the card content */}
              <Reveal width="100%" delay={i * 0.1} y={30}>
                <div className="pb-16">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <span className="px-3 py-1 rounded-xl bg-surface-2 border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          {exp.dateRange}
                        </span>
                      </div>

                      <p className="text-lg font-bold text-foreground-70 mb-7 font-heading tracking-tight">
                        {exp.role}
                      </p>

                      <ul className="space-y-4 max-w-2xl">
                        {exp.achievements.map((achievement: string, ai: number) => (
                          <li key={ai} className="flex gap-4 text-muted-foreground leading-relaxed">
                            <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-40" />
                            <span className="text-sm sm:text-base">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Separator — inside Reveal content, above the pb-16 gap */}
                  {i < displayData.length - 1 && (
                    <div className="mt-14 h-px bg-border w-full group-hover:bg-accent-10 transition-colors" />
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}