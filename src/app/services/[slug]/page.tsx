import { notFound } from "next/navigation";
import { mainServicesData } from "@/lib/data";
import ServiceHero from "@/components/services/ServiceHero";
import WhatYouGet from "@/components/services/WhatYouGet";
import ServiceTechStack from "@/components/services/ServiceTechStack";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import RelatedWorks from "@/components/services/RelatedWorks";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceCTA from "@/components/services/ServiceCTA";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { serviceBySlugQuery, servicesQuery, projectsQuery } from "@/sanity/lib/queries";
import { SanityService } from "@/sanity/types";

export const revalidate = 0;

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await client.fetch<SanityService[]>(servicesQuery);
  
  if (services && services.length > 0) {
    return services.map((service) => ({
      slug: service.slug,
    }));
  }

  return mainServicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await client.fetch<SanityService>(serviceBySlugQuery, { slug: params.slug })
    || mainServicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — Jeevan Jose | Full-Stack Developer`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = await client.fetch<SanityService>(serviceBySlugQuery, { slug: params.slug })
    || (mainServicesData.find((s) => s.slug === params.slug) as unknown as SanityService);

  const allServices = await client.fetch<SanityService[]>(servicesQuery);
  const allProjects = await client.fetch<[]>(projectsQuery);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <WhatYouGet service={service} />
      <ServiceTechStack service={service} />
      <ProcessTimeline service={service} />
      <ServiceFAQ service={service} />
      <RelatedWorks service={service} allProjects={allProjects} />
      <RelatedServices currentService={service} allServices={allServices} />
      <ServiceCTA title={service.title} />
    </>
  );
}
