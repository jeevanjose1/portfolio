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

export function generateStaticParams() {
  return mainServicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = mainServicesData.find((s) => s.slug === params.slug);

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

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = mainServicesData.find((s) => s.slug === params.slug);

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
      <RelatedWorks service={service} />
      <RelatedServices currentService={service} />

      <ServiceCTA title={service.title} />
    </>
  );
}
