import { Howl, Howler } from 'howler';

class AudioManager {
  constructor() {
    this.bgm = null;
    this.sfx = {};
    this.isMuted = false;
    this.shouldPlayBgm = true;
    this.synthCtx = null;

    if (typeof window !== 'undefined') {
      this.init();

      const resumeAndPlayBGM = () => {
        // Resume Web Audio context if suspended
        if (Howler.ctx && Howler.ctx.state === 'suspended') {
          Howler.ctx.resume().catch(() => {});
        }
        if (this.synthCtx && this.synthCtx.state === 'suspended') {
          this.synthCtx.resume().catch(() => {});
        }

        // Resume BGM if needed and not already actively playing
        if (!this.isMuted && this.shouldPlayBgm && this.bgm) {
          if (!this.bgm.playing()) {
            try {
              this.bgm.play();
            } catch (e) {
              // ignore
            }
          }
        }
      };

      // 1. Automatic audio unlock & resume on any user interaction
      const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'];
      events.forEach((evt) => {
        window.addEventListener(evt, resumeAndPlayBGM, { passive: true });
      });

      // 2. Handle tab/browser visibility changes (e.g. minimizing app, switching tabs, returning)
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.shouldPlayBgm = !this.isMuted;
          resumeAndPlayBGM();
        } else {
          // Pause when tab/screen is hidden to conserve device battery
          if (this.bgm && this.bgm.playing()) {
            try {
              this.bgm.pause();
            } catch (e) {}
          }
        }
      });

      // 3. Handle Back-Forward Cache (bfcache) restoration when returning to the game
      window.addEventListener('pageshow', () => {
        this.shouldPlayBgm = !this.isMuted;
        resumeAndPlayBGM();
      });

      // 4. Handle window focus restoration
      window.addEventListener('focus', () => {
        this.shouldPlayBgm = !this.isMuted;
        resumeAndPlayBGM();
      });
    }
  }

  init() {
    if (this.bgm) return;

    // Support both MP3 and WebM for 100% cross-platform compatibility (iOS Safari & Android Chrome)
    this.bgm = new Howl({
      src: ['/audio/bgm.mp3', '/audio/bgm.webm'],
      html5: true, // Stream audio via HTML5 Audio - zero decode delay, never blocks main thread on reload
      loop: true,
      volume: 0.45,
      autoplay: false,
      preload: true,
      onloaderror: (id, err) => {
        console.warn('BGM load error:', err);
      },
    });

    const sfxList = ['alarm', 'correct', 'false'];
    sfxList.forEach((name) => {
      this.sfx[name] = new Howl({
        src: [`/audio/${name}.mp3`, `/audio/${name}.webm`],
        volume: 0.8,
        preload: true,
      });
    });
  }

  playBGM() {
    this.init();
    this.shouldPlayBgm = true;
    if (this.isMuted) return;

    if (Howler.ctx && Howler.ctx.state === 'suspended') {
      Howler.ctx.resume().catch(() => {});
    }

    if (this.bgm && !this.bgm.playing()) {
      try {
        this.bgm.play();
      } catch (err) {
        console.warn('Autoplay blocked, will start on first touch:', err);
      }
    }
  }

  pauseBGM() {
    this.shouldPlayBgm = false;
    if (this.bgm && this.bgm.playing()) {
      try {
        this.bgm.pause();
      } catch (e) {}
    }
  }

  toggleMute() {
    this.init();
    this.isMuted = !this.isMuted;
    Howler.mute(this.isMuted);

    if (!this.isMuted) {
      this.shouldPlayBgm = true;
      this.playBGM();
    } else {
      this.shouldPlayBgm = false;
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
        this.synthCtx.resume().catch(() => {});
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
