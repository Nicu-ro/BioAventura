'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, RefreshCw } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Toate' },
  { id: 'dna', label: 'ADN' },
  { id: 'human-body', label: 'Corp Uman' },
  { id: 'animals', label: 'Animale' },
  { id: 'cells', label: 'Celule' },
  { id: 'evolution', label: 'Evoluție' },
  { id: 'plants', label: 'Plante' },
];

export default function CuriozitatiPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateFact = async () => {
    setLoading(true);
    setFact(null);

    const categoryLabel = categories.find(c => c.id === selectedCategory)?.label;

    const response = await fetch('/api/curiozitati', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: selectedCategory, categoryLabel })
    });

    const data = await response.json();
    setFact(data.fact);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-20 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl w-full flex justify-between items-center mb-16">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" /> Înapoi
        </Link>
        <h1 className="text-3xl font-black tracking-tighter uppercase">
          Curio<span className="text-emerald-400">zități</span>
        </h1>
        <div className="w-20" />
      </div>

      {/* Category Filter */}
      <div className="max-w-4xl w-full mb-12">
        <p className="text-slate-400 text-sm uppercase tracking-widest mb-4 text-center">Alege categoria</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fact Card */}
      <div className="max-w-4xl w-full">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 min-h-[260px] flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07)_0%,transparent_70%)]" />

          {!fact && !loading && (
            <div className="flex flex-col items-center gap-4 text-slate-500">
              <Sparkles className="w-10 h-10 text-emerald-400/40" />
              <p className="text-lg">Apasă butonul pentru a genera o curiozitate</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-4">
              <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" />
              <p className="text-slate-400">Se generează curiozitatea...</p>
            </div>
          )}

          {fact && !loading && (
            <p className="text-xl md:text-2xl leading-relaxed text-white font-medium relative z-10">
              {fact}
            </p>
          )}
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={generateFact}
            disabled={loading}
            className="flex items-center gap-3 px-10 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:-translate-y-0.5"
          >
            <Sparkles className="w-5 h-5" />
            {fact ? 'Altă Curiozitate' : 'Generează Curiozitate'}
          </button>
        </div>
      </div>
    </main>
  );
}