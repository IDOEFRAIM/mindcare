import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A2F4B] text-white pt-32 pb-12 relative overflow-hidden">
      {/* Effet de lumière diffuse en arrière-plan */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: BIG LOGO & CALL TO ACTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24 border-b border-white/5 pb-24">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                <Brain className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-serif italic tracking-tighter">MindCare</span>
            </div>
            <p className="text-[#A5B9CC] text-lg font-light leading-relaxed">
              L'ingénierie humaine au service des organisations visionnaires. 
              Stabiliser, former, performer.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6B8BA4]">Prêt à échanger ?</span>
            <Link href="mailto:contact@mindcare.com" className="text-3xl md:text-5xl font-serif italic hover:text-[#6B8BA4] transition-colors duration-500 underline underline-offset-8 decoration-white/10">
              contact@mindcare.com
            </Link>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          
          {/* EXPERTISES */}
          <div>
            <h4 className="text-[#6B8BA4] font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Expertises</h4>
            <ul className="space-y-4">
              {['Psychologie', 'Ressources Humaines', 'Formation', 'Management'].map((item) => (
                <li key={item}>
                  <Link href={`/expertises/${item.toLowerCase()}`} className="text-[#A5B9CC] hover:text-white transition-all flex items-center gap-2 group text-sm">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CABINET */}
          <div>
            <h4 className="text-[#6B8BA4] font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Cabinet</h4>
            <ul className="space-y-4">
              {['Notre Vision', 'Le Catalogue', 'Diagnostic', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#A5B9CC] hover:text-white transition-all text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INFOS CONTACT */}
          <div className="col-span-2">
            <h4 className="text-[#6B8BA4] font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Siège & Contact</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-2xl font-serif italic">70 81 39 78</p>
                <div className="flex gap-4">
                  <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#1A2F4B] transition-all">
                    <Linkedin size={18} />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#1A2F4B] transition-all">
                    <Instagram size={18} />
                  </Link>
                </div>
              </div>
              <p className="text-[#A5B9CC] text-sm leading-relaxed font-light">
                Quartier des Experts, <br />
                Avenue de l'Innovation, <br />
                Libreville, Gabon
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-[#6B8BA4]">
            <p>© 2025 MindCare Consulting</p>
            <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#6B8BA4]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Disponible pour nouveaux mandats
          </div>
        </div>
      </div>
    </footer>
  );
}