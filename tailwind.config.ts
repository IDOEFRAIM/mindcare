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
        animation: {
    'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
// Ajoutez ceci dans votre fichier tailwind.config.ts pour l'animation lente
// theme: {
//   extend: {
//   
//   }
// }