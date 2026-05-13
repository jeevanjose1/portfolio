import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import ProjectDetails from "@/components/works/ProjectDetails";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { projectBySlugQuery, projectsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { SanityProject, SanitySiteSettings } from "@/sanity/types";

interface PageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 0; // Disable cache for development

// Generate static routes at build time for all projects
export async function generateStaticParams() {
  const projects = await client.fetch(projectsQuery);
  
  if (projects && projects.length > 0) {
    return projects.map((project: any) => ({
      slug: project.slug,
    }));
  }

  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic metadata based on the project
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug }) 
    || projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | Jeevan Jose`,
    description: project.description || project.longDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const [project, siteSettings] = await Promise.all([
    client.fetch(projectBySlugQuery, { slug: params.slug })
      || projectsData.find((p) => p.slug === params.slug),
    client.fetch(siteSettingsQuery),
  ]);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} siteSettings={siteSettings} />;
}
