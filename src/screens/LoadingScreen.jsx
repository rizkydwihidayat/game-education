import React, { useEffect, useRef } from 'react';
import RibbonBadge from '../components/RibbonBadge';

export default function LoadingScreen({ onFinish }) {
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let startTime = null;
    let finishTimeout = null;
    const duration = 1800; // 1.8s silky smooth loading duration

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const fraction = Math.min(1, elapsed / duration);

      // Natural game loading ease-out curve (responsive early start, gentle settle)
      const eased = 1 - Math.pow(1 - fraction, 2.2);
      const currentPercent = Math.min(100, Math.max(0, eased * 100));
      const rounded = Math.round(currentPercent);

      // Direct lock-step DOM updates (prevents React state batching and CSS transition lag)
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${currentPercent}%`;
      }
      if (progressTextRef.current) {
        progressTextRef.current.textContent = `${rounded}%`;
      }

      if (fraction < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Automatically transition to home screen after reaching 100%
        finishTimeout = setTimeout(() => {
          if (onFinish) onFinish();
        }, 200);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (finishTimeout) clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between p-3 sm:p-5 select-none overflow-hidden bg-slate-900">
      {/* Background Illustration (Responsive: Portrait on mobile, Landscape on sm+) */}
      <div className="absolute inset-0 bg-game-main z-0 pointer-events-none" />

      {/* Top Badge: Positioned at the exact same location as Home Screen, BEHIND the overlay (z-10) */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-start pt-[12vh] sm:pt-16 md:pt-20 lg:pt-24 pointer-events-none">
        <RibbonBadge />
      </div>

      {/* Dark semi-transparent overlay (50%) in front of background and badge (z-20) */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-20" />

      {/* Loading Progress Bar Container: Elevated on mobile for comfortable eye-level reading (z-30) */}
      <div className="absolute bottom-[22vh] sm:bottom-28 md:bottom-32 lg:bottom-36 left-1/2 -translate-x-1/2 w-[84%] max-w-sm sm:max-w-md md:max-w-lg z-30 flex flex-col items-center gap-2">
        {/* Outer 3D Frame matching game UI style with 4px white border & 50% opacity shadow */}
        <div className="relative w-full h-9 sm:h-11 md:h-12 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-white bg-[#0f172a] shadow-[0_6px_0_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.4)] overflow-hidden p-1 flex items-center">
          
          {/* Inner Smooth Progress Bar with cartoon green gradient & animated stripes */}
          <div
            ref={progressBarRef}
            className="relative h-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center overflow-hidden"
            style={{ width: '0%' }}
          >
            {/* Animated Candy Stripes */}
            <div className="absolute inset-0 animate-progress-stripes opacity-90" />

            {/* Top Gloss Shine for 3D depth */}
            <div className="absolute top-0.5 inset-x-1 h-[38%] rounded-full bg-white/40 pointer-events-none" />

            {/* Leading Edge Glow */}
            <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white/70 blur-[1px] rounded-r-full" />
          </div>

          {/* Centered Percentage Text in Balsamiq Sans (Directly synchronized with progress bar) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={progressTextRef}
              className="text-xs sm:text-sm font-black text-white tracking-widest drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Balsamiq Sans', cursive, sans-serif" }}
            >
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
