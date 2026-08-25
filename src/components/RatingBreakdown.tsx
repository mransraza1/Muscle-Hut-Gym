import React from 'react';
import { RATING_BREAKDOWN, GYM_INFO } from '../data/gymData';
import { Star, ShieldCheck, ThumbsUp, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const RatingBreakdown: React.FC = () => {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Big Overall Score Card */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-black/60 border border-amber-500/30 rounded-xl text-center shadow-inner relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>AGRA'S TOP RATED GYM</span>
          </div>

          <div className="font-display text-7xl font-black text-white tracking-tight flex items-baseline justify-center gap-2">
            <span>{RATING_BREAKDOWN.overall}</span>
            <span className="text-2xl text-neutral-500 font-sans font-normal">/ 5.0</span>
          </div>

          <div className="flex items-center gap-1.5 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-xs text-neutral-300 font-medium mt-1">
            Based on <span className="text-white font-bold">{RATING_BREAKDOWN.totalReviews}+ Verified Reviews</span>
          </p>

          <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-2 text-[11px] text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Google Maps & Justdial Verified</span>
          </div>
        </div>

        {/* Aspect Scores: Equipment, Trainer, Cleanliness, Value */}
        <div className="lg:col-span-5 space-y-3.5">
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Detailed Rating by Category
          </h4>

          {RATING_BREAKDOWN.aspects.map((aspect, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-200">{aspect.label}</span>
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400" />
                  {aspect.rating} / 5.0
                </span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-1000"
                  style={{ width: `${aspect.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Star Rating Breakdown & Google Direct Link */}
        <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4 p-4 bg-black/40 rounded-xl border border-white/5">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">Star Distribution</span>
            {RATING_BREAKDOWN.starDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center gap-2 text-xs text-neutral-300">
                <span className="w-8 flex items-center gap-0.5 text-[11px] font-semibold">
                  {dist.stars} <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                </span>
                <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: `${dist.percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right text-[10px] text-neutral-400">{dist.count}</span>
              </div>
            ))}
          </div>

          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider text-center rounded-sm transition-colors flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Read All Google Reviews</span>
          </a>
        </div>

      </div>
    </div>
  );
};
