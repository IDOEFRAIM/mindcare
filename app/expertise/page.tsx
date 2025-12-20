"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Users, GraduationCap, LineChart, 
  MessageSquare, ShieldCheck, ArrowRight, Sparkles 
} from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';

const allExpertises = [
  {
    slug: "psychologie",
    title: "Psychologie & Intervention",
    description: "Diagnostic systémique et accompagnement des dynamiques humaines pour stabiliser votre organisation.",
    icon: <Brain className="w-8 h-8" />,
    color: "bg-slate-900 text-white",
    tags: ["RPS", "Crise", "Médiation"]
  },
  {
    slug: "rh",
    title: "Ressources Humaines",
    description: "Optimisation stratégique du cycle de vie collaborateur, du recrutement à la GPEC.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-emerald-50 text-emerald-900",
    tags: ["Recrutement", "Audit", "GPEC"]
  },
  {
    slug: "sante",
    title: "Santé au Travail",
    description: "Programmes de prévention active du burnout et amélioration de la QVT.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-900",
    tags: ["Burnout", "QVT", "Ergonomie"]
  },
  {
    slug: "formation",
    title: "Ingénierie de Formation",
    description: "Conception de parcours pédagogiques innovants pour transformer les compétences.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-900",
    tags: ["Pédagogie", "Sur-mesure", "Impact"]
  },
  {
    slug: "management",
    title: "Management & Comm.",
    description: "Développement du leadership et déploiement de la communication non-violente.",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-900",
    tags: ["Leadership", "CNV", "Coaching"]
  },
  {
    slug: "evaluation",
    title: "Études & Évaluation",
    description: "Mesure de la performance humaine et suivi des indicateurs de changement.",
    icon: <LineChart className="w-8 h-8" />,
    color: "bg-cyan-50 text-cyan-900",
    tags: ["KPI", "Sondages", "Data"]
  }
];

export default function ExpertisesPage() {
  return (
    <main className="bg-[#FDFCFB] pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* L'en-tête de page */}
        <div className="max-w-3xl mb-20">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Nos domaines <br />
              <span className="italic text-slate-400">d'excellence.</span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Une approche pluridisciplinaire pour répondre aux enjeux complexes du monde du travail moderne.
            </p>
          </FadeIn>
        </div>

        {/* La Grille d'expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allExpertises.map((exp, index) => (
            <FadeIn key={exp.slug} delay={index * 0.1} direction="up">
              <Link href={`/expertise/${exp.slug}`} className="group block h-full">
                <div className={`h-full rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent ${exp.color}`}>
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 rounded-2xl ${exp.slug === 'psychologie' ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                      {exp.icon}
                    </div>
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{exp.title}</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${exp.slug === 'psychologie' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${exp.slug === 'psychologie' ? 'bg-white/10' : 'bg-slate-900/5'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Section Méthodologie Rapide */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-32 p-12 bg-white rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Besoin d'un accompagnement hybride ?</h4>
                <p className="text-slate-500">Nous combinons souvent plusieurs expertises pour des projets sur-mesure.</p>
              </div>
            </div>
            <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors whitespace-nowrap">
              Demander un diagnostic gratuit
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}