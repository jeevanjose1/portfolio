import WorksHero from "@/components/works/WorksHero";
import ProjectGrid from "@/components/works/ProjectGrid";
import CaseStudyCallout from "@/components/works/CaseStudyCallout";
import GitHubStrip from "@/components/works/GitHubStrip";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works — Your Name | Portfolio & Case Studies",
  description:
    "A showcase of real-world applications across web, mobile, and cloud. Explore my latest projects, e-commerce platforms, SaaS dashboards, and APIs.",
};

export default function WorksPage() {
  return (
    <>
      <WorksHero />
      <ProjectGrid />
      <CaseStudyCallout />
      <GitHubStrip />
      <CTABanner />
    </>
  );
}
