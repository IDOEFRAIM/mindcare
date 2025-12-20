"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Brain, Users, GraduationCap, MessageSquare, LineChart, ShieldCheck, 
  ArrowLeft, CheckCircle, Target, ArrowRight 
} from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';
import Link from 'next/link';

// Mapping des contenus basés sur votre catalogue
const expertiseData: Record<string, any> = {
  "psychologie": {
    title: "Psychologie & Intervention Psychosociale",
    icon: <Brain className="w-12 h-12" />,
    color: "bg-slate-900",
    description: "Nous intervenons sur les dynamiques humaines pour favoriser l'équilibre et la performance.",
    services: [
      "Diagnostic et prise en charge psychologique (Individuel & Groupal)",
      "Intervention psychosociale dans les organisations",
      "Stratégies de gestion des changements sociotechniques",
      "Prévention des Risques Psychosociaux (RPS)"
    ],
    details: "Notre approche combine rigueur clinique et compréhension des enjeux de l'entreprise pour créer des environnements de travail sains."
  },
  "rh": {
    title: "Ressources Humaines",
    icon: <Users className="w-12 h-12" />,
    color: "bg-emerald-600",
    description: "Optimisez votre capital humain grâce à des outils de gestion modernes et éthiques.",
    services: [
      "Techniques de recrutement et sélection de personnel",
      "Gestion prévisionnelle des emplois et des compétences (GPEC)",
      "Amélioration des conditions de travail et ergonomie",
      "Aide à l'orientation et reclassement professionnel"
    ],
    details: "Nous vous accompagnons dans chaque étape du cycle de vie du collaborateur."
  },
  // Tu peux ajouter les autres (management, formation, etude) ici...
};

export default function ExpertiseDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const data = expertiseData[slug as string] || expertiseData["psychologie"];

  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      {/* 1. HEADER D'EXPERTISE */}
      <section className={`${data.color} pt-40 pb-20 px-6 text-white`}>
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour
          </button>
          
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="p-5 bg-white/10 backdrop-blur-lg rounded-[2rem] w-fit">
                {data.icon}
              </div>
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{data.title}</h1>
                <p className="text-xl text-white/80 leading-relaxed font-light">
                  {data.description}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. CONTENU DÉTAILLÉ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          
          {/* Liste des Services */}
          <div className="md:col-span-7">
            <FadeIn direction="up">
              <h2 className="text-3xl font-serif mb-10 text-slate-900">Nos domaines d'intervention</h2>
              <div className="grid gap-6">
                {data.services.map((service: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <p className="text-lg text-slate-700 font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Sidebar Info/CTA */}
          <div className="md:col-span-5">
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-slate-50 p-10 rounded-[3rem] sticky top-32 border border-slate-100">
                <Target className="w-10 h-10 text-slate-900 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Pourquoi nous ?</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {data.details}
                </p>
                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                >
                  Demander une intervention <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 3. SECTION TRANSITION : FORMATIONS LIÉES */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
            Besoin de former vos équipes sur cette thématique ?
          </h2>
          <Link 
            href="/catalogue"
            className="text-blue-400 font-bold hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            Découvrir les modules de formation associés <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}