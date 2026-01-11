"use client";
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#FAF9F6] z-[100] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0.4, 1, 0.4],
          scale: [0.95, 1, 0.95] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative"
      >
        <Brain size={64} strokeWidth={1} className="text-[#1A2F4B]" />
        
        {/* Halo lumineux derrière l'icône */}
        <div className="absolute inset-0 bg-[#6B8BA4] blur-3xl opacity-20 rounded-full" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#6B8BA4]"
      >
        Harmonisation en cours...
      </motion.div>
    </div>
  );
}