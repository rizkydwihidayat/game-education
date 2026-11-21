import { Howl, Howler } from 'howler';

class AudioManager {
  constructor() {
    this.bgm = null;
    this.sfx = {};
    this.isMuted = false;
    this.isBgmPlaying = false;
    this.synthCtx = null;
  }

  init() {
    if (this.bgm) return;

    this.bgm = new Howl({
      src: ['/audio/bgm.webm'],
      loop: true,
      volume: 0.5,
      html5: true, // HTML5 Audio for large streaming audio
    });

    const sfxList = ['alarm', 'correct', 'false'];
    sfxList.forEach(name => {
      this.sfx[name] = new Howl({
        src: [`/audio/${name}.webm`],
        volume: 0.8,
      });
    });
  }

  playBGM() {
    this.init();
    if (!this.isBgmPlaying && !this.isMuted) {
      this.bgm.play();
      this.isBgmPlaying = true;
    }
  }

  pauseBGM() {
    if (this.bgm && this.isBgmPlaying) {
      this.bgm.pause();
      this.isBgmPlaying = false;
    }
  }

  toggleMute() {
    this.init();
    this.isMuted = !this.isMuted;
    Howler.mute(this.isMuted);
    
    // If unmuting and bgm wasn't started, start it
    if (!this.isMuted && !this.isBgmPlaying) {
      this.playBGM();
    }
    return this.isMuted;
  }

  playPopSFX() {
    if (this.isMuted) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!this.synthCtx) {
        this.synthCtx = new AudioCtx();
      }
      if (this.synthCtx.state === 'suspended') {
        this.synthCtx.resume();
      }
      const now = this.synthCtx.currentTime;
      const osc = this.synthCtx.createOscillator();
      const gain = this.synthCtx.createGain();

      // Gentle, friendly wooden pop sound (cheerful tap)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(280, now + 0.08);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.synthCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // fallback if web audio context restricted
    }
  }

  playSFX(name) {
    this.init();
    if (this.isMuted) return;

    // Friendly navigation sounds (Kembali / cancel / click)
    if (name === 'pop' || name === 'click' || name === 'back' || name === 'cancel') {
      this.playPopSFX();
      return;
    }

    if (this.sfx[name]) {
      this.sfx[name].play();
    }
  }
}

export const soundManager = new AudioManager();
