import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    category: 'Development Process',
    question: 'What is the typical turnaround time for web or mobile app development?',
    answer: 'Project timelines depend on scope and complexity. Standard custom web applications take 4 to 8 weeks, while enterprise software or cross-platform mobile apps range from 8 to 16 weeks. We follow strict agile milestone planning to guarantee on-time delivery.'
  },
  {
    category: 'Quality & Security',
    question: 'How do you ensure the security and quality of software solutions?',
    answer: 'We adhere to stringent security protocols including role-based access control (RBAC), data encryption, automated unit testing, and rigorous peer code reviews before any deployment. Every solution undergoes multiple quality assurance checkpoints.'
  },
  {
    category: 'Technologies',
    question: 'What technologies does iitians Pvt Ltd specialize in?',
    answer: 'We specialize in a robust tech stack including .NET, ASP.NET Core, React, Angular, SQL Server, MySQL, AWS, and Azure cloud infrastructure, enabling us to build scalable, high-performance applications.'
  },
  {
    category: 'Support',
    question: 'Do you provide ongoing maintenance and 24/7 support after launch?',
    answer: 'Yes! We offer 24/7 dedicated monitoring, maintenance, performance tuning, and technical support to ensure your digital products run smoothly and securely around the clock.'
  },
  {
    category: 'Getting Started',
    question: 'How can we get started or request a project consultation?',
    answer: 'Getting started is simple. You can fill out our consultation form on the website, or connect instantly with our senior technical consultants via WhatsApp at +91 9044495957 for a rapid project evaluation.'
  }
];

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Explore common client inquiries about our development process, security standards, and IT services.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white border rounded-2xl transition-all duration-300 shadow-sm overflow-hidden ${
                  isOpen ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/10' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="text-xs font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-emerald-600 text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-emerald-950 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-extrabold tracking-tight">Have a specific question or custom requirement?</h4>
            <p className="text-slate-300 text-sm">Talk directly with our technical experts on WhatsApp or request a custom quote.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919044495957?text=Hi%20iitians%20Pvt%20Ltd,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all border border-slate-700 cursor-pointer"
            >
              Get Quote
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
