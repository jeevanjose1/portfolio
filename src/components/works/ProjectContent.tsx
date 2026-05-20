"use client";

import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { NormalizedProject } from "./types";
import { Reveal } from "@/components/animations/Reveal";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

// ─── Safe image URL helper ─────────────────────────────────────────────────────
// urlForImage throws/returns nothing if asset isn't dereferenced in the GROQ
// query. This wrapper guards against that and surfaces a clear warning in dev.

function getSanityImageUrl(image: any): string | null {
  if (!image?.asset) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[ProjectContent] Image is missing asset. " +
        "Make sure your GROQ query includes `asset->` for all image fields."
      );
    }
    return null;
  }
  try {
    return urlForImage(image).url();
  } catch (e) {
    console.error("[ProjectContent] urlForImage failed:", e);
    return null;
  }
}

// ─── Portable Text Component Map ──────────────────────────────────────────────
// Fixes markdown/block content not rendering correctly by explicitly mapping
// every block style and mark type to proper HTML with Tailwind classes.

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-4 leading-[1.8] text-muted-foreground text-base font-body">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mt-12 mb-5 tracking-tight leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-heading font-extrabold text-foreground mt-10 mb-4 tracking-tight leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-3 tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-heading font-bold text-foreground mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="relative my-8 pl-6 border-l-2 border-accent">
        <span className="absolute -top-2 left-4 text-5xl text-accent/20 font-serif leading-none select-none">&ldquo;</span>
        <p className="text-foreground/80 text-lg italic font-body leading-relaxed">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-6 space-y-2 ml-1">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 space-y-2 ml-1 list-none counter-reset-[item]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-muted-foreground font-body text-base leading-relaxed">
        <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children, index }: any) => (
      <li className="flex items-start gap-4 text-muted-foreground font-body text-base leading-relaxed">
        <span className="shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-extrabold flex items-center justify-center mt-0.5">
          {(index ?? 0) + 1}
        </span>
        <span className="pt-0.5">{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-extrabold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-foreground/80">{children}</em>
    ),
    underline: ({ children }: any) => (
      <span className="underline decoration-accent/50 underline-offset-2">{children}</span>
    ),
    "strike-through": ({ children }: any) => (
      <span className="line-through opacity-60">{children}</span>
    ),
    code: ({ children }: any) => (
      <code className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-sm font-mono border border-accent/20">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const imageUrl = getSanityImageUrl(value);
      if (!imageUrl) return null;
      return (
        <div className="my-7">
          <ImageLightbox src={imageUrl} alt="Project Detail Image">
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl group cursor-zoom-in">
              <Image
                src={imageUrl}
                alt="Project Detail Image"
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </ImageLightbox>
        </div>
      );
    },
  },
};

// ─── Section Renderers ─────────────────────────────────────────────────────────

const renderSection = (section: any, index: number) => {
  switch (section._type) {
    case "textSection":
      if (!section.content) return null;
      return (
        <div key={index} className="mb-12 last:mb-0">
          {section.heading && (
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4 mb-5">
                <span className="shrink-0 w-8 h-[2px] bg-accent" />
                <h3 className="text-xl font-heading font-extrabold text-foreground tracking-tight">
                  {section.heading}
                </h3>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.2} y={16}>
            <PortableText value={section.content} components={portableTextComponents} />
          </Reveal>
        </div>
      );

    case "imageSection": {
      if (!section.image?.asset) return null;
      const imageUrl = getSanityImageUrl(section.image);
      if (!imageUrl) return null;
      return (
        <div
          key={index}
          className={`mb-12 last:mb-0 ${section.layout === "full" ? "-mx-4 sm:-mx-8 lg:-mx-12" : ""
            }`}
        >
          <Reveal delay={0.1} blur>
            <ImageLightbox src={imageUrl} alt={section.caption || "Project Detail Image"}>
              <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl group cursor-zoom-in">
                <Image
                  src={imageUrl}
                  alt={section.caption || "Project Detail Image"}
                  width={1600}
                  height={900}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
                />
                {section.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white/90 text-xs font-medium tracking-wide">
                      {section.caption}
                    </p>
                  </div>
                )}
              </div>
            </ImageLightbox>
          </Reveal>
        </div>
      );
    }

    case "splitSection": {
      if (!section.image?.asset || !section.content) return null;
      const splitImageUrl = getSanityImageUrl(section.image);
      if (!splitImageUrl) return null;
      return (
        <div
          key={index}
          className={`flex flex-col ${section.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-8 lg:gap-12 mb-12 last:mb-0 items-center`}
        >
          <div className="lg:w-1/2">
            {section.heading && (
              <Reveal delay={0.1}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="shrink-0 w-8 h-[2px] bg-accent" />
                  <h3 className="text-xl font-heading font-extrabold text-foreground tracking-tight">
                    {section.heading}
                  </h3>
                </div>
              </Reveal>
            )}
            <Reveal delay={0.2} y={16}>
              <PortableText value={section.content} components={portableTextComponents} />
            </Reveal>
          </div>
          <div className="lg:w-1/2 w-full">
            <Reveal delay={0.3} blur>
              <ImageLightbox src={splitImageUrl} alt={section.heading || "Project Detail Image"}>
                <div className="relative rounded-xl overflow-hidden border border-border shadow-xl group cursor-zoom-in">
                  <Image
                    src={splitImageUrl}
                    alt={section.heading || "Project Detail Image"}
                    width={800}
                    height={600}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </ImageLightbox>
            </Reveal>
          </div>
        </div>
      );
    }

    case "gallerySection": {
      if (!section.images || section.images.length === 0) return null;
      const cols = section.gridColumns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
      return (
        <div key={index} className={`grid grid-cols-1 ${cols} gap-4 mb-12 last:mb-0`}>
          {section.images.map((img: any, i: number) => {
            if (!img?.asset) return null;
            const galleryImgUrl = getSanityImageUrl(img);
            if (!galleryImgUrl) return null;
            return (
              <Reveal key={i} delay={0.08 * i} blur>
                <ImageLightbox src={galleryImgUrl} alt={`Gallery Image ${i + 1}`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-lg group cursor-zoom-in">
                    <Image
                      src={galleryImgUrl}
                      alt={`Gallery Image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </ImageLightbox>
              </Reveal>
            );
          })}
        </div>
      );
    }

    default:
      console.warn("Unknown section type:", section._type);
      return null;
  }
};

// ─── Sidebar Meta Row ──────────────────────────────────────────────────────────

function MetaRow({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <Reveal width="100%" delay={delay} y={8}>
      <div className="group flex justify-between items-start py-2.5 border-b border-border/60 last:border-b-0 transition-colors duration-200 hover:border-accent/30">
        <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground/70 pt-0.5">
          {label}
        </span>
        <span className="font-bold text-foreground font-heading tracking-tight text-sm text-right max-w-[55%]">
          {value}
        </span>
      </div>
    </Reveal>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ProjectContent({ project }: { project: NormalizedProject }) {
  const metaFields = [
    { label: "Client", value: project.projectInfo?.client },
    { label: "Industry", value: project.projectInfo?.industry },
    { label: "Year", value: project.projectInfo?.year },
    { label: "Platform", value: project.projectInfo?.platform },
    { label: "Duration", value: project.projectInfo?.duration },
    { label: "Role", value: project.projectInfo?.role },
    { label: "Team Size", value: project.projectInfo?.teamSize },
    { label: "Status", value: project.projectInfo?.status },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  return (
    <section className="py-10 lg:py-16">
      <div className="section-container !py-0">

        {/* ── Page Header ── */}
        <div className="mb-10 lg:mb-12">
          <Reveal delay={0.05}>
            <p className="text-accent text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent inline-block" />
              Strategy
            </p>
          </Reveal>
          <Reveal delay={0.15} blur>
            <h2 className="text-3xl lg:text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
              Case Study Overview
            </h2>
          </Reveal>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ── Left: Case Study Body ── */}
          <div className="lg:w-[62%] min-w-0">
            {project.caseStudy && project.caseStudy.length > 0 ? (
              project.caseStudy.map((section: any, idx: number) => renderSection(section, idx))
            ) : project.body ? (
              <Reveal delay={0.2} y={16}>
                <PortableText value={project.body as any} components={portableTextComponents} />
              </Reveal>
            ) : (
              <Reveal delay={0.2}>
                <div className="flex items-center gap-4 py-10 text-muted-foreground/60 border border-dashed border-border rounded-xl px-8">
                  <svg className="w-5 h-5 shrink-0 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm font-body italic">
                    Detailed case study content is being finalized for this project.
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          {/* ── Right: Sidebar ── */}
          <div className="lg:w-[38%] relative">
            <div className="sticky top-24">
              <Reveal width="100%" delay={0.25} y={24} duration={0.9}>

                {/* Project Intelligence Card */}
                <div className="bg-background border border-border rounded-2xl overflow-hidden">
                  {/* Card header */}
                  <div className="px-6 py-4 border-b border-border bg-section-alt/50">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground/80">
                      Project Intelligence
                    </p>
                  </div>

                  {/* Meta rows */}
                  {metaFields.length > 0 && (
                    <div className="px-6 py-1">
                      {metaFields.map((item, i) => (
                        <MetaRow
                          key={item.label}
                          label={item.label}
                          value={item.value}
                          delay={0.3 + i * 0.07}
                        />
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="px-6 py-5 border-t border-border bg-section-alt/30">
                    <Reveal width="100%" delay={0.7} y={12}>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground/60 mb-3 text-center">
                        Partner with me
                      </p>
                      <Link scroll={false}
                        href="/contact"
                        className="btn-primary w-full inline-flex items-center justify-center gap-2 uppercase tracking-[0.14em] text-xs font-extrabold py-3 rounded-lg transition-all duration-300 hover:gap-3"
                      >
                        Start a Project
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </Reveal>
                  </div>
                </div>

              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}