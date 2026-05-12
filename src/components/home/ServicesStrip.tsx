"use client";

import Link from "next/link";

const services = [
  {
    title: "Web Development",
    stack: "React, Node.js, REST APIs, SaaS",
    price: "From $500",
    slug: "web-development"
  },
  {
    title: "Mobile Apps",
    stack: "Flutter, iOS, Android, Firebase",
    price: "From $800",
    slug: "mobile-apps"
  },
  {
    title: "Cloud & DevOps",
    stack: "AWS, Docker, CI/CD, Deploy",
    price: "From $300",
    slug: "cloud-devops"
  }
];

export default function ServicesStrip() {
  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        <header className="mb-16">
          <p className="text-label font-mono text-muted uppercase tracking-[0.12em]">
            Services
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className={`group relative py-12 transition-all duration-300 -mx-4 px-4 hover:bg-tertiary
                ${index !== 0 ? "md:border-l md:border-subtle" : ""}
                ${index !== services.length - 1 ? "border-b border-subtle md:border-b-0" : ""}
              `}
            >
              <h3 className="text-h3 font-bold text-primary mb-8 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <div className="h-px bg-subtle w-full mb-8 opacity-50" />
              <p className="text-small text-secondary mb-12 min-h-[50px]">
                {service.stack}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-label font-mono text-muted uppercase">
                  {service.price}
                </span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
