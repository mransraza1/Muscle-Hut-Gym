import React, { useState, useEffect } from 'react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';
import { 
  Phone, 
  MapPin, 
  Sparkles, 
  Menu, 
  X, 
  Download, 
  Clock, 
  Flame, 
  MessageCircle, 
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';

interface NavbarProps {
  onOpenTrialModal: () => void;
  onOpenExporterModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenTrialModal, 
  onOpenExporterModal,
  onNavigate 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: 'programs' },
    { label: 'Live Location & Map', href: 'location' },
    { label: 'Facility Tour', href: 'facility' },
    { label: 'Customer Reviews', href: 'reviews' },
    { label: 'Trainers', href: 'trainers' },
    { label: 'Membership Plans', href: 'pricing' },
    { label: 'Schedule', href: 'schedule' },
    { label: 'BMI Tool', href: 'calculator' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner with Operating Hours & Rating */}
      <div className="bg-black/80 border-b border-white/5 text-xs py-1.5 px-4 text-[#e0e0e0]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-500 font-medium text-[11px] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              Open Today: 5:00 AM – 10:00 PM
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:flex items-center gap-1 text-neutral-400 text-[11px] tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Sikandra-Bodla Road & Dayal Bagh, Agra
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-400 text-[11px] font-semibold tracking-wider">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.7 ★ Rated on Google (174+ Reviews)</span>
            </div>

            <button
              onClick={onOpenExporterModal}
              id="export-website-top-btn"
              className="hidden md:flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-0.5 rounded border border-amber-500/30 transition-colors"
              title="Download standalone HTML or ZIP file to sell this site to the business"
            >
              <Download className="w-3 h-3" />
              <span>Export Site (HTML/ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/5 shadow-2xl py-3'
            : 'bg-black/40 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:scale-105 transition-transform overflow-hidden p-0.5">
              <img
                src={GYM_IMAGES.logo}
                alt="Muscle Hut Gym 3D Logo"
                className="w-full h-full object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-light tracking-[0.2em] uppercase text-white group-hover:text-amber-400 transition-colors">
                  Muscle Hut
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-sm bg-amber-500 text-black">
                  Gym
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-medium tracking-widest uppercase opacity-70">
                Agra's Premier Sanctuary
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs font-medium tracking-widest uppercase opacity-70 hover:opacity-100 hover:text-amber-400 transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym%20Agra,%20I%20saw%20your%20website%20and%20want%20to%20inquire%20about%20gym%20membership`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-3.5 py-2 rounded-sm transition-all"
              title="Chat with Muscle Hut Gym on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenTrialModal}
              id="nav-free-trial-btn"
              className="bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 text-xs font-bold uppercase tracking-tight rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5 fill-black" />
              <span>Free 1-Day Pass</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenTrialModal}
              className="text-xs font-bold uppercase tracking-tight bg-amber-500 text-black px-3 py-1.5 rounded-sm"
            >
              Free Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-white/5 rounded-md border border-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/90 backdrop-blur-xl flex flex-col p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <img
                src={GYM_IMAGES.logo}
                alt="Muscle Hut Gym"
                className="w-9 h-9 rounded-lg"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-xl font-bold tracking-wider text-white">
                MUSCLE HUT GYM
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 py-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between text-left text-base font-semibold text-neutral-200 hover:text-amber-400 py-3 px-3 rounded-lg hover:bg-neutral-900 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20"
            >
              Get Free 1-Day Trial Pass
            </button>

            <a
              href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym%20Agra,%20I%20want%20to%20join%20the%20gym`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExporterModal();
              }}
              className="w-full py-2.5 bg-neutral-900 border border-amber-500/40 text-amber-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Export Website (HTML / ZIP)</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
