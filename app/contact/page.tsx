"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi (Resend, Formspree, etc.)
    setIsSubmitted(true);
  };

  return (
    <main className="bg-[#FDFCFB] pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* COLONNE GAUCHE : TEXTE & INFOS */}
          <div className="space-y-12">
            <FadeIn direction="left">
              <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-4">Contact</h2>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-slate-900">
                Engageons la <span className="italic text-slate-400">conversation</span>.
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md">
                Un projet, une question ou besoin d'un diagnostic RPS ? Nos experts vous répondent sous 24h.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Appelez-nous</p>
                    <p className="text-xl font-bold text-slate-900">70 81 39 78</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Email</p>
                    <p className="text-xl font-bold text-slate-900">contact@mindcare-consulting.com</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* COLONNE DROITE : FORMULAIRE HAUT DE GAMME */}
          <div className="relative">
            <FadeIn direction="right" delay={0.3}>
              <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Nom Complet</label>
                        <input type="text" required className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all outline-none text-slate-900" placeholder="Jean Dupont" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Entreprise</label>
                        <input type="text" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all outline-none text-slate-900" placeholder="Nom de votre structure" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Votre besoin</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all outline-none text-slate-900 appearance-none">
                        <option>Diagnostic Psychosocial (RPS)</option>
                        <option>Formation Catalogue</option>
                        <option>Audit RH / Recrutement</option>
                        <option>Autre demande</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Message</label>
                      <textarea rows={4} required className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all outline-none text-slate-900 resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 group">
                      Envoyer ma demande <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-serif mb-4">Message envoyé !</h3>
                    <p className="text-slate-500 mb-8">Merci de votre confiance. Notre équipe vous recontactera sous 24 heures maximum.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-blue-600 font-bold hover:underline">Envoyer un autre message</button>
                  </motion.div>
                )}
              </div>
            </FadeIn>
            
            {/* Décoration d'arrière-plan */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-[80px] -z-0 opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-[80px] -z-0 opacity-50" />
          </div>

        </div>
      </div>
    </main>
  );
}