import AboutHero from "@/components/about/AboutHero";
import MyStory from "@/components/about/MyStory";
import SkillsGrid from "@/components/about/SkillsGrid";
import ExperienceCards from "@/components/about/ExperienceCards";
import EducationCerts from "@/components/about/EducationCerts";
import BeyondCode from "@/components/about/BeyondCode";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Jeevan Jose | Full-Stack Developer Portfolio",
  description:
    "Learn about my journey, technical skills, work experience, and what drives me as a full-stack developer and mobile engineer based in Vadodara, India.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MyStory />
      <SkillsGrid />
      <ExperienceCards />
      <EducationCerts />
      <BeyondCode />
      <CTABanner />
    </>
  );
}
