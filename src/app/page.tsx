import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import ScrollPath from "@/components/home/ScrollPath";
import { client } from "@/sanity/lib/client";
import { featuredProjectsQuery, servicesQuery, testimonialsQuery } from "@/sanity/lib/queries";
import { SanityProject, SanityService, SanityTestimonial } from "@/sanity/types";

export const revalidate = 0;

export default async function Home() {
  const [featuredProjects, services, testimonials] = await Promise.all([
    client.fetch<SanityProject[]>(featuredProjectsQuery),
    client.fetch<SanityService[]>(servicesQuery),
    client.fetch<SanityTestimonial[]>(testimonialsQuery),
  ]);

  return (
    <main className="relative overflow-hidden">
      <div className="relative z-[200]">
        <HeroSection />
        <ServicesPreview services={services.filter(s => s.isMain)} />
        <FeaturedWorks projects={featuredProjects} />
        <Testimonials testimonials={testimonials} />
        <CTABanner />
      </div>
      <ScrollPath />
    </main>
  );
}
