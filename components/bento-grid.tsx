"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, GraduationCap, LineChart, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

const expertises = [
  {
    title: "Psychologie & Intervention",
    description: "Diagnostic profond et stratégies d'intervention psychosociale pour stabiliser vos équipes.",
    icon: <Brain className="w-10 h-10" />,
    className: "md:col-span-2 md:row-span-2 bg-slate-900 text-white", // Bloc Principal
    tag: "Expertise Core"
  },
  {
    title: "Ressources Humaines",
    description: "Optimisation du recrutement et gestion des talents.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1 bg-blue-50 text-slate-900",
    tag: "Stratégie"
  },
  {
    title: "Santé au Travail",
    description: "Prévention active du Burnout et gestion du stress.",
    icon: <ShieldCheck className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-emerald-50 text-emerald-900",
    tag: "Bien-être"
  },
  {
    title: "Ingénierie de Formation",
    description: "Programmes sur mesure.",
    icon: <GraduationCap className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-orange-50 text-orange-900",
    tag: "Développement"
  },
  {
    title: "Management & Comm.",
    description: "Leadership et communication non-violente.",
    icon: <MessageSquare className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-purple-50 text-purple-900",
    tag: "Soft Skills"
  },
  {
    title: "Étude & Évaluation",
    description: "Indicateurs de performance humaine.",
    icon: <LineChart className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-cyan-50 text-cyan-900",
    tag: "Analyse"
  }
];

export default function BentoGrid() {
  return (
    <section className="py-20 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header de la section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-4">Nos Domaines d'Impact</h2>
            <p className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Une approche scientifique <br /> au service de l'humain.
            </p>
          </div>
          <button className="text-slate-900 font-semibold flex items-center gap-2 group border-b-2 border-slate-900 pb-1">
            Voir tout le catalogue <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* La Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative rounded-[2.5rem] p-8 overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 ${item.className}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                      {item.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${index === 0 ? 'text-3xl font-serif' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80 leading-relaxed max-w-[250px]">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  DÉCOUVRIR <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Effet de lumière au hover pour le bloc noir */}
              {index === 0 && (
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/40 transition-colors" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}