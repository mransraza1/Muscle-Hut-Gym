import React, { useState } from 'react';
import { WORKOUT_PROGRAMS } from '../data/gymData';
import { WorkoutProgram } from '../types';
import { 
  Dumbbell, 
  Flame, 
  Music, 
  UserCheck, 
  Clock, 
  Activity, 
  ArrowRight, 
  Sparkles,
  X,
  CheckCircle2
} from 'lucide-react';

interface WorkoutProgramsProps {
  onOpenTrialModal: () => void;
}

export const WorkoutPrograms: React.FC<WorkoutProgramsProps> = ({ onOpenTrialModal }) => {
  const [selectedProgram, setSelectedProgram] = useState<WorkoutProgram | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return Dumbbell;
      case 'Flame': return Flame;
      case 'Music': return Music;
      case 'UserCheck': return UserCheck;
      default: return Dumbbell;
    }
  };

  return (
    <section id="programs" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              Specialized Training Disciplines
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            TARGETED <span className="italic font-serif text-amber-400 font-normal">WORKOUT</span> PROGRAMS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            From heavy powerlifting and lean muscle hypertrophy to energetic Zumba dance batches and tailored 1-on-1 coaching.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKOUT_PROGRAMS.map((prog) => {
            const Icon = getIcon(prog.icon);
            return (
              <div
                key={prog.id}
                className="bg-[#111111] border border-white/5 hover:border-amber-500/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl group"
              >
                {/* Image Header with Badge */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                    {prog.intensity} Intensity
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="p-2 bg-amber-500 text-black rounded-sm shadow-lg">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-wider">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mt-1">
                      {prog.tagline}
                    </p>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed line-clamp-3">
                      {prog.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5 text-xs">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        Duration:
                      </span>
                      <span className="font-semibold text-white">{prog.duration}</span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        Est. Calorie Burn:
                      </span>
                      <span className="font-semibold text-amber-400">{prog.caloriesBurn}</span>
                    </div>

                    <button
                      onClick={() => setSelectedProgram(prog)}
                      className="w-full py-2.5 bg-[#181818] hover:bg-amber-500 hover:text-black text-neutral-200 rounded-sm font-bold text-xs uppercase tracking-wider border border-white/5 hover:border-amber-400/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Training Split</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-sm border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TRAINING CURRICULUM</span>
              </div>

              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                {selectedProgram.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="p-4 bg-black/60 rounded-xl border border-white/5 space-y-2.5 text-xs">
                <div className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                  Equipment & Protocols Covered:
                </div>
                {selectedProgram.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-black/40 rounded-xl border border-white/5 text-xs text-neutral-400 space-y-1">
                <span className="font-bold text-white">Recommended For:</span>
                <p>{selectedProgram.suitableFor}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenTrialModal();
                }}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                Book Free Trial Session for this Program
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
