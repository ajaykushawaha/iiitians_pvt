import React from 'react';
import { X, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenConsultation }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-xs font-extrabold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              iitians Pvt Ltd - Service Overview
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              {service.title}
            </h3>
            <p className="text-slate-600 text-base mt-2 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide">Key Capabilities</h4>
              <ul className="space-y-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200 space-y-3">
              <h4 className="font-bold text-sm text-emerald-900 uppercase tracking-wide">Key Deliverables</h4>
              <ul className="space-y-2">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-medium text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(service.title);
              }}
              className="w-full sm:w-auto flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <span>Get Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919044495957"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
