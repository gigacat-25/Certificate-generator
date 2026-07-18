'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { YodhaLogoSVG } from '@/components/icons/YodhaLogoSVG';
import { ShieldAlert, Medal, Star } from 'lucide-react';

interface LoaderProps {
  loading: boolean;
}

const statusMessages = [
  "Preparing your certificate...",
  "Generating secure credentials...",
  "Polishing gold seals..."
];

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (!loading) return;
    
    // Cycle through messages
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 700);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060907] px-4 overflow-hidden"
          role="alert"
          aria-busy="true"
          aria-live="assertive"
        >
          {/* Animated Tricolor Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] blur-[100px] opacity-20 pointer-events-none">
            <div className="absolute top-0 w-full h-1/3 bg-[#FF9933]"></div>
            <div className="absolute top-1/3 w-full h-1/3 bg-white"></div>
            <div className="absolute bottom-0 w-full h-1/3 bg-[#128807]"></div>
          </div>

          <div className="relative flex flex-col items-center text-center max-w-md z-10">
            {/* Pulsing Shield Icon Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: 1
              }}
              transition={{
                scale: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.5 }
              }}
              className="w-40 h-40 md:w-48 md:h-48 drop-shadow-[0_0_20px_rgba(212,175,55,0.35)] mb-8"
            >
              <YodhaLogoSVG className="w-full h-full" glow={true} />
            </motion.div>

            {/* Indian Flag Tricolor Wave Line */}
            <div className="flex space-x-1 justify-center items-center mb-6 h-2 w-32">
              <motion.div 
                animate={{ scaleY: [1, 2, 1], backgroundColor: ['#FF9933', '#CC6600', '#FF9933'] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.1 }}
                className="w-3 h-1.5 rounded-full"
              />
              <motion.div 
                animate={{ scaleY: [1, 2, 1], backgroundColor: ['#FF9933', '#CC6600', '#FF9933'] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                className="w-3 h-1.5 rounded-full"
              />
              <motion.div 
                animate={{ scaleY: [1, 2, 1], backgroundColor: ['#ffffff', '#e2e8f0', '#ffffff'] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
                className="w-3 h-1.5 rounded-full"
              />
              <motion.div 
                animate={{ scaleY: [1, 2, 1], backgroundColor: ['#ffffff', '#e2e8f0', '#ffffff'] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                className="w-3 h-1.5 rounded-full"
              />
              <motion.div 
                animate={{ scaleY: [1, 2, 1], backgroundColor: ['#128807', '#0b5504', '#128807'] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
                className="w-3 h-1.5 rounded-full"
              />
              <motion.div 
                animate={{ scaleY: [1, 2, 1], backgroundColor: ['#128807', '#0b5504', '#128807'] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
                className="w-3 h-1.5 rounded-full"
              />
            </div>

            {/* Medal Icon Micro-animation */}
            <div className="absolute top-2 right-2 text-gold opacity-10 animate-spin-slow">
              <Medal className="w-12 h-12" />
            </div>

            {/* Floating Star detail */}
            <div className="flex space-x-1.5 items-center justify-center text-gold/80 mb-2">
              <Star className="w-4 h-4 fill-current animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold font-serif">Valour & Honour</span>
              <Star className="w-4 h-4 fill-current animate-pulse" />
            </div>

            {/* Rotating Messages Container */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIndex}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-base md:text-lg font-medium tracking-wide text-zinc-300 font-sans"
                >
                  {statusMessages[statusIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            {/* Sub-bar loader */}
            <div className="w-64 h-1 bg-[#142a1b] rounded-full overflow-hidden mt-6 relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Loader;
