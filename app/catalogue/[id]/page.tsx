"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  CheckCircle2, 
  Calendar, 
  Download, 
  FileText,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link'
import FadeIn from '@/components/animations/fade-in';

// Simulation d'une base de données de formation
// À terme, cela pourrait venir d'un fichier JSON ou d'un CMS
const formationsData: Record<string, any> = {
  "1": {
    title: "Gestion du Stress et Burnout",
    category: "Bien-être",
    duration: "2 jours (14 heures)",
    public: "Managers et Collaborateurs",
    price: "Sur devis",
    description: "Un programme intensif pour comprendre les mécanismes du stress, identifier les signaux d'alerte de l'épuisement professionnel et construire une stratégie de résilience durable.",
    objectifs: [
      "Comprendre la physiologie et la psychologie du stress",
      "Repérer les premiers signes du burnout chez soi et ses collaborateurs",
      "Développer des outils de régulation émotionnelle",
      "Mettre en place un plan d'action de prévention organisationnelle"
    ],
    programme: [
      { day: "Jour 1", theme: "Comprendre et Détecter", points: ["Le cycle du stress", "Signaux d'alerte et inventaires", "Auto-diagnostic"] },
      { day: "Jour 2", theme: "Agir et Prévenir", points: ["Outils de régulation", "Communication de crise", "Plan d'équilibre Vie Pro / Vie Perso"] }
    ]
  },
  "2": {
    title: "Leadership & Management Hybride",
    category: "Management",
    duration: "3 jours (21 heures)",
    public: "Cadres et Dirigeants",
    price: "Sur devis",
    description: "Adapter sa posture managériale aux nouveaux modes de travail pour maintenir l'engagement et la cohésion d'équipe.",
    objectifs: [
      "Piloter la performance à distance sans micro-management",
      "Maintenir le lien social et la culture d'entreprise",
      "Maîtriser les outils de communication synchrone et asynchrone",
      "Gérer les fragilités liées à l'isolement"
    ],
    programme: [
      { day: "Jour 1", theme: "Les fondamentaux de l'hybride", points: ["Postures de confiance", "Cadre et règles de fonctionnement", "Rituels d'équipe"] },
      { day: "Jour 2", theme: "Outils et Communication", points: ["Choisir les bons canaux", "Réunions efficaces", "Feedback à distance"] },
      { day: "Jour 3", theme: "Engagement et Risques", points: ["Détecter le désengagement", "Animer l'intelligence collective", "Plan individuel"] }
    ]
  },
  "3": {
    title: "Recrutement et Sélection Éthique",
    category: "RH",
    duration: "2 jours (14 heures)",
    public: "Chargés de RH et Managers",
    price: "Sur devis",
    description: "Professionnaliser ses entretiens de recrutement en neutralisant les biais cognitifs pour une sélection plus prédictive et inclusive.",
    objectifs: [
      "Identifier et neutraliser les biais de décision",
      "Structurer une grille d'entretien par compétences",
      "Maîtriser les techniques de questionnement STAR",
      "Améliorer l'expérience candidat"
    ],
    programme: [
      { day: "Jour 1", theme: "Préparer la Sélection", points: ["Analyse de poste", "Biais cognitifs et psychologie", "Grilles d'évaluation"] },
      { day: "Jour 2", theme: "L'Entretien Structuré", points: ["Techniques de questionnement", "Prise de notes objective", "Débriefing et décision"] }
    ]
  },
  "4": {
    title: "Communication Non-Violente (CNV)",
    category: "Soft Skills",
    duration: "2 jours (14 heures)",
    public: "Tous publics",
    price: "Sur devis",
    description: "Utiliser la CNV comme levier de coopération pour désamorcer les conflits et exprimer ses besoins avec assertivité.",
    objectifs: [
      "Distinguer observation et jugement",
      "Exprimer ses sentiments et besoins professionnels",
      "Formuler des demandes claires et négociables",
      "Pratiquer l'écoute empathique en situation tendue"
    ],
    programme: [
      { day: "Jour 1", theme: "Les 4 étapes du processus", points: ["L'observation neutre", "Le vocabulaire des émotions", "Identifier ses besoins"] },
      { day: "Jour 2", theme: "La mise en pratique", points: ["L'empathie pour l'autre", "L'auto-empathie", "Jeux de rôles et cas réels"] }
    ]
  },
  "5": {
    title: "Ingénierie de Formation : Concevoir des parcours impactants",
    category: "Ingénierie",
    duration: "3 jours (21 heures)",
    public: "Formateurs et responsables formation",
    price: "Sur devis",
    description: "Passer de la simple transmission de savoir à la création d'expériences d'apprentissage qui transforment les pratiques.",
    objectifs: [
      "Analyser un besoin de formation complexe",
      "Définir des objectifs pédagogiques mesurables",
      "Scénariser des activités d'apprentissage actives",
      "Évaluer le transfert des acquis en situation de travail"
    ],
    programme: [
      { day: "Jour 1", theme: "Analyse et Stratégie", points: ["Analyse de la demande", "Référentiel de compétences", "Architecture du parcours"] },
      { day: "Jour 2", theme: "Scénarisation Pédagogique", points: ["Méthodes actives", "Outils digitaux et gamification", "Supports apprenants"] },
      { day: "Jour 3", theme: "Évaluation et Qualité", points: ["Les 4 niveaux de Kirkpatrick", "Post-formation", "Amélioration continue"] }
    ]
  },
  "6": {
    title: "Management du Changement",
    category: "Management",
    duration: "2 jours (14 heures)",
    public: "Dirigeants et Managers de proximité",
    price: "Sur devis",
    description: "Accompagner les équipes dans les phases de transition organisationnelle en minimisant les résistances.",
    objectifs: [
      "Comprendre la courbe du deuil du changement",
      "Communiquer avec sens et transparence",
      "Identifier et mobiliser les alliés",
      "Gérer les comportements réfractaires"
    ],
    programme: [
      { day: "Jour 1", theme: "La Psychologie du Changement", points: ["Phases de transition", "Mécanismes de résistance", "Diagnostic de l'impact"] },
      { day: "Jour 2", theme: "Pilotage et Engagement", points: ["Stratégie de communication", "Ateliers de co-construction", "Ancrage des nouvelles pratiques"] }
    ]
  }
};

export default function FormationDetail() {
  const { id } = useParams();
  const router = useRouter();
  const data = formationsData[id as string] || formationsData["1"]; // Fallback sur l'id 1 pour l'exemple

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* RETOUR & FIL D'ARIANE */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-8 transition-colors group text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Retour au catalogue
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* COLONNE GAUCHE : INFOS & PROGRAMME */}
          <div className="lg:col-span-8">
            <FadeIn direction="up">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
                Formation {data.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
                {data.title}
              </h1>
              
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                {data.description}
              </p>

              {/* OBJECTIFS */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm">01</span>
                  Objectifs pédagogiques
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.objectifs.map((obj: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-5 bg-white border border-slate-100 rounded-2xl">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROGRAMME DÉTAILLÉ */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm">02</span>
                  Programme de la formation
                </h2>
                <div className="space-y-6">
                  {data.programme.map((step: any, i: number) => (
                    <div key={i} className="border-l-2 border-slate-100 pl-8 relative">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#FDFCFB]" />
                      <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-2">{step.day}</h4>
                      <h3 className="text-xl font-bold mb-4">{step.theme}</h3>
                      <ul className="space-y-2">
                        {step.points.map((p: string, j: number) => (
                          <li key={j} className="text-slate-500 flex items-center gap-2">
                            <ChevronRight className="w-3 h-3 text-slate-300" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* COLONNE DROITE : CARD DE RÉSERVATION (STICKY) */}
          <div className="lg:col-span-4">
            <aside className="sticky top-32 bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Clock className="text-blue-600" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Durée</p>
                    <p className="font-bold text-slate-900">{data.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Users className="text-blue-600" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Public</p>
                    <p className="font-bold text-slate-900">{data.public}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Calendar className="text-blue-600" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Format</p>
                    <p className="font-bold text-slate-900">Intra ou Inter-entreprise</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                  <Link
                  target='_blank'
                  href='https://wa.me/+226014798009?text=Bonjour%20MindCare%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20la%20formation%20:%20${data.title}'>
                  Demander un devis
                  </Link>
                </button>
                <button
                onClick={()=>alert('not implemented')}
                 className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  <Download size={18} /> Télécharger le PDF
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400 mt-6 px-4 leading-relaxed font-medium uppercase tracking-tight">
                Une question spécifique ? Appelez nos experts au <span className="text-slate-900">70 81 39 78</span>
              </p>
            </aside>
          </div>

        </div>
      </div>
    </main>
  );
}