import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import ProjectDetails from "@/components/works/ProjectDetails";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static routes at build time for all projects
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic metadata based on the project
export function generateMetadata({ params }: PageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | Jeevan Jose`,
    description: project.longDescription,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
