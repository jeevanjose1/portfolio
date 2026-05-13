import AboutHero from "@/components/about/AboutHero";
import MyStory from "@/components/about/MyStory";
import SkillsGrid from "@/components/about/SkillsGrid";
import ExperienceCards from "@/components/about/ExperienceCards";
import EducationCerts from "@/components/about/EducationCerts";
import BeyondCode from "@/components/about/BeyondCode";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { experienceQuery, pageAboutQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { SanityExperience, SanityPageAbout, SanitySiteSettings } from "@/sanity/types";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "About — Jeevan Jose | Full-Stack Developer Portfolio",
  description:
    "Learn about my journey, technical skills, work experience, and what drives me as a full-stack developer and mobile engineer based in Vadodara, India.",
};

export default async function AboutPage() {
  const [experiences, pageAbout, siteSettings] = await Promise.all([
    client.fetch<SanityExperience[]>(experienceQuery),
    client.fetch<SanityPageAbout>(pageAboutQuery),
    client.fetch<SanitySiteSettings>(siteSettingsQuery),
  ]);

  return (
    <>
      <AboutHero data={pageAbout} />
      <MyStory storyText={pageAbout?.myStoryText} timeline={pageAbout?.timeline} />
      <SkillsGrid skillGroups={pageAbout?.skillGroups} />
      <ExperienceCards experiences={experiences} />
      <EducationCerts education={pageAbout?.education} certifications={pageAbout?.certifications} />
      <BeyondCode items={pageAbout?.beyondCode} />
      <CTABanner data={siteSettings?.ctaBanner} />
    </>
  );
}
