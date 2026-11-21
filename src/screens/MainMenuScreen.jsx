import React, { useState } from 'react';
import { ArrowLeft, Volume2, VolumeX, Sparkles, Play, Award, RotateCcw } from 'lucide-react';
import GameButton from '../components/GameButton';
import GameModal from '../components/GameModal';
import ProfileSetupModal from './ProfileSetupModal';
import { soundManager } from '../utils/audio';
import { savePlayerProfile } from '../utils/playerStorage';

const ACTIVITIES = [
  {
    id: 'bangun-pagi',
    number: 1,
    title: 'Bangun Pagi',
    image: '/images/menu-bangun-pagi.webp',
    color: 'from-[#fef08a] via-[#fde047] to-[#eab308]',
    borderColor: 'border-amber-300',
    shadowColor: '#92400e',
    badgeText: 'Misi 1',
    description:
      'Ayo biasakan bangun pagi tepat waktu! Merapikan tempat tidur dan menghirup udara segar membuat tubuh kita sehat dan bersemangat.',
  },
  {
    id: 'beribadah',
    number: 2,
    title: 'Beribadah',
    image: '/images/menu-beribadah.webp',
    color: 'from-[#a7f3d0] via-[#34d399] to-[#059669]',
    borderColor: 'border-emerald-300',
    shadowColor: '#064e3b',
    badgeText: 'Misi 2',
    description:
      'Beribadah dengan rajin dan khusyuk sebagai wujud rasa syukur atas nikmat dan berkah yang kita terima setiap hari.',
  },
  {
    id: 'berolahraga',
    number: 3,
    title: 'Berolahraga',
    image: '/images/menu-berolahraga.webp',
    color: 'from-[#fed7aa] via-[#fb923c] to-[#ea580c]',
    borderColor: 'border-orange-300',
    shadowColor: '#7c2d12',
    badgeText: 'Misi 3',
    description:
      'Olahraga pagi membuat otot kuat, melancarkan peredaran darah, dan menjaga daya tahan tubuh agar tidak mudah sakit.',
  },
  {
    id: 'makan-sehat',
    number: 4,
    title: 'Makan Sehat dan Bergizi',
    image: '/images/menu-makan-sehat.webp',
    color: 'from-[#fecdd3] via-[#fb7185] to-[#e11d48]',
    borderColor: 'border-rose-300',
    shadowColor: '#881337',
    badgeText: 'Misi 4',
    description:
      'Sarapan dengan menu 4 sehat 5 sempurna. Perbanyak sayur, buah, protein, dan minum air putih secukupnya setiap hari!',
  },
  {
    id: 'gemar-belajar',
    number: 5,
    title: 'Gemar Belajar',
    image: '/images/menu-gemar-belajar.webp',
    color: 'from-[#bae6fd] via-[#38bdf8] to-[#0284c7]',
    borderColor: 'border-sky-300',
    shadowColor: '#075985',
    badgeText: 'Misi 5',
    description:
      'Membaca buku dan mengerjakan tugas sekolah dengan riang gembira. Belajar hal baru membuka jendela wawasan dunia!',
  },
  {
    id: 'bermasyarakat',
    number: 6,
    title: 'Bermasyarakat',
    image: '/images/menu-bermasyarakat.webp',
    color: 'from-[#ddd6fe] via-[#a855f7] to-[#7e22ce]',
    borderColor: 'border-purple-300',
    shadowColor: '#581c87',
    badgeText: 'Misi 6',
    description:
      'Menjadi anak ramah yang suka menolong teman, tetangga, dan aktif dalam kegiatan kebersamaan yang menyenangkan.',
  },
  {
    id: 'tidur-cepat',
    number: 7,
    title: 'Tidur Cepat',
    image: '/images/menu-tidur-cepat.webp',
    color: 'from-[#c7d2fe] via-[#818cf8] to-[#4338ca]',
    borderColor: 'border-indigo-300',
    shadowColor: '#312e81',
    badgeText: 'Misi 7',
    description:
      'Jangan begadang ya! Tidur cukup dan lebih awal membantu tubuh beristirahat maksimal agar esok hari bangun bugar kembali.',
  },
];

export default function MainMenuScreen({
  playerProfile,
  onUpdateProfile,
  onBackToHome,
  isMuted,
  onToggleMute,
  onStartMission,
}) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleCardClick = (activity) => {
    soundManager.playSFX('correct');
    setSelectedActivity(activity);
  };

  const handleStartMissionClick = () => {
    soundManager.playSFX('correct');
    if (onStartMission && selectedActivity) {
      onStartMission(selectedActivity);
    }
    setSelectedActivity(null);
  };

  const handleSaveProfile = (updated) => {
    savePlayerProfile(updated);
    if (onUpdateProfile) onUpdateProfile(updated);
    setShowProfileModal(false);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between p-3 sm:p-5 select-none overflow-x-hidden">
      {/* Background Graphic: Fixed GPU-accelerated layer without resize transition glitches */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <img
          src="/images/bg-pilih-misi.webp"
          alt="Pilih Misi Background"
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
        {/* Soft Vignette Overlay for focus & readability */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* TOP HEADER BAR */}
      <header className="relative z-30 w-full flex items-center justify-between pt-1 gap-2">
        {/* Left: Player Profile Tag (Clickable to edit) */}
        {playerProfile ? (
          <button
            onClick={() => setShowProfileModal(true)}
            className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border-2 border-amber-300/80 text-white shadow-lg active:scale-95 transition-all cursor-pointer group"
            title="Ubah Profil Pemain"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-gradient-to-b from-[#e59840] to-[#9a4b08] border border-white flex items-center justify-center shrink-0">
              <img
                src={playerProfile.gender === 'boy' ? '/images/avatar-boy.png' : '/images/avatar-girl.png'}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start leading-none pr-1">
              <span className="text-[10px] text-amber-200 font-bold uppercase tracking-wider">
                Pemain
              </span>
              <span className="text-xs sm:text-sm font-black text-white tracking-wide truncate max-w-[100px] sm:max-w-[140px]">
                {playerProfile.name}
              </span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {/* Center: Title Signboard "PILIH MISI" */}
        <div className="hidden sm:flex items-center justify-center">
          <div className="relative px-6 sm:px-9 py-2 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#e59840] via-[#c6731d] to-[#9a4b08] border-2 sm:border-3 border-[#451a03] shadow-[0_5px_0_#2b0d01,0_8px_16px_rgba(0,0,0,0.4)] flex items-center justify-center text-center">
            {/* Wooden plank detail lines */}
            <div className="absolute inset-x-2 top-1 h-[1.5px] bg-white/35 rounded-full pointer-events-none" />
            <div className="absolute inset-x-2 bottom-1 h-[1.5px] bg-black/25 rounded-full pointer-events-none" />
            <span className="absolute left-2.5 sm:left-3.5 w-1.5 h-1.5 rounded-full bg-[#5c2709] border border-[#2b0d01] shadow-inner" />
            <span className="absolute right-2.5 sm:right-3.5 w-1.5 h-1.5 rounded-full bg-[#5c2709] border border-[#2b0d01] shadow-inner" />
            
            <h1 className="font-black text-base sm:text-xl text-white tracking-wider uppercase drop-shadow-[0_2px_0_#2b0d01] select-none">
              Pilih Misi
            </h1>
          </div>
        </div>

        {/* Right: Sound & Kembali Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Tombol Musik (Same as HomeScreen) */}
          <GameButton
            onClick={onToggleMute}
            variant={isMuted ? 'grey' : 'green'}
            size="header"
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

          {/* Tombol Kembali (Warna Hitam) */}
          <GameButton
            onClick={() => {
              soundManager.playSFX('back');
              if (onBackToHome) onBackToHome();
            }}
            variant="black"
            size="header"
            icon={<ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />}
            title="Kembali ke Halaman Utama"
          >
            Kembali
          </GameButton>
        </div>
      </header>

      {/* Mobile Title Banner (Visible on small screens) */}
      <div className="sm:hidden relative z-20 flex justify-center mt-3">
        <div className="relative px-6 py-1.5 rounded-xl bg-gradient-to-b from-[#e59840] via-[#c6731d] to-[#9a4b08] border-2 border-[#451a03] shadow-[0_4px_0_#2b0d01,0_6px_12px_rgba(0,0,0,0.4)] flex items-center justify-center text-center">
          <h1 className="font-black text-sm text-white tracking-wider uppercase drop-shadow-[0_2px_0_#2b0d01]">
            Pilih Misi
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT: 7 ACTIVITY CARDS GRID */}
      <main className="relative z-20 w-full flex-1 flex flex-col items-center justify-center py-4 sm:py-6">
        <div className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 px-1 sm:px-2">
          {ACTIVITIES.map((activity) => (
            <button
              key={activity.id}
              onClick={() => handleCardClick(activity)}
              type="button"
              className="group relative w-[calc(50%-0.45rem)] sm:w-48 md:w-56 lg:w-60 flex flex-col items-center p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#e59840] via-[#c6731d] to-[#9a4b08] border-2 sm:border-3 border-[#451a03] shadow-[0_6px_0_#2b0d01,0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_0_#2b0d01,0_14px_24px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_2px_0_#2b0d01] transition-all duration-150 cursor-pointer outline-none select-none hover:scale-[1.03]"
            >
              {/* Mission Number Ribbon Pill */}
              <div className="absolute -top-2.5 sm:-top-3 px-2.5 sm:px-3 py-0.5 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border border-white text-[#451a03] font-black text-[10px] sm:text-xs shadow-md tracking-wider uppercase z-10">
                {activity.badgeText}
              </div>

              {/* Inner Parchment Frame with Image */}
              <div className="relative w-full rounded-xl sm:rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fde68a] border sm:border-2 border-[#b45309] shadow-inner flex flex-col items-center justify-center overflow-hidden">
                {/* Visual Icon Illustration */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
              </div>

              {/* Activity Title Header */}
              <div className="w-full mt-2 sm:mt-2.5 px-1 flex items-center justify-center text-center min-h-[38px] sm:min-h-[44px]">
                <span className="font-black text-xs sm:text-sm md:text-base text-white tracking-wide leading-tight uppercase drop-shadow-[0_2px_0_#2b0d01]">
                  {activity.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* FOOTER HINT */}
      <footer className="relative z-20 w-full flex justify-center pb-1">
        <p className="text-[11px] sm:text-xs text-white/80 font-bold bg-slate-900/60 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/20 shadow-sm text-center">
          Pilih salah satu aktivitas di atas untuk memulai petualangan belajarmu!
        </p>
      </footer>

      {/* ACTIVITY DETAIL POPUP MODAL */}
      {selectedActivity && (
        <GameModal
          isOpen={Boolean(selectedActivity)}
          onClose={() => setSelectedActivity(null)}
          title={selectedActivity.title}
          titleVariant="wood"
          maxWidth="max-w-md sm:max-w-lg"
        >
          <div className="w-full flex flex-col items-center space-y-4 pt-2">
            {/* Visual Header in Modal with Warm Wooden Brown Background */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#e59840] via-[#c6731d] to-[#9a4b08] border-3 sm:border-4 border-amber-300 shadow-[0_6px_0_#381403,0_10px_20px_rgba(0,0,0,0.35)] p-2.5 sm:p-3 flex items-center justify-center animate-scale-up">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>

            {/* Description Text */}
            <div className="w-full text-center px-2 sm:px-4">
              <p className="text-xs sm:text-sm text-[#78350f] font-bold leading-relaxed">
                {selectedActivity.description}
              </p>
            </div>

            {/* Action Buttons: Responsive vertical stack on mobile, 50/50 grid on sm+ */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-4 w-full max-w-sm pt-2">
              <GameButton
                type="button"
                variant="teal"
                size="md"
                onClick={handleStartMissionClick}
                icon={<Play className="w-4 h-4 fill-white stroke-none" />}
                className="w-full py-2.5 sm:py-3 order-1 sm:order-2"
              >
                Mulai Misi
              </GameButton>

              <GameButton
                type="button"
                variant="grey"
                size="md"
                onClick={() => {
                  soundManager.playSFX('back');
                  setSelectedActivity(null);
                }}
                className="w-full py-2.5 sm:py-3 order-2 sm:order-1"
              >
                Batal
              </GameButton>
            </div>
          </div>
        </GameModal>
      )}

      {/* PROFILE EDIT MODAL */}
      <ProfileSetupModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        initialData={playerProfile}
        onComplete={handleSaveProfile}
      />
    </div>
  );
}
