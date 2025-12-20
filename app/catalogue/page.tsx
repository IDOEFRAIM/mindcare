"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Clock, Users, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/animations/fade-in';

// Données simplifiées extraites de votre catalogue
const formations = [
  {
    id: 1,
    title: "Gestion du Stress et Burnout",
    category: "Bien-être",
    public: "Salariés",
    duration: "2 jours",
    description: "Identifier les signes d'épuisement et mettre en place des stratégies de résilience."
  },
  {
    id: 2,
    title: "Leadership & Management Hybride",
    category: "Management",
    public: "Managers",
    duration: "3 jours",
    description: "Animer des équipes à distance tout en maintenant l'engagement et la cohésion."
  },
  {
    id: 3,
    title: "Recrutement et Sélection Ethique",
    category: "RH",
    public: "RH",
    duration: "2 jours",
    description: "Maîtriser les biais cognitifs pour un recrutement plus performant et inclusif."
  },
  {
    id: 4,
    title: "Communication Non-Violente (CNV)",
    category: "Soft Skills",
    public: "Tous",
    duration: "2 jours",
    description: "Transformer les conflits en opportunités de collaboration constructive."
  },
  // Ajoutez vos autres thématiques ici...
];

const categories = ["Tous", "Bien-être", "Management", "RH", "Soft Skills"];

export default function CataloguePage() {
  const [filter, setFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFormations = formations.filter(f => 
    (filter === "Tous" || f.category === filter) &&
    (f.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="pt-32 pb-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER CATALOGUE */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Catalogue de <br/><span className="text-blue-600 italic">Formations</span></h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Développez les compétences de demain avec nos parcours d'ingénierie pédagogique sur-mesure.
            </p>
          </div>
        </FadeIn>

        {/* BARRE DE FILTRES DYNAMIQUE */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  filter === cat 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Rechercher un module..." 
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* GRILLE DE FORMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredFormations.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                      {item.category}
                    </span>
                    <BookOpen className="text-slate-200 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <div className="flex justify-between items-center mb-6 text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    <div className="flex items-center gap-2">
                      <Clock size={14} /> {item.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} /> {item.public}
                    </div>
                  </div>
                  <button className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <Link
                    href={`/catalogue/${item.id}`}
                    >
                    Détails du programme <ArrowRight size={16} />
                    </Link>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* EMPTY STATE */}
        {filteredFormations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-serif text-2xl italic">Aucun module ne correspond à votre recherche...</p>
          </div>
        )}
      </div>
    </main>
  );
}