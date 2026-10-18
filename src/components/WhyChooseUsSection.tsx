import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { Award, ShieldCheck, Clock, TrendingUp, Headphones, CheckCircle } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-emerald-600" />;
      default: return <CheckCircle className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
              EXCELLENCE & RELIABILITY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              WHY CHOOSE <span className="text-emerald-400">iitians?</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We combine elite technical craftsmanship with deep industry acumen. When you partner with iitians Pvt Ltd, you gain a dedicated technology department committed to your long-term success.
            </p>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl shadow-xl space-y-3">
              <h4 className="font-bold text-lg text-white">Our Core Commitment</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Your Vision. Our Technology. Success Together." We treat your products as our own, ensuring absolute transparency, top-grade security, and on-time milestones.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div className="text-emerald-400 font-extrabold text-2xl">100%</div>
                <div className="text-xs text-slate-400">Client Satisfaction & Dedicated Post-Launch Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 5 Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/90 border border-slate-700/80 p-6 rounded-2xl flex items-start gap-5 hover:border-emerald-500/50 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <span className="group-hover:brightness-200 group-hover:invert transition-all">
                    {getIcon(item.icon)}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-emerald-300 text-xs font-semibold">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

