"use client";
import React, { use } from 'react'; // Added use
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PresentationPage({ params }: { params: Promise<{ id: string }> }) {
  // This line unwraps the promise to fix the error in your screenshot
  const { id } = use(params); 

  const presentations: Record<string, string> = {
    'boli-ale-sistemului-nervos': 'https://www.canva.com/design/DAHGukaTlOc/wmstnaprqFH9mqQr7uDFag/view?embed',
    'sistemul-imunitar': 'https://www.canva.com/design/DAHGq98h0y8/XvnvY1W5WHLvTFB74pHHpQ/view?embed',
    'adn': 'https://www.canva.com/design/DAHGqwynKnQ/vG2Esv-6Vbs8zdXSegU-TA/view?embed',
    'adhd': 'https://www.canva.com/design/DAHGq6pOEE8/OOtZ9rU3BFbSlRvHL9psLA/view?embed',
    'poluarea': 'https://www.canva.com/design/DAHGqzLY6SM/r4UcureDyYlN8VhlcMyehA/view?embed',
  };

  const currentPresentation = presentations[id];

  return (
    <main className="h-screen w-full bg-black flex flex-col overflow-hidden text-white">
      <nav className="h-20 flex items-center justify-between px-8 bg-black z-50">
        <div className="flex items-center gap-6">
          <Link href="/materiale" className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Capitole</span>
          </Link>
          <div className="h-8 w-[1px] bg-white/10" />
          <h1 className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase text-emerald-400">
            {id.replaceAll('-', ' ')}
          </h1>
        </div>
        <div>
          <p className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-slate-200">
            <span className="text-emerald-400">Liceul</span> Traian Vuia Craiova
          </p>
        </div>
      </nav>

      <div className="flex-grow relative w-full bg-black">
        <iframe
          src={currentPresentation}
          className="absolute inset-0 w-full h-full border-none"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}