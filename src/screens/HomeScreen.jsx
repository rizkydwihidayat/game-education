import React, { useState, useEffect } from 'react';
import { Info, Volume2, VolumeX, LogOut, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';
import { getPlayerProfile, savePlayerProfile } from '../utils/playerStorage';
import GameModal from '../components/GameModal';
import GameButton from '../components/GameButton';
import RibbonBadge from '../components/RibbonBadge';
import ProfileSetupModal from './ProfileSetupModal';

export default function HomeScreen({ onStartGame, isMuted, onToggleMute }) {
  const [showExitModal, setShowExitModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [playerProfile, setPlayerProfile] = useState(null);

  useEffect(() => {
    // Load saved player profile if exists
    const saved = getPlayerProfile();
    if (saved) setPlayerProfile(saved);
  }, []);

  const handleMulaiClick = () => {
    soundManager.playSFX('correct');
    if (playerProfile) {
      if (onStartGame) onStartGame(playerProfile);
    } else {
      setShowProfileModal(true);
    }
  };

  const handleProfileComplete = (profile) => {
    savePlayerProfile(profile);
    setPlayerProfile(profile);
    setShowProfileModal(false);

    // Playful victory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.55 },
      });
    } catch {
      // ignore if canvas-confetti context not ready
    }

    if (onStartGame) {
      onStartGame(profile);
    }
  };

  const handleToggleSound = () => {
    onToggleMute();
  };

  const handleConfirmExit = () => {
    soundManager.playSFX('back');
    setShowExitModal(false);
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between p-3 sm:p-5 select-none overflow-hidden bg-slate-900">
      {/* Background Graphic (Clean sky with clouds) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url('/images/bg-main.webp')` }}
      />
      {/* Subtle overlay vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-30 w-full flex items-center justify-between pt-1">
        {/* Left: Saved Player Profile Tag (if exists) */}
        {playerProfile ? (
          <button
            onClick={() => setShowProfileModal(true)}
            className="flex items-center gap-2 bg-slate-900/65 hover:bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 text-white shadow-md active:scale-95 transition-all cursor-pointer"
            title="Ubah Profil Pemain"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden bg-amber-400 flex items-center justify-center">
              <img
                src={playerProfile.gender === 'boy' ? '/images/avatar-boy.png' : '/images/avatar-girl.png'}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs sm:text-sm font-black text-amber-300 tracking-wide">
              {playerProfile.name}
            </span>
          </button>
        ) : (
          <div /> /* Spacer */
        )}

        {/* Right: Info, Sound, and Exit buttons on top right using consistent GameButton */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Tombol Info */}
          <GameButton
            variant="blue"
            size="header"
            onClick={() => {
              soundManager.playSFX('correct');
              setShowInfoModal(true);
            }}
            icon={<Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />}
            title="Petunjuk Permainan"
          >
            Info
          </GameButton>

          {/* Tombol Musik (Toggle Sound ON / OFF) */}
          <GameButton
            variant={isMuted ? 'grey' : 'green'}
            size="header"
            onClick={handleToggleSound}
            icon={
              isMuted ? (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
              )
            }
            title={isMuted ? 'Nyalakan Musik' : 'Matikan Musik'}
          >
            Musik
          </GameButton>

          {/* Tombol Keluar (Exit) */}
          <GameButton
            variant="red"
            size="header"
            onClick={() => {
              soundManager.playSFX('false');
              setShowExitModal(true);
            }}
            icon={<LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />}
            title="Keluar Permainan"
          >
            Keluar
          </GameButton>
        </div>
      </header>

      {/* Main Content: Centered on mobile for easy thumb reach, positioned in cloud area on sm+ */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center sm:justify-start pt-0 sm:pt-16 md:pt-20 lg:pt-24 -mt-10 sm:mt-0 gap-3.5 sm:gap-5">
        {/* Ribbon Badge */}
        <RibbonBadge />

        {/* Start / Continue Button: Consistent 3D GameButton style */}
        <GameButton
          variant="gold"
          size="start"
          onClick={handleMulaiClick}
          className="tracking-wide"
          title={playerProfile ? 'Lanjutkan Permainan' : 'Mulai Bermain'}
        >
          {playerProfile ? 'Lanjutkan Permainan' : 'Mulai Sekarang'}
        </GameButton>
      </main>

      {/* Profile Setup Modal (Step 1: Input Nama, Step 2: Pilih Gender) */}
      <ProfileSetupModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        onComplete={handleProfileComplete}
        initialData={playerProfile}
      />

      {/* Game Style Modal: Keluar Permainan */}
      <GameModal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        maxWidth="max-w-sm sm:max-w-md"
      >
        <div className="flex flex-col items-center text-center space-y-4 pt-1">
          {/* 3D Cartoon Icon Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-b from-rose-400 via-rose-500 to-red-600 border-2 sm:border-3 border-white shadow-[0_4px_0_#991b1b,0_8px_15px_rgba(0,0,0,0.25)] flex items-center justify-center text-white transform -rotate-3 hover:rotate-0 transition-transform">
            <LogOut className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </div>

          <div className="space-y-1.5 px-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#451a03] drop-shadow-sm">
              Yakin Ingin Keluar?
            </h3>
            <p className="text-xs sm:text-sm text-[#78350f] font-semibold leading-relaxed">
              Apakah kamu yakin ingin menutup game dan beristirahat sejenak?
            </p>
          </div>

          {/* Action Buttons: Responsive vertical stack on mobile, horizontal on sm+ */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full pt-2">
            <GameButton
              variant="red"
              onClick={handleConfirmExit}
              className="w-full sm:flex-1 uppercase order-1 sm:order-2"
            >
              Ya, Keluar
            </GameButton>
            <GameButton
              variant="green"
              onClick={() => setShowExitModal(false)}
              className="w-full sm:flex-1 uppercase order-2 sm:order-1"
            >
              Batal
            </GameButton>
          </div>
        </div>
      </GameModal>

      {/* Game Style Modal: Petunjuk / Informasi */}
      <GameModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        maxWidth="max-w-md"
      >
        <div className="flex flex-col items-center space-y-3 pt-1 text-center">
          {/* Inner Content Parchment Card */}
          <div className="w-full bg-white/85 border-2 border-[#b45309]/30 rounded-2xl p-4 sm:p-5 shadow-inner text-left space-y-2.5">
            <p className="text-xs sm:text-sm text-[#451a03] font-bold leading-relaxed">
              <strong>MyDaily Activities</strong> adalah game edukasi interaktif untuk melatih kebiasaan mandiri anak melalui serangkaian misi aktivitas harian yang menyenangkan!
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-black text-[#78350f] pt-1">
              <div className="bg-amber-100/80 p-2 rounded-xl border border-amber-300/60 flex items-center gap-1.5">
                <span>⏰ Bangun Pagi</span>
              </div>
              <div className="bg-amber-100/80 p-2 rounded-xl border border-amber-300/60 flex items-center gap-1.5">
                <span>🚿 Mandi Bersih</span>
              </div>
              <div className="bg-amber-100/80 p-2 rounded-xl border border-amber-300/60 flex items-center gap-1.5">
                <span>🍳 Sarapan Sehat</span>
              </div>
              <div className="bg-amber-100/80 p-2 rounded-xl border border-amber-300/60 flex items-center gap-1.5">
                <span>🎒 Siap Sekolah</span>
              </div>
            </div>
          </div>

          {/* Close Action Button */}
          <GameButton
            variant="gold"
            onClick={() => setShowInfoModal(false)}
            className="w-full mt-1 uppercase"
          >
            Mengerti &amp; Mulai
          </GameButton>
        </div>
      </GameModal>
    </div>
  );
}
