import React, { useState } from 'react';
import { FAQ_ITEMS, GYM_INFO } from '../data/gymData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              Commonly Asked Questions
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide">
            FREQUENTLY ASKED <span className="italic font-serif text-amber-400 font-normal">QUESTIONS</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Everything you need to know before stepping into Muscle Hut Gym Agra.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#111111] border border-white/5 hover:border-amber-500/30 rounded-xl overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold uppercase tracking-wider text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 bg-[#111111] border border-white/5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Still have questions about equipment or plans?</h4>
            <p className="text-xs text-neutral-400 font-light">Our desk team in Sikandra is ready to help you on WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym%20Agra,%20I%20have%20a%20question%20about%20your%20facility`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Desk Staff</span>
          </a>
        </div>

      </div>
    </section>
  );
};
