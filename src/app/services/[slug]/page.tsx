import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { mainServicesData } from "@/lib/data";
import ServiceHero from "@/components/services/ServiceHero";
import WhatYouGet from "@/components/services/WhatYouGet";
import ServiceTechStack from "@/components/services/ServiceTechStack";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import PricingPackages from "@/components/services/PricingPackages";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import RelatedWorks from "@/components/services/RelatedWorks";
import RelatedServices from "@/components/services/RelatedServices";
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
    title: `${service.title} — Your Name | Full-Stack Developer`,
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
      {/* SECTION 1 - BACK NAVIGATION */}
      <div className=" bg-white/80 backdrop-blur-md border-b border-gray-100 mt-12">
        <div className="section-container py-3 flex items-center justify-between">
          <Link
            href="/services"
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <span className="text-xs font-black uppercase tracking-widest text-primary hidden sm:block">
            {service.title}
          </span>
        </div>
      </div>

      <ServiceHero service={service} />
      <WhatYouGet service={service} />
      <ServiceTechStack service={service} />
      <ProcessTimeline service={service} />
      <ServiceFAQ service={service} />
      <RelatedWorks service={service} />
      <RelatedServices currentService={service} />

      {/* CTA BANNER */}
      <section className="bg-accent text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="section-container relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">
            Ready to Build Your <br /> {service.title}?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-body">
            Let&apos;s turn your idea into a real product. Free consultation, no commitment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start a Project &rarr;
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
            >
              Download Service Brief
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
