"use client";

import { Star } from "lucide-react";
import { testimonialsData } from "@/lib/data";
import { SanityTestimonial } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";

export default function Testimonials({ testimonials }: { testimonials: SanityTestimonial[] }) {
  const displayData =
    testimonials.length > 0
      ? testimonials
      : testimonialsData.map((t) => ({
          _id: t.name, name: t.name, role: t.company, content: t.quote, rating: t.rating,
        }));

  return (
    <section id="testimonials" className="transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16">
          <Reveal delay={0.1} className="mx-auto">
            <p className="section-label mb-4">{"// "} Client Feedback</p>
          </Reveal>
          <Reveal delay={0.2} blur className="mx-auto">
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">What Clients Say.</h2>
          </Reveal>
          <Reveal delay={0.4} className="mx-auto">
            <div className="w-16 h-px bg-accent-25 mx-auto mt-8" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {displayData.map((t, i) => (
            <Reveal
              key={t._id}
              width="100%"
              delay={i * 0.1}
              y={30}
              blur
              className="h-full"
            >
              <div
                className="bg-section-alt rounded-xl p-10 sm:p-12 border border-card-border flex flex-col justify-between group hover:border-accent-25 transition-all duration-500 h-full"
                 
              >
                <div>
                  <div className="flex gap-1.5 mb-8">
                    {Array.from({ length: (t as SanityTestimonial).rating || 5 }).map((_, si) => (
                      <Star key={si} size={13} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground-75 text-lg leading-relaxed mb-10 italic font-body">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-8 border-t border-border/60">
                  <div className="w-11 h-11 rounded-xl bg-accent-10 border border-accent-15 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-300">
                    <span className="text-sm font-black text-accent group-hover:text-background transition-colors">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-black text-foreground uppercase tracking-tight">{t.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
