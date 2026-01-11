"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Brain, Users, GraduationCap, ArrowRight, 
  Sparkles, Quote, ChevronDown, MoveUpRight 
} from 'lucide-react';
import Link from 'next/link';

// --- COMPOSANT PARALLAX INTERNE ---
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

export default function HomePage() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="bg-[#FAF9F6] text-[#1A2F4B] selection:bg-[#C5D3E2] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION : L'ÉVEIL (PASSION & SÉRÉNITÉ) */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        {/* Cercles de lumière "Dusk" (Bleu tombée de nuit très doux) */}
        <div className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] bg-[#E8EEF5] rounded-full blur-[140px] opacity-60" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-12">
              <span className="w-8 h-[1px] bg-[#6B8BA4]" /> MindCare Consulting
            </span>
            
            <h1 className="text-[10vw] md:text-[8vw] font-serif italic leading-[0.85] tracking-tighter text-[#1A2F4B] mb-16">
              L'Humain au <br/>
              <span className="text-[#6B8BA4] not-italic font-light">Service de l'Efficacité.</span>
            </h1>

            <div className="grid md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-6">
                <p className="text-xl md:text-2xl text-[#5A6D81] leading-relaxed font-light max-w-xl">
                  Cabinet d'expertise dédié au <span className="text-[#1A2F4B] font-medium border-b border-[#6B8BA4]/30">développement des compétences</span> humaines et organisationnelles.
                </p>
              </div>
              <div className="md:col-span-6 flex md:justify-end gap-8">
                <Link 
                href="https://wa.me/+22670813978"
                 className="group relative flex items-center gap-4 text-sm font-bold tracking-widest uppercase py-4">
                  Démarrer l'immersion
                  <div className="w-12 h-12 rounded-full border border-[#1A2F4B]/10 flex items-center justify-center group-hover:bg-[#1A2F4B] group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parallax Shape: Un "cerveau" abstrait très léger en fond */}
        <ParallaxElement distance={-150} className="absolute top-1/2 right-[-5%] opacity-[0.03] pointer-events-none">
          <Brain size={600} strokeWidth={0.5} />
        </ParallaxElement>
      </section>

      {/* 2. LE MANIFESTE (SCROLL-TRIGGERED DEPTH) */}
      <section className="py-40 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ParallaxElement distance={-60}>
            <Quote className="w-12 h-12 text-[#E8EEF5] mx-auto mb-12" />
            <h2 className="text-3xl md:text-5xl font-serif italic text-[#1A2F4B] leading-snug tracking-tight">
              "Nous croyons fermement que la clé du succès réside dans l’harmonie entre les individus et leur environnement de travail."
            </h2>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-px h-24 bg-gradient-to-b from-[#6B8BA4] to-transparent" />
              <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#6B8BA4]">Notre Philosophie</p>
            </div>
          </ParallaxElement>
        </div>
      </section>

      {/* 3. LES DOMAINES D'ACTIVITÉ (SMOOTH BENTO) */}
      <section className="py-40 px-6">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex items-end justify-between mb-24 border-b border-[#1A2F4B]/5 pb-12">
            <h2 className="text-5xl font-serif tracking-tighter italic text-[#1A2F4B]">Nos Domaines.</h2>
            <span className="text-[#6B8BA4] font-mono text-sm tracking-widest uppercase">Expertise / 01 — 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 01 - Psychologie */}
            <div className="group relative bg-[#F4F7FA] rounded-[3rem] p-12 h-[600px] flex flex-col justify-between overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[#E8EEF5]">
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-xs font-black text-[#6B8BA4] tracking-widest">01 /</span>
                    <Brain className="w-8 h-8 text-[#1A2F4B] group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-4xl font-serif mb-6 text-[#1A2F4B]">Psychologie & <br/>Intervention</h3>
                  <p className="text-[#5A6D81] font-light leading-relaxed max-w-[250px]">Diagnostic systémique et prise en charge des dynamiques organisationnelles.</p>
               </div>
               <div className="relative z-10 flex flex-wrap gap-2">
                  {["RPS", "Ergonomie", "Soutien"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-[#6B8BA4]">{tag}</span>
                  ))}
               </div>
               {/* Image Parallax subtile en fond de carte */}
               <ParallaxElement distance={40} className="absolute bottom-[-10%] right-[-10%] opacity-10 text-[#1A2F4B]">
                  <Brain size={300} strokeWidth={1} />
               </ParallaxElement>
            </div>

            {/* Carte 02 - RH (Le contraste smoth) */}
            <div className="group bg-[#1A2F4B] rounded-[3rem] p-12 h-[600px] flex flex-col justify-between overflow-hidden text-white transition-all duration-700 md:mt-12 shadow-xl">
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12 text-[#6B8BA4]">
                    <span className="text-xs font-black tracking-widest uppercase">02 /</span>
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-serif mb-6 leading-tight">Ressources <br/>Humaines</h3>
                  <p className="text-[#A5B9CC] font-light leading-relaxed">Recrutement prédictif et ingénierie de la gestion des compétences.</p>
               </div>
               <Link href="/expertise/rh" className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] group-hover:gap-8 transition-all">
                  Explorer le pôle <MoveUpRight size={16} />
               </Link>
            </div>

            {/* Carte 03 - Formation */}
            <div className="group bg-white border border-[#E8EEF5] rounded-[3rem] p-12 h-[600px] flex flex-col justify-between overflow-hidden transition-all duration-700 hover:border-[#6B8BA4]/30">
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12 text-[#6B8BA4]">
                    <span className="text-xs font-black tracking-widest uppercase">03 /</span>
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-serif mb-6 leading-tight text-[#1A2F4B]">Ingénierie de <br/>Formation</h3>
                  <p className="text-[#5A6D81] font-light leading-relaxed">Analyse des besoins et conception de dispositifs sur-mesure pour libérer le potentiel.</p>
               </div>
               <div className="text-6xl font-serif text-[#F4F7FA] font-bold group-hover:text-[#E8EEF5] transition-colors duration-500">
                  50+ Themes
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THEMES CLOUD (L'ASPECT PASSIONNÉ) */}
      <section className="py-40 bg-[#1A2F4B] text-white relative overflow-hidden">
        {/* Grain de texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-32">
              <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Libérez les talents.</h2>
              <p className="text-[#A5B9CC] text-xl font-light">Des thématiques conçues pour transformer la culture d'entreprise.</p>
           </div>

           <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {[
                "Communication Non-Violente", "Gestion du Stress", "Burnout", "Leadership", 
                "Motivation", "Assertivité", "Gestion du Temps", "Confiance en Soi",
                "Négociation", "Vente", "Intelligence Émotionnelle", "Coaching"
              ].map((theme, i) => (
                <ParallaxElement key={theme} distance={i % 2 === 0 ? 20 : -20}>
                  <motion.div 
                    whileHover={{ scale: 1.05, backgroundColor: "#6B8BA4" }}
                    className="px-8 py-4 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest backdrop-blur-sm transition-all cursor-pointer"
                  >
                    {theme}
                  </motion.div>
                </ParallaxElement>
              ))}
           </div>
        </div>
      </section>

      {/* 5. CTA FINAL (SMOOTH CLOSING) */}
      <section className="py-60 relative flex flex-col items-center justify-center text-center">
        <ParallaxElement distance={-40}>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-12 block">Prêt pour l'étape d'après ?</span>
          <h2 className="text-6xl md:text-[8vw] font-serif text-[#1A2F4B] italic leading-none mb-20 tracking-tighter">
            Construisons l'<span className="not-italic">Harmonie.</span>
          </h2>
          
          <Link 
          href="https://wa.me/+22670813978"
           className="group relative inline-flex items-center gap-8 bg-[#1A2F4B] text-white px-16 py-8 rounded-full transition-all hover:bg-[#6B8BA4] shadow-2xl">
            <span className="text-xl font-bold tracking-tight">Nous contacter</span>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-4 transition-transform">
              <ArrowRight />
            </div>
          </Link>
          
          <div className="mt-16 flex items-center gap-4 text-[#6B8BA4] font-medium italic">
             <span className="w-12 h-px bg-[#E8EEF5]" /> 
             Discutons au 70 81 39 78
             <span className="w-12 h-px bg-[#E8EEF5]" />
          </div>
        </ParallaxElement>
      </section>

    </main>
  );
}