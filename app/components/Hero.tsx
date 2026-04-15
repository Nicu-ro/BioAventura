"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Microscope } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-black text-white group">
      
      {/* --- FLASHLIGHT LAYER (ROLLBACK VERSION) --- */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y - 80}px, 
            rgba(16, 185, 129, 0.4) 0%, 
            rgba(16, 185, 129, 0.1) 25%, 
            rgba(0, 0, 0, 0) 60%)`,
        }}
      />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 pb-14">
        <div className="text-center max-w-7xl">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 pointer-events-none drop-shadow-[0_10px_10px_rgba(0,0,0,1)] uppercase">
            EXPLORĂM <span className="text-emerald-400">FRUMUSEȚILE LUMII</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white font-medium mb-12 leading-relaxed pointer-events-none drop-shadow-md">
            Locul unde curiozitatea întâlnește cunoașterea. Descoperă secretele vieții, de la celule microscopice la ecosisteme complexe.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/materiale" 
              className="px-10 py-4 bg-emerald-600 rounded-xl font-bold transition-all flex items-center gap-2 group/btn hover:bg-emerald-500 hover:shadow-[0_0_50px_rgba(16, 185, 129, 0.7)] hover:-translate-y-0.5"
            >
              Vezi Materiale
              <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/curiozitati" 
              className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/30 rounded-xl font-bold transition-all flex items-center gap-2 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
            >
              <Microscope className="h-5 w-5 text-emerald-400" />
              Curiozități 
            </Link>
          </div>
        </div>
      </div>

      {/* --- THE WHITE BOTTOM BAR --- */}
      <div className="absolute bottom-0 inset-x-0 h-14 bg-white flex items-center justify-center z-50">
        <div className="flex items-center gap-3 font-black tracking-[0.5em] uppercase text-[12px]">
          <span className="text-black">© BioAventura</span>
          <span className="text-emerald-600">2026</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;