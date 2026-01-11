"use client";
import React, { useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Brain, Users, GraduationCap, MessageSquare, LineChart, ShieldCheck, 
  ArrowLeft, Target, ArrowRight, Sparkles, Plus
} from 'lucide-react';
import Link from 'next/link';

// Mapping des contenus basés sur votre catalogue avec une palette "Muted"
const expertiseData: Record<string, any> = {
  "psychologie": {
    title: "Psychologie & Intervention",
    subtitle: "Psychosociale",
    icon: <Brain className="w-12 h-12" />,
    themeColor: "#1A2F4B", // Dusk Blue
    accentColor: "rgba(107, 139, 164, 0.2)",
    description: "Nous intervenons sur les dynamiques humaines pour favoriser l'équilibre et la performance au cœur des systèmes complexes.",
    services: [
      { title: "Diagnostic Clinique", desc: "Prise en charge individuelle et groupale des collaborateurs." },
      { title: "Intervention Psychosociale", desc: "Analyse et régulation des dynamiques relationnelles en entreprise." },
      { title: "Gestion du Changement", desc: "Accompagnement humain lors des transitions sociotechniques." },
      { title: "Prévention des RPS", desc: "Audit et déploiement de stratégies contre les risques psychosociaux." }
    ],
    details: "Notre approche ne se limite pas à la résolution de crise ; elle vise à construire une résilience organisationnelle durable."
  },
  "rh": {
    title: "Ressources",
    subtitle: "Humaines",
    icon: <Users className="w-12 h-12" />,
    themeColor: "#2D4A43", // Deep Forest/Slate (plus doux que l'émeraude)
    accentColor: "rgba(45, 74, 67, 0.1)",
    description: "Optimisez votre capital humain grâce à une ingénierie RH qui allie performance opérationnelle et éthique.",
    services: [
      { title: "Recrutement Prédictif", desc: "Sélection de talents basée sur l'adéquation culturelle et technique." },
      { title: "Ingénierie GPEC", desc: "Gestion prévisionnelle des emplois et montée en compétences." },
      { title: "Ergonomie & Travail", desc: "Amélioration des conditions physiques et organisationnelles." },
      { title: "Reclassement", desc: "Accompagnement à l'orientation et transition professionnelle." }
    ],
    details: "Nous transformons la fonction RH en un véritable partenaire stratégique de votre croissance."
  }
};

export default function ExpertiseDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const containerRef = useRef(null);
  
  const data = expertiseData[slug as string] || expertiseData["psychologie"];

  // Effet de parallaxe sur le titre
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main ref={containerRef} className="bg-[#FAF9F6] min-h-screen selection:bg-[#6B8BA4]/20">
      
      {/* 1. HERO : L'IMMERSION (SMOOTH REVEAL) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
        {/* Background Aura */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            background: `radial-gradient(circle at center, ${data.themeColor} 0%, transparent 70%)` 
          }} 
        />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => router.back()}
            className="flex items-center gap-3 text-[#6B8BA4] font-bold text-[10px] uppercase tracking-[0.4em] mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> 
            Retour aux expertises
          </motion.button>
          
          <motion.div style={{ y: yText }} className="max-w-4xl">
            <div className="flex items-center gap-6 mb-8">
               <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-[#1A2F4B]">
                  {data.icon}
               </div>
               <div className="h-px w-24 bg-[#1A2F4B]/10" />
            </div>
            
            <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.9] tracking-tighter text-[#1A2F4B] mb-10">
              {data.title} <br/>
              <span className="italic font-light text-[#6B8BA4]">{data.subtitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#5A6D81] font-light leading-relaxed max-w-2xl">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. LES SERVICES : ARCHITECTURE MINIMALISTE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20">
          
          <div className="md:col-span-7 space-y-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4] mb-16 block border-b border-[#6B8BA4]/20 pb-4">
              Périmètre d'action
            </h2>
            
            <div className="grid gap-12">
              {data.services.map((service: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-8"
                >
                  <span className="text-sm font-serif italic text-[#6B8BA4] mt-1">0{i+1}</span>
                  <div>
                    <h3 className="text-2xl font-serif text-[#1A2F4B] mb-3 flex items-center gap-4">
                      {service.title}
                      <Plus className="w-4 h-4 text-[#6B8BA4] opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-90" />
                    </h3>
                    <p className="text-[#5A6D81] font-light leading-relaxed text-lg">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. SIDEBAR : LE SENS DU DÉTAIL */}
          <div className="md:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white p-12 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-[#E8EEF5]">
                <Target className="w-8 h-8 text-[#1A2F4B] mb-8" />
                <h4 className="text-xl font-bold text-[#1A2F4B] mb-4">Notre Valeur Ajoutée</h4>
                <p className="text-[#5A6D81] leading-relaxed font-light mb-10 italic">
                  "{data.details}"
                </p>
                
                <Link 
                  href="https://wa.me/+22670813978"
                  className="w-full inline-flex items-center justify-center gap-4 bg-[#1A2F4B] text-white py-6 rounded-2xl font-bold hover:bg-[#6B8BA4] transition-all shadow-2xl shadow-[#1A2F4B]/10"
                >
                  Planifier une intervention <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="px-12 py-8 bg-[#E8EEF5]/40 rounded-[2rem] flex items-center justify-between">
                <span className="text-sm font-bold text-[#1A2F4B]">Besoin d'un devis ?</span>
                <Link 
                href="https://wa.me/+22670813978"
                 className="text-[#6B8BA4] hover:text-[#1A2F4B] transition-colors">
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER DE PAGE : L'OUVERTURE SUR LA FORMATION */}
      <section className="py-40 bg-[#1A2F4B] text-white relative overflow-hidden">
        {/* Grain de texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Sparkles className="w-12 h-12 text-[#6B8BA4] mx-auto mb-12 opacity-50" />
          <h2 className="text-4xl md:text-6xl font-serif italic mb-12 leading-[1.1]">
            Prolongez l'impact par la <br/>
            <span className="not-italic text-[#6B8BA4]">formation sur mesure.</span>
          </h2>
          <p className="text-[#A5B9CC] text-xl font-light mb-16 max-w-2xl mx-auto">
            Chaque diagnostic peut être suivi d'un programme pédagogique dédié pour ancrer les changements dans la durée.
          </p>
          
          <Link 
            href="/catalogue"
            className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-white hover:text-[#6B8BA4] transition-all group"
          >
            Consulter le catalogue lié
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:translate-x-4 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}