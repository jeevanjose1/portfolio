"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormNew() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-label font-mono text-muted uppercase">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-secondary border border-subtle focus:border-strong focus:ring-0 rounded-radius-btn px-4 py-3 text-primary placeholder:text-muted transition-colors outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-label font-mono text-muted uppercase">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-secondary border border-subtle focus:border-strong focus:ring-0 rounded-radius-btn px-4 py-3 text-primary placeholder:text-muted transition-colors outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="text-label font-mono text-muted uppercase">Project Type</label>
              <select
                id="project"
                className="w-full bg-secondary border border-subtle focus:border-strong focus:ring-0 rounded-radius-btn px-4 py-3 text-primary transition-colors outline-none appearance-none"
              >
                <option>Web Application</option>
                <option>Mobile Application</option>
                <option>Cloud Infrastructure</option>
                <option>Consulting</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-label font-mono text-muted uppercase">Budget Range</label>
              <select
                id="budget"
                className="w-full bg-secondary border border-subtle focus:border-strong focus:ring-0 rounded-radius-btn px-4 py-3 text-primary transition-colors outline-none appearance-none"
              >
                <option>$500 - $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-label font-mono text-muted uppercase">Message</label>
              <textarea
                id="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full bg-secondary border border-subtle focus:border-strong focus:ring-0 rounded-radius-btn px-4 py-3 text-primary placeholder:text-muted transition-colors outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full md:w-auto px-10 py-4 rounded-radius-btn font-mono text-label uppercase tracking-widest transition-all duration-300 relative overflow-hidden group
                ${status === "success" ? "bg-green-600 text-white" : "bg-accent text-white hover:shadow-glow-accent"}
              `}
            >
              <span className={`flex items-center justify-center gap-2 ${status !== "idle" ? "opacity-0" : "opacity-100"}`}>
                Send Message
              </span>
              
              {status === "loading" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
              
              {status === "success" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span>Message Sent ✓</span>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
