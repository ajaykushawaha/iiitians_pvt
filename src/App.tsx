import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { StatsBar } from './components/StatsBar';
import { FaqSection } from './components/FaqSection';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CustomCursor } from './components/CustomCursor';
import { ServiceItem } from './types';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [consultationService, setConsultationService] = useState<string>('');

  const handleOpenConsultation = (serviceName?: string) => {
    setConsultationService(serviceName || '');
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white relative">
      
      {/* Custom Ring Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenConsultation={handleOpenConsultation} />
        <StatsBar />
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={handleOpenConsultation}
        />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <FaqSection onOpenConsultation={() => handleOpenConsultation('General Inquiry')} />
        <WhatsAppBanner onOpenConsultation={() => handleOpenConsultation('General Inquiry')} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation('General Inquiry')} />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919044495957?text=Hi%20iitians%20Pvt%20Ltd,%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all hover:scale-110 group relative border-2 border-emerald-400"
          title="Chat with us on WhatsApp 9044495957"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat: 9044495957
          </span>
        </a>
      </div>

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={consultationService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={handleOpenConsultation}
      />

    </div>
  );
}
