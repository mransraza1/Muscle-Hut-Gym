import React from 'react';
import { TRAINERS_DATA, GYM_INFO } from '../data/gymData';
import { Award, Users, ShieldCheck, Dumbbell, Sparkles, MessageCircle } from 'lucide-react';

interface TrainersSectionProps {
  onOpenTrialModal: () => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="trainers" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              Elite Coaching Roster
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            TRAIN UNDER <span className="italic font-serif text-amber-400 font-normal">MASTER COACHES</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            No self-proclaimed gurus. Our coaching staff holds international IFBB, ACE, and ISSA credentials with proven track records of safe transformations.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((tr) => (
            <div
              key={tr.id}
              className="bg-[#111111] border border-white/5 hover:border-amber-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl group"
            >
              {/* Photo & Badges */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={tr.image}
                  alt={tr.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-amber-400/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{tr.experience}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                    {tr.role}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">
                    {tr.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="p-6 space-y-4 text-left">
                <div className="p-3 bg-black/50 rounded-sm border border-white/5 text-xs text-neutral-300">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                    Accreditation:
                  </span>
                  <span className="font-semibold text-amber-400">{tr.certification}</span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {tr.bio}
                </p>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tr.specialty.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-neutral-200 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    {tr.clientsTrained}+ Clients Trained
                  </span>

                  <a
                    href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym,%20I%20want%20to%20inquire%20about%20personal%20training%20with%20${encodeURIComponent(tr.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire 1-on-1</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
