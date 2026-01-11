"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Brain, Users, GraduationCap, LineChart, 
  MessageSquare, ShieldCheck, ArrowRight, Sparkles, MoveUpRight 
} from 'lucide-react';

// --- Petit utilitaire interne pour le mouvement "Smooth" ---
const FloatElement = ({ children, distance = 30 }: { children: React.ReactNode, distance?: number }) => {
  return (
    <motion.div
      whileHover={{ y: -distance }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

const allExpertises = [
  {
    slug: "psychologie",
    title: "Psychologie & Intervention",
    description: "Diagnostic systémique et accompagnement des dynamiques humaines pour stabiliser votre organisation.",
    icon: <Brain className="w-8 h-8" />,
    className: "bg-[#1A2F4B] text-white md:col-span-2", // La carte majeure
    tagColor: "bg-white/10 text-white",
    iconBg: "bg-white/10"
  },
  {
    slug: "rh",
    title: "Ressources Humaines",
    description: "Optimisation stratégique du cycle de vie collaborateur, du recrutement à la GPEC.",
    icon: <Users className="w-8 h-8" />,
    className: "bg-white text-[#1A2F4B] border border-[#1A2F4B]/5",
    tagColor: "bg-[#F4F7FA] text-[#6B8BA4]",
    iconBg: "bg-[#F4F7FA]"
  },
  {
    slug: "sante",
    title: "Santé au Travail",
    description: "Programmes de prévention active du burnout et amélioration de la QVT.",
    icon: <ShieldCheck className="w-8 h-8" />,
    className: "bg-[#F4F7FA] text-[#1A2F4B]",
    tagColor: "bg-white text-[#6B8BA4]",
    iconBg: "bg-white"
  },
  {
    slug: "formation",
    title: "Ingénierie de Formation",
    description: "Conception de parcours pédagogiques innovants pour transformer les compétences.",
    icon: <GraduationCap className="w-8 h-8" />,
    className: "bg-white text-[#1A2F4B] border border-[#1A2F4B]/5 md:col-span-2",
    tagColor: "bg-[#F4F7FA] text-[#6B8BA4]",
    iconBg: "bg-[#F4F7FA]"
  },
  {
    slug: "management",
    title: "Management & Comm.",
    description: "Développement du leadership et déploiement de la communication non-violente.",
    icon: <MessageSquare className="w-8 h-8" />,
    className: "bg-[#E8EEF5] text-[#1A2F4B]",
    tagColor: "bg-white/50 text-[#6B8BA4]",
    iconBg: "bg-white"
  },
  {
    slug: "evaluation",
    title: "Études & Évaluation",
    description: "Mesure de la performance humaine et suivi des indicateurs de changement.",
    icon: <LineChart className="w-8 h-8" />,
    className: "bg-white text-[#1A2F4B] border border-[#1A2F4B]/5",
    tagColor: "bg-[#F4F7FA] text-[#6B8BA4]",
    iconBg: "bg-[#F4F7FA]"
  }
];

export default function ExpertisesPage() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="bg-[#FAF9F6] pt-56 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE : ÉPURE & PASSION */}
        <div className="max-w-4xl mb-32 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-8 block">
              Notre Savoir-Faire
            </span>
            <h1 className="text-6xl md:text-[7vw] font-serif leading-[0.9] tracking-tighter text-[#1A2F4B] mb-12">
              Des domaines <br />
              <span className="italic font-light text-[#6B8BA4]">d'excellence humaine.</span>
            </h1>
            <p className="text-2xl text-[#5A6D81] font-light leading-relaxed max-w-2xl">
              Nous intervenons là où l'humain et l'organisation se rencontrent, pour transformer la tension en <span className="text-[#1A2F4B] font-medium italic underline decoration-[#6B8BA4]/30 underline-offset-4">performance durable.</span>
            </p>
          </motion.div>
        </div>

        {/* GRILLE D'EXPERTISES : STRUCTURE ASYMÉTRIQUE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allExpertises.map((exp, index) => (
            <motion.div
              key={exp.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`${exp.className} group relative rounded-[3.5rem] p-12 flex flex-col justify-between min-h-[500px] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(26,47,75,0.15)]`}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 ${exp.iconBg} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {exp.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight leading-tight">
                  {exp.title}
                </h3>
                <p className={`text-lg font-light leading-relaxed mb-8 opacity-80 max-w-xs`}>
                  {exp.description}
                </p>
              </div>

              <div className="relative z-10 flex items-end justify-between">
                <div className="flex flex-wrap gap-2">
                  {['RPS', 'Impact', 'Diagnostic'].map(tag => (
                    <span key={tag} className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full ${exp.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/expertise/${exp.slug}`} className="w-14 h-14 rounded-full border border-current/10 flex items-center justify-center group-hover:bg-current group-hover:text-inherit transition-all">
                  <MoveUpRight className="w-6 h-6" />
                </Link>
              </div>

              {/* Texture de grain subtile sur les cartes sombres */}
              {exp.slug === 'psychologie' && (
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* FOOTER DE PAGE : LE DIAGNOSTIC (SMOOTH CALL TO ACTION) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 relative py-32 border-t border-[#1A2F4B]/5 flex flex-col items-center text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#6B8BA4] to-transparent" />
          
          <Sparkles className="text-[#6B8BA4] w-12 h-12 mb-12 opacity-30" />
          
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#1A2F4B] mb-12 tracking-tight">
            Besoin d'un accompagnement <br/>
            <span className="not-italic text-[#6B8BA4]">sur-mesure ?</span>
          </h2>
          
          <Link 
          href="https://wa.me/+22670813978"
           className="group relative px-16 py-8 bg-[#1A2F4B] text-white rounded-full overflow-hidden transition-all hover:pr-24 shadow-2xl shadow-[#1A2F4B]/20">
            <span className="relative z-10 text-xl font-bold tracking-tight">Demander un diagnostic gratuit</span>
            <ArrowRight className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </Link>
          
          <p className="mt-12 text-[#6B8BA4] font-mono text-xs uppercase tracking-[0.5em]">
            Réponse sous 24h — Expert dédié
          </p>
        </motion.div>

      </div>
    </main>
  );
}