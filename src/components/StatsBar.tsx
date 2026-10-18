import React from 'react';
import { STATS_DATA } from '../data/companyData';
import { Users, CheckCircle, Star, Globe } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-8 h-8 text-emerald-400" />;
      case 'CheckCircle': return <CheckCircle className="w-8 h-8 text-emerald-400" />;
      case 'Star': return <Star className="w-8 h-8 text-emerald-400" />;
      case 'Globe': return <Globe className="w-8 h-8 text-emerald-400" />;
      default: return <Users className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <section id="stats" className="bg-slate-900 py-16 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center shadow-lg hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon)}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-emerald-400 mb-1">
                {stat.number}
              </div>
              <div className="text-slate-300 text-sm font-semibold tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
