"use client";

import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { NormalizedProject } from "./types";
import { Reveal } from "@/components/animations/Reveal";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { urlForImage } from "@/sanity/lib/image";

export default function ProjectContent({ project }: { project: NormalizedProject }) {
  const components = {
    types: {
      image: ({ value }: any) => {
        const imageUrl = urlForImage(value).url();
        return (
          <div className="my-12">
            <ImageLightbox src={imageUrl} alt="Project Detail Image">
              <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl group">
                <img
                  src={imageUrl}
                  alt="Project Detail Image"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ImageLightbox>
          </div>
        );
      }
    }
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="section-container !py-0 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-[62%]">
          <Reveal delay={0.1}>
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">
              {"//"} Strategy
            </p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-3xl font-heading font-black text-foreground mb-8">
              Case Study Overview.
            </h2>
          </Reveal>
          <Reveal delay={0.3} y={20}>
            <div className="prose prose-invert prose-lg text-muted-foreground font-body leading-relaxed max-w-none">
              {project.body ? (
                // @ts-expect-error - body type is unknown but expected by PortableText
                <PortableText value={project.body} components={components} />
              ) : (
                <p>Detailed case study content is being finalized for this project.</p>
              )}
            </div>
          </Reveal>
        </div>

        <div className="lg:w-[38%]">
          <Reveal
            width="100%"
            delay={0.2}
            y={30}
            duration={1}
          >
            <div className="bg-background border border-border rounded-lg p-8 sm:p-10 shadow-card relative overflow-hidden h-full">
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
                  ].map((item, i) => (
                    <Reveal
                      key={item.label}
                      width="100%"
                      delay={0.3 + i * 0.1}
                      y={10}
                    >
                      <div
                        className="flex justify-between items-center py-2 border-b border-border w-full"
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-black text-foreground font-heading tracking-tight">
                          {item.value}
                        </span>
                      </div>
                    </Reveal>
                  ))}
              </div>
              <Reveal width="100%" delay={0.7} y={20}>
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
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
