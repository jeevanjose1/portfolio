import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import ScrollPath from "@/components/home/ScrollPath";
import { client } from "@/sanity/lib/client";
import { featuredProjectsQuery, servicesQuery, testimonialsQuery, pageHomeQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { SanityProject, SanityService, SanityTestimonial, SanityPageHome, SanitySiteSettings } from "@/sanity/types";

export const revalidate = 300;

export default async function Home() {
  const [featuredProjects, services, testimonials, pageHome, siteSettings] = await Promise.all([
    client.fetch<SanityProject[]>(featuredProjectsQuery),
    client.fetch<SanityService[]>(servicesQuery),
    client.fetch<SanityTestimonial[]>(testimonialsQuery),
    client.fetch<SanityPageHome>(pageHomeQuery),
    client.fetch<SanitySiteSettings>(siteSettingsQuery),
  ]);

  return (
    <main className="relative overflow-hidden">
      <div className="relative z-[200]">
        <HeroSection data={pageHome} stats={siteSettings?.globalStats} socialLinks={siteSettings?.socialLinks} />
        <ServicesPreview services={services.filter(s => s.isMain)} />
        <FeaturedWorks projects={featuredProjects} />
        {/* <Testimonials testimonials={testimonials} /> */}
        <CTABanner data={siteSettings?.ctaBanner} />
      </div>
      <ScrollPath />
    </main>
  );
}
