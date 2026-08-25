export interface GymReview {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  program: string;
  verified: boolean;
  comment: string;
  achievement?: string;
  likes: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  duration: string;
  billingPeriod: 'month' | 'quarter' | 'year';
  popular?: boolean;
  bestValue?: boolean;
  features: string[];
  color: string;
  badge?: string;
}

export interface WorkoutProgram {
  id: string;
  title: string;
  tagline: string;
  description: string;
  intensity: 'High' | 'Medium-High' | 'Extreme' | 'All Levels';
  duration: string;
  caloriesBurn: string;
  suitableFor: string;
  highlights: string[];
  image: string;
  icon: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  certification: string;
  specialty: string[];
  bio: string;
  image: string;
  clientsTrained: number;
}

export interface ClassScheduleItem {
  id: string;
  day: string;
  time: string;
  className: string;
  trainer: string;
  room: string;
  spotsLeft: number;
  category: 'Strength' | 'Cardio' | 'Zumba' | 'Yoga' | 'CrossFit';
}

export interface FacilityZone {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  equipmentCount: string;
  tags: string[];
  image: string;
}
