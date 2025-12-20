"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Brain, ChevronDown } from 'lucide-react';

const navLinks = [
      { name: 'Accueil', href: '/' },
  { name: 'Expertises', href: '/expertise' },
  { name: 'Catalogue', href: '/catalogue' },
  { name: 'Le Cabinet', href: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <nav className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm border border-slate-200/50 py-3 rounded-full' : 'bg-transparent py-2'
      }`}>
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <Brain className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-slate-900 font-serif font-bold text-xl tracking-tight">MindCare</span>
            <span className="text-[9px] text-blue-600 font-bold tracking-[0.3em] uppercase">Consulting</span>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
          target='_blank'
           href="https:wa.me//+22601479800" className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
            Parlons-en <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-6 right-6 mt-4 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:hidden overflow-hidden">
             <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif font-medium text-slate-900 hover:text-blue-600 transition-colors">{link.name}</Link>
                ))}
                <hr className="border-slate-100" />
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-slate-900 text-white text-center py-5 rounded-2xl font-bold">Nous Contacter</Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}