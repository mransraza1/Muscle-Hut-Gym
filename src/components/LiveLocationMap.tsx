import React, { useState } from 'react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink, 
  Compass, 
  Car, 
  Bike, 
  Footprints,
  CheckCircle2,
  Share2,
  Copy,
  Check,
  Building2,
  Sparkles
} from 'lucide-react';

const AGRA_LANDMARKS = [
  { name: 'Kargil Petrol Pump (Sikandra)', distance: '0.3 km', bikeTime: '2 mins', driveTime: '2 mins' },
  { name: 'Dayal Bagh (Sheetla Road)', distance: '3.8 km', bikeTime: '9 mins', driveTime: '12 mins' },
  { name: 'Bodla Crossing', distance: '1.5 km', bikeTime: '4 mins', driveTime: '6 mins' },
  { name: 'Sanjay Place Commercial Hub', distance: '5.2 km', bikeTime: '12 mins', driveTime: '16 mins' },
  { name: 'Kamla Nagar', distance: '6.4 km', bikeTime: '15 mins', driveTime: '19 mins' },
  { name: 'Shahganj Market', distance: '4.1 km', bikeTime: '10 mins', driveTime: '14 mins' },
  { name: 'Agra Cantt Railway Station', distance: '7.8 km', bikeTime: '18 mins', driveTime: '22 mins' },
];

export const LiveLocationMap: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(AGRA_LANDMARKS[0]);
  const [copied, setCopied] = useState(false);
  const [geoLocating, setGeoLocating] = useState(false);
  const [userCustomDistance, setUserCustomDistance] = useState<string | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${GYM_INFO.name}, ${GYM_INFO.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleGetLiveLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setGeoLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeoLocating(false);
        const { latitude, longitude } = position.coords;
        // Calculate rough distance in km using Haversine formula
        const R = 6371; // km
        const dLat = ((GYM_INFO.coordinates.lat - latitude) * Math.PI) / 180;
        const dLon = ((GYM_INFO.coordinates.lng - longitude) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((latitude * Math.PI) / 180) *
            Math.cos((GYM_INFO.coordinates.lat * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        const distKm = d.toFixed(1);
        const estMin = Math.round(d * 2.8);
        setUserCustomDistance(`You are approx ${distKm} km away (~${estMin} mins drive to Muscle Hut)`);
      },
      (error) => {
        setGeoLocating(false);
        alert('Could not retrieve your location. You can select your nearby Agra landmark below.');
      }
    );
  };

  return (
    <section id="location" className="py-20 relative bg-[#0a0a0a] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-8 bg-amber-500" />
              <span className="text-amber-500 text-[10px] uppercase tracking-[0.35em] font-bold">
                Live Location & Google Maps Route
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
              FIND <span className="italic font-serif text-amber-400 font-normal">MUSCLE HUT GYM</span> IN AGRA
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-2 font-light">
              Centrally situated in Sikandra with direct main-road connectivity, seamless parking, and a secondary studio at Dayal Bagh.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={GYM_INFO.googleMapsDirUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="live-map-start-nav-btn"
              className="flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all"
            >
              <Navigation className="w-4 h-4 fill-black" />
              <span>Start Turn-by-Turn GPS</span>
            </a>

            <button
              onClick={handleCopyAddress}
              className="flex items-center gap-2 px-4 py-3 bg-[#161616] hover:bg-[#202020] text-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-sm border border-white/10 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Map & Live Location Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Map Container Card */}
            <div className="relative w-full h-[420px] sm:h-[480px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111111] group">
              {/* Google Maps Iframe */}
              <iframe
                title="Muscle Hut Gym Google Maps Location"
                src="https://maps.google.com/maps?q=27.2036638,77.9532981&hl=en&z=16&output=embed"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.92]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 z-10 bg-black/90 backdrop-blur-md border border-amber-500/40 p-3 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Muscle Hut Gym Agra</span>
                </div>
                <p className="text-[11px] text-neutral-300 mt-1 leading-snug font-light">
                  Near Kargil Petrol Pump, Sikandra-Bodla Road
                </p>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                  <span>★ 4.7 Rated</span>
                  <span>•</span>
                  <span>Open 5 AM - 10 PM</span>
                </div>
              </div>

              {/* Bottom Direct Link Bar */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-black/90 hover:bg-neutral-900 border border-white/20 hover:border-amber-400 text-xs font-bold uppercase tracking-wider text-white rounded-sm shadow-lg backdrop-blur-md transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>

            {/* GPS Geolocation Auto Distance Tool */}
            <div className="bg-[#111111] border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-sm bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Live Distance Calculator</h4>
                  <p className="text-xs text-neutral-400 font-light">Check how fast you can reach Muscle Hut from your current spot</p>
                </div>
              </div>

              <button
                onClick={handleGetLiveLocation}
                disabled={geoLocating}
                className="w-full sm:w-auto px-4 py-2 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{geoLocating ? 'Detecting GPS...' : 'Calculate My Distance'}</span>
              </button>
            </div>

            {userCustomDistance && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{userCustomDistance}</span>
              </div>
            )}
          </div>

          {/* Right Column: Location Details, Travel Estimator & Live Photos */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address & Contact Card */}
            <div className="bg-[#111111] border border-white/5 rounded-xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Primary Facility Hub
                </span>
                <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 uppercase tracking-wider">
                  Main Branch
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Muscle Hut Gym (Sikandra)</h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {GYM_INFO.address}
                </p>
              </div>

              <div className="p-3 bg-black/60 rounded-xl border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Mon – Sat Timings:
                  </span>
                  <span className="font-semibold text-white">5:00 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Sunday Timings:
                  </span>
                  <span className="font-semibold text-amber-400">6:00 AM – 1:00 PM</span>
                </div>
              </div>

              {/* Secondary Branch mention */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-400">Second Branch:</span>
                  <p className="text-neutral-200 font-medium">Sheetla Road, Dayal Bagh, Agra</p>
                </div>
                <span className="text-[10px] bg-white/5 text-neutral-300 px-2 py-1 rounded">
                  4.7 ★ Rated
                </span>
              </div>
            </div>

            {/* Travel Time from Agra Neighborhoods */}
            <div className="bg-[#111111] border border-white/5 rounded-xl p-5 shadow-xl space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Estimated Travel Time from Agra Spots</span>
              </h4>

              <div className="grid grid-cols-1 gap-2 max-h-[220px] overflow-y-auto pr-1">
                {AGRA_LANDMARKS.map((landmark, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedLandmark(landmark)}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                      selectedLandmark.name === landmark.name
                        ? 'bg-amber-500/10 border-amber-500/50 text-white'
                        : 'bg-black/40 border-white/5 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{landmark.name}</div>
                      <div className="text-[10px] text-neutral-400">{landmark.distance} away</div>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-bold">
                      <span className="flex items-center gap-1 text-amber-400">
                        <Bike className="w-3.5 h-3.5" />
                        {landmark.bikeTime}
                      </span>
                      <span className="flex items-center gap-1 text-neutral-300">
                        <Car className="w-3.5 h-3.5" />
                        {landmark.driveTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Location Photos Preview */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden aspect-video border border-white/10 group">
                <img
                  src={GYM_IMAGES.interior}
                  alt="Muscle Hut Gym Live Floor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/70 px-2 py-0.5 rounded-sm">
                    Live Strength Floor
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-video border border-white/10 group">
                <img
                  src={GYM_IMAGES.cardioZone}
                  alt="Muscle Hut Gym Live Cardio Deck"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/70 px-2 py-0.5 rounded-sm">
                    Live Cardio Deck
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
