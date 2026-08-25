import { GymReview, PricingPlan, WorkoutProgram, Trainer, ClassScheduleItem, FacilityZone } from '../types';

import logoImg from '../assets/images/muscle_hut_logo_1787644104298.jpg';
import heroModelImg from '../assets/images/hero_fitness_model_1787644120126.jpg';
import gymInteriorImg from '../assets/images/gym_interior_view_1787644134269.jpg';
import femaleTrainerImg from '../assets/images/female_trainer_model_1787644148649.jpg';

export const GYM_IMAGES = {
  logo: logoImg,
  heroModel: heroModelImg,
  interior: gymInteriorImg,
  femaleTrainer: femaleTrainerImg,
  cardioZone: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
  weightsZone: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
  crossfitZone: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
  zumbaStudio: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
  maleTrainer2: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
  maleTrainer3: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
};

export const GYM_INFO = {
  name: 'Muscle Hut Gym',
  tagline: 'Sculpt Your Legacy. Unleash Your Peak Power.',
  city: 'Agra, Uttar Pradesh',
  address: 'Near Kargil Petrol Pump, Sikandra-Bodla Road, Agra, UP 282007',
  secondaryLocation: 'Sheetla Road, Sharda Vihar, Dayal Bagh, Agra, UP 282005',
  phone: '+91 98970 54321',
  whatsappNumber: '919897054321',
  email: 'contact@musclehutgym.in',
  coordinates: {
    lat: 27.2036638,
    lng: 77.9532981,
  },
  googleMapsUrl: 'https://maps.app.goo.gl/ztCwTvdYJvpD1pHq7',
  googleMapsDirUrl: 'https://www.google.com/maps/dir/?api=1&destination=27.2036638,77.9532981',
  overallRating: 4.7,
  totalReviewsCount: 174,
  hours: [
    { days: 'Monday - Saturday', time: '5:00 AM – 10:00 PM' },
    { days: 'Sunday', time: '6:00 AM – 1:00 PM (Special Conditioning)' },
  ],
  stats: [
    { label: 'Google Rating', value: '4.7 ★', sublabel: '170+ Verified Reviews' },
    { label: 'Active Members', value: '1,500+', sublabel: 'Transformed Lives' },
    { label: 'Equipment Stations', value: '65+', sublabel: 'Imported Biomechanical' },
    { label: 'Certified Trainers', value: '8+', sublabel: 'IFBB / ACE Accredited' },
  ],
};

export const REVIEWS_DATA: GymReview[] = [
  {
    id: 'rev-1',
    name: 'Aman Singhal',
    city: 'Sikandra, Agra',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '2 days ago',
    program: 'Heavy Strength & Bodybuilding',
    verified: true,
    achievement: 'Lost 14 kg & gained 6kg lean muscle in 5 months',
    comment:
      'Muscle Hut Gym is undoubtedly the best gym in Agra! The dumbbells go up to heavy weights, squat racks are always maintained, and the vibe is pure energy. Trainer Rajesh Bhaiya gives personal attention to correct your posture during heavy deadlifts. AC cooling is fantastic even during peak summer.',
    likes: 34,
  },
  {
    id: 'rev-2',
    name: 'Priya Verma',
    city: 'Dayal Bagh, Agra',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '1 week ago',
    program: 'Weight Loss & Zumba Aerobics',
    verified: true,
    achievement: 'Dropped 3 dress sizes in 90 days',
    comment:
      'Super safe, clean, and motivating atmosphere for females! The Zumba and Aerobics morning batch by Neha Ma\'am is extremely lively. Washrooms and changing areas are spotless. Best investment I made for my fitness in Agra.',
    likes: 28,
  },
  {
    id: 'rev-3',
    name: 'Rohit Rajput',
    city: 'Bodla, Agra',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '2 weeks ago',
    program: 'Powerlifting & Hypertrophy',
    verified: true,
    achievement: 'Increased bench press from 60kg to 110kg',
    comment:
      'Found this gym through Google Maps when searching for proper strength training near Kargil petrol pump. The equipment quality is top-notch — Olympic barbells, calibrated plates, rubber turf, and proper cable crossover stations. Hardcore atmosphere without any unnecessary noise.',
    likes: 42,
  },
  {
    id: 'rev-4',
    name: 'Vikram Yadav',
    city: 'Kamla Nagar, Agra',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '3 weeks ago',
    program: 'Personal Training 1-on-1',
    verified: true,
    achievement: 'Overcame chronic lower back stiffness & built athletic core',
    comment:
      'Opted for the 1-on-1 personal coaching plan. Coach Vikram designed a customized Indian diet plan (egg & vegetarian friendly) without recommending expensive useless supplements. Their guidance on progressive overload changed my mindset completely.',
    likes: 19,
  },
  {
    id: 'rev-5',
    name: 'Ananya Gupta',
    city: 'Sanjay Place, Agra',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '1 month ago',
    program: 'HIIT & Functional Fitness',
    verified: true,
    achievement: 'Completed Agra Half Marathon in sub-2 hours',
    comment:
      'The cardio deck with high-speed smart treadmills and battle ropes is top tier. Music playlist is always high-octane. The management is very friendly and always listens to feedback. Highly recommended to anyone in Agra seeking serious results!',
    likes: 25,
  },
  {
    id: 'rev-6',
    name: 'Deepak Sharma',
    city: 'Shahganj, Agra',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
    rating: 4,
    date: '1 month ago',
    program: 'General Fitness & Muscle Gain',
    verified: true,
    achievement: 'Gained 7 kg healthy mass with structured calorie surplus',
    comment:
      'Spacious gym with ample parking space outside. Great crowd and friendly trainers. Evening hours get packed between 7 PM and 8:30 PM because of its popularity, but you never have to wait long for machines as they have multiple sets.',
    likes: 15,
  },
  {
    id: 'rev-7',
    name: 'Neha Dubey',
    city: 'Sharda Vihar, Agra',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '2 months ago',
    program: 'Yoga & Core Conditioning',
    verified: true,
    achievement: 'Reversed postural issues & improved flexibility drastically',
    comment:
      'The morning batch is serene yet energizing. Coaches make sure beginners don\'t injure themselves and teach proper breathing techniques. Steam bath on weekends is the cherry on top!',
    likes: 31,
  },
  {
    id: 'rev-8',
    name: 'Mohit Mathur',
    city: 'Civil Lines, Agra',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '2 months ago',
    program: 'Fat Loss & Strength Circuit',
    verified: true,
    achievement: 'Down from 92 kg to 76 kg in 6 months',
    comment:
      'Reasonable pricing plans compared to other commercial chain gyms in Agra, but with double the equipment quality and much better personal guidance. Truly 5-star standard gym in Sikandra!',
    likes: 38,
  },
];

export const RATING_BREAKDOWN = {
  overall: 4.7,
  totalReviews: 174,
  aspects: [
    { label: 'Trainer Guidance & Support', rating: 4.9, percentage: 98 },
    { label: 'Equipment Variety & Maintenance', rating: 4.8, percentage: 96 },
    { label: 'Hygiene, Cleanliness & AC', rating: 4.9, percentage: 98 },
    { label: 'Workout Ambiance & Energy', rating: 4.9, percentage: 97 },
    { label: 'Value for Money', rating: 4.8, percentage: 95 },
  ],
  starDistribution: [
    { stars: 5, count: 148, percentage: 85 },
    { stars: 4, count: 21, percentage: 12 },
    { stars: 3, count: 4, percentage: 2 },
    { stars: 2, count: 1, percentage: 1 },
    { stars: 1, count: 0, percentage: 0 },
  ],
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-monthly',
    name: 'Starter Flex',
    subtitle: 'Ideal for beginners starting their fitness journey',
    price: 1499,
    originalPrice: 2000,
    duration: '1 Month',
    billingPeriod: 'month',
    features: [
      'Full Access to Heavy Strength & Cardio Deck',
      'Free Initial Body Composition & BMI Analysis',
      'Locker & Changing Room Facilities',
      'General Floor Trainer Assistance',
      'High-Speed Wi-Fi & Water Station',
    ],
    color: 'from-zinc-800 to-zinc-900',
    badge: 'Flexible',
  },
  {
    id: 'plan-quarterly',
    name: 'Transformation Pro',
    subtitle: 'The sweet spot for visible muscle gain & fat loss',
    price: 3699,
    originalPrice: 5000,
    duration: '3 Months (₹1,233/mo)',
    billingPeriod: 'quarter',
    popular: true,
    features: [
      'Everything in Starter Flex',
      'Customized Indian Diet & Workout Chart',
      'Free Access to Zumba & Aerobics Batches',
      'Weekly Body Metrics Tracking & Assessment',
      '1 Free 1-on-1 Personal Coaching Session',
      'Complimentary Muscle Hut Shaker Bottle',
    ],
    color: 'from-amber-600/30 via-zinc-900 to-amber-950/40',
    badge: 'Most Popular',
  },
  {
    id: 'plan-yearly',
    name: 'VIP Elite Legacy',
    subtitle: 'Total lifestyle transformation with maximum savings',
    price: 10999,
    originalPrice: 16000,
    duration: '12 Months (₹916/mo)',
    billingPeriod: 'year',
    bestValue: true,
    features: [
      'Unrestricted VIP Access All Year Round',
      'Personalized Diet Plan updated every 4 weeks',
      'Unlimited Zumba, HIIT & Strength Classes',
      'Free Weekend Steam Bath Access',
      '4 Free 1-on-1 Personal Training Passes',
      '1 Free Gym Membership Freeze (Up to 30 Days)',
      'Exclusive Muscle Hut Gym Member Jersey',
      'Guest Passes: Bring a Friend 3 times a year',
    ],
    color: 'from-amber-500/30 via-zinc-900 to-red-950/40',
    badge: 'Best Value (Save 35%)',
  },
];

export const WORKOUT_PROGRAMS: WorkoutProgram[] = [
  {
    id: 'prog-1',
    title: 'Hypertrophy & Heavy Strength',
    tagline: 'Build dense, sculpted muscle mass with progressive overload',
    description:
      'Designed for bodybuilding, powerlifting, and raw strength. Access Olympic power cages, heavy dumbbells up to 60kg, isolateral plate-loaded machines, and expert spotting.',
    intensity: 'Extreme',
    duration: '60 - 75 Mins',
    caloriesBurn: '500 - 700 kcal',
    suitableFor: 'Muscle Building, Powerlifting, Body Recomposition',
    highlights: ['Multi-grip pull up towers', 'Deadlift drop platforms', 'Heavy smith machines', 'Isolateral chest & back press'],
    image: GYM_IMAGES.weightsZone,
    icon: 'Dumbbell',
  },
  {
    id: 'prog-2',
    title: 'Fat Loss & Athletic HIIT',
    tagline: 'Torch stubborn body fat while boosting cardiovascular stamina',
    description:
      'High-energy functional circuit training combining battle ropes, plyometric boxes, kettlebells, and smart cardio treadmills to keep your metabolic rate elevated for 24+ hours.',
    intensity: 'High',
    duration: '45 - 60 Mins',
    caloriesBurn: '600 - 900 kcal',
    suitableFor: 'Weight Loss, Agility, Cardiovascular Health',
    highlights: ['Smart incline treadmills', 'Concept2 rowing machines', 'Battle ropes & sled push', 'Plyo jump boxes'],
    image: GYM_IMAGES.cardioZone,
    icon: 'Flame',
  },
  {
    id: 'prog-3',
    title: 'Zumba & Aerobics Dance Cardio',
    tagline: 'Fun, dynamic cardio grooves led by certified choreographers',
    description:
      'Dance to pulsating Bollywood and international beats! A high-spirited cardio session that burns hundreds of calories without feeling like a chore. Great community vibe for all age groups.',
    intensity: 'Medium-High',
    duration: '50 Mins',
    caloriesBurn: '450 - 600 kcal',
    suitableFor: 'Ladies, Beginners, Cardio Enthusiasts, Stress Relief',
    highlights: ['Certified Zumba coaches', 'Surround sound audio', 'Special morning & evening ladies batches', 'Flexibility cool-downs'],
    image: GYM_IMAGES.zumbaStudio,
    icon: 'Music',
  },
  {
    id: 'prog-4',
    title: '1-on-1 Personal Transformation',
    tagline: 'Dedicated mentorship tailored to your unique biology & goals',
    description:
      'Get a dedicated personal trainer who monitors every repetition, structures your macro-nutrient nutrition plan, tracks bi-weekly measurements, and keeps you relentlessly accountable.',
    intensity: 'Extreme',
    duration: '60 Mins',
    caloriesBurn: 'Custom Target',
    suitableFor: 'Busy Professionals, Rapid Transformation, Injury Rehab',
    highlights: ['Custom diet chart (Veg & Non-Veg)', 'Posture & form correction', '100% focused attention', 'Bi-weekly body fat scanning'],
    image: GYM_IMAGES.heroModel,
    icon: 'UserCheck',
  },
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 'tr-1',
    name: 'Rajesh Yadav',
    role: 'Head Strength Coach & Founder',
    experience: '9+ Years Experience',
    certification: 'IFBB Certified / ACE Gold Master Trainer',
    specialty: ['Hypertrophy Science', 'Powerlifting Coaching', 'Competition Prep'],
    bio: 'Former State-level athlete dedicated to helping Agra residents build supreme physical strength with injury-free biomechanical training.',
    image: GYM_IMAGES.heroModel,
    clientsTrained: 620,
  },
  {
    id: 'tr-2',
    name: 'Neha Sharma',
    role: 'Senior HIIT & Zumba Lead',
    experience: '6+ Years Experience',
    certification: 'ZIN™ Certified / Reebok Aerobics Pro',
    specialty: ['Fat Loss Circuits', 'Female Fitness', 'Endurance Conditioning'],
    bio: 'Passionate about creating an energetic, welcoming space for women to unleash their inner strength and crush their fat-loss milestones.',
    image: GYM_IMAGES.femaleTrainer,
    clientsTrained: 480,
  },
  {
    id: 'tr-3',
    name: 'Vikram Singh',
    role: 'Functional & Nutrition Specialist',
    experience: '7+ Years Experience',
    certification: 'ISSA Certified Fitness Coach & Sports Nutritionist',
    specialty: ['Diet Programming', 'Core Stability', 'Rehabilitation & Posture'],
    bio: 'Specializes in tailored Indian nutrition programming that fits your daily routine without starving or giving up traditional food staples.',
    image: GYM_IMAGES.maleTrainer2,
    clientsTrained: 540,
  },
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: 'zone-1',
    name: 'Heavy Iron & Powerlifting Arena',
    subtitle: 'For serious lifters & hypertrophy builders',
    description: 'Equipped with heavy rubber-coated dumbbells ranging from 2.5kg up to 60kg, Olympic weight bars, multi-angle incline benches, and heavy-duty squat racks.',
    equipmentCount: '35+ Heavy Stations',
    tags: ['Olympic Barbells', '60kg Dumbbells', 'Squat Cages', 'Cable Crossover'],
    image: GYM_IMAGES.weightsZone,
  },
  {
    id: 'zone-2',
    name: 'Cardiovascular & Endurance Deck',
    subtitle: 'State-of-the-art calorie burning machines',
    description: 'High-tech computerized treadmills with heart rate monitors, commercial elliptical cross trainers, spin bikes, and recumbent bikes.',
    equipmentCount: '20+ Cardio Units',
    tags: ['Touchscreen Treadmills', 'Cross Trainers', 'Spin Bikes', 'Stair Climbers'],
    image: GYM_IMAGES.cardioZone,
  },
  {
    id: 'zone-3',
    name: 'Functional & Cross-Training Turf',
    subtitle: 'Agility, core, and dynamic athletic conditioning',
    description: 'High-density green turf zone for sled pulls, kettlebell circuits, battle ropes, medicine ball slams, and core calisthenics.',
    equipmentCount: '15+ Functional Tools',
    tags: ['Turf Track', 'Battle Ropes', 'Kettlebells', 'Slam Balls'],
    image: GYM_IMAGES.crossfitZone,
  },
  {
    id: 'zone-4',
    name: 'Aerobics, Zumba & Yoga Studio',
    subtitle: 'Spacious wooden-floor studio with acoustic sound',
    description: 'Mirrored studio featuring professional studio sound systems, yoga mats, resistance bands, and step platforms for high-octane group fitness classes.',
    equipmentCount: 'Group Capacity 30+',
    tags: ['Surround Sound', 'Full Mirrors', 'Wooden Flooring', 'Air Conditioned'],
    image: GYM_IMAGES.zumbaStudio,
  },
];

export const CLASS_SCHEDULE: ClassScheduleItem[] = [
  { id: 'sch-1', day: 'Monday - Saturday', time: '6:00 AM – 7:00 AM', className: 'Morning Iron Surge (Strength)', trainer: 'Coach Rajesh', room: 'Main Floor', spotsLeft: 6, category: 'Strength' },
  { id: 'sch-2', day: 'Monday, Wednesday, Friday', time: '7:30 AM – 8:30 AM', className: 'Bollywood Zumba Burn', trainer: 'Coach Neha', room: 'Studio A', spotsLeft: 4, category: 'Zumba' },
  { id: 'sch-3', day: 'Tuesday, Thursday, Saturday', time: '8:00 AM – 9:00 AM', className: 'Core & Mobility Yoga', trainer: 'Coach Vikram', room: 'Studio A', spotsLeft: 8, category: 'Yoga' },
  { id: 'sch-4', day: 'Monday - Friday', time: '5:30 PM – 6:30 PM', className: 'Metabolic HIIT Blast', trainer: 'Coach Neha', room: 'Turf Zone', spotsLeft: 5, category: 'Cardio' },
  { id: 'sch-5', day: 'Monday - Saturday', time: '7:00 PM – 8:30 PM', className: 'Hypertrophy Power Hour', trainer: 'Coach Rajesh', room: 'Main Floor', spotsLeft: 3, category: 'Strength' },
];

export const FAQ_ITEMS = [
  {
    q: 'Where is Muscle Hut Gym located in Agra?',
    a: 'Muscle Hut Gym is conveniently located near Kargil Petrol Pump on Sikandra-Bodla Road, Agra (UP 282007). We also have a branch on Sheetla Road in Dayal Bagh. You can click the "Get Directions" button on this website to open instant turn-by-turn navigation in Google Maps!',
  },
  {
    q: 'What are the operating hours of Muscle Hut Gym?',
    a: 'We are open Monday through Saturday from 5:00 AM to 10:00 PM. On Sundays, we operate from 6:00 AM to 1:00 PM for special conditioning and active recovery sessions.',
  },
  {
    q: 'Can I get a Free 1-Day Trial Pass before taking a membership?',
    a: 'Yes! We offer a 100% Free 1-Day VIP Trial Pass for newcomers to experience our equipment, clean environment, and coaching atmosphere. Simply fill out the Free Trial Pass form on this website to receive your instant digital pass.',
  },
  {
    q: 'Are there separate batches or personal guidance for females and beginners?',
    a: 'Absolutely. We have dedicated female fitness batches including morning and evening Zumba, Aerobics, and strength circuits led by female coaches. All beginners receive form guidance and orientation from our certified floor coaches.',
  },
  {
    q: 'Do you provide customized Indian diet plans with membership?',
    a: 'Yes! Our quarterly and annual memberships include personalized diet charts customized for Indian eating habits (both vegetarian and non-vegetarian) focused on real, whole food nutrition without forcing costly supplements.',
  },
  {
    q: 'Is parking available at the gym?',
    a: 'Yes, we have dedicated, hassle-free parking right in front of the gym for both two-wheelers and four-wheelers.',
  },
];
