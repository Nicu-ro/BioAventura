import Link from 'next/link';
import { Activity, Bone, Dna, ArrowLeft, Cross } from 'lucide-react';

const chapters = [
  {
    id: 'boli-ale-sistemului-nervos',
    title: 'Boli ale sistemului nervos',
    description: 'Cum functioneaza sistemul nervos.',
    icon: <Activity className="w-8 h-8 text-emerald-400" />,
    color: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
  },
  {
    id: 'sistemul-imunitar',
    title: 'Sistemul imunitar',
    description: 'Cum functioneaza sistemul imunitar.',
    icon: <Activity className="w-8 h-8 text-emerald-400" />,
    color: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
  },
  {
    id: 'adhd',
    title: 'ADHD',
    description: 'Informații despre ADHD și impactul său asupra vieții de zi cu zi.',
    icon: <Cross className="w-8 h-8 text-emerald-400" />,
    color: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
  },
  {
    id: 'adn',
    title: 'Adn-ul',
    description: 'Ce este ADN-ul și cum influențează viața noastră.',
    icon: <Dna className="w-8 h-8 text-emerald-400" />,
    color: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
  },
  {
    id: 'poluarea',
    title: 'Poluarea',
    description: 'Impactul poluării asupra sănătății umane.',
    icon: <Activity className="w-8 h-8 text-emerald-400" />,
    color: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
  },
];

export default function MaterialePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-20 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-7xl w-full flex justify-between items-center mb-16">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" /> Înapoi
        </Link>
        <h1 className="text-3xl font-black tracking-tighter uppercase">Mate<span className="text-emerald-400">riale</span></h1>
        <div className="w-20"></div> 
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full pb-20">
        {chapters.map((chapter) => (
          <Link 
            key={chapter.id} 
            href={`/materiale/${chapter.id}`}
            className={`group bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${chapter.color} hover:bg-white/10`}
          >
            <div className="mb-6">{chapter.icon}</div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{chapter.title}</h2>
            <p className="text-slate-400 leading-relaxed">
              {chapter.description}
            </p>
            <div className="mt-8 flex items-center text-sm font-bold text-emerald-500 uppercase tracking-widest">
              Deschide Lecția 
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}