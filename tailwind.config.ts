import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // On lie les variables CSS définies dans layout.tsx
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-instrument)", "ui-serif", "Georgia"],
      },
      colors: {
        // Couleurs signature pour le cabinet
        mindcare: {
          dark: "#0F172A",
          blue: "#2563EB",
          accent: "#E2725B", // Le Terracotta pour la passion
          cream: "#FDFCFB",
        }
      }
    },
  },
  plugins: [],
};
export default config;