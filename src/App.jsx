import React, { useState, useEffect } from 'react';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import { soundManager } from './utils/audio';
import { getPlayerProfile } from './utils/playerStorage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('loading'); // 'loading' | 'home' | 'menu' | 'game'
  const [isMuted, setIsMuted] = useState(false);
  const [activePlayer, setActivePlayer] = useState(null);

  useEffect(() => {
    // Check if player profile is already stored
    const saved = getPlayerProfile();
    if (saved) {
      setActivePlayer(saved);
    }
  }, []);

  const handleLoadingFinish = () => {
    setCurrentScreen('home');
    soundManager.playBGM();
  };

  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const handleStartGame = (profile) => {
    setActivePlayer(profile);
    setCurrentScreen('menu');
  };

  const handleBackToHome = () => {
    soundManager.playSFX('back');
    setCurrentScreen('home');
  };

  const handleUpdateProfile = (updated) => {
    setActivePlayer(updated);
  };

  const handleStartMission = (activity) => {
    soundManager.playSFX('correct');
    console.log('Selected mission to play:', activity);
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      {currentScreen === 'loading' && (
        <LoadingScreen onFinish={handleLoadingFinish} />
      )}

      {currentScreen === 'home' && (
        <HomeScreen
          onStartGame={handleStartGame}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
        />
      )}

      {currentScreen === 'menu' && (
        <MainMenuScreen
          playerProfile={activePlayer}
          onUpdateProfile={handleUpdateProfile}
          onBackToHome={handleBackToHome}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onStartMission={handleStartMission}
        />
      )}
    </div>
  );
}
