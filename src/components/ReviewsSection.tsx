import React, { useState } from 'react';
import { REVIEWS_DATA, GYM_INFO } from '../data/gymData';
import { GymReview } from '../types';
import { RatingBreakdown } from './RatingBreakdown';
import { 
  Star, 
  ShieldCheck, 
  ThumbsUp, 
  MessageSquarePlus, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  X,
  Send,
  MapPin,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<GymReview[]>(REVIEWS_DATA);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  // New review form state
  const [name, setName] = useState('');
  const [city, setCity] = useState('Sikandra, Agra');
  const [rating, setRating] = useState(5);
  const [program, setProgram] = useState('Heavy Strength & Bodybuilding');
  const [achievement, setAchievement] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const filterCategories = [
    'All',
    'Heavy Strength & Bodybuilding',
    'Weight Loss & Zumba Aerobics',
    'Personal Training 1-on-1',
    'HIIT & Functional Fitness',
  ];

  const filteredReviews = selectedFilter === 'All'
    ? reviews
    : reviews.filter((r) => r.program.toLowerCase().includes(selectedFilter.toLowerCase()) || r.program === selectedFilter);

  const handleLike = (id: string) => {
    if (likedReviews[id]) return;
    setReviews((prev) =>
      prev.map((rev) => (rev.id === id ? { ...rev, likes: rev.likes + 1 } : rev))
    );
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      const newReview: GymReview = {
        id: `rev-${Date.now()}`,
        name: name.trim(),
        city: city.trim() || 'Agra, UP',
        avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop`,
        rating,
        date: 'Just now',
        program,
        verified: true,
        achievement: achievement.trim() ? achievement.trim() : undefined,
        comment: comment.trim(),
        likes: 1,
      };

      setReviews([newReview, ...reviews]);
      setSubmitting(false);
      setShowReviewModal(false);
      setName('');
      setAchievement('');
      setComment('');

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#E11D48', '#10B981', '#FBBF24'],
      });
    }, 600);
  };

  return (
    <section id="reviews" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
              Authentic Member Experiences
            </span>
            <div className="h-[1px] w-8 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
            REAL STORIES. REAL <span className="italic font-serif text-amber-400 font-normal">AGRA RESULTS.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Read firsthand testimonials from genuine members of Muscle Hut Gym across Sikandra, Dayal Bagh, Bodla, and Kamla Nagar.
          </p>
        </div>

        {/* Rating Breakdown Component */}
        <div className="mb-12">
          <RatingBreakdown />
        </div>

        {/* Filter Bar & Write Review CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Categories Pill Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-amber-500 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                    : 'bg-[#141414] hover:bg-[#1f1f1f] text-neutral-300 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Write Review Button */}
          <button
            onClick={() => setShowReviewModal(true)}
            id="write-review-modal-trigger-btn"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#161616] hover:bg-[#222222] border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-amber-400" />
            <span>Write Member Review</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#111111] border border-white/5 hover:border-amber-500/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Review Header: Avatar, Name, Location */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border border-amber-400/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors uppercase tracking-wider">
                        {rev.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-light">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        <span>{rev.city}</span>
                      </div>
                    </div>
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Star Rating & Program Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-neutral-800 text-neutral-800'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
                    {rev.date}
                  </span>
                </div>

                {/* Program Badge */}
                <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-sm mb-3">
                  {rev.program}
                </div>

                {/* Transformation Achievement Pill (if any) */}
                {rev.achievement && (
                  <div className="flex items-center gap-2 text-xs text-amber-200 bg-amber-950/30 border border-amber-500/20 px-3 py-1.5 rounded-sm mb-3">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-medium text-[11px]">{rev.achievement}</span>
                  </div>
                )}

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-serif italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Bottom Meta & Like Button */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                  Google Maps Member Review
                </span>

                <button
                  onClick={() => handleLike(rev.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    likedReviews[rev.id]
                      ? 'bg-amber-500/20 text-amber-300 font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedReviews[rev.id] ? 'fill-amber-400' : ''}`} />
                  <span>{rev.likes} Helpful</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#111111] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Share Your Experience</span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Review Muscle Hut Gym</h3>
              <p className="text-xs text-neutral-400 font-light">
                Help fellow Agra fitness seekers discover our equipment and community.
              </p>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Your Location in Agra
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sikandra / Bodla"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-3 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Primary Program
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-3 py-2 text-sm text-white focus:outline-none"
                  >
                    <option>Heavy Strength & Bodybuilding</option>
                    <option>Weight Loss & Zumba Aerobics</option>
                    <option>Personal Training 1-on-1</option>
                    <option>HIIT & Functional Fitness</option>
                    <option>Yoga & Core Conditioning</option>
                  </select>
                </div>
              </div>

              {/* Star Rating Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Overall Rating *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1.5 focus:outline-none cursor-pointer"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-neutral-800 text-neutral-800'
                        } transition-colors hover:scale-110`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-amber-400 ml-2">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Transformation Highlight (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lost 8 kg in 3 months / Gained strength"
                  value={achievement}
                  onChange={(e) => setAchievement(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm px-4 py-2 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Your Detailed Review *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the gym atmosphere, equipment quality, trainer guidance, AC, and cleanliness..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-sm p-3 text-sm text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                {submitting ? (
                  <span>Publishing Review...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Publish Review</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
