"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  className?: string; // Ajout du className optionnel
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up', 
  fullWidth = false,
  className = "" 
}: FadeInProps) {
  
  // Directions avec des amplitudes légèrement réduites pour plus de subtilité
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: direction === 'none' ? 0.98 : 1 // Léger zoom out si pas de direction pour un effet de "réveil"
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1
      }}
      viewport={{ 
        once: true, 
        margin: "-15% 0px" // Un peu plus restrictif pour éviter les déclenchements trop précoces
      }}
      transition={{
        // Utilisation d'un effet "Spring" (ressort) pour un mouvement plus organique et moins mécanique
        type: "spring",
        stiffness: 40,   // Tension
        damping: 20,     // Amortissement (empêche les rebonds excessifs)
        mass: 1,
        duration: 1,
        delay: delay,
      }}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </motion.div>
  );
}