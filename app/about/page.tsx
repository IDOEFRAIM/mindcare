"use client";
import React from 'react';
import FadeIn from '@/components/animations/fade-in';
import { Target, Eye, Heart, Award, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    title: "Expertise Scientifique",
    description: "Nos interventions s'appuient sur la psychologie du travail et des méthodes d'audit éprouvées.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Approche Humaine",
    description: "Nous plaçons l'épanouissement de l'individu au centre de la performance durable.",
    icon: <Heart className="w-6 h-6 text-[#E2725B]" />
  },
  {
    title: "Agilité Opérationnelle",
    description: "Des solutions sur-mesure, adaptées à la réalité terrain de chaque organisation.",
    icon: <Zap className="w-6 h-6 text-orange-500" />
  }
];

export default function AboutPage() {
  return (
    <main className="bg-[#FDFCFB] pt-32 pb-20">
      {/* --- SECTION VISION & MISSION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-4">Notre Manifeste</h2>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Réconcilier <span className="italic text-slate-400">l'humain</span> et la <span className="text-slate-900">performance</span>.
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">
              MindCare Consulting est né d'une conviction simple : une organisation ne peut être durablement performante que si ses collaborateurs sont engagés, formés et protégés.
            </p>
            <div className="flex items-center gap-8">
                <div>
                    <p className="text-3xl font-bold text-slate-900">10+</p>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Années d'expertise</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                    <p className="text-3xl font-bold text-slate-900">500+</p>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Collaborateurs formés</p>
                </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
                 <img 
                   src="/psy.webp" 
                   alt="Cabinet MindCare" 
                   className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50 max-w-[280px]">
                 <Award className="text-blue-600 mb-4 w-10 h-10" />
                 <p className="text-sm font-bold leading-tight">Accompagnement certifié conforme aux normes de santé au travail.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- SECTION VALEURS (BENTO STYLE) --- */}
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white/90">Nos piliers éthiques</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">Le socle sur lequel nous bâtissons chaque intervention.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                  <div className="mb-6 p-4 bg-white/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION ÉQUIPE / EXPERTISE --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
             <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-serif mb-4 flex items-center gap-3">
                    <Target className="text-blue-600" /> Notre Vision
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Devenir le partenaire privilégié des entreprises qui souhaitent transformer leurs défis psychosociaux en leviers d'innovation et de cohésion sociale.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-4 flex items-center gap-3">
                    <Eye className="text-blue-600" /> Notre Mission
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Outiller les managers et les collaborateurs pour qu'ils deviennent acteurs de leur propre bien-être et de la performance collective.
                  </p>
                </div>
             </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3}>
             <div className="bg-blue-50 p-12 rounded-[3rem] border border-blue-100">
                <h4 className="text-2xl font-bold mb-6 text-blue-900">Prêt à collaborer ?</h4>
                <p className="text-blue-800/70 mb-8 leading-relaxed">
                  Chaque projet est unique. Nous commençons toujours par une phase d'écoute active pour comprendre vos enjeux spécifiques.
                </p>
                <Link 
                  href="https://wa.me/+22670813978"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all"
                >
                  Demander un entretien <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}