import HeroSection from "@/components/home/HeroSection";
import TechStack from "@/components/home/TechStack";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <ServicesPreview />
      <FeaturedWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
