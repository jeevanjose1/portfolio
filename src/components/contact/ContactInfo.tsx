"use client";

import { Mail, MapPin, Clock, Briefcase, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/animations/Reveal";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
    <path fill="currentColor" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
    <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);
export default function ContactInfo() {
  return (
    <Reveal
      width="100%"
      delay={0.1}
      y={30}
      duration={1}
    >
      <div
        className="bg-background rounded-xl p-6 sm:p-10 lg:p-12 border border-card-border h-full"

      >
        <h2 className="section-label mb-8">Information</h2>

        <div className="space-y-8 mb-16">
          {[
            { icon: Mail, label: "Email", value: "jeevanjose1997@gmail.com", href: "mailto:hello@jeevanjose.com" },
            { icon: MapPin, label: "Location", value: "Kochi, Kerala, India" },
            { icon: Clock, label: "Response", value: "Within 24 hours" },
            { icon: Briefcase, label: "Availability", value: "Open for projects" }
          ].map((item, i) => (
            <Reveal
              key={item.label}
              width="100%"
              delay={0.2 + i * 0.1}
              y={10}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-accent-10 flex items-center justify-center text-accent shrink-0 border border-accent-20">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm sm:text-lg font-heading font-extrabold text-foreground hover:text-accent transition-colors break-all sm:break-normal">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-lg font-heading font-extrabold text-foreground break-words">{item.value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="h-px bg-border mb-10" />

        <h2 className="section-label mb-8">Profiles</h2>
        <div className="grid grid-cols-1 gap-3 mb-10">
          {[
            { icon: LinkedinIcon, name: "LinkedIn", href: siteConfig.socials.linkedin },
            { icon: GithubIcon, name: "GitHub", href: siteConfig.socials.github },
          ].map((social, i) => (
            <Reveal
              key={social.name}
              width="100%"
              delay={0.6 + i * 0.1}
              y={10}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-section-alt border border-card-border rounded-xl hover:border-accent hover:bg-background transition-all duration-300 group w-full"
              >
                <span className="flex items-center gap-4 text-sm font-extrabold uppercase tracking-[0.16em] text-foreground">
                  <social.icon className="text-foreground group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                  {social.name}
                </span>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.9} y={20} width="100%">
          <div className="bg-primary w-full rounded-xl p-8 text-background relative overflow-hidden"  >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">

                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-background">Live Availability</span>
              </div>
              <p className="text-2xl font-heading font-extrabold mb-2">I&apos;m Online.</p>
              <p className="text-xs text-background-60 font-medium tracking-wide">
                Mon–Fri 6PM–10PM IST<br />
                Weekends Available
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}
