"use client";
import React from 'react';
import FadeIn from '@/components/animations/fade-in';
import { ShieldCheck, Scale, FileText, Lock } from 'lucide-react';

export default function MentionsLegales() {
  const sections = [
    {
      title: "Édition du site",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <p>
          Le site <strong>MindCare Consulting</strong> est édité par [Nom de l'entreprise], 
          [Forme juridique : ex SAS] au capital de [Montant] €, dont le siège social est situé à 
          [Adresse complète].<br />
          Immatriculée au RCS sous le numéro [Numéro SIREN].
        </p>
      )
    },
    {
      title: "Responsable de publication",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: <p>Monsieur/Madame [Nom du Responsable], en qualité de Gérant.</p>
    },
    {
      title: "Hébergement",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong><br />
          Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
          Site web : https://vercel.com
        </p>
      )
    },
    {
      title: "Propriété intellectuelle",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <p>
          L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. 
          Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations 
          iconographiques et photographiques.
        </p>
      )
    }
  ];

  return (
    <main className="bg-[#FDFCFB] pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-slate-900">Mentions <span className="italic text-slate-400">Légales</span></h1>
          <p className="text-slate-500 mb-16 font-medium uppercase tracking-[0.2em] text-xs">Dernière mise à jour : Décembre 2025</p>
        </FadeIn>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                </div>
                <div className="pl-12 text-slate-600 leading-relaxed border-l border-slate-100 ml-4">
                  {section.content}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-20 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
            <h3 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Protection des données (RGPD)
            </h3>
            <p className="text-blue-800/70 text-sm leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), MindCare Consulting s'engage à ce que la 
              collecte et le traitement de vos données soient conformes à la loi. Pour toute demande concernant vos données personnelles, 
              veuillez nous contacter à : <span className="font-bold">privacy@mindcare-consulting.com</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}