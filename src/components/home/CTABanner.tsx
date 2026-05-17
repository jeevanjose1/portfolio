"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { ctaBannerData } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function CTABanner({ data }: { data?: { heading?: string; subtext?: string; buttonLabel?: string; buttonHref?: string } }) {
  const heading = data?.heading || ctaBannerData.heading;
  const subtext = data?.subtext || ctaBannerData.subtext;
  const buttonLabel = data?.buttonLabel || ctaBannerData.buttonLabel;
  const buttonHref = data?.buttonHref || ctaBannerData.buttonHref;

  return (
    <section id="contact-cta" className="transition-colors duration-300">
      <div className="section-container">
        <Reveal
          width="100%"
          y={40}
          duration={1}
        >
          <div
            className="relative rounded-xl py-16 lg:py-20 px-8 sm:px-12 lg:px-16 overflow-hidden border border-card-border bg-section-alt shadow-card flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-20 to-transparent" />
            <div className="absolute inset-0 opacity-[0.035] pattern-grid bg-[size:32px_32px] rounded-xl" />

            <div className="relative z-10 text-center lg:text-left">
              <Reveal delay={0.2} className="mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-10 text-accent font-bold text-[10px] uppercase tracking-[0.14em] mb-8 border border-accent-15">
                  <MessageSquare size={11} />
                  Direct Engagement
                </div>
              </Reveal>

              <Reveal delay={0.3} blur className="mx-auto lg:mx-0">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.05] mb-6 whitespace-pre-line">
                  {heading}
                </h2>
              </Reveal>

              <Reveal delay={0.4} y={20} className="mx-auto lg:mx-0">
                <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 text-base sm:text-lg font-body leading-8">
                  {subtext}
                </p>
              </Reveal>

              <Reveal delay={0.5} y={20} className="mx-auto lg:mx-0">
                <Link
                  href={buttonHref}
                  className="btn-primary gap-3 px-9 py-4 text-[12px] group"
                >
                  {buttonLabel}
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
