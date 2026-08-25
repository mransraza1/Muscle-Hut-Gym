import React, { useState } from 'react';
import { PRICING_PLANS, GYM_INFO } from '../data/gymData';
import { PricingPlan } from '../types';
import { 
  Check, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  ArrowRight, 
  Gift, 
  X,
  CreditCard,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingJoinInProps {
  onOpenTrialModal: () => void;
}

export const PricingJoinIn: React.FC<PricingJoinInProps> = ({ onOpenTrialModal }) => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [memberName, setMemberName] = useState('');
  const [memberPhone, setMemberPhone] = useState('');
  const [promoCode, setPromoCode] = useState('MUSCLEHUT10');
  const [discountApplied, setDiscountApplied] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setShowCheckoutModal(true);
    setBookingSuccess(false);
  };

  const handleConfirmEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName || !memberPhone) return;

    setBookingSuccess(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EF4444', '#10B981'],
    });

    // Auto trigger WhatsApp redirect with custom prefilled text
    setTimeout(() => {
      const text = encodeURIComponent(
        `Hi Muscle Hut Gym Agra! I want to join the ${selectedPlan?.name} (${selectedPlan?.duration}) plan.\nName: ${memberName}\nPhone: ${memberPhone}\nPromo applied: ${discountApplied ? 'MUSCLEHUT10 (10% Off)' : 'None'}`
      );
      window.open(`https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <section id="pricing" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              Transparent Membership Plans
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            INVEST IN YOUR <span className="italic font-serif text-amber-400 font-normal">STRONGEST</span> SELF
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            No hidden charges or artificial admission fees. All plans include full access to both strength & cardio decks, lockers, and expert coaching.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const isBestValue = plan.bestValue;

            return (
              <div
                key={plan.id}
                className={`relative rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#141414] border-2 border-amber-500 shadow-[0_0_25px_rgba(251,191,36,0.15)] md:-translate-y-2'
                    : isBestValue
                    ? 'bg-[#111111] border border-amber-500/50 shadow-xl'
                    : 'bg-[#111111] border border-white/5 shadow-lg'
                }`}
              >
                {/* Badge if Popular/Best Value */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`px-4 py-1 rounded-sm text-[10px] font-extrabold tracking-widest uppercase shadow-md ${
                      isPopular
                        ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                        : 'bg-[#1e1e1e] text-amber-400 border border-amber-500/40'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Duration */}
                  <div className="border-b border-white/10 pb-6 mb-6">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">{plan.name}</h3>
                    <p className="text-xs text-neutral-400 mt-1 font-light">{plan.subtitle}</p>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-neutral-400">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-500 line-through">
                        ₹{plan.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mt-1">
                      {plan.duration}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                      Plan Inclusions:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-neutral-300 font-light">
                        <div className="w-4 h-4 rounded-sm bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                        : 'bg-[#1c1c1c] hover:bg-[#252525] text-white border border-white/10 hover:border-amber-400/40'
                    }`}
                  >
                    <Flame className="w-4 h-4 fill-current" />
                    <span>Join With This Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center">
                    <button
                      onClick={onOpenTrialModal}
                      className="text-[11px] text-neutral-400 hover:text-amber-400 transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Or start with a Free 1-Day Trial Pass →
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Trust Guarantee Box */}
        <div className="mt-14 p-6 bg-[#111111] border border-white/5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Zero Admission Fee Guarantee</h4>
              <p className="text-xs text-neutral-400 font-light">Pay only for your workout duration. No hidden registration fees or lock-in penalties.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym,%20I%20have%20questions%20about%20membership%20pricing`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Have Questions? WhatsApp Us</span>
          </a>
        </div>

      </div>

      {/* Instant Enrollment Modal */}
      {showCheckoutModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#111111] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <div className="space-y-5 text-left">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Instant Gym Enrollment
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                    {selectedPlan.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Lock in your membership price and get priority trainer allotment.
                  </p>
                </div>

                {/* Plan Summary Box */}
                <div className="p-4 bg-black/60 rounded-xl border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-300">
                    <span>Plan Duration:</span>
                    <span className="font-bold text-white uppercase">{selectedPlan.duration}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Regular Price:</span>
                    <span className="line-through text-neutral-500">₹{selectedPlan.originalPrice}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Member Special:</span>
                    <span className="font-bold text-amber-400">₹{selectedPlan.price}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-400 pt-2 border-t border-white/5">
                      <span>Promo 'MUSCLEHUT10' Applied:</span>
                      <span className="font-bold">-₹{Math.round(selectedPlan.price * 0.1)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-white font-extrabold text-sm pt-2 border-t border-white/10">
                    <span>Payable at Reception:</span>
                    <span className="text-amber-400">
                      ₹{discountApplied ? Math.round(selectedPlan.price * 0.9) : selectedPlan.price}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleConfirmEnrollment} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohit Rajput"
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98970XXXXX"
                      value={memberPhone}
                      onChange={(e) => setMemberPhone(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Confirm & Connect via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-neutral-400 font-light">
                    No online payment required right now. Pay securely via UPI/Card at the gym counter upon first visit.
                  </p>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">Enrollment Registered!</h3>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto font-light">
                  Thank you, <strong className="text-amber-400">{memberName}</strong>. We are redirecting you to Muscle Hut Gym WhatsApp to confirm your membership slot.
                </p>
                <div className="p-4 bg-black/60 rounded-xl border border-white/10 text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  Show your confirmation text at the Sikandra / Dayal Bagh reception desk to claim your Free Shaker Bottle!
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
