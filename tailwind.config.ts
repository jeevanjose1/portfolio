import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Core semantic tokens
        primary:              "var(--color-primary)",
        accent:               "var(--color-accent)",
        "accent-hover":       "var(--color-accent-hover)",
        "accent-3":           "color-mix(in srgb, var(--color-accent) 3%, transparent)",
        "accent-5":           "color-mix(in srgb, var(--color-accent) 5%, transparent)",
        "accent-10":          "color-mix(in srgb, var(--color-accent) 10%, transparent)",
        "accent-15":          "color-mix(in srgb, var(--color-accent) 15%, transparent)",
        "accent-20":          "color-mix(in srgb, var(--color-accent) 20%, transparent)",
        "accent-25":          "color-mix(in srgb, var(--color-accent) 25%, transparent)",
        "accent-30":          "color-mix(in srgb, var(--color-accent) 30%, transparent)",
        "accent-35":          "color-mix(in srgb, var(--color-accent) 35%, transparent)",
        "accent-40":          "color-mix(in srgb, var(--color-accent) 40%, transparent)",
        "accent-50":          "color-mix(in srgb, var(--color-accent) 50%, transparent)",
        "accent-55":          "color-mix(in srgb, var(--color-accent) 55%, transparent)",
        "accent-80":          "color-mix(in srgb, var(--color-accent) 80%, transparent)",
        "accent-90":          "color-mix(in srgb, var(--color-accent) 90%, transparent)",
        background:           "var(--color-background)",
        "background-10":      "color-mix(in srgb, var(--color-background) 10%, transparent)",
        "background-20":      "color-mix(in srgb, var(--color-background) 20%, transparent)",
        "background-60":      "color-mix(in srgb, var(--color-background) 60%, transparent)",
        "background-70":      "color-mix(in srgb, var(--color-background) 70%, transparent)",
        "background-80":      "color-mix(in srgb, var(--color-background) 80%, transparent)",
        "background-85":      "color-mix(in srgb, var(--color-background) 85%, transparent)",
        "background-90":      "color-mix(in srgb, var(--color-background) 90%, transparent)",
        "section-alt":        "var(--color-section-alt)",
        border:               "var(--color-border)",
        "card-border":        "var(--color-card-border)",
        foreground:           "var(--color-text)",
        "foreground-70":      "color-mix(in srgb, var(--color-text) 70%, transparent)",
        "foreground-75":      "color-mix(in srgb, var(--color-text) 75%, transparent)",
        "foreground-80":      "color-mix(in srgb, var(--color-text) 80%, transparent)",
        "muted-foreground":   "var(--color-text-muted)",
        "muted-foreground-40": "color-mix(in srgb, var(--color-text-muted) 40%, transparent)",
        "contrast-bg":        "var(--color-contrast-bg)",
        // Surface hierarchy tokens
        "surface-1":          "var(--color-surface-1)",
        "surface-2":          "var(--color-surface-2)",
        "surface-3":          "var(--color-surface-3)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body:    ["var(--font-body)",    "sans-serif"],
      },
      borderRadius: {
        xs:    "var(--radius-xs)",
        sm:    "var(--radius-sm)",
        md:    "var(--radius-md)",
        lg:    "var(--radius-lg)",
        xl:    "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill:  "var(--radius-pill)",
      },
      boxShadow: {
        xs:      "var(--shadow-xs)",
        sm:      "var(--shadow-sm)",
        card:    "var(--shadow-card)",
        lg:      "var(--shadow-lg)",
        xl:      "var(--shadow-xl)",
        glow:    "var(--shadow-glow)",
        accent:  "var(--shadow-accent)",
      },
      spacing: {
        "section-x":  "clamp(1.5rem, 4vw, 3rem)",
        "section-y":  "clamp(4rem, 8vw, 7rem)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "spin-slow":         "spin-slow 12s linear infinite",
        "spin-reverse-slow": "spin-reverse-slow 18s linear infinite",
        shimmer:             "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        "spin-reverse-slow": {
          from: { transform: "rotate(360deg)" },
          to:   { transform: "rotate(0deg)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
