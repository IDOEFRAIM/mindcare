import { Metadata } from 'next';
import HeroSection from '@/components/sections/header-section';
import FadeIn from '@/components/animations/fade-in';
import { ArrowUpRight, CheckCircle2, Target, Briefcase, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MindCare Consulting | L\'Humain au Cœur de la Performance',
  description: 'Cabinet d\'expertise en psychologie du travail, ressources humaines et ingénierie de formation.',
};

export default function HomePage() {
  return (
    <main className="bg-[#FDFCFB] text-[#0F172A] selection:bg-blue-100 overflow-x-hidden">
   

      {/* 2. BENTO GRID : L'Expertise structurée */}
      <section id="expertises" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <FadeIn direction="up">
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#E2725B] font-bold mb-6">Expertises</h2>
            <p className="text-4xl md:text-7xl font-serif font-medium max-w-4xl leading-[1.05] tracking-tight">
              Une ingénierie humaine pour des organisations <span className="italic text-slate-400">résilientes</span>.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full md:h-[800px]">
          
          {/* Bloc Psychologie : L'Immersion */}
          <div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[3.5rem] p-12 text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-blue-900/20">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
                <Zap className="text-blue-400 group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Psychologie & <br/>Intervention</h3>
              <p className="text-slate-400 text-xl max-w-sm leading-relaxed font-light">
                Diagnostic systémique et prise en charge des dynamiques organisationnelles pour stabiliser votre capital humain.
              </p>
            </div>
            
            <Link href="/expertises/psychologie" className="relative z-10 flex items-center gap-3 font-bold text-sm tracking-widest group-hover:gap-6 transition-all uppercase">
              Découvrir l'approche <ArrowUpRight className="w-5 h-5 text-blue-400" />
            </Link>

            {/* Background Glow interactif */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] group-hover:bg-blue-600/30 transition-all duration-700" />
          </div>

          {/* Bloc RH : Modernité & Stratégie */}
          <div className="md:col-span-2 bg-emerald-50 rounded-[3.5rem] p-12 flex flex-col justify-between hover:shadow-xl transition-all duration-500 border border-emerald-100 group">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold text-emerald-950 tracking-tight">Ressources Humaines</h3>
                <span className="bg-emerald-200/50 text-emerald-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] animate-pulse">Performance</span>
              </div>
              <p className="text-emerald-900/70 mt-6 text-lg max-w-md leading-relaxed">Recrutement prédictif, gestion des compétences et audit climat social.</p>
            </div>
            <div className="flex gap-6 mt-8">
              {['Recrutement', 'Compétences', 'Audit'].map((tag, i) => (
                <span key={tag} className="text-sm font-bold text-emerald-800/40 group-hover:text-emerald-600 transition-colors duration-500 underline underline-offset-8 decoration-emerald-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bloc Formation : Impact Visuel */}
          <div className="bg-[#FEF3E2] rounded-[3.5rem] p-8 flex flex-col items-center justify-center text-center group hover:bg-[#fae8cc] transition-all duration-500 border border-orange-100 shadow-sm">
             <div className="text-[#D97706] font-serif text-7xl mb-3 group-hover:scale-110 transition-transform duration-500 font-bold tracking-tighter">50+</div>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#92400E]/60 group-hover:text-[#92400E] transition-colors">Modules de Formation</p>
          </div>

          {/* Bloc Études : Scientifique & Propre */}
          <div className="bg-blue-50 rounded-[3.5rem] p-10 flex flex-col justify-between hover:bg-white transition-all duration-500 border border-blue-100 group shadow-sm">
             <h3 className="text-2xl font-bold text-blue-950 group-hover:translate-x-1 transition-transform">Études & <br/>Évaluation</h3>
             <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-blue-200 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <ArrowRight className="text-blue-300 group-hover:text-blue-600 transition-colors" />
             </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION TARGET : Staggered Cards */}
      <section className="py-32 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            { icon: <Target />, title: "Pour les Dirigeants", desc: "Alignez votre stratégie humaine avec vos objectifs de croissance durable." },
            { icon: <Briefcase />, title: "Pour les RH", desc: "Externalisez vos diagnostics RPS et optimisez vos processus de recrutement." },
            { icon: <CheckCircle2 />, title: "Pour les Managers", desc: "Développez un leadership authentique et gérez les personnalités difficiles." }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <div className="group space-y-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold tracking-tight">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. SECTION PASSION : Manifeste Premium */}
      <section className="bg-slate-950 py-40 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <FadeIn direction="none" delay={0.2}>
              <blockquote className="text-4xl md:text-7xl font-serif italic leading-[1.1] text-white/90 tracking-tight">
                "Nous croyons que la clé du succès réside dans l'harmonie entre <span className="text-blue-500 relative inline-block">l'individu<span className="absolute bottom-2 left-0 w-full h-[2px] bg-blue-500/30"></span></span> et son environnement de travail."
              </blockquote>
              <div className="mt-20 flex flex-col items-center">
                <div className="w-px h-20 bg-gradient-to-b from-blue-500 to-transparent mb-8"></div>
                <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">MindCare Philosophy</p>
              </div>
            </FadeIn>
          </div>
          
          {/* Grain & Glow Background */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
      </section>

      {/* 5. FINAL CTA : Conversion Magnétique */}
      <section className="py-32 text-center bg-[#FDFCFB]">
        <FadeIn direction="up">
          <h2 className="text-5xl md:text-6xl font-serif mb-12 tracking-tight">Prêt à transformer votre organisation ?</h2>
          <Link href="/contact" 
            className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-full font-bold text-lg transition-all duration-300 hover:bg-blue-600 hover:ring-8 hover:ring-blue-600/10 active:scale-95 shadow-2xl">
            Lancer un diagnostic gratuit 
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <p className="mt-10 text-slate-400 font-medium">
            Ou échangez avec un expert au <span className="text-slate-900 font-bold decoration-blue-500 underline underline-offset-4 cursor-pointer">70 81 39 78</span>
          </p>
        </FadeIn>
      </section>
    </main>
  );
}