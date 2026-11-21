import React from 'react';

export default function GameButton({
  children,
  onClick,
  variant = 'gold', // 'green' | 'teal' | 'orange' | 'red' | 'blue' | 'grey' | 'gold'
  size = 'md', // 'header' | 'start' | 'sm' | 'md' | 'lg'
  icon,
  className = '',
  disabled = false,
  ...props
}) {
  const variantStyles = {
    gold: 'bg-gradient-to-b from-[#fde047] via-[#facc15] to-[#eab308] text-white drop-shadow-[0_2px_0_#92400e] shadow-[0_5px_0_#92400e,0_8px_16px_rgba(0,0,0,0.3)] active:shadow-[0_1px_0_#92400e]',
    teal: 'bg-gradient-to-b from-[#2dd4bf] via-[#0d9488] to-[#047857] text-white drop-shadow-[0_2px_0_#064e3b] shadow-[0_5px_0_#064e3b,0_8px_16px_rgba(0,0,0,0.3)] active:shadow-[0_1px_0_#064e3b]',
    orange: 'bg-gradient-to-b from-[#fb923c] via-[#f97316] to-[#c2410c] text-white drop-shadow-[0_2px_0_#7c2d12] shadow-[0_5px_0_#7c2d12,0_8px_16px_rgba(0,0,0,0.3)] active:shadow-[0_1px_0_#7c2d12]',
    green: 'bg-gradient-to-b from-emerald-400 via-emerald-500 to-green-600 text-white drop-shadow-[0_1.5px_0_#14532d] shadow-[0_4px_0_#14532d,0_6px_12px_rgba(0,0,0,0.25)] active:shadow-[0_1px_0_#14532d]',
    grey: 'bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 text-white drop-shadow-[0_1.5px_0_#1e293b] shadow-[0_4px_0_#1e293b,0_6px_12px_rgba(0,0,0,0.25)] active:shadow-[0_1px_0_#1e293b]',
    black: 'bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#0f172a] text-white drop-shadow-[0_1.5px_0_#020617] shadow-[0_4px_0_#020617,0_6px_12px_rgba(0,0,0,0.35)] active:shadow-[0_1px_0_#020617]',
    blue: 'bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600 text-white drop-shadow-[0_1.5px_0_#075985] shadow-[0_4px_0_#0369a1,0_6px_12px_rgba(0,0,0,0.25)] active:shadow-[0_1px_0_#0369a1]',
    red: 'bg-gradient-to-b from-rose-400 via-red-500 to-rose-600 text-white drop-shadow-[0_1.5px_0_#7f1d1d] shadow-[0_4px_0_#991b1b,0_6px_12px_rgba(0,0,0,0.25)] active:shadow-[0_1px_0_#991b1b]',
  };

  const sizeStyles = {
    header: 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl sm:rounded-2xl border-2 sm:border-[2.5px]',
    start: 'px-8 sm:px-11 py-3 sm:py-3.5 text-xl sm:text-2xl rounded-2xl sm:rounded-3xl border-3 sm:border-4 shadow-[0_6px_0_#92400e,0_12px_22px_rgba(0,0,0,0.35)] active:shadow-[0_2px_0_#92400e]',
    sm: 'px-4 py-2 text-sm rounded-xl border-2',
    md: 'px-6 py-2.5 text-base sm:text-lg rounded-2xl border-2 sm:border-3',
    lg: 'px-8 py-3.5 text-lg sm:text-xl rounded-2xl sm:rounded-3xl border-3',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative font-black border-white active:translate-y-1 hover:brightness-105 transition-all cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 select-none outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none ${variantStyles[variant] || variantStyles.gold} ${sizeStyles[size] || sizeStyles.md} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
