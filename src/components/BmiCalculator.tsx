import React, { useState } from 'react';
import { Calculator, Flame, Activity, Sparkles, Scale, HeartPulse, CheckCircle2 } from 'lucide-react';

interface BmiCalculatorProps {
  onOpenTrialModal: () => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onOpenTrialModal }) => {
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(72);
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<'muscle' | 'fatloss' | 'recomp'>('muscle');

  // Compute BMI
  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

  let bmiStatus = 'Normal Weight';
  let bmiColor = 'text-emerald-400';
  let bmiBg = 'bg-emerald-500/10 border-emerald-500/30';

  if (bmi < 18.5) {
    bmiStatus = 'Underweight (Bulking Recommended)';
    bmiColor = 'text-blue-400';
    bmiBg = 'bg-blue-500/10 border-blue-500/30';
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiStatus = 'Optimal Body Mass';
    bmiColor = 'text-emerald-400';
    bmiBg = 'bg-emerald-500/10 border-emerald-500/30';
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = 'Overweight (Fat Loss & Conditioning Recommended)';
    bmiColor = 'text-amber-400';
    bmiBg = 'bg-amber-500/10 border-amber-500/30';
  } else {
    bmiStatus = 'Obese Class I (Structured Transformation Recommended)';
    bmiColor = 'text-red-400';
    bmiBg = 'bg-red-500/10 border-red-500/30';
  }

  // Basal Metabolic Rate (Mifflin-St Jeor)
  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  // Maintenance Calories (Moderate Gym Activity 1.45 multiplier)
  const tdee = Math.round(bmr * 1.45);

  let targetCalories = tdee;
  let targetProtein = Math.round(weightKg * 1.8);

  if (goal === 'muscle') {
    targetCalories = tdee + 300;
    targetProtein = Math.round(weightKg * 2.0);
  } else if (goal === 'fatloss') {
    targetCalories = tdee - 450;
    targetProtein = Math.round(weightKg * 2.2);
  } else {
    targetCalories = tdee;
    targetProtein = Math.round(weightKg * 2.0);
  }

  const targetWaterLiters = (weightKg * 0.04).toFixed(1);

  return (
    <section id="calculator" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              Fitness Metrics Engine
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            INTERACTIVE <span className="italic font-serif text-amber-400 font-normal">BMI & CALORIE</span> CALCULATOR
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Calculate your optimal Body Mass Index, daily calorie target, and protein grams customized for your training goals.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Input Form */}
          <div className="lg:col-span-6 bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Input Your Body Stats</span>
            </h3>

            {/* Gender Toggle */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  gender === 'male'
                    ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                    : 'bg-black/60 text-neutral-400 border border-white/5 hover:text-white'
                }`}
              >
                Male Athlete
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  gender === 'female'
                    ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                    : 'bg-black/60 text-neutral-400 border border-white/5 hover:text-white'
                }`}
              >
                Female Athlete
              </button>
            </div>

            {/* Height Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-neutral-300">Height:</span>
                <span className="font-bold text-amber-400">{heightCm} cm ({(heightCm / 30.48).toFixed(1)} ft)</span>
              </div>
              <input
                type="range"
                min="130"
                max="220"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Weight Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-neutral-300">Body Weight:</span>
                <span className="font-bold text-amber-400">{weightKg} kg ({(weightKg * 2.20462).toFixed(1)} lbs)</span>
              </div>
              <input
                type="range"
                min="35"
                max="160"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Age Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-neutral-300">Age:</span>
                <span className="font-bold text-amber-400">{age} years</span>
              </div>
              <input
                type="range"
                min="14"
                max="75"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Goal Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                Primary Goal:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'muscle', label: 'Muscle Gain' },
                  { id: 'fatloss', label: 'Fat Loss' },
                  { id: 'recomp', label: 'Recomposition' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id as any)}
                    className={`py-2 px-2 rounded-sm text-[10px] font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                      goal === g.id
                        ? 'bg-amber-500 text-black shadow-[0_0_10px_rgba(251,191,36,0.3)]'
                        : 'bg-black/60 text-neutral-300 border border-white/5 hover:text-white'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Analysis Panel */}
          <div className="lg:col-span-6 bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Personalized Analysis
                </span>
                <div className={`px-3 py-1 rounded-sm text-[10px] uppercase tracking-wider font-bold border ${bmiBg} ${bmiColor}`}>
                  {bmiStatus}
                </div>
              </div>

              {/* Big BMI Number */}
              <div className="p-5 bg-black/60 rounded-xl border border-white/5 flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs text-neutral-400 block font-light">Your Calculated BMI:</span>
                  <div className="font-display text-5xl font-black text-white">{bmi}</div>
                </div>
                <div className="text-right text-xs space-y-1">
                  <div className="text-neutral-400 font-light">Normal Range: <strong className="text-white font-normal">18.5 – 24.9</strong></div>
                  <div className="text-neutral-400 font-light">Target Weight: <strong className="text-emerald-400 font-normal">{Math.round(22 * heightM * heightM)} kg</strong></div>
                </div>
              </div>

              {/* Targets Grid */}
              <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block">Daily Calories</span>
                  <div className="font-display text-2xl font-black text-amber-400">{targetCalories}</div>
                  <span className="text-[10px] text-neutral-500">kcal/day</span>
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block">Daily Protein</span>
                  <div className="font-display text-2xl font-black text-amber-400">{targetProtein}g</div>
                  <span className="text-[10px] text-neutral-500">High Biological Value</span>
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block">Hydration Goal</span>
                  <div className="font-display text-2xl font-black text-amber-400">{targetWaterLiters}L</div>
                  <span className="text-[10px] text-neutral-500">Water / Day</span>
                </div>
              </div>

              {/* Recommendation Note */}
              <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl text-xs text-neutral-300 space-y-1.5 font-light">
                <div className="font-bold text-amber-400 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Coach Recommendation for Agra Members:</span>
                </div>
                <p className="leading-relaxed">
                  Combine 45 minutes of progressive hypertrophy training with 15 minutes of cardio cooling. Our trainers provide customized vegetarian and non-veg diet charts covering your protein goals.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenTrialModal}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.3)] cursor-pointer transition-all"
            >
              Get Free Custom Diet Consultation with Trial Pass
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
