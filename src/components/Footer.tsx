import React from 'react';
import { Mail, Globe, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Logo size="md" />

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Engineering cutting-edge web development, mobile apps, software solutions, and cloud migration for businesses worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919044495957"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                title="WhatsApp 9044495957"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@iitianspvtltd.com"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                title="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">IT Services & Solutions</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#technologies" className="hover:text-emerald-400 transition-colors">Technologies We Work With</a></li>
              <li><a href="#stats" className="hover:text-emerald-400 transition-colors">Company Excellence & Stats</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Core Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>Custom Web Development</li>
              <li>Mobile App Development (iOS & Android)</li>
              <li>Enterprise Software Solutions</li>
              <li>Cloud Solutions (AWS & Azure)</li>
              <li>Digital Marketing & SEO</li>
              <li>Strategic IT Consulting</li>
            </ul>
          </div>

          {/* Column 4: Contact info matching flyer */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact & Office</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://www.iitianspvtltd.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  www.iitianspvtltd.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@iitianspvtltd.com" className="hover:text-emerald-400 transition-colors">
                  info@iitianspvtltd.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/919044495957" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-bold text-emerald-400">
                  +91 9044495957
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} iitians Pvt Ltd. All rights reserved. Smart Solutions. Stronger Business.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
