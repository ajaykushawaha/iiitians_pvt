import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles, MessageSquare, Code, Cpu, Cloud, Smartphone } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white overflow-hidden py-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>IT SERVICES & SOLUTIONS</span>
            </div>

            {/* Main Headline matching poster */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">TECHNOLOGY</span> THAT POWERS YOUR BUSINESS
            </h1>

            {/* Sub-tagline */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-slate-300 text-sm sm:text-base font-medium">
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-emerald-400" /> Innovative</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-400" /> Reliable</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Scalable</span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              At <strong className="text-white">iitians Pvt Ltd</strong>, we turn complex business challenges into streamlined digital powerhouses. From custom web and mobile apps to robust cloud migration and enterprise software, we deliver excellence.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 text-base group cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919044495957?text=Hi%20iitians%20Pvt%20Ltd,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-3 text-base shadow-sm"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Chat on WhatsApp (+91 9044495957)</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Code className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium">Custom Web & App</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Cloud className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium">Cloud & AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium">Enterprise Software</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-300 font-medium">iOS & Android</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Professional Visual Card representing the flyer image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Illustration Card */}
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
                
                {/* Badge top right like poster */}
                <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TECHNOLOGY SOLUTIONS THAT DRIVE SUCCESS</span>
                </div>

                {/* Developer / Tech graphic mock */}
                <div className="mt-8 mb-6 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 p-6 border border-slate-700/60 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">iitians-core-v2.ts</span>
                  </div>

                  <div className="space-y-2 font-mono text-xs text-slate-300">
                    <p className="text-emerald-400">&gt; initializing enterprise architecture...</p>
                    <p className="text-blue-300">&gt; deploying cloud-native microservices on AWS & Azure</p>
                    <p className="text-purple-300">&gt; optimizing database performance (SQL Server / MySQL)</p>
                    <p className="text-emerald-300 font-semibold">&gt; status: 100% secure & scalable [SUCCESS]</p>
                  </div>
                </div>

                {/* Bottom Quote inside card */}
                <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">YOUR VISION. OUR TECHNOLOGY.</h4>
                    <p className="text-xs text-emerald-300 font-medium mt-0.5">Success Together.</p>
                  </div>
                  <button
                    onClick={() => onOpenConsultation('General Inquiry')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow transition-colors"
                  >
                    Connect Now
                  </button>
                </div>

              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-500/40 rounded-xl flex items-center justify-center text-emerald-400 font-bold text-lg">
                  250+
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Projects Delivered</p>
                  <p className="text-sm font-bold text-emerald-400">Global Standards</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

