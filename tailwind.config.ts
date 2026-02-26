import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        muted: "var(--color-muted)",
        "deep-blue": "var(--color-deep-blue)"
      },
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
