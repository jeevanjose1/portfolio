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
      backgroundColor: {
        primary: "#0A0A0F",
        secondary: "#111118",
        tertiary: "#1A1A24",
        accent: "#6C63FF",
        "accent-dim": "#2D2A4A",
      },
      textColor: {
        primary: "#F0F0F0",
        secondary: "#A0A0B0",
        muted: "#505060",
        accent: "#6C63FF",
      },
      borderColor: {
        subtle: "#1E1E2E",
        strong: "#2E2E3E",
        accent: "#6C63FF",
      },
      colors: {
        // Keeping a few generic ones for compatibility if needed
        accent: "#6C63FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        display: ["clamp(48px, 8vw, 96px)", { lineHeight: "1.1", fontWeight: "800" }],
        h1: ["clamp(36px, 5vw, 56px)", { lineHeight: "1.2", fontWeight: "800" }],
        h2: ["clamp(24px, 3vw, 36px)", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.75" }],
        small: ["14px", { lineHeight: "1.75" }],
        label: ["11px", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      borderRadius: {
        "radius-card": "12px",
        "radius-btn": "8px",
        "radius-tag": "4px",
        "radius-img": "16px",
      },
      boxShadow: {
        card: "0 0 0 1px #1E1E2E, 0 4px 40px rgba(0,0,0,0.4)",
        hover: "0 0 0 1px #2E2E3E, 0 8px 60px rgba(0,0,0,0.6)",
        "glow-accent": "0 0 40px rgba(108, 99, 255, 0.12)",
      },
      spacing: {
        "sidebar-w": "260px",
        "container-max": "1100px",
      },
    },
  },
  plugins: [],
};
export default config;
