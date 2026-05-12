"use client";

const processes = [
  {
    step: "01",
    title: "Discovery",
    desc: "We align on what you actually need. We define goals, target audience, and key features to ensure we're building the right thing."
  },
  {
    step: "02",
    title: "Build",
    desc: "I build in weekly sprints. You test every Friday. Constant communication ensures the project stays on track and meets your expectations."
  },
  {
    step: "03",
    title: "Ship",
    desc: "Deploy, handover, done. No ghosting after launch. I provide documentation and support to ensure your product succeeds in the wild."
  }
];

export default function ProcessList() {
  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        <header className="mb-20">
          <p className="text-label font-mono text-muted uppercase tracking-[0.12em] mb-4">
            Process
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {processes.map((process) => (
            <div key={process.step} className="space-y-8">
              <span className="text-display text-muted/20 font-mono leading-none block">
                {process.step}
              </span>
              <h3 className="text-h3 font-bold text-primary">
                {process.title}
              </h3>
              <p className="text-small text-secondary leading-relaxed">
                {process.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
