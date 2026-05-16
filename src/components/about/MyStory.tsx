"use client";

import Image from "next/image";
import Timeline from "@/components/Timeline";
import { timelineData as fallbackTimelineData, myStoryText as fallbackMyStoryText } from "@/lib/data";
import type { TimelineItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function MyStory({ storyText, timeline }: { storyText?: string, timeline?: TimelineItem[] }) {
  const text = storyText || fallbackMyStoryText;
  const items = timeline || fallbackTimelineData;

  return (
    <section className="bg-background relative transition-colors duration-300">
      <div className="section-container">
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="section-label mb-4">{"// "} Origins</p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground">
              My Journey.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Timeline Column */}
          <Reveal
            width="100%"
            className="lg:col-span-5"
            y={40}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-xl p-10 border border-card-border shadow-card h-full"

            >
              <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-10">
                Milestones
              </h3>
              <Timeline items={items} />
            </div>
          </Reveal>

          {/* Story Text Column — sticky wrapper OUTSIDE Reveal */}
          <div className="lg:col-span-7 relative sticky top-32 self-start">
            <Reveal width="100%" delay={0.2} y={40} duration={1}>
              <div
                className="bg-section-alt rounded-xl border border-card-border shadow-card"

              >
                <div className="p-10 sm:p-14">
                  <Reveal delay={0.4} y={20}>
                    <h3 className="text-2xl font-heading font-extrabold text-foreground mb-8 relative z-10">
                      Engineering with <br />
                      <span className="text-accent font-heading font-semibold">Intent.</span>
                    </h3>
                  </Reveal>

                  <div className="space-y-6 relative z-10">
                    <Reveal delay={0.5} y={20}>
                      <p className="text-muted-foreground leading-relaxed text-lg font-body italic">
                        &ldquo;{text.split(".")[0]}.&rdquo;
                      </p>
                    </Reveal>
                    <Reveal delay={0.6} y={20}>
                      <p className="text-muted-foreground leading-relaxed font-body">
                        {text.substring(text.indexOf(".") + 1)}
                      </p>
                    </Reveal>
                  </div>

                  <Reveal delay={0.7} y={20}>
                    <div className="mt-12 flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-border flex items-center justify-center">
                        <Image
                          src="/images/headshot.jpeg"
                          alt="Avatar"
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-foreground">
                          Jeevan Jose
                        </p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.16em]">
                          Full-Stack Engineer
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
