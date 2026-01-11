"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Brain, ArrowLeft, Sparkles, Compass } from 'lucide-react';
import Link from 'next/link';

// --- RÉUTILISATION DU COMPOSANT PARALLAX ---
const ParallaxElement = ({ children, distance = 50, className = "" }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: springY }} className={className}>
      {children}
    </motion.div>
  );
};

export default function NotFound() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden relative font-sans text-[#1A2F4B]">
      
      {/* 1. DUSK LIGHT (Rappel du Hero) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#E8EEF5] rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#C5D3E2] rounded-full blur-[140px] opacity-30" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Branding Discret */}
          <span className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-12">
            <span className="w-8 h-[1px] bg-[#6B8BA4]" /> MindCare Consulting
          </span>

          {/* Numéro 404 Stylisé */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[20vw] md:text-[15vw] font-serif italic leading-none tracking-tighter opacity-10 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
               <Compass className="w-12 h-12 md:w-20 md:h-20 text-[#6B8BA4] opacity-80" strokeWidth={1} />
            </div>
          </div>

          {/* Message de bifurcation */}
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
            Même les meilleurs parcours <br/>
            <span className="not-italic font-light text-[#6B8BA4]">connaissent des détours.</span>
          </h2>

          <p className="text-[#5A6D81] text-lg md:text-xl font-light max-w-lg mx-auto mb-16 leading-relaxed">
            La page que vous recherchez semble s'être égarée. Revenons ensemble vers l'essentiel.
          </p>

          {/* CTA Retour */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link 
              href="/" 
              className="group relative inline-flex items-center gap-6 bg-[#1A2F4B] text-white px-12 py-6 rounded-full transition-all hover:bg-[#6B8BA4] shadow-xl"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Retour à l'accueil</span>
            </Link>

            <Link 
              href="https://wa.me/+22670813978"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B8BA4] hover:text-[#1A2F4B] transition-colors border-b border-transparent hover:border-[#1A2F4B] pb-2"
            >
              Besoin d'aide ?
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Parallax Décoratif (Cerveau Abstrait) */}
      <ParallaxElement distance={-100} className="absolute bottom-[-5%] right-[5%] opacity-[0.05] pointer-events-none">
        <Brain size={400} strokeWidth={0.5} />
      </ParallaxElement>

      {/* Floating Sparkles */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-[#6B8BA4] opacity-20"
      >
        <Sparkles size={40} />
      </motion.div>

    </main>
  );
}