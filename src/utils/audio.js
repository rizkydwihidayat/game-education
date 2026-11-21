import { Howl, Howler } from 'howler';

class AudioManager {
  constructor() {
    this.bgm = null;
    this.sfx = {};
    this.isMuted = false;
    this.isBgmPlaying = false;
    this.synthCtx = null;
    this.unlocked = false;

    // Automatic audio unlock listener on first user interaction (critical for mobile iOS/Android)
    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        if (Howler.ctx && Howler.ctx.state === 'suspended') {
          Howler.ctx.resume();
        }
        if (!this.isMuted && !this.isBgmPlaying && this.bgm) {
          try {
            this.bgm.play();
            this.isBgmPlaying = true;
          } catch (e) {
            // ignore
          }
        }
      };

      window.addEventListener('click', unlockAudio, { passive: true });
      window.addEventListener('touchstart', unlockAudio, { passive: true });
      window.addEventListener('keydown', unlockAudio, { passive: true });
    }
  }

  init() {
    if (this.bgm) return;

    // Support both MP3 and WebM for 100% cross-platform compatibility (iOS Safari & Android Chrome)
    this.bgm = new Howl({
      src: ['/audio/bgm.mp3', '/audio/bgm.webm'],
      loop: true,
      volume: 0.45,
      autoplay: false,
      preload: true,
      onplay: () => {
        this.isBgmPlaying = true;
      },
      onpause: () => {
        this.isBgmPlaying = false;
      },
      onstop: () => {
        this.isBgmPlaying = false;
      },
      onloaderror: (id, err) => {
        console.warn('BGM load error:', err);
      },
    });

    const sfxList = ['alarm', 'correct', 'false'];
    sfxList.forEach(name => {
      this.sfx[name] = new Howl({
        src: [`/audio/${name}.mp3`, `/audio/${name}.webm`],
        volume: 0.8,
        preload: true,
      });
    });
  }

  playBGM() {
    this.init();
    if (this.isMuted) return;

    if (Howler.ctx && Howler.ctx.state === 'suspended') {
      Howler.ctx.resume();
    }

    if (!this.isBgmPlaying && this.bgm) {
      try {
        this.bgm.play();
      } catch (err) {
        console.warn('Autoplay blocked, will start on first touch:', err);
      }
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

    if (!this.isMuted) {
      this.playBGM();
    } else {
      this.pauseBGM();
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
