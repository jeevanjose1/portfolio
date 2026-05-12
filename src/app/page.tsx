import HeroSection from "@/components/home/HeroSection";
import TechStack from "@/components/home/TechStack";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

import ScrollPath from "@/components/home/ScrollPath";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <div className="relative z-[200]">
        <HeroSection />
        <TechStack />
        <ServicesPreview />
        <FeaturedWorks />
        <Testimonials />
        <CTABanner />
      </div>
      <ScrollPath />
    </main>
  );
}
