import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/80 backdrop-blur-md z-[100] px-8 md:px-20 flex items-center justify-between border-b border-white/5">
      {/* Left side: Brand */}
      <Link href="/" className="text-xl font-black tracking-tighter uppercase text-white">
        MATE<span className="text-emerald-400">RIALE</span>
      </Link>

      {/* Right side: Coordinator Names */}
      <div className="flex flex-col text-right">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-0.5">
          Profesor coordonator:
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
          Neacsu Claudia
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Ion Lenica
        </span>
      </div>
    </nav>
  );
}