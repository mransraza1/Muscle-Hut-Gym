import React, { useState } from 'react';
import { FACILITY_ZONES, GYM_IMAGES } from '../data/gymData';
import { 
  Dumbbell, 
  Sparkles, 
  Check, 
  Eye, 
  Layers, 
  ShieldCheck, 
  Wind, 
  Flame, 
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const AMENITIES_LIST = [
  { title: 'Heavy Iron up to 60kg', desc: 'Imported rubberized dumbbells & Olympic barbells', icon: Dumbbell },
  { title: 'Central High-Flow AC', desc: 'Chilled environment throughout intense summer sessions', icon: Wind },
  { title: 'Biomechanical Machines', desc: 'Targeted muscle isolation with zero joint strain', icon: Layers },
  { title: 'Weekend Steam Bath', desc: 'Accelerate muscular recovery & detoxification', icon: Flame },
  { title: 'Hygienic Locker Rooms', desc: 'Private lockable lockers and clean washrooms', icon: ShieldCheck },
  { title: 'RO Purified Water Station', desc: 'Chilled pure hydration always available', icon: Sparkles },
];

export const FacilityShowcase: React.FC = () => {
  const [activeZone, setActiveZone] = useState(FACILITY_ZONES[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="facility" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              World-Class Infrastructure
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            LIVE FACILITY & <span className="italic font-serif text-amber-400 font-normal">EQUIPMENT</span> TOUR
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Take a virtual walk inside Agra's most comprehensively equipped gym. Designed for optimal biomechanics and maximum athletic output.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {FACILITY_ZONES.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeZone.id === zone.id
                  ? 'bg-amber-500/10 border-amber-500/60 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
                  : 'bg-[#111111] border-white/5 hover:border-white/20 text-neutral-400'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 ${
                activeZone.id === zone.id ? 'text-amber-400' : 'text-neutral-500'
              }`}>
                {zone.equipmentCount}
              </span>
              <h3 className={`text-sm font-bold uppercase tracking-wider truncate ${
                activeZone.id === zone.id ? 'text-white' : 'text-neutral-300'
              }`}>
                {zone.name}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Zone Spotlight Card */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Preview with Lightbox Trigger */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10 group shadow-2xl">
              <img
                src={activeZone.image}
                alt={activeZone.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-black/70 px-3 py-1.5 rounded-sm backdrop-blur-md border border-white/10">
                  {activeZone.name}
                </span>
                <button
                  onClick={() => setLightboxImage(activeZone.image)}
                  className="p-2 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-md backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                  title="View Full High-Res Image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Zone Details */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Featured Workout Section
                </span>
                <h3 className="text-2xl sm:text-3xl font-display text-white tracking-wide mt-1">
                  {activeZone.name}
                </h3>
                <p className="text-xs text-amber-200/80 font-medium">
                  {activeZone.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {activeZone.description}
              </p>

              {/* Tag Pills */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Equipment Available:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeZone.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-200 bg-white/5 border border-white/10 px-3 py-1 rounded-sm"
                    >
                      <Check className="w-3 h-3 text-amber-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Premium Amenities Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-white tracking-wider">
              EXCLUSIVE <span className="italic font-serif text-amber-400 font-normal">GYM</span> AMENITIES
            </h3>
            <p className="text-xs text-neutral-400 font-light">
              Everything you need for a comfortable, uninterrupted workout session.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AMENITIES_LIST.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-[#111111] border border-white/5 hover:border-amber-500/30 rounded-xl flex items-start gap-4 transition-all"
                >
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-sm text-amber-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Transformation Visualizer (Before & After Slider) */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Proven Results in 90 Days
            </span>
            <h3 className="text-2xl sm:text-3xl font-display text-white tracking-wide">
              MEMBER TRANSFORMATION <span className="italic font-serif text-amber-400 font-normal">SPOTLIGHT</span>
            </h3>
            <p className="text-xs text-neutral-400 font-light">
              Slide to see the dramatic body recomposition achieved with our training split & Indian diet plan.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-amber-500/30 select-none shadow-2xl">
              {/* After Image (Full background) */}
              <img
                src={GYM_IMAGES.heroModel}
                alt="After Transformation"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 z-10 bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-sm shadow-lg">
                AFTER (Month 4)
              </div>

              {/* Before Image (Clipped by slider) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop"
                  alt="Before Transformation"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale"
                  style={{ width: '100%', maxWidth: 'none' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-10 bg-black/80 text-neutral-300 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-sm border border-white/20">
                  BEFORE (Day 1)
                </div>
              </div>

              {/* Divider line & handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-amber-400 cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-xl font-bold">
                  <div className="flex items-center gap-0.5">
                    <ChevronLeft className="w-3 h-3" />
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Invisible Range Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
              />
            </div>

            <div className="flex justify-between items-center text-xs text-neutral-400 mt-3 px-2">
              <span className="text-[11px] uppercase tracking-wider">Day 1 (Baseline Assessment)</span>
              <span className="text-amber-400 font-semibold text-[11px] uppercase tracking-wider">Slide to compare</span>
              <span className="text-[11px] uppercase tracking-wider">Day 90 (Lean Muscle & Strength)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="High-Res Gym Facility"
            className="max-w-full max-h-[85vh] rounded-xl object-contain border border-white/10 shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
};
