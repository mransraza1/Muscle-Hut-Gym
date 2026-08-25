import React from 'react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Navigation, 
  MessageCircle, 
  Download, 
  Instagram, 
  Facebook, 
  Youtube,
  ShieldCheck,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenTrialModal: () => void;
  onOpenExporterModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTrialModal,
  onOpenExporterModal,
  onNavigate,
}) => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 text-neutral-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden p-0.5 border border-amber-500/50 bg-black">
                <img
                  src={GYM_IMAGES.logo}
                  alt="Muscle Hut Gym"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  MUSCLE HUT <span className="text-amber-400">GYM</span>
                </span>
                <p className="text-[9px] text-amber-500 font-semibold tracking-[0.25em] uppercase">
                  Agra's Premier Fitness Sanctuary
                </p>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs font-light">
              {GYM_INFO.tagline}. Agra's foremost fitness hub featuring imported biomechanical machinery, Olympic platforms, certified IFBB/ACE trainers, and female-specific fitness batches.
            </p>

            <div className="flex items-center gap-2 text-amber-400 font-semibold bg-amber-500/10 px-3 py-1.5 rounded-sm border border-amber-500/20 w-fit text-[11px]">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.7 ★ on Google Maps (174+ Reviews)</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#111111] hover:bg-amber-500 hover:text-black flex items-center justify-center transition-colors border border-white/10"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#111111] hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-sm bg-[#111111] hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2 font-light">
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Workout Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('location')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Live Google Map Route
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('facility')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Facility & Equipment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Member Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trainers')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Certified Coaches
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Membership Tiers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  BMI & Calorie Tool
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Gym Timings (Agra)
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 bg-[#111111] rounded-sm border border-white/5 space-y-1">
                <span className="font-semibold text-neutral-200 block text-xs">Monday – Saturday</span>
                <span className="text-amber-400 font-bold text-sm">5:00 AM – 10:00 PM</span>
                <span className="text-[10px] text-neutral-500 block font-light">Full floor + Trainers on duty</span>
              </div>

              <div className="p-3 bg-[#111111] rounded-sm border border-white/5 space-y-1">
                <span className="font-semibold text-neutral-200 block text-xs">Sunday</span>
                <span className="text-neutral-300 font-bold text-sm">6:00 AM – 1:00 PM</span>
                <span className="text-[10px] text-neutral-500 block font-light">Conditioning & Steam recovery</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Visit Muscle Hut
            </h4>
            <div className="space-y-2 text-neutral-300 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{GYM_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{GYM_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={GYM_INFO.googleMapsDirUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 transition-all shadow-[0_0_12px_rgba(251,191,36,0.2)]"
              >
                <Navigation className="w-3.5 h-3.5 fill-black" />
                <span>Get Instant GPS Route</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div className="font-light">
            © 2026 Muscle Hut Gym Agra. All rights reserved. Registered Fitness Facility in Agra, Uttar Pradesh.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenExporterModal}
              className="text-amber-400 hover:text-amber-300 font-medium uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Website Code (HTML / ZIP)</span>
            </button>
            <span>•</span>
            <span className="font-light">Engineered for Muscle Hut Gym</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
