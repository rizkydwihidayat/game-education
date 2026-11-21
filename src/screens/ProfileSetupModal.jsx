import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import GameModal from '../components/GameModal';
import GameButton from '../components/GameButton';
import { soundManager } from '../utils/audio';

export default function ProfileSetupModal({
  isOpen,
  onClose,
  onComplete,
  initialData = null,
}) {
  const [step, setStep] = useState(1); // 1: Input Nama, 2: Pilih Gender
  const [name, setName] = useState('');
  const [gender, setGender] = useState('boy'); // 'boy' | 'girl'
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setName(initialData.name || '');
        setGender(initialData.gender || 'boy');
        setStep(1);
      } else {
        setName('');
        setGender('boy');
        setStep(1);
      }
      // Auto-focus input on open
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 150);
    }
  }, [isOpen, initialData]);

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    if (name.trim().length < 2) return;
    soundManager.playSFX('correct');
    setStep(2);
  };

  const handleBackStep = () => {
    soundManager.playSFX('back');
    setStep(1);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 100);
  };

  const handleSelectGender = (selected) => {
    soundManager.playSFX('correct');
    setGender(selected);
  };

  const handleSaveAndStart = () => {
    soundManager.playSFX('correct');
    if (onComplete) {
      onComplete({
        name: name.trim(),
        gender,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <GameModal
      isOpen={isOpen}
      onClose={onClose}
      title={step === 1 ? 'HAI, SIAPA NAMA KAMU?' : 'PILIH JENIS KELAMIN KAMU'}
      titleVariant="wood"
      maxWidth="max-w-md sm:max-w-lg"
    >
      <div className="w-full flex flex-col items-center">
        {/* STEP 1: INPUT NAMA */}
        {step === 1 && (
          <form
            onSubmit={handleNextStep}
            className="w-full flex flex-col items-center space-y-4 sm:space-y-5 pt-3"
          >
            <p className="text-xs sm:text-sm text-[#78350f] font-bold text-center leading-relaxed px-4">
              Ketik namamu di bawah ini untuk memulai petualangan aktivitas harian!
            </p>

            {/* Cartoon 3D Input Container */}
            <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center">
              <div className="relative w-full rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-[#fde047] to-[#d97706] shadow-[0_4px_0_#92400e,0_8px_16px_rgba(0,0,0,0.2)] border-2 sm:border-3 border-white">
                <input
                  ref={inputRef}
                  type="text"
                  maxLength={18}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Isi Nama Kamu Disini"
                  autoComplete="off"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[#fffdf0] text-center font-black text-lg sm:text-xl text-[#451a03] placeholder-[#b45309]/55 outline-none focus:bg-white transition-all shadow-inner tracking-wide"
                  style={{ fontFamily: "'Balsamiq Sans', cursive, sans-serif" }}
                />
              </div>

              {name.trim().length > 0 && name.trim().length < 2 && (
                <span className="text-[11px] font-bold text-rose-600 mt-1.5 animate-pulse">
                  Nama minimal 2 huruf ya!
                </span>
              )}
            </div>

            {/* Action Button: Selanjutnya (High contrast Teal, Full width) */}
            <div className="w-full max-w-sm sm:max-w-md pt-1">
              <GameButton
                type="submit"
                variant="teal"
                size="md"
                disabled={name.trim().length < 2}
                className="w-full py-3 sm:py-3.5 text-base sm:text-lg"
              >
                Selanjutnya
              </GameButton>
            </div>
          </form>
        )}

        {/* STEP 2: PILIH GENDER / KARAKTER */}
        {step === 2 && (
          <div className="w-full flex flex-col items-center space-y-4 pt-2">
            <p className="text-xs sm:text-sm text-[#78350f] font-bold text-center">
              Halo, <span className="text-[#451a03] font-black underline">{name.trim()}</span>! Pilih karaktermu:
            </p>

            {/* 2 Character Cards (Laki-laki & Perempuan) */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 w-full max-w-sm sm:max-w-md px-1">
              {/* Card Laki-Laki */}
              <button
                type="button"
                onClick={() => handleSelectGender('boy')}
                className={`relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl transition-all duration-200 cursor-pointer outline-none select-none ${
                  gender === 'boy'
                    ? 'bg-gradient-to-b from-[#e59840] via-[#c6731d] to-[#9a4b08] border-3 sm:border-4 border-emerald-300 ring-4 ring-emerald-400 shadow-[0_6px_0_#381403,0_10px_20px_rgba(0,0,0,0.35)] scale-105'
                    : 'bg-gradient-to-b from-[#b45d13] to-[#6e330a] border-2 sm:border-3 border-amber-200/50 opacity-80 hover:opacity-100 hover:scale-[1.02] shadow-[0_4px_0_#381403]'
                }`}
              >
                {/* Active Checkmark Badge */}
                {gender === 'boy' && (
                  <div className="absolute -top-2.5 -right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#2dd4bf] via-[#0d9488] to-[#047857] border-2 sm:border-3 border-white text-white flex items-center justify-center shadow-md animate-scale-up z-10">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[4]" />
                  </div>
                )}

                {/* Card Title Header */}
                <span className="text-xs sm:text-sm font-black text-white tracking-wider uppercase drop-shadow-[0_2px_0_#381403] mb-2">
                  Laki-Laki
                </span>

                {/* Character Avatar (No drop-shadow, transparent background) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-1">
                  <img
                    src="/images/avatar-boy.png"
                    alt="Karakter Laki-Laki"
                    className={`w-full h-full object-contain transition-transform duration-300 ${
                      gender === 'boy' ? 'scale-110' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Card Perempuan */}
              <button
                type="button"
                onClick={() => handleSelectGender('girl')}
                className={`relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl transition-all duration-200 cursor-pointer outline-none select-none ${
                  gender === 'girl'
                    ? 'bg-gradient-to-b from-[#e59840] via-[#c6731d] to-[#9a4b08] border-3 sm:border-4 border-emerald-300 ring-4 ring-emerald-400 shadow-[0_6px_0_#381403,0_10px_20px_rgba(0,0,0,0.35)] scale-105'
                    : 'bg-gradient-to-b from-[#b45d13] to-[#6e330a] border-2 sm:border-3 border-amber-200/50 opacity-80 hover:opacity-100 hover:scale-[1.02] shadow-[0_4px_0_#381403]'
                }`}
              >
                {/* Active Checkmark Badge */}
                {gender === 'girl' && (
                  <div className="absolute -top-2.5 -right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#2dd4bf] via-[#0d9488] to-[#047857] border-2 sm:border-3 border-white text-white flex items-center justify-center shadow-md animate-scale-up z-10">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[4]" />
                  </div>
                )}

                {/* Card Title Header */}
                <span className="text-xs sm:text-sm font-black text-white tracking-wider uppercase drop-shadow-[0_2px_0_#381403] mb-2">
                  Perempuan
                </span>

                {/* Character Avatar (No drop-shadow, transparent background) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-1">
                  <img
                    src="/images/avatar-girl.png"
                    alt="Karakter Perempuan"
                    className={`w-full h-full object-contain transition-transform duration-300 ${
                      gender === 'girl' ? 'scale-110' : ''
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Bottom Actions: Responsive (Vertical stack on mobile, 50/50 grid on sm+) */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-4 w-full max-w-sm sm:max-w-md pt-2">
              <GameButton
                type="button"
                variant="teal"
                size="md"
                onClick={handleSaveAndStart}
                icon={<Sparkles className="w-4 h-4 fill-white stroke-none" />}
                className="w-full py-2.5 sm:py-3.5 order-1 sm:order-2"
              >
                OK, Simpan
              </GameButton>

              <GameButton
                type="button"
                variant="black"
                size="md"
                onClick={handleBackStep}
                icon={<ArrowLeft className="w-4 h-4 stroke-[3]" />}
                className="w-full py-2.5 sm:py-3.5 order-2 sm:order-1"
              >
                Kembali
              </GameButton>
            </div>
          </div>
        )}
      </div>
    </GameModal>
  );
}
