"use client";

import { GraduationCap, Award } from "lucide-react";
import { educationData as fallbackEducationData, certificationsData as fallbackCertificationsData } from "@/lib/data";
import type { EducationItem, CertificationItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

const certIconColors: Record<string, string> = {
  AWS: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  GCP: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  React: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

export default function EducationCerts({ education, certifications }: { education?: EducationItem[], certifications?: CertificationItem[] }) {
  const displayEdu = education || fallbackEducationData;
  const displayCerts = certifications || fallbackCertificationsData;
  return (
    <section className="bg-section-alt transition-colors duration-300">
      <div className="section-container">
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="section-label mb-4">
              Academic & Industry
            </p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground">
              Credentials.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <Reveal
            width="100%"
            className="lg:col-span-5"
            y={30}
            duration={1}
          >
            <div className="bg-background rounded-xl p-6 sm:p-10 border border-card-border h-full"  >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full bg-accent-10 flex items-center justify-center border border-accent-20">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-foreground">
                  Academic Journey
                </h3>
              </div>

              <div className="space-y-6">
                {displayEdu.map((edu: EducationItem) => (
                  <div key={edu.degree} className="group">
                    <h4 className="text-xl font-heading font-extrabold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground font-body mb-3">{edu.university}</p>
                    <span className="inline-block px-3 py-1 rounded-lg bg-section-alt border border-border text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                      Class of {edu.year}
                    </span>
                    <div className="mt-6 h-px bg-border w-full" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications — Spans 7 cols */}
          <div className="lg:col-span-7 flex flex-col">
            <Reveal delay={0.3} y={20}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-10 flex items-center justify-center border border-accent-20">
                  <Award size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-foreground">
                  Professional Certs
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {displayCerts.map((cert: CertificationItem, i: number) => {
                const colorClass = certIconColors[cert.iconLabel] ?? "bg-section-alt text-muted-foreground border-border";
                return (
                  <Reveal
                    key={cert.name}
                    width="100%"
                    delay={0.4 + i * 0.1}
                    y={20}
                  >
                    <div className="bg-background rounded-xl p-6 flex items-start gap-5 border border-card-border hover:border-accent-20 hover:-translate-y-0.5 transition-all duration-300 group h-full"  >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border ${colorClass} group-hover:scale-110 transition-transform`}>
                        <span className="text-[10px] font-extrabold">{cert.iconLabel}</span>
                      </div>
                      <div>
                        <h4 className="text-base font-heading font-extrabold text-foreground leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{cert.issuer}</p>
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
