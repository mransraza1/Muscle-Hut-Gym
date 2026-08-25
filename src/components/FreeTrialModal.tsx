import React, { useState } from 'react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';
import { 
  X, 
  Flame, 
  Sparkles, 
  QrCode, 
  Download, 
  Printer, 
  Check, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck,
  Share2,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (6:00 AM – 9:00 AM)');
  const [branch, setBranch] = useState('Sikandra (Near Kargil Petrol Pump)');
  const [goal, setGoal] = useState('Hypertrophy & Muscle Gain');
  const [passGenerated, setPassGenerated] = useState(false);
  const [passId, setPassId] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  if (!isOpen) return null;

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const randomId = `MH-AGRA-${Math.floor(100000 + Math.random() * 900000)}`;
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const exp = today.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    setPassId(randomId);
    setExpiryDate(exp);
    setPassGenerated(true);

    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EF4444', '#10B981', '#FBBF24'],
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#111111] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!passGenerated ? (
          /* Form Step */
          <div className="space-y-5 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>100% Free VIP Guest Access</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white tracking-wide">
                CLAIM YOUR 1-DAY <span className="italic font-serif text-amber-400 font-normal">VIP TRIAL PASS</span>
              </h3>
              <p className="text-xs text-neutral-400 font-light">
                Experience all heavy equipment, free weights, air-conditioned workout floors, and personalized coach guidance for a full day.
              </p>
            </div>

            <form onSubmit={handleGeneratePass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  WhatsApp Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9897012345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Preferred Branch
                  </label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-3 py-2 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option>Sikandra (Near Kargil Petrol Pump)</option>
                    <option>Dayal Bagh (Sheetla Road)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-3 py-2 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option>Morning (6:00 AM – 9:00 AM)</option>
                    <option>Afternoon (12:00 PM – 4:00 PM)</option>
                    <option>Evening Prime (5:30 PM – 9:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Primary Fitness Focus
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-3 py-2 text-xs sm:text-sm text-white focus:outline-none"
                >
                  <option>Hypertrophy & Muscle Gain</option>
                  <option>Weight Loss & Body Toning</option>
                  <option>Zumba & Aerobics Dance</option>
                  <option>Powerlifting & Strength</option>
                  <option>General Athletic Health</option>
                </select>
              </div>

              <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-sm text-[11px] text-amber-300 flex items-center gap-2 font-light">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero obligations. No credit card required. Show digital pass at the front desk.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Official VIP Pass</span>
              </button>
            </form>
          </div>
        ) : (
          /* Generated Pass Card View */
          <div className="space-y-6 text-center">
            
            {/* VIP Pass Render Badge */}
            <div className="relative rounded-2xl p-0.5 bg-gradient-to-br from-amber-500/50 via-amber-400/30 to-amber-600/50 shadow-2xl">
              <div className="bg-[#141414] rounded-[15px] p-6 text-left border border-white/10 space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={GYM_IMAGES.logo}
                      alt="Muscle Hut Logo"
                      className="w-10 h-10 rounded-sm object-cover border border-amber-500/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-display text-lg font-bold text-white tracking-wider">
                        MUSCLE HUT GYM
                      </div>
                      <span className="text-[9px] text-amber-400 font-semibold tracking-widest uppercase">
                        Official 1-Day VIP Pass
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold rounded-sm uppercase tracking-wider">
                    GUEST VIP
                  </span>
                </div>

                {/* Pass Details */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block">Pass Holder:</span>
                    <span className="font-bold text-white text-sm">{name}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block">Pass ID:</span>
                    <span className="font-mono font-bold text-amber-400 text-xs">{passId}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block">Location:</span>
                    <span className="text-neutral-300 font-light">{branch.split('(')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block">Valid Until:</span>
                    <span className="font-bold text-emerald-400">{expiryDate}</span>
                  </div>
                </div>

                {/* Barcode & Verification Stub */}
                <div className="pt-3 border-t border-dashed border-white/20 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-light">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{timeSlot}</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                      ✓ Floor Orientation & Locker Included
                    </div>
                  </div>

                  {/* Visual QR Simulator */}
                  <div className="p-1.5 bg-white rounded-sm shadow">
                    <QrCode className="w-9 h-9 text-black" />
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym%20Agra!%20I%20have%20generated%20my%201-Day%20Free%20VIP%20Trial%20Pass%20(ID:%20${passId})%20for%20${encodeURIComponent(name)}.%20Please%20reserve%20my%20slot!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1c] hover:bg-[#252525] text-white font-medium text-xs uppercase tracking-wider rounded-sm border border-white/10 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Pass</span>
              </button>

              <button
                onClick={() => {
                  alert(`Pass ID ${passId} copied! Show this at Muscle Hut Gym reception counter.`);
                }}
                className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1c] hover:bg-[#252525] text-amber-400 font-medium text-xs uppercase tracking-wider rounded-sm border border-amber-500/30 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Save ID</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
