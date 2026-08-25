import React, { useState } from 'react';
import { CLASS_SCHEDULE } from '../data/gymData';
import { Clock, Calendar, Users, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ClassScheduleTableProps {
  onOpenTrialModal: () => void;
}

export const ClassScheduleTable: React.FC<ClassScheduleTableProps> = ({ onOpenTrialModal }) => {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Strength', 'Zumba', 'Yoga', 'Cardio'];

  const filteredSchedule = selectedCat === 'All'
    ? CLASS_SCHEDULE
    : CLASS_SCHEDULE.filter((c) => c.category === selectedCat);

  return (
    <section id="schedule" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              Weekly Timetable & Batches
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            CLASS & TRAINING <span className="italic font-serif text-amber-400 font-normal">SCHEDULE</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Morning & evening slots structured to accommodate students, busy professionals, and dedicated lifters.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-amber-500 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                  : 'bg-[#111111] hover:bg-[#1a1a1a] text-neutral-300 border border-white/5 hover:text-white'
              }`}
            >
              {cat} Classes
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className="bg-[#111111] hover:bg-[#161616] border border-white/5 hover:border-amber-500/40 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-lg group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-sm border border-amber-400/30 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-light">{item.day}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  {item.className}
                </h4>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400 font-light">
                  <span className="flex items-center gap-1 text-amber-400 font-normal">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </span>
                  <span>•</span>
                  <span>Coach: {item.trainer}</span>
                  <span>•</span>
                  <span>Room: {item.room}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-0 border-white/5">
                <span className="text-xs text-neutral-400 font-light">
                  <strong className="text-amber-400 font-normal">{item.spotsLeft} spots</strong> open today
                </span>

                <button
                  onClick={onOpenTrialModal}
                  className="px-4 py-2 bg-[#1c1c1c] hover:bg-amber-500 hover:text-black text-white font-bold text-xs uppercase tracking-wider rounded-sm border border-white/10 hover:border-transparent transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Reserve Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
