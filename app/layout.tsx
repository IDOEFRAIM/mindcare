import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer"; // À créer ensuite

// Configuration de la police Sans-serif (Modernité, Efficacité)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuration de la police Serif (Prestige, Expertise, Humanité)
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  style: "italic", // Très utile pour les citations du catalogue
});

export const metadata: Metadata = {
  title: {
    default: "MindCare Consulting | L'Humain au Service de l'Efficacité",
    template: "%s | MindCare Consulting"
  },
  description: "Cabinet spécialisé dans le développement des compétences humaines et organisationnelles : Psychologie, RH et Ingénierie de formation.",
  keywords: ["Psychologie du travail", "RPS", "Formation Management", "Ressources Humaines"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#FDFCFB] text-[#0F172A]`}
      >
        {/* Grain Overlay pour le look 2025 (Texture papier/Premium) */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <Header />
        
        {/* Le 'pt-20' assure que le contenu ne commence pas sous le Header fixe */}
        <main className="min-h-screen">
          {children}
        </main>

         <Footer /> 
      </body>
    </html>
  );
}