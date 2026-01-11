"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Brain } from 'lucide-react';

const navigation = [
  { name: 'Expertises', href: '/#expertises' },
  { name: 'Catalogue', href: '/catalogue' },
  { name: 'Le Cabinet', href: '/a-propos' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détection du scroll pour changer l'apparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
        ? 'py-4 px-6 md:px-12' 
        : 'py-8 px-6 md:px-12'
      }`}
    >
      <nav 
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between ${
          isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 border border-white/20' 
          : 'bg-transparent'
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Brain className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-slate-900 font-serif font-bold text-xl tracking-tight">MindCare</span>
            <span className="text-[10px] text-blue-600 font-bold tracking-[0.2em] uppercase">Consulting</span>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://wa.me/+22670813978"  
            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-md active:scale-95"
          >
            Parlons de votre projet <ArrowRight className="w-4 h-4" />
          </Link>

          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navigation.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif font-medium text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold"
              >
                Demander un diagnostic
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}