import React, { useEffect, useState } from 'react';
import RibbonBadge from '../components/RibbonBadge';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 60fps silky smooth progress animation using requestAnimationFrame
    let animationFrameId;
    let startTime = null;
    const duration = 2000; // 2 seconds total loading duration

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const fraction = Math.min(1, elapsed / duration);
      // Gentle ease-out curve for natural deceleration
      const eased = Math.pow(fraction, 0.9) * 100;

      setProgress(Math.min(100, eased));

      if (fraction < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // When loading reaches 100%, automatically transition to home screen after brief pause
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between p-3 sm:p-5 select-none overflow-hidden bg-slate-900">
      {/* Background Illustration with clean open sky and clouds */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 z-0"
        style={{ backgroundImage: `url('/images/bg-main.webp')` }}
      />

      {/* Top Badge: Positioned at the exact same location as Home Screen, BEHIND the overlay (z-10) */}
      <div className="relative z-10 w-full flex flex-col items-center pointer-events-none">
        <div className="h-10 sm:h-11 md:h-12 lg:h-13 pt-1" />
        <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8">
          <RibbonBadge />
        </div>
      </div>

      {/* Dark semi-transparent overlay (50%) in front of background and badge (z-20) */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-20" />

      {/* Loading Progress Bar Container: In FRONT of the 50% dark overlay (z-30) */}
      <div className="absolute bottom-10 sm:bottom-14 md:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 w-[84%] max-w-sm sm:max-w-md md:max-w-lg z-30 flex flex-col items-center gap-2">
        {/* Outer 3D Frame matching game UI style with 4px white border & 50% opacity shadow */}
        <div className="relative w-full h-9 sm:h-11 md:h-12 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-white bg-[#0f172a] shadow-[0_6px_0_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.4)] overflow-hidden p-1 flex items-center">
          
          {/* Inner Smooth Progress Bar with cartoon green gradient & animated stripes */}
          <div
            className="relative h-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition-[width] duration-75 ease-out flex items-center overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Animated Candy Stripes */}
            <div className="absolute inset-0 animate-progress-stripes opacity-90" />

            {/* Top Gloss Shine for 3D depth */}
            <div className="absolute top-0.5 inset-x-1 h-[38%] rounded-full bg-white/40 pointer-events-none" />

            {/* Leading Edge Glow */}
            <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white/70 blur-[1px] rounded-r-full" />
          </div>

          {/* Centered Percentage Text in Balsamiq Sans */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className="text-xs sm:text-sm font-black text-white tracking-widest drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Balsamiq Sans', cursive, sans-serif" }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
