import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';
import { Code, Smartphone, Laptop, Cloud, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenConsultation }) => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-emerald-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-emerald-600" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-600" />;
      default: return <Code className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
            IT SERVICES & SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR SERVICES
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Innovative, Reliable, and Scalable technology solutions engineered to drive your business success.
          </p>
        </motion.div>

        {/* Services Grid (6 Cards matching flyer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {/* Icon wrapper */}
                    <span className="group-hover:brightness-200 group-hover:invert transition-all">
                      {getIcon(service.iconName)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Features Bullet List */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors border border-emerald-200 cursor-pointer"
                >
                  Get Quote
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

