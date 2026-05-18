import WorksHero from "@/components/works/WorksHero";
import ProjectGrid from "@/components/works/ProjectGrid";
import WorksPhilosophy from "@/components/works/CaseStudyCallout";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { projectsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { SanityProject, SanitySiteSettings } from "@/sanity/types";
import { projectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Works — Jeevan Jose | Portfolio & Case Studies",
  description:
    "A showcase of real-world applications across web, mobile, and cloud. Explore my latest projects, e-commerce platforms, SaaS dashboards, and APIs.",
};

export const revalidate = 300;

export default async function WorksPage() {
  let projects: SanityProject[] = [];
  let siteSettings: SanitySiteSettings | null = null;
  let fetchError = false;
  
  try {
    const [fetchedProjects, fetchedSettings] = await Promise.all([
      client.fetch<SanityProject[]>(projectsQuery),
      client.fetch<SanitySiteSettings>(siteSettingsQuery),
    ]);
    projects = fetchedProjects;
    siteSettings = fetchedSettings;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    fetchError = true;
  }

  const displayProjects = projects && projects.length > 0 
    ? projects 
    : (fetchError ? (projectsData as unknown as SanityProject[]) : []); 

  return (
    <>
      <WorksHero projects={displayProjects} />
      <ProjectGrid projects={displayProjects} />
      <WorksPhilosophy />
      <CTABanner data={siteSettings?.ctaBanner} />
    </>
  );
}
