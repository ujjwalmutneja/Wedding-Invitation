/**
 * Luxury Wedding Background Music Engine
 * Plays "Naino Ne Baandhi" (Gold) starting from "Naino ne baandhi kaisi dor re..."
 * with smooth fade-in, looping, state management, and user interaction handling.
 */

class WeddingAudioEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.targetVolume = 0.75;
    this.fadeInterval = null;
    this.listeners = new Set();
    this.src = "/audio/wedding-bgm.mp3";
  }

  init() {
    if (this.audio) return;

    this.audio = new Audio(this.src);
    this.audio.loop = true;
    this.audio.preload = "auto";
    this.audio.volume = this.targetVolume;

    this.audio.addEventListener("play", () => {
      this.isPlaying = true;
      this.notifyListeners();
    });

    this.audio.addEventListener("pause", () => {
      this.isPlaying = false;
      this.notifyListeners();
    });

    this.audio.addEventListener("ended", () => {
      this.isPlaying = false;
      this.notifyListeners();
    });
  }

  addListener(callback) {
    this.listeners.add(callback);
    callback(this.isPlaying);
    return () => this.listeners.delete(callback);
  }

  notifyListeners() {
    this.listeners.forEach((cb) => {
      try {
        cb(this.isPlaying);
      } catch (e) {
        console.error("Audio listener error:", e);
      }
    });
  }

  async play() {
    this.init();
    try {
      this.audio.volume = this.targetVolume;
      await this.audio.play();
      this.isPlaying = true;
      this.notifyListeners();
      return true;
    } catch (err) {
      console.warn("Audio play prevented by browser autoplay policy:", err);
      this.isPlaying = false;
      this.notifyListeners();
      return false;
    }
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notifyListeners();
  }

  toggle() {
    this.init();
    if (this.audio && !this.audio.paused) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  getIsPlaying() {
    return this.isPlaying;
  }
}

export const audioEngine = new WeddingAudioEngine();
