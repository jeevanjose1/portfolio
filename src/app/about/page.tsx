import AboutIntro from "@/components/about/AboutIntro";
import ExperienceSection from "@/components/about/ExperienceSection";
import SkillsSection from "@/components/about/SkillsSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutIntro />
      <ExperienceSection />
      <SkillsSection />
      <ContactCTA />
    </div>
  );
}
