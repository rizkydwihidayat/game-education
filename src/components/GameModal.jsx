import React from 'react';
import { X } from 'lucide-react';

export default function GameModal({
  isOpen,
  onClose,
  title,
  titleVariant = 'wood', // 'wood' | 'gold' | 'red' | 'blue'
  showCloseButton = true,
  maxWidth = 'max-w-md',
  children,
}) {
  if (!isOpen) return null;

  // Banner styles matching authentic game UI palettes
  const bannerStyles = {
    wood: {
      container:
        'bg-gradient-to-b from-[#e59840] via-[#c6731d] to-[#9a4b08] border-[#451a03] shadow-[0_5px_0_#2b0d01,0_8px_16px_rgba(0,0,0,0.4)] text-white drop-shadow-[0_2px_0_#2b0d01]',
      showWoodDetails: true,
    },
    gold: {
      container:
        'bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-600 border-amber-300 shadow-[0_4px_0_#78350f,0_6px_12px_rgba(0,0,0,0.3)] text-white drop-shadow-[0_2px_0_#78350f]',
      showWoodDetails: false,
    },
    red: {
      container:
        'bg-gradient-to-b from-rose-500 via-red-500 to-rose-700 border-rose-300 shadow-[0_4px_0_#7f1d1d,0_6px_12px_rgba(0,0,0,0.3)] text-white drop-shadow-[0_2px_0_#7f1d1d]',
      showWoodDetails: false,
    },
    blue: {
      container:
        'bg-gradient-to-b from-sky-400 via-cyan-500 to-blue-600 border-sky-300 shadow-[0_4px_0_#075985,0_6px_12px_rgba(0,0,0,0.3)] text-white drop-shadow-[0_2px_0_#075985]',
      showWoodDetails: false,
    },
  };

  const currentBanner = bannerStyles[titleVariant] || bannerStyles.wood;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in select-none">
      {/* Outer Wooden Board Frame */}
      <div
        className={`relative w-full ${maxWidth} rounded-[28px] sm:rounded-[36px] p-2.5 sm:p-3.5 bg-gradient-to-b from-[#a16207] via-[#78350f] to-[#451a03] shadow-[0_12px_0_#291003,0_20px_35px_rgba(0,0,0,0.7)] border-2 border-[#fef08a]/40 transition-transform scale-100 animate-scale-up`}
      >
        {/* Top Wooden Signboard Title Banner */}
        {title && (
          <div className="absolute -top-5 sm:-top-6.5 left-1/2 -translate-x-1/2 w-[90%] sm:w-[86%] max-w-sm sm:max-w-md z-20 flex justify-center pointer-events-none">
            <div
              className={`relative w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border-2 sm:border-3 flex items-center justify-center text-center select-none ${currentBanner.container}`}
            >
              {currentBanner.showWoodDetails && (
                <>
                  {/* Subtle wood highlight and groove lines */}
                  <div className="absolute inset-x-2 top-1 h-[1.5px] bg-white/35 rounded-full pointer-events-none" />
                  <div className="absolute inset-x-2 bottom-1 h-[1.5px] bg-black/25 rounded-full pointer-events-none" />
                  {/* Wood plank nail/rivet accents */}
                  <span className="absolute left-2.5 sm:left-3.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#5c2709] border border-[#2b0d01] shadow-inner" />
                  <span className="absolute right-2.5 sm:right-3.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#5c2709] border border-[#2b0d01] shadow-inner" />
                </>
              )}
              <span
                className="font-black text-sm sm:text-base md:text-lg tracking-wider uppercase truncate px-2"
                style={{ fontFamily: "'Balsamiq Sans', cursive, sans-serif" }}
              >
                {title}
              </span>
            </div>
          </div>
        )}

        {/* Close Button (3D Cartoon Round X) */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute -top-3.5 -right-3.5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-rose-400 via-rose-500 to-red-600 border-2 sm:border-3 border-white text-white flex items-center justify-center shadow-[0_4px_0_#991b1b,0_6px_10px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-[0_1px_0_#991b1b] hover:scale-110 transition-all cursor-pointer z-30 outline-none"
            title="Tutup"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>
        )}

        {/* Inner Golden/Warm Parchment Board */}
        <div
          className={`relative rounded-[20px] sm:rounded-[26px] p-5 sm:p-7 ${
            title ? 'pt-7 sm:pt-8' : 'pt-5 sm:pt-6'
          } bg-gradient-to-b from-[#fef08a] via-[#fde047] to-[#eab308] border-2 sm:border-4 border-[#b45309] shadow-[inset_0_4px_12px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(113,63,18,0.25)] flex flex-col items-center`}
        >
          {/* Modal Content */}
          <div className="w-full text-[#451a03] font-medium leading-relaxed mt-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
