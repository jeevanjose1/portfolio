"use client";

import { ArrowDown, Calendar, Clock3, Mail, MapPin, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

export default function ContactHero() {
  return (
    <section className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* Text card */}
          <Reveal
            width="100%"
            className="md:col-span-7"
            y={60}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-xl p-10 sm:p-12 min-h-[500px] border border-card-border shadow-card flex flex-col justify-between h-full"
               
            >
              <div>
                <Reveal delay={0.2}>
                  <span className="hero-badge">
                    <MessageSquare size={13} />
                    Get in Touch
                  </span>
                </Reveal>
                <Reveal delay={0.3} blur>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-foreground leading-[1.08] mb-5">
                    Tell me what you&apos;re building. I&apos;ll help shape the next step.
                  </h1>
                </Reveal>
                <Reveal delay={0.4} y={20}>
                  <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                    Have a project in mind? Send the brief, timeline, and goal. I typically respond within 24 hours with clear next steps.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.5} y={20}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#contact-form" className="btn-primary gap-2.5">
                    Send Project Brief <ArrowDown size={15} />
                  </a>
                  <a href="mailto:hello@jeevanjose.com" className="btn-secondary gap-2.5">
                    Email Directly <Mail size={15} />
                  </a>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Right column */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            <Reveal
              width="100%"
              delay={0.3}
              y={40}
              duration={1}
              className="h-full"
            >
              <div
                className="bg-section-alt rounded-xl p-8 sm:p-10 min-h-[220px] border border-card-border shadow-card text-foreground relative overflow-hidden h-full"
                 
              >
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px] rounded-xl" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-accent-10 border border-accent-15 flex items-center justify-center mb-8">
                    <Calendar size={22} className="text-accent" />
                  </div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-3">Availability</p>
                  <h2 className="text-3xl font-heading font-extrabold leading-tight">Open for thoughtful freelance work.</h2>
                </div>
              </div>
            </Reveal>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"
            >
              {[
                { label: "Response", value: "24 hours", icon: Clock3 },
                { label: "Location", value: "India", icon: MapPin },
                { label: "Channel", value: "Email", icon: Mail },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.label}
                    width="100%"
                    delay={0.5 + i * 0.1}
                    y={20}
                    blur
                  >
                    <div
                      className="bg-section-alt flex flex-col justify-between rounded-xl p-5 border border-card-border h-full"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-accent-10 border border-accent-15 flex items-center justify-center text-accent mb-5">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-sm font-heading font-extrabold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
