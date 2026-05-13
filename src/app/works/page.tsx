import WorksHero from "@/components/works/WorksHero";
import ProjectGrid from "@/components/works/ProjectGrid";
import CaseStudyCallout from "@/components/works/CaseStudyCallout";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { projectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Works — Jeevan Jose | Portfolio & Case Studies",
  description:
    "A showcase of real-world applications across web, mobile, and cloud. Explore my latest projects, e-commerce platforms, SaaS dashboards, and APIs.",
};

export const revalidate = 0; // Disable cache to see Sanity changes immediately

export default async function WorksPage() {
  let projects = [];
  let fetchError = false;
  
  try {
    projects = await client.fetch(projectsQuery);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    fetchError = true;
  }

  // If there's an error and NO projects, we can fallback to static data
  // But if there's NO error and NO projects, it means Sanity is just empty
  const displayProjects = projects && projects.length > 0 
    ? projects 
    : (fetchError ? projectsData : []); 

  return (
    <>
      <WorksHero />
      <ProjectGrid projects={displayProjects} />
      <CaseStudyCallout />
      <CTABanner />
    </>
  );
}
