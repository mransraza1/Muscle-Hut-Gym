import React from 'react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';
import { ThreeDLogoShowcase } from './ThreeDLogoShowcase';
import { 
  Flame, 
  MapPin, 
  Star, 
  Navigation, 
  ShieldCheck, 
  Users, 
  Dumbbell, 
  Award, 
  ArrowRight,
  PlayCircle,
  Clock,
  Sparkles,
  Phone
} from 'lucide-react';

interface HeroProps {
  onOpenTrialModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal, onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-8 pb-16">
      {/* Cinematic Ambient Background Lights & Glowing Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-64 h-64 border-8 border-amber-500 rounded-full blur-3xl opacity-10 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/10 blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Top Verified Eyebrow with Line */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-12 bg-amber-500" />
                <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
                  Premier Strength & Conditioning Sanctuary
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-neutral-400 text-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
                <span className="text-white font-medium">Agra, Uttar Pradesh</span>
                <span className="text-white/20">•</span>
                <span className="text-amber-400 flex items-center gap-1 font-semibold">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  4.7 Google Rating (174+ Reviews)
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
                SCULPT YOUR <span className="italic font-serif text-amber-400 font-normal">LEGACY.</span>
                <br />
                UNLEASH <span className="gold-gradient-text">PEAK POWER.</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed">
                Step inside <strong className="text-amber-400 font-semibold">Muscle Hut Gym</strong> — Agra's most advanced strength and conditioning sanctuary. Engineered with imported biomechanical equipment, Olympic power racks, high-energy HIIT studios, and certified master trainers.
              </p>
            </div>

            {/* Location & Real-Time Open Status */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm bg-[#111111]/80 border border-white/5 rounded-xl p-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Near Kargil Petrol Pump, Sikandra-Bodla Road, Agra</span>
              </div>
              <div className="hidden sm:inline-block w-px h-4 bg-neutral-800" />
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Open: 5:00 AM – 10:00 PM</span>
              </div>
            </div>

            {/* High-Converting CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenTrialModal}
                id="hero-free-trial-cta"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all cursor-pointer"
              >
                <Flame className="w-4 h-4 fill-black" />
                <span>Claim Free 1-Day Trial Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={GYM_INFO.googleMapsDirUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-google-map-direction-btn"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 hover:border-amber-500/40 text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4 text-amber-500" />
                <span>Get Google Map Direction</span>
              </a>

              <button
                onClick={() => onNavigate('facility')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors text-xs uppercase tracking-widest font-semibold"
              >
                <PlayCircle className="w-4 h-4 text-neutral-500" />
                <span>Virtual Tour</span>
              </button>
            </div>

            {/* Quick Proof Pills */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Certified Trainers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-amber-500" />
                <span>60kg+ Heavy Dumbbells</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-neutral-300" />
                <span>Special Ladies Batches</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Logo Showcase & High-Res Model Imagery */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <ThreeDLogoShowcase />

            {/* Secondary Floating Athlete Preview Card */}
            <div className="mt-4 w-full max-w-[420px] bg-[#111111]/90 border border-white/10 rounded-xl p-3 backdrop-blur-md flex items-center gap-3 shadow-2xl">
              <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-amber-500/30">
                <img
                  src={GYM_IMAGES.heroModel}
                  alt="Muscle Hut Gym Athlete Training"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-white truncate uppercase tracking-wider">Pro Body Transformation</span>
                  <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                    LIVE
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 truncate">
                  Personalized Indian Diet & progressive overload training
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex -space-x-1.5">
                    <img className="w-4 h-4 rounded-full border border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Member" referrerPolicy="no-referrer" />
                    <img className="w-4 h-4 rounded-full border border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Member" referrerPolicy="no-referrer" />
                    <img className="w-4 h-4 rounded-full border border-black" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" alt="Member" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Join 1,500+ Agra fitness achievers</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* High-Impact Stat Counter Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#111111]/90 border border-white/5 rounded-xl backdrop-blur-xl shadow-2xl">
          {GYM_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start p-3 border-r last:border-none border-white/5">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-amber-500 tracking-wider">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mt-1">
                {stat.label}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 opacity-60">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
