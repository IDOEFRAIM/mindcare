"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Users, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';

const formations = [
  {
    id: 1,
    title: "Gestion du Stress et Burnout",
    category: "Bien-être",
    public: "Salariés",
    duration: "2 jours",
    description: "Identifier les signes d'épuisement et mettre en place des stratégies de résilience individuelle et collective."
  },
  {
    id: 2,
    title: "Leadership & Management Hybride",
    category: "Management",
    public: "Managers",
    duration: "3 jours",
    description: "Animer des équipes à distance tout en maintenant l'engagement, la confiance et la cohésion."
  },
  {
    id: 3,
    title: "Recrutement et Sélection Ethique",
    category: "RH",
    public: "RH",
    duration: "2 jours",
    description: "Maîtriser les biais cognitifs pour un processus de recrutement plus performant, juste et inclusif."
  },
  {
    id: 4,
    title: "Communication Non-Violente (CNV)",
    category: "Soft Skills",
    public: "Tous",
    duration: "2 jours",
    description: "Transformer les tensions en opportunités de collaboration constructive par l'empathie."
  }
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
    <main className="pt-56 pb-32 bg-[#FAF9F6] min-h-screen selection:bg-[#6B8BA4]/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER ÉDITORIAL */}
        <header className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-8 block">
              Ingénierie Pédagogique
            </span>
            <h1 className="text-6xl md:text-[7vw] font-serif leading-[0.9] tracking-tighter text-[#1A2F4B] mb-12">
              Cultivez vos <br />
              <span className="italic font-light text-[#6B8BA4]">talents.</span>
            </h1>
            <p className="text-2xl text-[#5A6D81] font-light leading-relaxed max-w-2xl">
              Des parcours immersifs conçus pour transformer durablement les postures et les compétences au sein de vos équipes.
            </p>
          </motion.div>
        </header>

        {/* 2. BARRE DE FILTRES "QUIET LUXURY" */}
        <section className="flex flex-col md:flex-row gap-12 mb-20 items-center justify-between border-b border-[#1A2F4B]/5 pb-12">
          <div className="flex gap-8 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative pb-4 ${
                  filter === cat ? 'text-[#1A2F4B]' : 'text-[#6B8BA4] hover:text-[#1A2F4B]'
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A2F4B]" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#6B8BA4] w-4 h-4" />
            <input 
              type="text" 
              placeholder="RECHERCHER UN MODULE..." 
              className="w-full pl-10 pr-4 py-4 bg-transparent border-b border-[#1A2F4B]/10 focus:border-[#1A2F4B] outline-none text-xs font-bold tracking-widest text-[#1A2F4B] transition-all placeholder:text-[#6B8BA4]/50"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        {/* 3. LA GALERIE (SMOOTH GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredFormations.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-[3rem] p-10 flex flex-col justify-between min-h-[480px] border border-transparent hover:border-[#E8EEF5] hover:shadow-[0_40px_80px_-20px_rgba(26,47,75,0.08)] transition-all duration-700"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6B8BA4] bg-[#F4F7FA] px-4 py-2 rounded-full">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#E8EEF5] flex items-center justify-center text-[#6B8BA4] group-hover:bg-[#1A2F4B] group-hover:text-white transition-all duration-500">
                      <BookOpen size={16} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-[#1A2F4B] mb-6 leading-tight group-hover:text-[#6B8BA4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#5A6D81] font-light leading-relaxed mb-8 opacity-80">
                    {item.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#F4F7FA]">
                  <div className="flex justify-between items-center mb-10 text-[10px] font-bold text-[#6B8BA4] uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Clock size={14} strokeWidth={3} /> {item.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} strokeWidth={3} /> {item.public}
                    </div>
                  </div>
                  
                  <Link 
                    href="https://wa.me/+2267801479800" 
                    className="w-full flex items-center justify-between group/btn text-[#1A2F4B] font-bold text-xs uppercase tracking-[0.2em]"
                  >
                    Découvrir le programme 
                    <div className="w-12 h-12 rounded-full bg-[#F4F7FA] flex items-center justify-center group-hover/btn:bg-[#1A2F4B] group-hover/btn:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. EMPTY STATE PASSIONNÉ */}
        {filteredFormations.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40"
          >
            <Sparkles className="w-12 h-12 text-[#6B8BA4] mx-auto mb-8 opacity-20" />
            <p className="text-[#1A2F4B] font-serif text-3xl italic">
              Nous concevons aussi des modules <br/>
              <span className="text-[#6B8BA4] not-italic font-light">entièrement sur-mesure.</span>
            </p>
            <Link 
            href="https://wa.me/+2267801479800" 
             className="mt-12 inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#1A2F4B] border-b border-[#1A2F4B] pb-2">
              Parlons de votre projet
            </Link>
          </motion.div>
        )}

      </div>
    </main>
  );
}