import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkoutPrograms } from './components/WorkoutPrograms';
import { LiveLocationMap } from './components/LiveLocationMap';
import { FacilityShowcase } from './components/FacilityShowcase';
import { ReviewsSection } from './components/ReviewsSection';
import { TrainersSection } from './components/TrainersSection';
import { PricingJoinIn } from './components/PricingJoinIn';
import { BmiCalculator } from './components/BmiCalculator';
import { ClassScheduleTable } from './components/ClassScheduleTable';
import { FaqSection } from './components/FaqSection';
import { FreeTrialModal } from './components/FreeTrialModal';
import { WebsiteExporterModal } from './components/WebsiteExporterModal';
import { Footer } from './components/Footer';
import { GYM_INFO } from './data/gymData';
import { 
  Phone, 
  MessageCircle, 
  Flame, 
  Navigation, 
  Download, 
  Star,
  ChevronUp 
} from 'lucide-react';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isExporterModalOpen, setIsExporterModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* Navigation Header */}
      <Navbar
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        onOpenExporterModal={() => setIsExporterModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
          onNavigate={scrollToSection}
        />

        {/* Workout Programs */}
        <WorkoutPrograms
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />

        {/* Live Business Location & Google Maps Navigation */}
        <LiveLocationMap />

        {/* Facility Tour & Before/After Slider */}
        <FacilityShowcase />

        {/* Cinematic Customer Reviews (Indian Names & Verified Badges) */}
        <ReviewsSection />

        {/* Certified Trainers */}
        <TrainersSection
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />

        {/* Membership Plans & Join-In */}
        <PricingJoinIn
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />

        {/* Interactive BMI & Nutrition Calculator */}
        <BmiCalculator
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />

        {/* Class Timetable */}
        <ClassScheduleTable
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        onOpenExporterModal={() => setIsExporterModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Free 1-Day Trial Pass Generator Modal */}
      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />

      {/* Website Exporter & Client Pitch Proposal Modal */}
      <WebsiteExporterModal
        isOpen={isExporterModalOpen}
        onClose={() => setIsExporterModalOpen(false)}
      />

      {/* Floating Sticky Quick Action Dock (Elegant Dark Aesthetic) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] bg-black/90 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => setIsTrialModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all"
        >
          <Flame className="w-3.5 h-3.5 fill-black" />
          <span className="whitespace-nowrap">Free 1-Day Pass</span>
        </button>

        <a
          href={GYM_INFO.googleMapsDirUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-[#141414] hover:bg-[#1f1f1f] text-neutral-200 hover:text-white font-medium text-xs rounded-full border border-white/10 transition-colors"
          title="Turn-by-Turn Google Map Directions"
        >
          <Navigation className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span className="hidden sm:inline whitespace-nowrap">Directions</span>
        </a>

        <a
          href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym%20Agra,%20I%20am%20interested%20in%20joining!`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full transition-colors"
          title="WhatsApp Muscle Hut Gym"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
        </a>

        <button
          onClick={() => setIsExporterModalOpen(true)}
          className="flex items-center gap-1 px-3 py-2 text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 rounded-full border border-amber-500/30 text-xs font-semibold"
          title="Export Website (HTML / ZIP)"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Export</span>
        </button>

        <button
          onClick={scrollToTop}
          className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 transition-colors"
          title="Scroll to Top"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
