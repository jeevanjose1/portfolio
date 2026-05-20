"use client";

import Link from "next/link";
import ProjectCard from "@/components/works/ProjectCard";
import { projectsData } from "@/lib/data";
import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function RelatedWorks({
  service,
  allProjects
}: {
  service: SanityService | MainServiceItem;
  allProjects?: any[];
}) {
  const relatedCategory = (service as any).relatedCategory || (service.isMain ? "Web Apps" : "Mobile Apps");

  // Use Sanity projects if available, otherwise fallback to static data
  const source = allProjects && allProjects.length > 0 ? allProjects : projectsData;

  // Filter projects based on the related category
  const relatedProjects = source
    .filter((project) => {
      const categories = project.categories || [];
      return categories.some((cat: string) =>
        cat.toLowerCase() === relatedCategory.toLowerCase()
      );
    })
    .slice(0, 3); // Take up to 3 projects

  if (relatedProjects.length === 0) return null;

  return (
    <section className="bg-section-alt py-24 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal delay={0.1}>
              <p className="text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] mb-3">
                {"//"} Portfolio
              </p>
            </Reveal>
            <Reveal delay={0.2} blur>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground">
                Relevant Projects.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.3} x={20}>
            <Link scroll={false}
              href="/works"
              className="inline-flex items-center gap-2 text-foreground font-extrabold uppercase tracking-[0.16em] text-sm hover:text-accent transition-colors"
            >
              View All Projects &rarr;
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project, i) => (
            <Reveal
              key={project._id || project.id || project.slug}
              width="100%"
              delay={i * 0.1}
              y={30}
              blur
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
