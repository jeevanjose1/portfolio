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
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        background: "var(--color-background)",
        "section-alt": "var(--color-section-alt)",
        border: "var(--color-border)",
        "card-border": "var(--color-card-border)",
        foreground: "var(--color-text)",
        "muted-foreground": "var(--color-text-muted)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)",
      },
    },
  },
  plugins: [],
};
export default config;
