import ServicesHero from "@/components/services/ServicesHero";
import MainServices from "@/components/services/MainServices";
import AdditionalServices from "@/components/services/AdditionalServices";
import Process from "@/components/services/Process";
import FAQ from "@/components/services/FAQ";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Jeevan Jose | Full-Stack Developer",
  description:
    "End-to-End Development Services including Web Apps, Mobile Apps, and Cloud infrastructure. From idea to deployment, I handle the full product lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <MainServices />
      <AdditionalServices />
      <Process />
      <FAQ />
      <CTABanner />
    </>
  );
}
