"use client";

import Accordion from "@/components/Accordion";
import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function ServiceFAQ({ service }: { service: SanityService | MainServiceItem }) {
  const faqs = service.faqs || [];
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 text-center">
          <Reveal delay={0.1} className="mx-auto">
            <p className="section-label mb-3">FAQ</p>
          </Reveal>
          <Reveal delay={0.2} blur className="mx-auto">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground">
              Frequently Asked Questions.
            </h2>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq: { question: string; answer: string }, i: number) => (
            <Reveal
              key={i}
              width="100%"
              delay={i * 0.1}
              y={20}
            >
              <Accordion question={faq.question} answer={faq.answer} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
