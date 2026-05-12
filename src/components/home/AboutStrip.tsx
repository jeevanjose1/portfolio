"use client";

import Link from "next/link";

const skills = [
  "React.js", "Flutter",
  "Node.js", "TypeScript",
  "PostgreSQL", "Docker",
  "AWS", "Firebase"
];

export default function AboutStrip() {
  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 lg:gap-24">
          {/* Left Column (60%) */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-label font-mono text-muted uppercase tracking-[0.12em]">
              About
            </p>
            <h2 className="text-h2 font-bold text-primary tracking-tight">
              I write code that works. <br />
              <span className="text-secondary">Then I make it better.</span>
            </h2>
            <div className="space-y-6 text-body text-secondary max-w-xl leading-[1.75]">
              <p>
                I specialize in building high-performance web applications and 
                native mobile experiences using modern frameworks like React and Flutter.
              </p>
              <p>
                What makes me different is my focus on reliability, clear communication, 
                and delivering products that actually solve real-world problems.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block text-primary font-medium hover:text-accent transition-colors border-b border-subtle hover:border-accent pb-1"
            >
              Full story →
            </Link>
          </div>

          {/* Right Column (40%) */}
          <div className="lg:col-span-4 lg:pt-16">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {skills.map((skill) => (
                <div key={skill} className="text-small font-mono text-secondary">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
