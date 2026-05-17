"use client";

import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

interface ServiceCTAProps {
  title: string;
}

export default function ServiceCTA({ title }: ServiceCTAProps) {
  return (
    <section className="bg-background pb-10 transition-colors duration-300">
      <div className="section-container">
        <Reveal
          width="100%"
          y={40}
          duration={1}
        >
          <div className="bg-section-alt rounded-lg p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden  border border-card-border">
            <div className="absolute inset-0 opacity-[0.04] pattern-grid bg-[size:28px_28px]" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <Reveal delay={0.2} blur className="mx-auto">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-foreground leading-tight">
                  Ready to Build Your <br />
                  <span className="text-accent font-heading font-semibold">{title}?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3} y={20} className="mx-auto">
                <p className="text-base sm:text-lg text-muted-foreground mb-10 font-body max-w-lg mx-auto leading-relaxed">
                  Let&apos;s turn your idea into a real product. Free consultation, no commitment.
                </p>
              </Reveal>
              <Reveal delay={0.4} y={20} className="mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary"
                  >
                    Start a Project &rarr;
                  </Link>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-foreground"
                  >
                    Download Service Brief
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
