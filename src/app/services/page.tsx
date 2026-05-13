import ServicesHero from "@/components/services/ServicesHero";
import MainServices from "@/components/services/MainServices";
import AdditionalServices from "@/components/services/AdditionalServices";
import Process from "@/components/services/Process";
import FAQ from "@/components/services/FAQ";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { servicesQuery, faqQuery } from "@/sanity/lib/queries";
import { SanityService, SanityFAQ } from "@/sanity/types";

export const revalidate = 0; // Disable caching for real-time updates

export const metadata: Metadata = {
  title: "Services — Jeevan Jose | Full-Stack Developer",
  description:
    "End-to-End Development Services including Web Apps, Mobile Apps, and Cloud infrastructure. From idea to deployment, I handle the full product lifecycle.",
};

export default async function ServicesPage() {
  const [services, faqs] = await Promise.all([
    client.fetch<SanityService[]>(servicesQuery),
    client.fetch<SanityFAQ[]>(faqQuery),
  ]);

  const mainServices = services.filter(s => s.isMain);
  const additionalServices = services.filter(s => !s.isMain);

  return (
    <>
      <ServicesHero />
      <MainServices services={mainServices} />
      <AdditionalServices services={additionalServices} />
      <Process />
      <FAQ faqs={faqs} />
      <CTABanner />
    </>
  );
}
