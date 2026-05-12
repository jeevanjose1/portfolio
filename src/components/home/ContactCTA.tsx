"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding border-t border-subtle mb-24">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-h1 font-extrabold text-primary tracking-tighter">
              Have a project in mind?
            </h2>
            <p className="text-h1 font-bold text-muted italic tracking-tighter">
              Let&apos;s talk about it.
            </p>
          </div>

          <a
            href="mailto:hello@jeevanjose.com"
            className="text-h2 font-bold text-accent hover:underline transition-all underline-offset-8 decoration-accent/30 hover:decoration-accent"
          >
            hello@jeevanjose.com
          </a>
        </div>
      </div>
    </section>
  );
}
