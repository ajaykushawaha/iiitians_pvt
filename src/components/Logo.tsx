import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }[size];

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Circular Logo Graphic */}
      <div className={`relative ${dimensions} rounded-full border-2 border-slate-900 bg-white flex items-center justify-center shadow-md overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform`}>
        {/* Outer Circular Ring (Top Blue, Bottom Green split) */}
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-900 border-r-blue-900 border-b-emerald-500 border-l-emerald-500" />
        
        {/* Inner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-1">
          {/* Pixel blocks top left */}
          <div className="absolute top-1 left-1.5 flex gap-0.5">
            <div className="w-1 h-1 bg-emerald-500 rounded-[0.5px]" />
            <div className="w-1 h-1 bg-blue-900 rounded-[0.5px]" />
          </div>
          <div className="absolute top-2 left-1 flex gap-0.5">
            <div className="w-1 h-1 bg-emerald-500 rounded-[0.5px]" />
            <div className="w-1 h-1 bg-blue-900 rounded-[0.5px]" />
          </div>

          {/* iT text */}
          <div className="flex items-end font-black tracking-tighter text-blue-900 leading-none">
            <div className="relative">
              <span className="absolute -top-2 left-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xl font-extrabold">i</span>
            </div>
            <span className="text-2xl font-black">T</span>
          </div>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-black text-xl lg:text-2xl tracking-tight text-white drop-shadow-sm font-sans">
            Iliitians
          </span>
          <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-400 font-extrabold px-1.5 py-0.5 rounded border border-emerald-500/40 uppercase tracking-wider">
            PVT LTD
          </span>
        </div>
        <p className="text-[11px] text-slate-300 tracking-wide font-semibold">
          Smart Solutions. Stronger Business.
        </p>
      </div>
    </div>
  );
};
