import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TECHNOLOGIES_DATA } from '../data/companyData';
import { Code2, Server, Layers, Database, Cloud, CloudRain, Atom, Check } from 'lucide-react';

export const TechnologiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'Cloud'];

  const filteredTech = activeCategory === 'All'
    ? TECHNOLOGIES_DATA
    : TECHNOLOGIES_DATA.filter(t => t.category === activeCategory);

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-8 h-8 text-emerald-600" />;
      case 'Server': return <Server className="w-8 h-8 text-emerald-600" />;
      case 'Layers': return <Layers className="w-8 h-8 text-emerald-600" />;
      case 'Database': return <Database className="w-8 h-8 text-emerald-600" />;
      case 'Cloud': return <Cloud className="w-8 h-8 text-emerald-600" />;
      case 'CloudRain': return <CloudRain className="w-8 h-8 text-emerald-600" />;
      case 'Atom': return <Atom className="w-8 h-8 text-emerald-600" />;
      default: return <Code2 className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section id="technologies" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
            TECH STACK & EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            TECHNOLOGIES WE WORK WITH
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            We leverage industry-leading frameworks, databases, and cloud platforms to build robust, future-ready applications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50 border border-slate-200 hover:border-emerald-500/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getTechIcon(tech.icon)}
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {tech.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Production Ready & Certified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

