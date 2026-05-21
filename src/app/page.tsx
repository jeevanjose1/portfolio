import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import CTABanner from "@/components/home/CTABanner";
import { client } from "@/sanity/lib/client";
import { featuredProjectsQuery, servicesQuery, pageHomeQuery, siteSettingsQuery, testimonialsQuery } from "@/sanity/lib/queries";
import { SanityProject, SanityService, SanityPageHome, SanitySiteSettings, SanityTestimonial } from "@/sanity/types";

export const revalidate = 300;

export default async function Home() {
  const [featuredProjects, services, pageHome, siteSettings] = await Promise.all([
    client.fetch<SanityProject[]>(featuredProjectsQuery),
    client.fetch<SanityService[]>(servicesQuery),
    client.fetch<SanityPageHome>(pageHomeQuery),
    client.fetch<SanitySiteSettings>(siteSettingsQuery),
    client.fetch<SanityTestimonial[]>(testimonialsQuery),
  ]);

  return (
    <main>
      <HeroSection data={pageHome} stats={siteSettings?.globalStats} socialLinks={siteSettings?.socialLinks} profileImage={siteSettings?.profileImage} />
      <ServicesPreview services={services.filter(s => s.isMain)} />
      <FeaturedWorks projects={featuredProjects} />
      {/* <Testimonials testimonials={testimonials} /> */}
      <CTABanner data={siteSettings?.ctaBanner} />
    </main>
  );
}
