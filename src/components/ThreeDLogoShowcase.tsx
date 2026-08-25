import React, { useState, useRef } from 'react';
import { GYM_IMAGES, GYM_INFO } from '../data/gymData';
import { Sparkles, Shield, Trophy, Dumbbell, Zap } from 'lucide-react';

export const ThreeDLogoShowcase: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotX = -((y - centerY) / centerY) * 16;
    const rotY = ((x - centerX) / centerX) * 16;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div className="relative flex items-center justify-center p-4 sm:p-6 perspective-1000">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-600/20 to-red-600/20 rounded-3xl blur-3xl opacity-60 animate-pulse" />

      {/* Floating Badges */}
      <div className="absolute -top-3 -left-3 sm:-left-6 z-20 bg-zinc-900/90 border border-amber-500/40 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
        <Trophy className="w-4 h-4 text-amber-400" />
        <span className="text-xs font-bold text-white tracking-wide">#1 Gym in Agra</span>
      </div>

      <div className="absolute -bottom-3 -right-3 sm:-right-6 z-20 bg-zinc-900/90 border border-amber-500/40 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
        <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="text-xs font-bold text-white tracking-wide">3D Elite Branding</span>
      </div>

      {/* 3D Tilt Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-3xl p-1 bg-gradient-to-br from-amber-500/50 via-neutral-800 to-amber-700/40 shadow-2xl shadow-amber-500/20 cursor-pointer overflow-hidden group"
      >
        {/* Dynamic Glare effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 230, 150, 0.4) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 70%)`,
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        {/* Card Body */}
        <div className="relative w-full h-full rounded-[22px] bg-gradient-to-b from-zinc-950 via-[#121217] to-black p-5 flex flex-col items-center justify-between border border-white/10 overflow-hidden">
          {/* Top Card Bar */}
          <div className="w-full flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-black/60 border border-amber-500/30 px-2.5 py-1 rounded-full text-[11px] font-bold text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>OFFICIAL EMBLEM</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
              <span>AGRA, UP</span>
            </div>
          </div>

          {/* 3D Center Logo Render */}
          <div className="relative my-auto flex flex-col items-center justify-center">
            <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/30 p-1 bg-gradient-to-br from-amber-400 via-yellow-500 to-red-600 group-hover:scale-105 transition-transform duration-300">
              <img
                src={GYM_IMAGES.logo}
                alt="Muscle Hut Gym 3D Master Logo"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              {/* Metallic shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Card Bottom Meta */}
          <div className="w-full text-center z-10 pt-2 border-t border-white/10">
            <div className="font-display text-2xl tracking-wider text-white flex items-center justify-center gap-2">
              <span>MUSCLE HUT GYM</span>
            </div>
            <p className="text-xs text-amber-400/90 font-medium">
              Sikandra • Dayal Bagh • Agra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
