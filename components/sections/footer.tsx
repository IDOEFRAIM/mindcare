import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* BRAND BOX */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="text-blue-400 w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-tight">MindCare</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              L'humain au service de votre efficacité. Cabinet spécialisé dans le développement des compétences et le bien-être au travail.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors"><Linkedin size={18} /></Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors"><Instagram size={18} /></Link>
            </div>
          </div>

          {/* EXPERTISES */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Expertises</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/expertises/psychologie" className="hover:text-blue-400 transition-colors">Psychologie & Intervention</Link></li>
              <li><Link href="/expertises/rh" className="hover:text-blue-400 transition-colors">Ressources Humaines</Link></li>
              <li><Link href="/expertises/formation" className="hover:text-blue-400 transition-colors">Ingénierie de Formation</Link></li>
              <li><Link href="/expertises/management" className="hover:text-blue-400 transition-colors">Management & Communication</Link></li>
            </ul>
          </div>

          {/* LIENS RAPIDES */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/catalogue" className="hover:text-blue-400 transition-colors">Catalogue de formations</Link></li>
              <li><Link href="/a-propos" className="hover:text-blue-400 transition-colors">Le Cabinet</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Demander un diagnostic</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-blue-400 transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact direct</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="font-bold text-white">70 81 39 78</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span>contact@mindcare.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span>Siège Social, Quartier des Experts,<br/>Ville, Pays</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 uppercase tracking-widest font-bold">
          <p>© 2025 MindCare Consulting. Tous droits réservés.</p>
          <p>Conçu pour l'excellence organisationnelle</p>
        </div>
      </div>
    </footer>
  );
}