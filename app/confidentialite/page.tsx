"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Clock, Users, CheckCircle2, 
  Download, MessageCircle, ShieldCheck, MapPin
} from 'lucide-react';
import Link from 'next/link';

// Simuler la base de données
const formationsData: Record<string, any> = {
  "1": {
    title: "Gestion du Stress & Burnout",
    category: "Bien-être au travail",
    duration: "14 Heures",
    days: "2 Jours",
    public: "Managers & Collaborateurs",
    description: "Un parcours immersif pour décoder les mécanismes du stress, identifier les signaux d'alerte et ancrer des stratégies de résilience durable au sein de vos équipes.",
    objectifs: [
      "Comprendre la physiologie du stress",
      "Détecter les signaux faibles d'épuisement",
      "Réguler ses émotions en situation de crise",
      "Bâtir un plan de prévention collectif"
    ],
    programme: [
      { day: "01", theme: "Comprendre & Détecter", points: ["Physiologie du stress", "Inventaire des stresseurs", "Signaux d'alerte précoces"] },
      { day: "02", theme: "Agir & Prévenir", points: ["Techniques de régulation", "Communication assertive", "Équilibre vie pro/perso"] }
    ]
  }
};

export default function FormationDetail() {
  const { id } = useParams();
  const router = useRouter();
  
  // Sécurité si l'ID n'existe pas
  const data = formationsData[id as string] || formationsData["1"];

  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-32 selection:bg-[#6B8BA4]/20">
      
      {/* 1. HEADER */}
      <section className="relative pt-48 pb-24 overflow-hidden px-6">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => router.back()}
            className="flex items-center gap-3 text-[#6B8BA4] font-bold text-[10px] uppercase tracking-[0.4em] mb-16 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> 
            Retour au catalogue
          </motion.button>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6B8BA4] bg-white px-4 py-2 rounded-full border border-[#E8EEF5]">
                    {data.category}
                  </span>
                  <div className="h-px w-12 bg-[#6B8BA4]/20" />
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] tracking-tighter text-[#1A2F4B] mb-12">
                  {data.title.includes('&') ? data.title.split('&').map((part: string, i: number) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="italic font-light text-[#6B8BA4]"> & </span>}
                      {part}
                    </React.Fragment>
                  )) : data.title}
                </h1>
                
                <p className="text-2xl text-[#5A6D81] font-light leading-relaxed max-w-3xl">
                  {data.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPS DE PAGE */}
      <section className="px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-7 space-y-24">
            {/* Objectifs */}
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#1A2F4B]" />
                Objectifs d'Apprentissage
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.objectifs.map((obj: string, i: number) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-white rounded-[2rem] border border-[#E8EEF5] flex flex-col gap-6 group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F4F7FA] flex items-center justify-center text-[#1A2F4B] group-hover:bg-[#1A2F4B] group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-[#1A2F4B] font-medium leading-snug">{obj}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Programme */}
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#1A2F4B]" />
                Structure du Programme
              </h2>
              <div className="space-y-4">
                {data.programme.map((step: any, i: number) => (
                  <div key={i} className="group bg-white rounded-[2.5rem] border border-[#E8EEF5] overflow-hidden">
                    <div className="p-10 flex flex-col md:flex-row gap-8 items-start">
                      <div className="text-4xl font-serif italic text-[#6B8BA4]/30 group-hover:text-[#1A2F4B] transition-colors duration-500">
                        {step.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif text-[#1A2F4B] mb-6">{step.theme}</h3>
                        <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                          {step.points.map((p: string, j: number) => (
                            <li key={j} className="text-[#5A6D81] text-sm flex items-center gap-3 font-light">
                              <div className="w-1 h-1 rounded-full bg-[#6B8BA4]" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : ACTION CARD */}
          <div className="lg:col-span-5">
            <aside className="sticky top-32">
              <div className="bg-[#1A2F4B] text-white rounded-[3.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(26,47,75,0.3)] relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                
                <h3 className="text-2xl font-serif italic mb-10 relative z-10 text-[#A5B9CC]">Informations Clés</h3>
                
                <div className="space-y-8 mb-12 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4 text-[#A5B9CC]">
                      <Clock size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Durée</span>
                    </div>
                    <span className="font-bold">{data.duration}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4 text-[#A5B9CC]">
                      <Users size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Public</span>
                    </div>
                    <span className="font-bold">{data.public}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4 text-[#A5B9CC]">
                      <MapPin size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Format</span>
                    </div>
                    <span className="font-bold">Intra-entreprise</span>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <Link 
                    href={`https://wa.me/+22670813978?text=Demande de devis : ${data.title}`}
                    className="w-full bg-white text-[#1A2F4B] py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#6B8BA4] hover:text-white transition-all shadow-xl"
                  >
                    <MessageCircle size={20} /> Demander un devis
                  </Link>
                  <Link
                    href="/catalogue.pdf"
                    className="w-full py-6 rounded-2xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
                  >
                    <Download size={18} /> Télécharger le PDF
                  </Link>
                </div>

                <p className="mt-10 text-center text-[10px] text-[#A5B9CC] font-medium tracking-widest uppercase opacity-60 leading-relaxed">
                  Accompagnement éligible aux dispositifs de financement.
                </p>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 p-10 bg-white border border-[#E8EEF5] rounded-[2.5rem] flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F4F7FA] flex items-center justify-center text-[#6B8BA4]">
                  <ShieldCheck />
                </div>
                <p className="text-[10px] font-bold text-[#1A2F4B] uppercase tracking-widest leading-relaxed">
                  Programme certifié conforme <br/> aux exigences de qualité MindCare.
                </p>
              </div>
            </aside>
          </div>

        </div>
      </section>
    </main>
  );
}