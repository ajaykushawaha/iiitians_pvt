import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface WhatsAppBannerProps {
  onOpenConsultation: () => void;
}

export const WhatsAppBanner: React.FC<WhatsAppBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-emerald-900/30 backdrop-blur-md border border-emerald-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Headline & Number */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>LET'S BUILD SOMETHING GREAT TOGETHER</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Chat with us on WhatsApp
            </h3>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://wa.me/919044495957?text=Hi%20iitians%20Pvt%20Ltd,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight hover:underline flex items-center gap-3 bg-emerald-950/50 px-6 py-3 rounded-2xl border border-emerald-400/50 shadow-inner"
              >
                <MessageSquare className="w-10 h-10 text-emerald-300 animate-pulse" />
                <span>9044495957</span>
              </a>
            </div>

            <p className="text-emerald-100 text-sm font-medium">
              Immediate response from our senior technical consultants & developers.
            </p>
          </div>

          {/* Right: Vision & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider text-emerald-200 font-bold">YOUR VISION.</p>
              <p className="text-xs uppercase tracking-wider text-emerald-200 font-bold">OUR TECHNOLOGY.</p>
              <p className="text-lg font-black text-white mt-1">SUCCESS TOGETHER.</p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-emerald-50 font-extrabold px-8 py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group text-base cursor-pointer"
            >
              <span>Request Callback</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
