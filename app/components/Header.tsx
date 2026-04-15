'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Curiozitati', href: '#facts' },
    { name: 'Materiale', href: '#materials' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-emerald-50 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-600 p-1.5 rounded-lg transition-transform group-hover:scale-105">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Bio<span className="text-emerald-600">Aventura</span>
            </span>
          </Link>

          {/* Menu Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 py-2 px-4 text-slate-600 hover:bg-emerald-50 rounded-full transition-all border border-slate-100"
          >
            <span className="font-bold text-xs uppercase tracking-[0.2em] hidden sm:block">Meniu</span>
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-500 overflow-hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Slimmed Navigation Panel */}
        <div 
          className={`fixed top-0 right-0 w-full sm:w-[350px] h-full bg-white shadow-xl p-10 transform transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button Only */}
          <div className="flex justify-end mb-12">
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          {/* Scaled Down Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-slate-700 hover:text-emerald-600 transition-all flex items-center justify-between group"
              >
                {link.name}
                <ChevronRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-400" />
              </Link>
            ))}
          </div>

          {/* School Credit Footer */}
          <div className="absolute bottom-10 left-10 right-10">
            <div className="h-px bg-slate-100 mb-6" />
            
            <p className="text-slate-800 font-bold text-sm leading-tight uppercase">
              Liceul "Traian Vuia" Craiova"
            </p>
          </div>
        </div>
      </div>
      
      {/* Page Content Offset */}
      <div className="h-20" />
    </>
  );
};

export default Header;