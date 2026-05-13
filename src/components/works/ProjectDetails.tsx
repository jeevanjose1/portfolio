"use client";

import type { ProjectItem } from "@/lib/data";
import { SanityProject } from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";
import CTABanner from "@/components/home/CTABanner";

import type { NormalizedProject } from "./types";
import ProjectHero from "./ProjectHero";
import ProjectContent from "./ProjectContent";
import ProjectFeatures from "./ProjectFeatures";
import ProjectMetrics from "./ProjectMetrics";
import ProjectRelated from "./ProjectRelated";

export default function ProjectDetails({ project }: { project: ProjectItem | SanityProject }) {
  const isSanity = '_id' in project;

  const p: NormalizedProject = isSanity ? {
    id: project._id,
    title: project.title,
    description: project.description,
    image: project.mainImage ? urlForImage(project.mainImage).url() : "/images/project-1.svg",
    categories: project.categories || [],
    tags: project.categories || [],
    liveUrl: project.link,
    githubUrl: project.githubUrl,
    publishedDate: project.publishedAt ? new Date(project.publishedAt).toLocaleDateString() : "2024",
    body: project.body,
    info: project.projectInfo || {
      client: "Private Client",
      industry: "Technology",
      year: project.publishedAt ? new Date(project.publishedAt).getFullYear().toString() : "2024",
      platform: "Web Application",
      duration: "Ongoing",
      role: "Lead Developer",
      teamSize: "1 Person",
      status: "Live"
    },
    features: project.features,
    techStack: project.techStack,
    metrics: project.metrics?.map(m => ({
      ...m,
      value: `${m.numericValue}${m.suffix || ''}`
    }))
  } : {
    id: project.id,
    title: project.title,
    description: project.longDescription,
    image: project.image,
    categories: project.categories,
    tags: project.tags,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    publishedDate: project.projectInfo.year,
    info: project.projectInfo,
    features: project.features,
    techStack: project.techStack,
    metrics: project.metrics
  };

  return (
    <div className="bg-background transition-colors duration-300">
      <ProjectHero project={p} />
      <ProjectContent project={p} />
      <ProjectFeatures project={p} />
      <ProjectMetrics project={p} />
      <ProjectRelated project={p} />
      <CTABanner />
    </div>
  );
}
