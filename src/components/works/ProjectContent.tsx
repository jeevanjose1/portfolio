"use client";

import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { NormalizedProject } from "./types";

export default function ProjectContent({ project }: { project: NormalizedProject }) {
  return (
    <section className="py-12 lg:py-16">
      <div className="section-container !py-0 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-[62%]">
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">
            {"//"} Strategy
          </p>
          <h2 className="text-3xl font-heading font-black text-foreground mb-8">
            Case Study Overview.
          </h2>
          <div className="prose prose-invert prose-lg text-muted-foreground font-body leading-relaxed max-w-none">
            {project.body ? (
              <PortableText value={project.body} />
            ) : (
              <p>Detailed case study content is being finalized for this project.</p>
            )}
          </div>
        </div>

        <div className="lg:w-[38%]">
          <div className="bg-background border border-border rounded-lg p-8 sm:p-10 shadow-card relative overflow-hidden">
            <h3 className="text-sm font-black uppercase tracking-widest text-foreground mb-8 relative z-10">
              Project Intelligence
            </h3>
            <div className="space-y-6 mb-10 relative z-10">
              {project.info &&
                [
                  { label: "Client", value: project.info.client },
                  { label: "Industry", value: project.info.industry },
                  { label: "Year", value: project.info.year },
                  { label: "Platform", value: project.info.platform },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-2 border-b border-border"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="font-black text-foreground font-heading tracking-tight">
                      {item.value}
                    </span>
                  </div>
                ))}
            </div>
            <div className="bg-section-alt p-8 rounded-lg text-center relative z-10 border border-border">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6">
                Partner with me
              </p>
              <Link
                href="/contact"
                className="btn-primary w-full inline-flex justify-center uppercase tracking-widest text-xs font-black py-4"
              >
                START PROJECT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
