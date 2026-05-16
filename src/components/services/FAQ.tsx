"use client";

import Accordion from "@/components/Accordion";
import { faqData } from "@/lib/data";
import { SanityFAQ } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";

export default function FAQ({ faqs }: { faqs: SanityFAQ[] }) {
  const displayData = faqs.length > 0 ? faqs : faqData;

  return (
    <section className="bg-section-alt py-12 transition-colors duration-300">
      <div className="section-container max-w-5xl">
        <div className="mb-20">
          <Reveal delay={0.1}>
            <p className="text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] mb-3">
              {"//"} Questions
            </p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground">
              Common FAQ.
            </h2>
          </Reveal>
        </div>

        <div className="w-full space-y-4">
          {displayData.map((faq, i) => (
            <Reveal
              key={i}
              width="100%"
              delay={i * 0.1}
              y={20}
            >
              <Accordion
                question={faq.question}
                answer={faq.answer}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
