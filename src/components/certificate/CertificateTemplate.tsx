'use client';

import React, { forwardRef } from 'react';
import { RCSBLogoSVG } from '@/components/icons/RCSBLogoSVG';
import { YodhaLogoSVG } from '@/components/icons/YodhaLogoSVG';
import { AshokaChakraSVG } from '@/components/certificate/AshokaChakraSVG';

interface CertificateTemplateProps {
  name: string;
  scale?: number;
}

export const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ name, scale = 1 }, ref) => {
    return (
      <div
        className="relative overflow-hidden select-none bg-[#fcfbf7] shadow-2xl transition-all duration-300"
        style={{
          width: '1123px',
          height: '794px',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          margin: '0 auto',
        }}
      >
        {/* Certificate Container ID for export scripts */}
        <div
          ref={ref}
          id="yodha-certificate-print-area"
          className="relative w-full h-full p-12 flex flex-col justify-between bg-[#fcfbf7] text-[#0f2416]"
        >
          {/* BACKGROUND LAYER */}
          
          {/* Watermark: Ashoka Chakra at 5% Opacity */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
            <AshokaChakraSVG size="500px" />
          </div>

          {/* Saffron and Green corner ribbon graphics (very subtle military context) */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 0 0 L 35 0 L 0 35 Z" fill="#FF9933" />
              <path d="M 0 35 L 42 0 L 46 0 L 0 46 Z" fill="#ffffff" />
              <path d="M 0 46 L 52 0 L 58 0 L 0 58 Z" fill="#128807" />
            </svg>
          </div>

          {/* GOLD & GREEN CUSTOM DUAL BORDER */}
          <div className="absolute inset-4 border-[6px] border-[#1b3a24] pointer-events-none rounded-sm">
            {/* Inner Gold Thin Double Border */}
            <div className="absolute inset-[3px] border-2 border-[#d4af37] pointer-events-none">
              {/* Corner Ornamental Elements */}
              {/* Top-Left Corner */}
              <div className="absolute -top-[12px] -left-[12px] w-6 h-6 border-b-2 border-r-2 border-[#d4af37] bg-[#fcfbf7]"></div>
              {/* Top-Right Corner */}
              <div className="absolute -top-[12px] -right-[12px] w-6 h-6 border-b-2 border-l-2 border-[#d4af37] bg-[#fcfbf7]"></div>
              {/* Bottom-Left Corner */}
              <div className="absolute -bottom-[12px] -left-[12px] w-6 h-6 border-t-2 border-r-2 border-[#d4af37] bg-[#fcfbf7]"></div>
              {/* Bottom-Right Corner */}
              <div className="absolute -bottom-[12px] -right-[12px] w-6 h-6 border-t-2 border-l-2 border-[#d4af37] bg-[#fcfbf7]"></div>
              
              {/* Corner Small Stars for military decoration */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-[#d4af37] rotate-45"></div>
              <div className="absolute top-1.5 right-1.5 w-3 h-3 bg-[#d4af37] rotate-45"></div>
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 bg-[#d4af37] rotate-45"></div>
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 bg-[#d4af37] rotate-45"></div>
            </div>
          </div>

          {/* TOP SECTION: Logos & Title Header */}
          <div className="relative z-10 w-full flex justify-between items-center px-4 pt-2">
            {/* RCSB Logo image from public folder */}
            <div className="w-48 h-14 flex items-center justify-start">
              <img src="/RCSB-Logo.png" alt="RCSB Logo" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Shield Logo & Title */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 mb-1 drop-shadow-sm">
                <YodhaLogoSVG className="w-full h-full" />
              </div>
              <h1 className="text-lg font-bold tracking-[0.2em] text-[#1b3a24] font-serif uppercase">
                PROJECT YODHA
              </h1>
              
              {/* Elegant Double Line Divider under Header */}
              <div className="flex flex-col items-center mt-1 w-64">
                <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                <div className="h-[0.5px] w-2/3 bg-gradient-to-r from-transparent via-[#1b3a24] to-transparent mt-[1.5px]" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8b6c1d] font-sans">
                Certificate of Participation
              </p>
            </div>

            {/* RUAS Logo image from public folder */}
            <div className="w-48 h-14 flex items-center justify-end">
              <img src="/RUAS-logo.png" alt="RUAS Logo" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          {/* MIDDLE SECTION: Main Text and Name */}
          <div className="relative z-10 flex flex-col items-center text-center px-12">
            <span className="text-[13px] italic tracking-wide text-zinc-500 font-sans mb-2 block">
              This Certificate is proudly presented to
            </span>
            
            {/* Big Bold Participant Name */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide font-serif text-[#1b3a24] min-h-[60px] flex items-center justify-center w-full px-8 py-1 max-w-[800px] break-words uppercase border-b border-[#d4af37]/30">
              {name || "YOUR FULL NAME"}
            </h2>

            {/* Description Text incorporating exact poster details */}
            <p className="mt-4 text-[13px] leading-relaxed text-zinc-700 font-sans max-w-[820px] tracking-wide">
              For participating in <span className="font-semibold text-[#1b3a24]">Project Yodha</span>, 
              an inspirational interaction with our esteemed Guest Speaker, <span className="font-semibold text-[#1b3a24]">JWO. Dilip Kumar Reddy</span> on the session topic <span className="italic font-semibold text-[#1b3a24]">&ldquo;Kargil Through My Eyes&rdquo;</span>, jointly organized by the <span className="font-semibold text-[#1b3a24]">Rotaract Club of Swarna Bengaluru</span> and the <span className="font-semibold text-[#1b3a24]">Rotaract Club of RUAS</span> in honoring the courage, sacrifice and selfless service of our Armed Forces.
            </p>
          </div>

          {/* BOTTOM SECTION: Date, Signatures & Authority names */}
          <div className="relative z-10 grid grid-cols-3 gap-4 items-end px-6 pb-2">
            {/* Bottom Left: Date & Mottos */}
            <div className="flex flex-col text-left space-y-1">
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">Date</span>
              <span className="text-[13px] font-bold text-[#1b3a24] font-serif">25th July 2026</span>
              <div className="h-[1px] w-24 bg-zinc-300 my-1" />
              <span className="text-[9px] uppercase tracking-widest text-[#8b6c1d] font-bold font-serif">
                Rotaract District 3192
              </span>
            </div>

            {/* Bottom Center: Club Name / Motto */}
            <div className="flex flex-col items-center text-center pb-2">
              <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-zinc-500">
                Jointly Organised By
              </span>
              <span className="text-[10px] uppercase tracking-[0.12em] font-extrabold text-[#1b3a24] mt-0.5">
                RaC Swarna Bengaluru &amp; RaC RUAS
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#8b6c1d] mt-1 italic font-serif">
                &ldquo;Service Above Self&rdquo;
              </span>
            </div>

            {/* Bottom Right: Signatures Area for the two joint Presidents */}
            <div className="grid grid-cols-2 gap-4">
              {/* President 1 - RCSB */}
              <div className="flex flex-col items-center text-center relative">
                {/* Vector signature drawing */}
                <div className="absolute -top-7 h-10 w-20 pointer-events-none opacity-95">
                  <svg viewBox="0 0 100 40" className="w-full h-full text-blue-800">
                    <path
                      d="M10 25 C20 10, 25 5, 35 20 C45 35, 50 10, 60 15 C70 20, 80 10, 90 22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 20 L80 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="h-[1px] w-full bg-zinc-300 mt-4 mb-1" />
                <span className="text-[10px] font-bold text-[#1b3a24] block">Rtr. Vigneshwaran N</span>
                <span className="text-[8px] uppercase tracking-wider text-zinc-400 block font-semibold">President, RaC Swarna Bengaluru</span>
              </div>

              {/* President 2 - RUAS */}
              <div className="flex flex-col items-center text-center relative">
                {/* Vector signature drawing */}
                <div className="absolute -top-7 h-10 w-20 pointer-events-none opacity-95">
                  <svg viewBox="0 0 100 40" className="w-full h-full text-blue-800">
                    <path
                      d="M15 22 C25 25, 30 5, 40 10 C50 15, 45 30, 55 20 C65 10, 75 25, 85 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 22 L70 23"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="h-[1px] w-full bg-zinc-300 mt-4 mb-1" />
                <span className="text-[10px] font-bold text-[#1b3a24] block leading-tight">Rtr. Harrshitha Vibha</span>
                <span className="text-[8px] uppercase tracking-wider text-zinc-400 block font-semibold">President, RaC RUAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = 'CertificateTemplate';
export default CertificateTemplate;
