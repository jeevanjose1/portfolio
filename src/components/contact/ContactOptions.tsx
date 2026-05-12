"use client";

const options = [
  {
    label: "Email",
    value: "hello@jeevanjose.com",
    href: "mailto:hello@jeevanjose.com",
    desc: "Best for projects"
  },
  {
    label: "Upwork",
    value: "View profile →",
    href: "https://upwork.com",
    desc: "For contracts"
  },
  {
    label: "LinkedIn",
    value: "Connect →",
    href: "https://linkedin.com",
    desc: "For network"
  }
];

export default function ContactOptions() {
  return (
    <section className="pb-16 border-b border-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {options.map((option) => (
            <div key={option.label} className="space-y-4">
              <h3 className="text-label font-mono text-muted uppercase tracking-widest border-b border-subtle pb-4">
                {option.label}
              </h3>
              <div className="space-y-1">
                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small font-bold text-accent hover:underline"
                >
                  {option.value}
                </a>
                <p className="text-label text-muted font-mono uppercase">
                  {option.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
