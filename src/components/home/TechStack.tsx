"use client";

import { techStackData } from "@/lib/data";

/** Simple SVG icons for each tech — kept inline to avoid external dependencies */
function TechIcon({ icon, className }: { icon: string; className?: string }) {
  const cls = className ?? "w-10 h-10";

  switch (icon) {
    case "react":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="3" fill="#61DAFB" />
          <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
          <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fill="#339933" opacity="0.15" stroke="#339933" strokeWidth="1.5" />
          <text x="20" y="24" textAnchor="middle" fill="#339933" fontSize="10" fontWeight="bold" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case "flutter":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <path d="M24 6L10 20L14.5 24.5L33 6H24Z" fill="#02569B" />
          <path d="M24 22L14.5 31.5L19 36L33 22H24Z" fill="#02569B" />
          <path d="M14.5 24.5L19 29L24 22L19 17L14.5 24.5Z" fill="#45D1FD" opacity="0.7" />
        </svg>
      );
    case "typescript":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="6" width="28" height="28" rx="4" fill="#3178C6" />
          <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case "mongodb":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <path d="M20 4C20 4 14 14 14 22C14 28 17 34 20 36C23 34 26 28 26 22C26 14 20 4 20 4Z" fill="#47A248" opacity="0.2" stroke="#47A248" strokeWidth="1.5" />
          <line x1="20" y1="12" x2="20" y2="34" stroke="#47A248" strokeWidth="1.5" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="14" rx="12" ry="6" fill="#336791" opacity="0.15" stroke="#336791" strokeWidth="1.5" />
          <path d="M8 14V28C8 31.3 13.4 34 20 34C26.6 34 32 31.3 32 28V14" stroke="#336791" strokeWidth="1.5" fill="none" />
          <path d="M8 21C8 24.3 13.4 27 20 27C26.6 27 32 24.3 32 21" stroke="#336791" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "aws":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <path d="M8 24L14 12H18L12 24H8Z" fill="#FF9900" />
          <path d="M16 24L22 12H26L20 24H16Z" fill="#FF9900" />
          <path d="M24 24L30 12H34L28 24H24Z" fill="#FF9900" />
          <path d="M6 28C6 28 14 32 20 32C26 32 34 28 34 28" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "docker":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="18" width="28" height="14" rx="3" fill="#2496ED" opacity="0.15" stroke="#2496ED" strokeWidth="1.5" />
          <rect x="10" y="21" width="4" height="4" fill="#2496ED" opacity="0.4" />
          <rect x="16" y="21" width="4" height="4" fill="#2496ED" opacity="0.4" />
          <rect x="22" y="21" width="4" height="4" fill="#2496ED" opacity="0.4" />
          <rect x="16" y="14" width="4" height="4" fill="#2496ED" opacity="0.4" />
          <rect x="22" y="14" width="4" height="4" fill="#2496ED" opacity="0.4" />
          <rect x="28" y="14" width="4" height="4" fill="#2496ED" opacity="0.4" />
          <rect x="22" y="8" width="4" height="4" fill="#2496ED" opacity="0.4" />
        </svg>
      );
    case "firebase":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <path d="M10 32L14 8L20 18L24 12L30 32H10Z" fill="#FFCA28" opacity="0.3" />
          <path d="M10 32L14 8L20 18" stroke="#FFA000" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M20 18L24 12L30 32" stroke="#FFA000" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 32H30" stroke="#FFA000" strokeWidth="1.5" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="14" className="fill-foreground" />
          <text x="20" y="25" textAnchor="middle" className="fill-background" fontSize="10" fontWeight="bold" fontFamily="sans-serif">N</text>
        </svg>
      );
    default:
      return (
        <div className={`${cls} rounded-lg bg-gray-200 flex items-center justify-center`}>
          <span className="text-xs text-gray-500">?</span>
        </div>
      );
  }
}

export default function TechStack() {
  // Duplicate for seamless infinite scroll
  const items = [...techStackData, ...techStackData];

  return (
    <section className="bg-section-alt py-16 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          Technologies I Work With
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-section-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-section-alt to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track">
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 flex flex-col items-center gap-2.5 mx-8"
            >
              <div className="w-16 h-16 rounded-lg bg-background shadow-sm border border-border flex items-center justify-center hover:shadow-md transition-shadow duration-200">
                <TechIcon icon={tech.icon} className="w-9 h-9" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
