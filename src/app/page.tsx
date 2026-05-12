import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import SkillOrbit from "@/components/home/SkillOrbit";

import ScrollPath from "@/components/home/ScrollPath";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <div className="relative z-[200]">
        <HeroSection />
        <ServicesPreview />
        <FeaturedWorks />
        <Testimonials />
        <CTABanner />
      </div>
      <ScrollPath />
    </main>
  );
}
