'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Shield, Award, Medal, Star, RefreshCw, User } from 'lucide-react';

import { nameSchema, NameFormValues } from '@/lib/validation';
import { useWindowSize } from '@/hooks/useWindowSize';
import { RCSBLogoSVG } from '@/components/icons/RCSBLogoSVG';
import { YodhaLogoSVG } from '@/components/icons/YodhaLogoSVG';
import { Loader } from '@/components/ui/loader';
import { CertificateTemplate } from '@/components/certificate/CertificateTemplate';
import { CertificateControls } from '@/components/certificate/CertificateControls';

export default function Home() {
  const [appState, setAppState] = useState<'landing' | 'loading' | 'certificate'>('landing');
  const [validatedName, setValidatedName] = useState('');
  const printRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NameFormValues>({
    resolver: zodResolver(nameSchema),
    defaultValues: { name: '' },
  });

  // Calculate certificate scaling to fit viewport
  const padding = width < 640 ? 16 : 32;
  const certificateScale = Math.min((width - padding) / 1123, 1);
  const scaledHeight = 794 * certificateScale;

  const onSubmit = (data: NameFormValues) => {
    // Save the formatted (trimmed & cleaned) name
    setValidatedName(data.name);
    // Enter loading state
    setAppState('loading');
  };

  useEffect(() => {
    if (appState !== 'loading') return;

    // Simulate certificate generation / assembly (2 seconds duration)
    const timer = setTimeout(() => {
      setAppState('certificate');
      
      // Fire confetti celebration burst!
      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#ffd700', '#1b3a24', '#ff9933', '#128807'],
        });
      }, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [appState]);

  const handleReset = () => {
    reset();
    setValidatedName('');
    setAppState('landing');
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      {/* Background Decorative Element: Subtle dark green mesh pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[radial-gradient(#1b3a24_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* HEADER BAR */}
      <header className="relative z-10 w-full px-6 py-3.5 flex justify-between items-center border-b border-[#142a1b] bg-[#060907]/80 backdrop-blur-md">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <img src="/RCSB-Logo.png" alt="RCSB Logo" className="h-9 sm:h-11 object-contain" />
          <div className="h-6 w-[1px] bg-zinc-800" />
          <img src="/RUAS-logo.png" alt="RUAS Logo" className="h-9 sm:h-11 object-contain bg-white/5 rounded px-1.5 py-0.5" />
        </div>
        <div className="flex items-center space-x-1 bg-[#142a1b] text-zinc-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#d4af37]/20">
          <Shield className="w-3.5 h-3.5 text-[#d4af37] mr-1" />
          <span>Jointly Organised</span>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center py-10 px-4">
        
        {/* LOADING STATE SCREEN */}
        <Loader loading={appState === 'loading'} />

        <AnimatePresence mode="wait">
          {/* LANDING PAGE STATE */}
          {appState === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-xl flex flex-col items-center text-center space-y-8"
            >
              {/* Project Crest Logo */}
              <div className="relative group">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    repeatDelay: 10,
                    ease: "easeInOut"
                  }}
                  className="w-36 h-36 md:w-40 md:h-40 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  <YodhaLogoSVG className="w-full h-full" />
                </motion.div>
                <div className="absolute inset-0 bg-[#d4af37]/5 blur-xl rounded-full scale-75 pointer-events-none" />
              </div>

              {/* Title & Introduction Text */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] uppercase font-serif text-white">
                  Project Yodha
                </h1>
                
                {/* Dual Accent line */}
                <div className="flex flex-col items-center w-40 mx-auto">
                  <div className="h-[2px] w-full bg-[#d4af37]" />
                  <div className="h-[1px] w-2/3 bg-[#1b3a24] mt-[2.5px]" />
                </div>

                <div className="text-zinc-300 font-sans leading-relaxed text-sm md:text-base max-w-lg mx-auto space-y-3 font-medium pt-1">
                  <p>Welcome to Project Yodha.</p>
                  <p className="text-zinc-300">
                    Jointly organised by the <span className="text-[#d4af37] font-semibold">Rotaract Club of Swarna Bengaluru</span> &amp; <span className="text-[#d4af37] font-semibold">Rotaract Club of RUAS</span>.
                  </p>
                  <p className="text-[#d4af37]/90 text-xs md:text-sm border-y border-[#142a1b] py-2.5 my-2">
                    Guest Speaker: <span className="font-bold">JWO. Dilip Kumar Reddy</span><br />
                    Topic: <span className="italic font-bold">&ldquo;Kargil Through My Eyes&rdquo;</span>
                  </p>
                  <p className="text-zinc-400 text-xs md:text-sm">
                    Enter your name below to receive your personalized Certificate of Participation.
                  </p>
                </div>
              </div>

              {/* Form Input Section */}
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="w-full max-w-md bg-[#0b170e]/80 border border-[#d4af37]/15 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-sm space-y-6"
                noValidate
              >
                <div className="flex flex-col space-y-2 text-left relative">
                  <label 
                    htmlFor="name" 
                    className="text-xs uppercase font-bold tracking-widest text-[#d4af37]"
                  >
                    Enter your Full Name
                  </label>
                  
                  <div className="relative flex items-center">
                    <User className="absolute left-3 w-5 h-5 text-[#d4af37]/50" />
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Aarcha U"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full bg-[#060907] text-white border ${
                        errors.name ? 'border-red-500' : 'border-[#1b3a24]'
                      } focus:border-[#d4af37] px-4 py-3.5 pl-11 rounded-xl text-base font-semibold font-sans tracking-wide transition-all outline-none bg-opacity-70`}
                      {...register('name')}
                    />
                  </div>

                  {errors.name && (
                    <motion.span
                      id="name-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs font-semibold mt-1 font-sans flex items-center"
                    >
                      <Star className="w-3.5 h-3.5 mr-1 fill-current text-red-500 animate-pulse" />
                      {errors.name.message}
                    </motion.span>
                  )}
                </div>

                {/* Generate Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full relative group overflow-hidden rounded-xl p-[2px] cursor-pointer animate-gold-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#aa771c] via-[#fcf6ba] to-[#b38728] opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center space-x-2 bg-[#1b3a24] group-hover:bg-[#122c1a] text-white py-3.5 px-6 rounded-[10px] font-bold font-sans tracking-wider uppercase transition-colors text-sm shadow-lg">
                    <Award className="w-5 h-5 text-[#d4af37]" />
                    <span>Generate Certificate</span>
                  </div>
                </motion.button>
              </form>

              {/* Service Motto Footer */}
              <div className="flex space-x-2 items-center text-[#d4af37]/60 font-serif italic text-xs tracking-wider">
                <span>&ldquo;Service Above Self&rdquo;</span>
              </div>
            </motion.div>
          )}

          {/* CERTIFICATE DISPLAY STATE */}
          {appState === 'certificate' && (
            <motion.div
              key="certificate"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="w-full flex flex-col items-center"
            >
              {/* Header Title */}
              <div className="text-center mb-6 space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#d4af37] font-sans flex items-center justify-center">
                  <Medal className="w-4 h-4 mr-1.5 fill-current text-[#d4af37]" />
                  Your Certificate is Ready
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-sm">
                  Review the preview below and select a format to download.
                </p>
              </div>

              {/* Certificate scaled preview wrapper */}
              <div 
                className="w-full max-w-[1123px] flex items-start justify-center overflow-hidden rounded-lg shadow-2xl border border-[#d4af37]/20"
                style={{ 
                  height: `${scaledHeight}px`,
                }}
              >
                <CertificateTemplate ref={printRef} name={validatedName} scale={certificateScale} />
              </div>

              {/* Control Download Buttons */}
              <CertificateControls certificateRef={printRef} participantName={validatedName} />

              {/* Reset Form Button */}
              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                className="mt-6 flex items-center space-x-1.5 text-zinc-400 hover:text-[#d4af37] font-semibold text-xs uppercase tracking-widest transition-colors font-sans py-2 px-4 rounded-full bg-[#142a1b]/40 hover:bg-[#142a1b]/80 border border-zinc-800 hover:border-[#d4af37]/30"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Generate Another Certificate</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER BAR */}
      <footer className="relative z-10 w-full py-4 text-center border-t border-[#142a1b] bg-[#060907] px-4">
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-sans font-medium block">
          PROJECT YODHA &copy; 2026 • ROTARACT CLUB OF SWARNA BENGALURU
        </span>
      </footer>
    </div>
  );
}
